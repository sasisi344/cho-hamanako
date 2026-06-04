import fs from "fs"
import path from "path"

const CONTENT_DIR = path.join(process.cwd(), "src/content/blog")
const HTACCESS_PATH = path.join(process.cwd(), "public/.htaccess")

const TRAILING_SLASH_RULES = `
  # Legacy wrong path: /blog/points/* -> /points/*
  RewriteRule ^blog/points/(.*)$ /points/$1/ [R=301,L]

  # Enforce trailing slash (single hop; must run after all path redirects)
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !/$
  RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]{1,5}$
  RewriteRule ^ %{REQUEST_URI}/ [R=301,L]
`.trim()

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles
  for (const file of fs.readdirSync(dirPath)) {
    const full = path.join(dirPath, file)
    if (fs.statSync(full).isDirectory()) {
      getAllFiles(full, arrayOfFiles)
    } else if (/\.mdx?$/.test(file)) {
      arrayOfFiles.push(full)
    }
  }
  return arrayOfFiles
}

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  return match ? match[1] : ""
}

function getField(frontmatter, field) {
  const scalar = frontmatter.match(
    new RegExp(`^${field}:\\s*["']([^"'\\n\\r]+)["']`, "m"),
  )
  if (scalar) return scalar[1].trim()

  const plain = frontmatter.match(new RegExp(`^${field}:\\s*(\\S+)`, "m"))
  if (plain) {
    const value = plain[1].trim()
    if (value === ">-" || value === ">" || value === "|") return null
    return value
  }

  return null
}

function getWpSlug(frontmatter) {
  const folded = frontmatter.match(/^wpSlug:\s*(?:>-|>\||\|)\s*\n\s*(.+)$/m)
  if (folded) {
    const value = folded[1].trim()
    return value || null
  }
  return getField(frontmatter, "wpSlug")
}

function getCanonicalPath(relativePath, category) {
  let rel = relativePath.replace(/\.mdx?$/, "")
  if (rel.endsWith("/index")) rel = rel.slice(0, -6)

  if (category === "points") {
    return `/points/${rel.replace(/^points\//, "")}/`
  }
  return `/blog/${rel}/`
}

function normalizeSourcePath(raw) {
  if (!raw) return null
  let value = raw.trim()
  if (value.startsWith("http")) {
    try {
      value = new URL(value).pathname
    } catch {
      return null
    }
  }
  if (!value.startsWith("/")) value = `/${value}`
  if (!value.endsWith("/")) value = `${value}/`
  return value
}

function toRewritePattern(pathname) {
  let p = pathname
  if (p.startsWith("/")) p = p.slice(1)
  if (p.endsWith("/")) p = p.slice(0, -1)
  try {
    p = decodeURIComponent(p)
  } catch {
    /* keep encoded */
  }
  return p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function addRule(rules, seen, sourcePath, dest) {
  const normalized = normalizeSourcePath(sourcePath)
  if (!normalized || normalized === dest) return
  if (normalized.includes(">-") || normalized.includes(">")) return

  const key = `${normalized} -> ${dest}`
  if (seen.has(key)) return
  seen.add(key)

  const pattern = toRewritePattern(normalized)
  rules.push(`  RewriteRule ^${pattern}/?$ ${dest} [R=301,L]`)
}

console.log("Scanning content for redirects...")

const allFiles = getAllFiles(CONTENT_DIR)
const redirectRules = []
const seen = new Set()

for (const filePath of allFiles) {
  const content = fs.readFileSync(filePath, "utf8")
  const frontmatter = parseFrontmatter(content)
  if (!frontmatter) continue

  const category = getField(frontmatter, "category") ?? ""
  const wpSlug = getWpSlug(frontmatter)
  const shortSlug = getField(frontmatter, "slug")

  const relativePath = path
    .relative(CONTENT_DIR, filePath)
    .split(path.sep)
    .join("/")
  const dest = getCanonicalPath(relativePath, category)

  if (wpSlug) {
    if (wpSlug.startsWith("http") || wpSlug.includes("/")) {
      addRule(redirectRules, seen, wpSlug, dest)
    } else {
      addRule(redirectRules, seen, `/${wpSlug}/`, dest)
      addRule(redirectRules, seen, `/blog/${wpSlug}/`, dest)
    }
  }

  if (shortSlug) {
    addRule(redirectRules, seen, `/blog/${shortSlug}/`, dest)
    const tail = dest.split("/").filter(Boolean).at(-1)
    if (shortSlug !== tail) {
      addRule(redirectRules, seen, `/${shortSlug}/`, dest)
    }
  }
}

const markerBegin = "# BEGIN GENERATED REDIRECTS"
const markerEnd = "# END GENERATED REDIRECTS"
const generatedBlock = [
  markerBegin,
  ...redirectRules,
  TRAILING_SLASH_RULES,
  markerEnd,
].join("\n")

if (fs.existsSync(HTACCESS_PATH)) {
  let htaccess = fs.readFileSync(HTACCESS_PATH, "utf8")

  // Remove legacy trailing-slash block if duplicated outside generated section
  htaccess = htaccess.replace(
    /\n\s*# Astro pages: enforce trailing slash[\s\S]*?RewriteRule \^ %\{REQUEST_URI\}\/ \[R=301,L\]\n?/,
    "\n",
  )

  if (htaccess.includes(markerBegin) && htaccess.includes(markerEnd)) {
    htaccess = htaccess.replace(
      new RegExp(`${markerBegin}[\\s\\S]*?${markerEnd}`, "g"),
      generatedBlock,
    )
  } else if (htaccess.includes("RewriteEngine On")) {
    htaccess = htaccess.replace(
      "RewriteEngine On",
      `RewriteEngine On\n\n  ${generatedBlock}`,
    )
  } else {
    htaccess += `\n\n<IfModule mod_rewrite.c>\n  RewriteEngine On\n  ${generatedBlock}\n</IfModule>\n`
  }

  fs.writeFileSync(HTACCESS_PATH, htaccess)
  console.log(`Updated ${HTACCESS_PATH} with ${redirectRules.length} redirect rules.`)
} else {
  const htaccessContent = `<IfModule mod_rewrite.c>\n  RewriteEngine On\n  ${generatedBlock}\n</IfModule>\n`
  fs.writeFileSync(HTACCESS_PATH, htaccessContent)
  console.log(`Created ${HTACCESS_PATH} with ${redirectRules.length} redirect rules.`)
}
