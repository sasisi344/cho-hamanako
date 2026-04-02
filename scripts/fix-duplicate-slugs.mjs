import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 設定: 処理対象のディレクトリ
const BLOG_DIR = path.resolve('src/content/blog');

/**
 * 重複を避けつつ slug を一意にするためのリスト
 */
function walk(dir, blogFiles = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, blogFiles);
    } else if (item.endsWith('.md') || item.endsWith('.mdx')) {
      blogFiles.push(fullPath);
    }
  }
  return blogFiles;
}

function run() {
  console.log('--- Starting Slug Uniqueness Fix ---');
  const allBlogFiles = walk(BLOG_DIR);
  
  const slugMap = new Map(); // slug -> [paths]
  
  // 1. 全記事から現在の(または暫定の)slugを収集
  for (const filePath of allBlogFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);
    
    let currentSlug = data.slug;
    
    // index.mdx 等で slug がフォルダ名一文字になっている場合のフォールバック
    if (!currentSlug) {
      if (path.basename(filePath).startsWith('index')) {
        currentSlug = path.basename(path.dirname(filePath));
      } else {
        currentSlug = path.basename(filePath).replace(/\.(md|mdx)$/, '');
      }
    }
    
    if (!slugMap.has(currentSlug)) {
      slugMap.set(currentSlug, []);
    }
    slugMap.get(currentSlug).push(filePath);
  }

  // 2. 重複がある場合、親ディレクトリ名を結合してユニークにする
  for (const [slug, paths] of slugMap.entries()) {
    if (paths.length > 1) {
      console.log(`Duplicate found for slug: "${slug}"`);
      
      for (const filePath of paths) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data, content: body } = matter(content);
        
        // 親ディレクトリ名を取得
        const parentDirName = path.basename(path.dirname(filePath));
        const grandParentDirName = path.basename(path.dirname(path.dirname(filePath)));
        
        // 新しい slug を生成 (例: aji-cooking)
        let newSlug = `${parentDirName}-${slug}`;
        
        // まだ重複する可能性がある（例: target/aji/beginner と guide/beginner）
        // その場合はさらに上の階層を足す
        if (newSlug.startsWith(`${parentDirName}-${parentDirName}`)) {
            newSlug = `${grandParentDirName}-${parentDirName}`;
        }

        data.slug = newSlug;
        const updatedContent = matter.stringify(body, data);
        fs.writeFileSync(filePath, updatedContent);
        console.log(`  Updated ${filePath} -> slug: "${newSlug}"`);
      }
    }
  }

  console.log('--- Slug Uniqueness Fix Completed ---');
}

run();
