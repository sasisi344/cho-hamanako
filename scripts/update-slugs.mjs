import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 設定: 処理対象のディレクトリ
const BASE_DIRS = [
  'src/content/blog',
  'src/content/affiliates'
];

/**
 * ファイルを再帰的に探索してフロントマターにslugを付与する
 */
function processFiles(dir) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processFiles(fullPath);
    } else if (item.endsWith('.md') || item.endsWith('.mdx') || item.endsWith('.yaml')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const { data, content: body } = matter(content);

      // slugが既に存在する場合はスキップ（上書きしたい場合はここを調整）
      if (data.slug) {
        console.log(`Skipped (slug exists): ${fullPath}`);
        continue;
      }

      // 新しいslugの決定ロジック
      let newSlug = '';
      if (item.endsWith('.md') || item.endsWith('.mdx')) {
        // 記事の場合: ファイルが index.md(x) なら親フォルダ名、そうでなければファイル名
        if (item.startsWith('index')) {
          newSlug = path.basename(dir);
        } else {
          newSlug = item.replace(/\.(md|mdx)$/, '');
        }
      } else if (item.endsWith('.yaml')) {
        // 商品(affiliate)の場合: ファイル名（拡張子なし）
        newSlug = item.replace(/\.yaml$/, '');
      }

      if (newSlug) {
        data.slug = newSlug;
        // matter.stringifyでフロントマターを再構成
        const updatedContent = matter.stringify(body, data);
        fs.writeFileSync(fullPath, updatedContent);
        console.log(`Updated (slug: ${newSlug}): ${fullPath}`);
      }
    }
  }
}

/**
 * メイン処理
 */
function run() {
  console.log('--- Starting Slug Insertion ---');
  BASE_DIRS.forEach(dir => {
    const absoluteDir = path.resolve(dir);
    if (fs.existsSync(absoluteDir)) {
      console.log(`Processing directory: ${absoluteDir}`);
      processFiles(absoluteDir);
    } else {
      console.log(`Directory not found: ${absoluteDir}`);
    }
  });
  console.log('--- Slug Insertion Completed ---');
}

run();
