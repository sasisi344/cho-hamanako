import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 設定: 検索対象のディレクトリと出力先
const BLOG_DIR = 'src/content/blog';
const OUTPUT_FILE = '.workspace/.data-set/sitemap.md';

/**
 * 再帰的にファイルを探索し、Markdown/MDXファイルから情報を抽出する
 */
function getPosts(dir, category = '') {
  const files = fs.readdirSync(dir);
  let posts = [];

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // 再帰的に探索
      posts = posts.concat(getPosts(fullPath, category || file));
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      // index.mdx などの場合、親ディレクトリ名をスラッグの構成要素にする
      // コンテンツ層の構造に合わせて調整（例: target/kurodai/tactics/...）
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { data } = matter(content);

      // 下書きは除外（必要に応じて変更）
      if (data.draft === true) continue;

      // スラッグの決定ロジック:
      // 1. フロントマターに slug があればそれを使用
      // 2. なければ content/blog/ からの相対パスを使用
      const slug = data.slug || path.relative(BLOG_DIR, dir).replace(/\\/g, '/');

      posts.push({
        title: data.title || 'No Title',
        slug: slug,
        tags: data.tags || [],
        category: category || 'others'
      });
    }
  }
  return posts;
}

/**
 * サイトマップ用テキストの生成
 */
function generateSitemap() {
  const posts = getPosts(BLOG_DIR);
  const categorized = {};

  // カテゴリごとにグルーピング
  posts.forEach(post => {
    if (!categorized[post.category]) categorized[post.category] = [];
    categorized[post.category].push(post);
  });

  let output = '# 🌐 釣！浜名湖 サイトマップ (Auto Generated)\n\n';
  output += `最終更新: ${new Date().toLocaleString('ja-JP')}\n\n`;

  for (const [category, categoryPosts] of Object.entries(categorized)) {
    output += `## ${category}\n`;
    categoryPosts.forEach((post, index) => {
      const tagsStr = post.tags.length > 0 ? ` [${post.tags.join(', ')}]` : '';
      output += `${index + 1}. [${post.title}](${post.slug})${tagsStr}\n`;
    });
    output += '\n';
  }

  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`Successfully generated sitemap to ${OUTPUT_FILE}`);
}

generateSitemap();
