import fs from 'fs';
import path from 'path';

// 設定: 記事とアフィリエイトデータの場所
const BLOG_DIR = path.resolve('src/content/blog');
const AFFILIATES_DIR = path.resolve('src/content/affiliates');

/**
 * 記事内の <TackleCard id="..."> が affiliates コレクションに実在するか検証する。
 * getEntry("affiliates", id) はファイルパス（拡張子なし）で引くため、yaml の id: ではなくパスと照合する。
 * 存在しない ID があれば一覧を出して終了コード 1 で終わる。
 */
function walk(dir, exts, files = []) {
  for (const item of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, exts, files);
    } else if (exts.some((ext) => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}

const toPosix = (p) => p.split(path.sep).join('/');

const affiliateFiles = walk(AFFILIATES_DIR, ['.yaml', '.yml', '.json']);
const pathId = (f) => toPosix(path.relative(AFFILIATES_DIR, f)).replace(/\.(ya?ml|json)$/, '');
const definedIds = new Set(affiliateFiles.map(pathId));

// yaml の id: とファイルパスがずれていると、id: を見て書いた記事が壊れるため不一致も検出する
const idMismatch = [];
for (const file of affiliateFiles) {
  const m = fs.readFileSync(file, 'utf-8').match(/^id:\s*["']?([^"'\r\n]+?)["']?\s*$/m);
  if (m && m[1] !== pathId(file)) {
    idMismatch.push(`${toPosix(path.relative(process.cwd(), file))}  id: ${m[1]}`);
  }
}

const missing = [];
for (const file of walk(BLOG_DIR, ['.md', '.mdx'])) {
  const lines = fs.readFileSync(file, 'utf-8').split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/<TackleCard\b[^>]*\bid=["']([^"']+)["']/g)) {
      if (!definedIds.has(m[1])) {
        missing.push(`${toPosix(path.relative(process.cwd(), file))}:${i + 1}  ${m[1]}`);
      }
    }
  });
}

if (missing.length > 0) {
  console.error(`❌ 存在しない TackleCard ID が ${missing.length} 件あります（src/content/affiliates/ のファイルパスと照合）:`);
  for (const line of missing) console.error(`  ${line}`);
}
if (idMismatch.length > 0) {
  console.error(`❌ ファイルパスと id: が一致しないエントリが ${idMismatch.length} 件あります:`);
  for (const line of idMismatch) console.error(`  ${line}`);
}
if (missing.length > 0 || idMismatch.length > 0) process.exit(1);

console.log(`✅ TackleCard ID チェック OK（affiliates ${definedIds.size} 件）`);
