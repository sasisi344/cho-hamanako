import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 設定: 処理対象のディレクトリ
const BLOG_DIR = path.resolve('src/content/blog');
const INDEX_FILE = path.resolve('.workspace/.data-set/blog-card-index.md');

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

function parseIndex(indexFilePath) {
  const content = fs.readFileSync(indexFilePath, 'utf-8');
  const lines = content.split('\n');
  const titleToSlug = new Map();
  
  for (const line of lines) {
    const match = line.match(/^\|\s*(.*?)\s*\|\s*`(.*?)`\s*\|$/);
    if (match) {
      const title = match[1].trim();
      const slug = match[2].trim();
      titleToSlug.set(title, slug);
    }
  }
  return titleToSlug;
}

function run() {
  console.log('--- Starting Internal Link Update ---');
  
  if (!fs.existsSync(INDEX_FILE)) {
    console.error('Index file not found!');
    return;
  }
  
  const titleToSlug = parseIndex(INDEX_FILE);
  console.log(`Loaded ${titleToSlug.size} entries from index.`);

  const allBlogFiles = walk(BLOG_DIR);
  let totalUpdated = 0;

  for (const filePath of allBlogFiles) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChange = false;

    // <BlogCard slug="..." /> または <BlogCard title="..." /> を探す
    // 注: title 属性を使っている古い記述がある可能性を考慮
    
    // 1. slugパターンの置換 (旧形式のパスが含まれる場合)
    // <BlogCard slug="target/kurodai/beginner" /> みたいなのを
    // タイトルが一致すれば新slugに書き換える、あるいは
    // 既に間違ったslugが入っている場合も補正する
    
    // 一旦、全ファイルをメモリに載せて正規表現で置換
    // ここでは「タイトル」をキーにして、既存のBlogCardタグを更新するアプローチが確実だが、
    // タグの中にタイトルが書いていない場合（slugのみの場合）は、旧slugから逆引きする必要がある。
    
    // 今回はシンプルに「既存の全ての <BlogCard slug="..." />」を抽出し、
    // もしその記事のタイトルを特定できれば、新slugに差し替える。
    
    // 補助: 旧パスからタイトルを特定するためのマップを作成（全ファイルをスキャン）
    const pathToTitle = new Map();
    for (const f of allBlogFiles) {
      const c = fs.readFileSync(f, 'utf-8');
      const { data } = matter(c);
      const relPath = path.relative(BLOG_DIR, f).replace(/\\/g, '/').replace(/\/index\.(md|mdx)$/, '').replace(/\.(md|mdx)$/, '');
      pathToTitle.set(relPath, data.title);
    }

    // 置換処理
    const newContent = content.replace(/<BlogCard\s+slug=["']([^"']+)["']\s*\/>/g, (match, oldSlug) => {
      // 1. oldSlug が既に新形式(ハイフン区切り等)で index にあるかチェック
      for (const [title, newSlug] of titleToSlug.entries()) {
        if (newSlug === oldSlug) return match; // 既に正しい
      }

      // 2. oldSlug が旧パス形式の場合、タイトルを引く
      const title = pathToTitle.get(oldSlug);
      if (title && titleToSlug.has(title)) {
        const correctSlug = titleToSlug.get(title);
        console.log(`  Updating link in ${path.basename(filePath)}: ${oldSlug} -> ${correctSlug}`);
        hasChange = true;
        return `<BlogCard slug="${correctSlug}" />`;
      }

      return match; // 見つからない場合はそのまま
    });

    if (hasChange) {
      fs.writeFileSync(filePath, newContent);
      totalUpdated++;
    }
  }

  console.log(`--- Finished. Updated ${totalUpdated} files. ---`);
}

run();
