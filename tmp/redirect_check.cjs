const fs = require('fs');
const path = require('path');

// 1. CSVデータの読み込み
const csvPath = 'c:/Users/sasis/344dev/cho-hama/data-set/export-all-urls-787596.csv';
const csvData = fs.readFileSync(csvPath, 'utf-8');
const oldArticles = csvData.split('\n').slice(1).map(line => {
    const parts = line.split(',');
    if (parts.length < 2) return null;
    const title = parts[0].replace(/\"/g, '').trim();
    const url = parts[parts.length - 1].trim();
    return { title, url };
}).filter(Boolean);

// 2. Astro記事（新サイト）の読み込み
function walkSync(currentDirPath, callback) {
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
walkSync('c:/Users/sasis/344dev/cho-hama/src/content/blog', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = content.match(/title:\s*["']?(.*?)["']?\s*(?:\n|\r)/);
    const slugMatch = content.match(/wpSlug:\s*(.*?)\s*(?:\n|\r)/);
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
            newUrl: '/blog/' + relativeUrl, // Prepend /blog/ based on usual pattern
            wpSlug: slugMatch ? slugMatch[1].trim() : null
        });
    }
});

// 3. マッチング処理
const report = oldArticles.map(old => {
    // 1. wpSlugでの一致
    let match = newArticles.find(n => n.wpSlug && (old.url.includes(n.wpSlug) || n.wpSlug.includes(old.url)));

    // 2. タイトルでの一致 (部分一致含む)
    if (!match) {
        match = newArticles.find(n => n.title.includes(old.title) || old.title.includes(n.title));
    }

    return {
        oldTitle: old.title,
        oldUrl: old.url,
        matched: !!match,
        newUrl: match ? match.newUrl : 'TODO'
    };
});

// 4. 結果の出力
console.log('--- MATCHED ---');
report.filter(r => r.matched).forEach(r => console.log(`${r.oldUrl} -> ${r.newUrl} (${r.oldTitle})`));
console.log('\n--- UNMATCHED (TODO) ---');
report.filter(r => !r.matched).forEach(r => console.log(`${r.oldUrl} (${r.oldTitle})`));
