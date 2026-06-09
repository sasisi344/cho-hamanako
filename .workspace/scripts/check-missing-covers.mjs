import fs from 'fs';
import path from 'path';

function walk(dir, files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, files);
    else if (ent.name.endsWith('.mdx')) files.push(p);
  }
  return files;
}

const root = 'src/content/blog';
const missing = [];
const noCoverField = [];

for (const mdx of walk(root)) {
  const content = fs.readFileSync(mdx, 'utf8');
  const m = content.match(/^cover:\s*["']?(.+?)["']?\s*$/m);
  if (!m) {
    noCoverField.push(mdx);
    continue;
  }
  const coverRef = m[1].trim();
  const coverPath = path.resolve(path.dirname(mdx), coverRef);
  if (!fs.existsSync(coverPath)) {
    missing.push({ mdx, coverRef });
  }
}

console.log(`=== cover フィールドあり・ファイル欠落 (${missing.length}件) ===`);
for (const x of missing.sort((a, b) => a.mdx.localeCompare(b.mdx))) {
  console.log(`${x.mdx.replace(/\\/g, '/')} -> ${x.coverRef}`);
}
console.log('');
console.log(`=== cover フィールドなし (${noCoverField.length}件) ===`);
for (const x of noCoverField.sort()) {
  console.log(x.replace(/\\/g, '/'));
}
