import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// 設定: 読み込み元と出力先
const AFFILIATES_DIR = path.resolve('src/content/affiliates');
const BLOG_DIR = path.resolve('src/content/blog');
const OUTPUT_FILE = path.resolve('.workspace/.data-set/.index/tackle-card-list.md');

/**
 * src/content/affiliates/ から TackleCard ID の索引を生成する（AI が ID を推測で書かないための正本の写し）。
 * ID は getEntry が引くファイルパス（拡張子なし）をそのまま載せる。手で編集しないこと。
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
const cell = (v) => String(v ?? '').replace(/\|/g, '／').replace(/\r?\n/g, ' ');

// 記事での使用回数
const usage = new Map();
for (const file of walk(BLOG_DIR, ['.md', '.mdx'])) {
  for (const m of fs.readFileSync(file, 'utf-8').matchAll(/<TackleCard\b[^>]*\bid=["']([^"']+)["']/g)) {
    usage.set(m[1], (usage.get(m[1]) ?? 0) + 1);
  }
}

const groups = new Map();
for (const file of walk(AFFILIATES_DIR, ['.yaml', '.yml'])) {
  const id = toPosix(path.relative(AFFILIATES_DIR, file)).replace(/\.ya?ml$/, '');
  const data = yaml.load(fs.readFileSync(file, 'utf-8')) ?? {};
  const group = id.split('/')[0];
  const format = data.format ?? (group === 'travel' || group === 'naturum' ? 'banner' : 'card');
  if (!groups.has(group)) groups.set(group, []);
  groups.get(group).push({
    id,
    name: data.name,
    categories: (data.categories ?? []).join('・'),
    targetFish: (data.targetFish ?? []).join('・'),
    scenes: (data.scenes ?? []).join('・'),
    area: data.area ?? '',
    format,
    used: usage.get(id) ?? 0,
  });
}

const total = [...groups.values()].reduce((n, rows) => n + rows.length, 0);
const unused = [...groups.values()].flat().filter((r) => r.used === 0).length;

const lines = [
  '# TackleCard ID インデックス',
  '',
  '> **自動生成ファイル。手で編集しない。** 生成: `pnpm run gen:tackle`（`scripts/generate-tackle-card-list.mjs`）',
  '> 正本は `src/content/affiliates/`。記事では「ID」列の値をそのまま `<TackleCard id="..." />` に書く。',
  '> 配置ルール: `.agents/affiliate-placement-rules.md` ／ 存在確認: `pnpm run check:tackle`',
  '',
  `- 登録数: ${total} 件（記事で未使用: ${unused} 件）`,
  '- 表示: card = 商品カード / banner = バナー / text = 文中テキストリンク',
  '- 場面（scenes）: wading・night・car・family・safety・boat・bait・stay・activity・rental-car',
  '',
];

for (const group of [...groups.keys()].sort()) {
  const rows = groups.get(group).sort((a, b) => a.id.localeCompare(b.id));
  lines.push(`## ${group}（${rows.length}）`, '');
  lines.push('| ID | 商品名 | 種類 | 対象魚 | 場面 | エリア | 表示 | 使用数 |');
  lines.push('|---|---|---|---|---|---|---|---:|');
  for (const r of rows) {
    lines.push(
      `| \`${r.id}\` | ${cell(r.name)} | ${cell(r.categories)} | ${cell(r.targetFish)} | ${cell(r.scenes)} | ${cell(r.area)} | ${r.format} | ${r.used} |`
    );
  }
  lines.push('');
}

fs.writeFileSync(OUTPUT_FILE, lines.join('\n'), 'utf-8');
console.log(`✅ ${toPosix(path.relative(process.cwd(), OUTPUT_FILE))} を生成しました（${total} 件、未使用 ${unused} 件）`);
