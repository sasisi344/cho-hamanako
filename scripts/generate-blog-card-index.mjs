import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 設定: 読み込み元と出力先
const BLOG_DIR = path.resolve('src/content/blog');
const OUTPUT_FILE = path.resolve('.workspace/.data-set/blog-card-index.md');

/**
 * 全記事から title と slug を抽出してAI用のリストを作成する
 */
function generateBlogCardIndex() {
  const allFiles = [];

  function walk(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
        allFiles.push(fullPath);
      }
    }
  }

  walk(BLOG_DIR);

  const indexData = [];

  for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    // 下書きは除外
    if (data.draft === true) continue;

    // slug または フォルダ名
    const slug = data.slug || path.basename(path.dirname(filePath));
    const title = data.title || 'No Title';

    indexData.push({ title, slug });
  }

  // タイトル順にソートしておくと見やすい
  indexData.sort((a, b) => a.title.localeCompare(b.title, 'ja'));

  // Markdown 形式で出力
  let output = `# 📋 釣！浜名湖 BlogCard 参照インデックス\n\n`;
  output += `最終更新: ${new Date().toLocaleString('ja-JP')}\n\n`;
  output += `AIはこのリストを参照して <BlogCard slug="SLUG" /> を生成してください。\n\n`;
  output += `| 記事タイトル | Slug (BlogCard指定用) |\n`;
  output += `| :--- | :--- |\n`;

  for (const item of indexData) {
    output += `| ${item.title} | \`${item.slug}\` |\n`;
  }

  // 保存
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, output);

  console.log(`Successfully generated BlogCard index to ${OUTPUT_FILE}`);
}

generateBlogCardIndex();
