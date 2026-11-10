import assert from "node:assert/strict"
import { readFile, writeFile } from "node:fs/promises"
import vm from "node:vm"
import { parse } from "parse5"

const doc = parse(await readFile("dist/map/index.html", "utf8"))
const nodes = []
const walk = n => { nodes.push(n); for (const child of n.childNodes ?? []) walk(child) }
walk(doc)
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value
const scripts = nodes.filter(n => n.tagName === "script").map(n => n.childNodes.map(c => c.value ?? "").join(""))
const code = scripts.find(s => s.includes("function setFilterButtonActive"))
assert(code, "Map script not found")
const tags = nodes.filter(n => n.tagName === "button" && attr(n, "data-tag")).map(n => attr(n, "data-tag"))
const areas = ["表浜名湖", "中浜名湖", "奥浜名湖"]
const results = []
for (const area of [null, ...areas]) {
  const buttons = tags.map(tag => ({
    attrs: { "data-tag": tag },
    classList: { add() {}, remove() {} },
    getAttribute(name) { return this.attrs[name] },
    setAttribute(name, value) { this.attrs[name] = value },
    events: {},
    addEventListener(name, callback) { this.events[name] = callback },
  }))
  const list = { children: [], appendChild(child) { this.children.push(child) } }
  Object.defineProperty(list, "innerHTML", { set() { this.children.length = 0 }, get() { return "" } })
  const map = { on() {}, removeLayer() {}, scrollWheelZoom: { enable() {} } }
  const context = vm.createContext({
    console, URLSearchParams,
    window: { location: { search: area ? `?area=${encodeURIComponent(area)}` : "" } },
    document: {
      readyState: "complete",
      getElementById(id) { return id === "point-list" ? list : id === "map" ? {} : id === "map-loader" ? { style: {}, remove() {} } : null },
      querySelectorAll() { return buttons },
      createElement() { return {} },
    },
    L: {
      map() { return map },
      tileLayer() { return { addTo() {} } },
      circleMarker() { return { bindPopup() { return this }, addTo() { return this } } },
    },
    setTimeout(callback) { callback() },
  })
  const instrumented = code.replace("var points = JSON.parse(jsonPoints);", "var points = JSON.parse(jsonPoints); globalThis.testPoints = points;")
  assert.notEqual(instrumented, code, "Map data hook not found")
  vm.runInContext(instrumented, context)
  const expected = context.testPoints.filter(p => p.tags.some(t => area ? t === area : areas.includes(t))).length
  assert.equal(list.children.length, expected)
  assert(expected > 0)
  if (area) {
    const selected = buttons.find(b => b.attrs["data-tag"] === area)
    assert.equal(selected.attrs["aria-pressed"], "true")
    selected.events.click()
    assert.equal(selected.attrs["aria-pressed"], "false")
    assert.equal(list.children.length, 0)
    selected.events.click()
    assert.equal(list.children.length, expected)
    const month = buttons.find(b => b.attrs["data-tag"] === "11月")
    month.events.click()
    assert.equal(month.attrs["aria-pressed"], "true")
    const monthCount = context.testPoints.filter(p => p.tags.includes(area) && p.tags.includes("11月")).length
    assert.equal(list.children.length, monthCount)
    month.events.click()
    assert.equal(list.children.length, expected)
  }
  results.push({ area: area ?? "all", count: expected, status: "passed" })
}

const themeResults = []
for (const path of ["dist/index.html", "dist/blog/index.html", "dist/map/index.html"]) {
  const html = parse(await readFile(path, "utf8"))
  const themeNodes = []
  const collect = n => { if (n.tagName === "script") themeNodes.push(n); for (const c of n.childNodes ?? []) collect(c) }
  collect(html)
  const themeCode = themeNodes.map(n => n.childNodes.map(c => c.value ?? "").join("")).find(s => s.includes("function preloadTheme"))
  const classes = new Set(["dark"])
  const localStorage = { theme: "dark" }
  vm.runInNewContext(themeCode, {
    localStorage,
    window: { matchMedia() { return { matches: true } } },
    document: { documentElement: { classList: { add(c) { classes.add(c) }, remove(c) { classes.delete(c) } } }, addEventListener() {} },
  })
  assert.equal(classes.has("dark"), path === "dist/index.html")
  assert.equal(localStorage.theme, "dark", "Stored user preference changed")
  themeResults.push({ path, status: "passed" })
}
const report = { status: "passed", mapFilters: results, themes: themeResults, method: "Execute generated scripts in isolated Node VM with mock DOM/Leaflet; no visual browser check." }
await writeFile(".workspace/codex/reports/2026-11-11-STYLE-interactions.json", JSON.stringify(report, null, 2) + "\n")
console.log(JSON.stringify(report))
