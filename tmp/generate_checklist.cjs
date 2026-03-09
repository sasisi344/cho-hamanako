const fs = require('fs');
const path = require('path');

// 1. CSVデータの読み込み
const csvPath = 'c:/Users/sasis/344dev/cho-hama/data-set/export-all-urls-787596.csv';
const csvData = fs.readFileSync(csvPath, 'utf-8');
const oldArticles = csvData.split('\n').slice(1).map(line => {
    const parts = line.split(',');
    if (parts.length < 2) return null;
    const title = parts[0].replace(/"/g, '').trim();
    const url = parts[parts.length - 1].trim();
    return { title, url };
}).filter(Boolean);

// 2. Astro記事の読み込み
function walkSync(currentDirPath, callback) {
    if (!fs.existsSync(currentDirPath)) return;
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && (filePath.endsWith('.md') || filePath.endsWith('.mdx'))) {
            callback(filePath);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}

const newArticles = [];
const blogContentPath = 'c:/Users/sasis/344dev/cho-hama/src/content/blog';
walkSync(blogContentPath, (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/title:\s*["']?(.*?)["']?\s*(?:\n|\r)/);
    if (titleMatch) {
        let relativeUrl = filePath
            .replace(/\\/g, '/')
            .split('src/content/blog/')[1]
            .replace('/index.mdx', '')
            .replace('/index.md', '')
            .replace('.mdx', '')
            .replace('.md', '');
        newArticles.push({
            title: titleMatch[1].replace(/["']/g, '').trim(),
            newUrl: '/blog/' + relativeUrl
        });
    }
});

// 3. マッチングとチェックリスト生成
let output = '# 301リダイレクト・チェックリスト\n\nWPの旧記事とAstroの新記事の対応表です。[ ] にチェックを入れて確定させてください。\n\n';

// 特殊ページ（プライバシーポリシー等）
output += '## 📄 固定ページの対応\n\n| 済 | 旧記事タイトル (WP) | 旧URL (WordPress) | 新URL (Astro) |\n| :--- | :--- | :--- | :--- |\n';
const legalPages = [
    { title: 'プライバシーポリシー', oldSlug: '/privacy-policy/', newUrl: '/legal/privacy' },
    { title: '当サイトについて', oldSlug: '/当サイトについて/', newUrl: '/legal/about' }
];

legalPages.forEach(p => {
    const old = oldArticles.find(oa => oa.url.includes(encodeURIComponent(p.title)) || oa.url.includes(p.oldSlug));
    if (old) {
        output += `| [ ] | ${old.title} | ${old.url} | ${p.newUrl} |\n`;
    }
});

// マッチしたものを先に
output += '\n## 🔄 自動マッチング（タイトル一致）\n\n| 済 | 旧記事タイトル (WP) | 旧URL (WordPress) | 新URL (Astro) |\n| :--- | :--- | :--- | :--- |\n';

const matched = [];
const unmatched = [];

oldArticles.forEach(old => {
    // 固定ページは除外
    if (legalPages.some(p => old.url.includes(p.oldSlug))) return;

    const match = newArticles.find(n => n.title.includes(old.title) || old.title.includes(n.title));
    if (match) {
        matched.push({ oldTitle: old.title, oldUrl: old.url, newUrl: match.newUrl });
    } else {
        unmatched.push(old);
    }
});

matched.forEach(m => {
    output += `| [ ] | ${m.oldTitle} | ${m.oldUrl} | ${m.newUrl} |\n`;
});

// 未マッチ（要手動選別）
output += '\n## ⚠️ 手動選別が必要（要確認）\n\n| 済 | 旧記事タイトル (WP) | 旧URL (WordPress) | 対応先（案） |\n| :--- | :--- | :--- | :--- |\n';

unmatched.forEach(u => {
    let suggestion = '';
    if (u.title.includes('ポイント')) suggestion = '/points (一覧へ)';
    if (u.title.includes('シーバス')) suggestion = '/blog/target/seabass';
    if (u.title.includes('クロダイ')) suggestion = '/blog/target/kurodai';
    if (u.title.includes('キビレ')) suggestion = '/blog/target/kibire';
    if (u.title.includes('タコ')) suggestion = '/blog/target/tako';
    if (u.title.includes('メバル')) suggestion = '/blog/target/mebaru-kasago';
    if (u.title.includes('カレイ')) suggestion = '/blog/target/karei';
    output += `| [ ] | ${u.title} | ${u.url} | ${suggestion} |\n`;
});

const outputPath = 'c:/Users/sasis/344dev/cho-hama/data-set/301redirect/checklist.md';
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
fs.writeFileSync(outputPath, output);
console.log('Checkpoint file created successfully at ' + outputPath);
