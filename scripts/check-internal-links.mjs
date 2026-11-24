import fs from 'fs';
import path from 'path';

/**
 * 内部リンク切れの検査。見つかったら一覧を出して終了コード 1 で終わる（ビルドと deploy が止まる）。
 *
 *   node scripts/check-internal-links.mjs          ビルド前。記事の BlogCard と本文のリンクを、行番号つきで調べる
 *   node scripts/check-internal-links.mjs --dist   ビルド後。dist の全ページの <a href> の行き先があるか調べる（テンプレートやデータから出るリンクも含む）
 */
const BLOG_DIR = path.resolve('src/content/blog');
const PAGES_DIR = path.resolve('src/pages');
const PUBLIC_DIR = path.resolve('public');
const DIST_DIR = path.resolve('dist');
const SITE = /^https?:\/\/(www\.)?cho-hamanako\.info(?=[/?#]|$)/;

const toPosix = (p) => p.split(path.sep).join('/');
const rel = (p) => toPosix(path.relative(process.cwd(), p));

function walk(dir, exts, files = []) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) walk(full, exts, files);
    else if (exts.some((ext) => item.name.endsWith(ext))) files.push(full);
  }
  return files;
}

// サイト内の URL なら、ドメイン・?クエリ・#見出し を外したパスにする。サイト外なら null
function internalPath(href) {
  let p = href.trim().replaceAll('&amp;', '&').replace(SITE, '') || '/';
  if (!p.startsWith('/') || p.startsWith('//')) return null;
  p = p.split(/[?#]/)[0];
  try {
    p = decodeURIComponent(p);
  } catch {
    // 壊れたエンコードはそのまま照合する
  }
  return p;
}
const trim = (p) => p.replace(/\/+$/, '') || '/';

function report(title, lines) {
  if (!lines.length) return;
  console.error(`❌ ${title}: ${lines.length} 件`);
  for (const line of lines) console.error(`  ${line}`);
}

function checkSource() {
  const articles = walk(BLOG_DIR, ['.md', '.mdx']).map((file) => {
    const text = fs.readFileSync(file, 'utf-8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
    const fm = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
    const field = (k) => fm.match(new RegExp(`^${k}:[ \\t]*["']?([^"'\\n]+?)["']?[ \\t]*$`, 'm'))?.[1];
    const slug = field('slug') ?? toPosix(path.relative(BLOG_DIR, file)).replace(/(\/index)?\.mdx?$/, '');
    // src/lib/paths.ts の blogPostHref と同じ
    const url = field('category') === 'points' ? `/points/${slug.replace(/^points\//, '')}` : `/blog/${slug}`;
    return { file, text, slug, url, draft: field('draft') === 'true' };
  });
  const published = articles.filter((a) => !a.draft);
  const bySlug = new Map(articles.map((a) => [a.slug, a]));
  const urls = new Set(published.map((a) => trim(a.url)));

  // 固定ページ・public のファイル・転送元
  for (const f of walk(PAGES_DIR, ['.astro', '.ts'])) {
    const p = `/${toPosix(path.relative(PAGES_DIR, f))}`;
    if (!p.includes('[')) urls.add(trim(p.replace(/\.(astro|ts)$/, '').replace(/\/index$/, '/')));
  }
  const legal = path.resolve('src/content/legal');
  for (const f of walk(legal, ['.md', '.mdx'])) urls.add(`/legal/${toPosix(path.relative(legal, f)).replace(/(\/index)?\.mdx?$/, '')}`);
  const config = fs.readFileSync('astro.config.mjs', 'utf-8');
  for (const m of config.matchAll(/["'](\/[^"'\n]*)["']\s*:\s*["']\/[^"'\n]*["']/g)) urls.add(trim(m[1]));

  const badCards = [];
  const badLinks = [];
  for (const a of published) {
    // コメント（{/* */}）とコードの中は調べない。行番号が変わらないように改行は残す
    const blank = (s) => s.replace(/[^\n]/g, ' ');
    const body = a.text.replace(/\{\/\*[\s\S]*?\*\/\}/g, blank).replace(/^(```|~~~)[\s\S]*?^\1/gm, blank);
    const lineOf = (i) => body.slice(0, i).split('\n').length;
    for (const m of body.matchAll(/<BlogCard\b[^>]*?\bslug=\{?["']([^"']+)["']/g)) {
      const t = bySlug.get(m[1]);
      if (!t) badCards.push(`${rel(a.file)}:${lineOf(m.index)}  ${m[1]}（記事がない）`);
      else if (t.draft) badCards.push(`${rel(a.file)}:${lineOf(m.index)}  ${m[1]}（下書き）`);
    }
    for (const m of body.matchAll(/\]\(([^)\s]+)|\b(?:href|url)\s*[=:]\s*\{?["']([^"']+)["']/g)) {
      const p = internalPath(m[1] ?? m[2]);
      if (p === null || urls.has(trim(p)) || fs.existsSync(path.join(PUBLIC_DIR, p))) continue;
      badLinks.push(`${rel(a.file)}:${lineOf(m.index)}  ${m[1] ?? m[2]}`);
    }
  }
  report('実在しない BlogCard の slug（リンク先記事の frontmatter の slug: と照合）', badCards);
  report('行き先のない本文の内部リンク', badLinks);
  if (badCards.length || badLinks.length) process.exit(1);
  console.log(`✅ 内部リンクチェック OK（記事 ${published.length} 本）`);
}

function checkDist() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist がありません（astro build のあとに実行する）');
    process.exit(1);
  }
  const exists = new Map();
  const hasPage = (p) => {
    if (!exists.has(p)) {
      const full = path.join(DIST_DIR, p);
      exists.set(p, fs.existsSync(path.join(full, 'index.html')) || (fs.existsSync(full) && fs.statSync(full).isFile()));
    }
    return exists.get(p);
  };
  const bad = new Map();
  const cards = [];
  const pages = walk(DIST_DIR, ['.html']);
  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf-8').replace(/<(script|style)\b[\s\S]*?<\/\1>/g, '');
    const page = `/${toPosix(path.relative(DIST_DIR, file)).replace(/index\.html$/, '')}`;
    if (/Blog entry [^<]*not found/.test(html)) cards.push(page);
    for (const m of html.matchAll(/<a\b[^>]*?\shref=(?:"([^"]*)"|'([^']*)')/g)) {
      const href = m[1] ?? m[2];
      const p = internalPath(href);
      if (p === null || hasPage(p)) continue;
      if (!bad.has(href)) bad.set(href, new Set());
      bad.get(href).add(page);
    }
  }
  report('BlogCard のエラー表示が出ているページ', cards);
  report(
    '行き先のページがない内部リンク',
    [...bad].map(([href, from]) => `${href}  ← ${[...from].slice(0, 3).join(' ')}${from.size > 3 ? ` ほか${from.size - 3}ページ` : ''}`),
  );
  if (cards.length || bad.size) process.exit(1);
  console.log(`✅ ビルド後の内部リンクチェック OK（${pages.length} ページ）`);
}

if (process.argv.includes('--dist')) checkDist();
else checkSource();
