import fs from 'fs';
import path from 'path';

const CONTENT_DIRS = [
    path.join(process.cwd(), 'src/content/blog'),
    path.join(process.cwd(), 'src/content/points') // Checking if points dir exists based on generate_redirects.mjs logic
];

const OUTPUT_FILE = path.join(process.cwd(), 'data-set/301list.md');

function getAllFiles(dirPath, arrayOfFiles = []) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;
    const files = fs.readdirSync(dirPath);
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.md') || file.endsWith('.mdx')) {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        }
    });
    return arrayOfFiles;
}

let allFiles = [];
CONTENT_DIRS.forEach(dir => {
    allFiles = getAllFiles(dir, allFiles);
});

const missingWpSlug = [];
const hasWpSlug = [];

for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, 'utf8');
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    
    if (match) {
        const frontmatter = match[1];
        const slMatch = frontmatter.match(/^wp[sS]lug:\s*/m);
        
        const relativePath = path.relative(path.join(process.cwd(), 'src/content'), filePath);
        
        if (!slMatch) {
            missingWpSlug.push(relativePath);
        } else {
            hasWpSlug.push(relativePath);
        }
    }
}

let output = `# wpSlug 未設定記事リスト\n\n`;
output += `スキャン実施日: ${new Date().toLocaleString('ja-JP')}\n\n`;
output += `## 概要\n- 全記事数: ${allFiles.length}\n- wpSlug 設定済み: ${hasWpSlug.length}\n- wpSlug 未設定: ${missingWpSlug.length}\n\n`;
output += `---\n\n## ⚠️ wpSlug 未設定の記事\nこれらは旧URLからのリダイレクト設定（301）が確認できていない可能性があります。\n\n`;

missingWpSlug.forEach(path => {
    output += `- ${path}\n`;
});

fs.writeFileSync(OUTPUT_FILE, output);
console.log(`Results written to ${OUTPUT_FILE}`);
console.log(`Total missing: ${missingWpSlug.length}`);
