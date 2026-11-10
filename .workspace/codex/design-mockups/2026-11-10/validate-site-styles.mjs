import { readFile, readdir, writeFile, access } from "node:fs/promises"
import { join, relative } from "node:path"
import { createHash } from "node:crypto"
import assert from "node:assert/strict"
import vm from "node:vm"
import { parse } from "parse5"

const baselinePath = ".workspace/codex/reports/2026-11-11-STYLE-baseline.json"
const snapshot = process.argv.includes("--snapshot")
const attr = (node, name) => node?.attrs?.find(a => a.name === name)?.value
const text = node => ["script", "style"].includes(node?.tagName) || attr(node, "class")?.split(" ").includes("related-card-arrow") ? "" : node?.value ?? (node?.childNodes ?? []).map(text).join("")
const hash = value => createHash("sha256").update(value).digest("hex")
async function* files(path) {
  for (const entry of await readdir(path, { withFileTypes: true })) {
    if (entry.isDirectory()) yield* files(join(path, entry.name))
    else if (entry.name.endsWith(".html")) yield join(path, entry.name)
  }
}
const pages = {}
let assetChecks = 0
let hrefChecks = 0
const seenAssets = new Set()
for await (const path of files("dist")) {
  const document = parse(await readFile(path, "utf8"))
  const nodes = []
  const walk = node => { nodes.push(node); for (const child of node.childNodes ?? []) walk(child) }
  walk(document)
  const elements = tag => nodes.filter(n => n.tagName === tag)
  if (!elements("main").length) continue
  const key = relative("dist", path).replaceAll("\\", "/")
  const canonical = elements("link").find(n => attr(n, "rel") === "canonical")
  const articleText = elements("article").map(text).join("").replace(/\s/g, "")
  const affiliateLinks = elements("a").filter(n => attr(n, "data-aff-id")).map(n => [attr(n, "data-aff-id"), attr(n, "href"), attr(n, "rel")])
  const ids = nodes.map(n => attr(n, "id")).filter(Boolean)
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index)
  pages[key] = {
    title: text(elements("title")[0]),
    canonical: attr(canonical, "href"),
    description: attr(elements("meta").find(n => attr(n, "name") === "description"), "content"),
    robots: attr(elements("meta").find(n => attr(n, "name") === "robots"), "content") ?? null,
    jsonLd: elements("script").filter(n => attr(n, "type") === "application/ld+json").map(n => n.childNodes.map(c => c.value ?? "").join("")),
    articleText: hash(articleText),
    affiliateLinks,
    duplicates,
    homepageText: key === "index.html" ? hash(text(elements("body")[0]).replace(/\s/g, "")) : undefined,
  }
  if (snapshot) continue
  assert.equal(elements("h1").length, 1, `${key}: expected one h1`)
  assert.equal(elements("main").length, 1, `${key}: expected one main`)
  assert.equal(elements("header").length, 1, `${key}: expected one header`)
  assert(attr(elements("body")[0], "class").includes("landing-body"), `${key}: missing shared layout`)
  if (key !== "index.html") assert(attr(elements("body")[0], "class").includes("site-body"), `${key}: missing interior style`)
  for (const script of elements("script")) {
    if (attr(script, "src") || ["module", "application/ld+json"].includes(attr(script, "type"))) continue
    new vm.Script(script.childNodes.map(n => n.value ?? "").join(""), { filename: key })
  }
  for (const node of nodes) {
    for (const name of ["src", "href"]) {
      const value = attr(node, name)
      if (value?.startsWith("/_astro/") && !seenAssets.has(value)) {
        await access(join("dist", value)); seenAssets.add(value); assetChecks++
      }
    }
  }
  for (const anchor of elements("a")) {
    const href = attr(anchor, "href")
    if (href === "#main-content") assert(ids.includes("main-content"))
    if (href?.startsWith("/") && !href.startsWith("//")) {
      const url = new URL(href, "https://cho-hamanako.info")
      if (["/map/", "/points/", "/blog/", "/blog/target/", "/blog/guide/", "/search/", "/legal/about/", "/legal/privacy/"].includes(url.pathname)) {
        await access(join("dist", url.pathname, "index.html")); hrefChecks++
      }
    }
  }
}
if (snapshot) {
  await writeFile(baselinePath, JSON.stringify(pages, null, 2) + "\n")
  console.log(`Saved baseline for ${Object.keys(pages).length} content pages.`)
} else {
  const baseline = JSON.parse(await readFile(baselinePath, "utf8"))
  assert.deepEqual(Object.keys(pages).sort(), Object.keys(baseline).sort(), "Routes changed")
  for (const [key, page] of Object.entries(pages)) {
    for (const name of ["title", "canonical", "description", "robots", "jsonLd", "articleText", "affiliateLinks", "homepageText"]) {
      assert.deepEqual(page[name], baseline[key][name], `${key}: ${name} changed`)
    }
    assert(page.duplicates.length <= baseline[key].duplicates.length, `${key}: new duplicate IDs`)
  }
  const report = { status: "passed", pages: Object.keys(pages).length, metadataPreserved: true, articleTextPreserved: true, affiliateLinksPreserved: true, homepageTextPreserved: true, assetChecks, hrefChecks, visualCheck: "Unavailable: Computer Use could not determine the current browser URL." }
  await writeFile(".workspace/codex/reports/2026-11-11-STYLE-validation.json", JSON.stringify(report, null, 2) + "\n")
  console.log(JSON.stringify(report))
}
