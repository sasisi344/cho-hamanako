import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "src/content/blog");

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (/\.(md|mdx)$/.test(item)) files.push(full);
  }
  return files;
}

function fixInternalHref(content) {
  return content.replace(
    /href="(\/(?:blog|points)(?:\/[^"#?]*)?)"/g,
    (match, hrefPath) => {
      if (hrefPath.endsWith("/")) return match;
      const last = hrefPath.split("/").filter(Boolean).at(-1) ?? "";
      if (/\.[a-z0-9]{1,8}$/i.test(last)) return match;
      return `href="${hrefPath}/"`;
    },
  );
}

function fixHtaccessRedirects(content) {
  return content.replace(
    /(RewriteRule \^.+?\$ )(\/(?:blog|points)\/[^\s]+)( \[R=301,L\])/g,
    (_, prefix, dest, suffix) => {
      if (dest.endsWith("/")) return `${prefix}${dest}${suffix}`;
      return `${prefix}${dest}/${suffix}`;
    },
  );
}

let mdxCount = 0;
for (const file of walk(CONTENT_DIR)) {
  const original = fs.readFileSync(file, "utf8");
  const updated = fixInternalHref(original);
  if (updated !== original) {
    fs.writeFileSync(file, updated);
    mdxCount++;
  }
}

const htaccessPath = path.join(ROOT, "public/.htaccess");
const htOriginal = fs.readFileSync(htaccessPath, "utf8");
const htUpdated = fixHtaccessRedirects(htOriginal);
if (htUpdated !== htOriginal) {
  fs.writeFileSync(htaccessPath, htUpdated);
}

console.log(`Updated ${mdxCount} content files`);
console.log("Updated public/.htaccess redirect targets");
