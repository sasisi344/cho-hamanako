import assert from "node:assert/strict"
import { readFile, stat, access, writeFile } from "node:fs/promises"
import { join } from "node:path"
import { parse } from "parse5"
import sharp from "sharp"

const html = await readFile("dist/index.html", "utf8")
const document = parse(html)
const nodes = []
function walk(node) {
  nodes.push(node)
  for (const child of node.childNodes ?? []) walk(child)
}
walk(document)
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value
const elements = tag => nodes.filter(node => node.tagName === tag)
const text = node => node.value ?? (node.childNodes ?? []).map(text).join("")
const ids = nodes.map(node => attr(node, "id")).filter(Boolean)
assert.equal(new Set(ids).size, ids.length, "Duplicate HTML/SVG IDs")
assert.equal(elements("h1").length, 1)
assert.equal(text(elements("h1")[0]), "浜名湖の釣りを、もっと深く。")
assert.equal(elements("main").length, 1)
assert.equal(attr(elements("html")[0], "lang"), "ja")
assert(elements("meta").some(n => attr(n, "name") === "viewport"))
assert(elements("link").some(n => attr(n, "rel") === "canonical" && attr(n, "href") === "https://cho-hamanako.info/"))
assert(!html.includes("No Select"))
assert.equal(elements("details").length, 1)
assert.equal(elements("summary").length, 1)
assert.equal(elements("picture").length, 1)
assert(elements("source").some(n => attr(n, "media") === "(max-width: 600px)"))
for (const image of elements("img")) {
  assert.notEqual(attr(image, "alt"), undefined)
  assert(Number(attr(image, "width")) > 0 && Number(attr(image, "height")) > 0)
}
for (const node of nodes) {
  for (const key of ["aria-labelledby", "aria-describedby"]) {
    for (const id of (attr(node, key) ?? "").split(/\s+/).filter(Boolean)) assert(ids.includes(id), `Missing ${key}: ${id}`)
  }
}
const routes = new Set()
for (const anchor of elements("a")) {
  const href = attr(anchor, "href") ?? ""
  if (href.startsWith("#")) assert(ids.includes(href.slice(1)), `Broken section link: ${href}`)
  if (!href.startsWith("/")) continue
  const url = new URL(href, "https://cho-hamanako.info")
  const path = decodeURIComponent(url.pathname)
  await access(join("dist", path, "index.html"))
  routes.add(path + url.search)
}
for (const area of ["表浜名湖", "中浜名湖", "奥浜名湖"]) {
  assert(elements("a").filter(a => attr(a, "href") === `/map/?area=${encodeURIComponent(area)}`).length === 2)
}
const assets = new Set()
for (const node of nodes) {
  for (const key of ["src", "href"]) {
    const value = attr(node, key)
    if (value?.startsWith("/_astro/")) assets.add(value)
  }
  for (const key of ["srcset", "imagesrcset"]) {
    const value = attr(node, key)
    if (value) for (const source of value.split(",")) {
      const path = source.trim().split(/\s+/)[0]
      if (path.startsWith("/_astro/")) assets.add(path)
    }
  }
}
const imageSizes = []
for (const asset of assets) {
  const path = join("dist", asset)
  await access(path)
  if (!asset.endsWith(".webp")) continue
  const metadata = await sharp(path).metadata()
  imageSizes.push({ asset, width: metadata.width, bytes: (await stat(path)).size })
}
const response = await fetch("http://127.0.0.1:4321/")
assert.equal(response.status, 200)
assert((await response.text()).includes("浜名湖の釣りを、"))
const result = {
  status: "passed",
  headings: elements("h1").length,
  internalRoutes: [...routes],
  assetsChecked: assets.size,
  images: imageSizes,
  mobileHero: "separate portrait image via picture/source",
  visualVerification: "Not performed: Computer Use could not determine the browser URL; stopped as instructed.",
}
await writeFile(".workspace/codex/reports/2026-11-11-LP-validation.json", JSON.stringify(result, null, 2) + "\n")
console.log(`PASS: ${routes.size} internal destinations, ${assets.size} assets; HTML headings, IDs, ARIA references, mobile picture and map area links verified.`)
console.log(JSON.stringify(imageSizes.filter(i => i.asset.includes("hero") && [750, 1440].includes(i.width))))
