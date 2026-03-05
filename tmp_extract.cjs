const fs = require('fs');
const path = require('path');

const pointsDir = path.join(__dirname, 'src', 'content', 'blog', 'points');
const outputFile = path.join(__dirname, 'skills', 'agents', 'points-master-index.md');

function getFiles(dir, filesList = []) {
    if (!fs.existsSync(dir)) return filesList;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, filesList);
        } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
            filesList.push(fullPath);
        }
    }
    return filesList;
}

const allFiles = getFiles(pointsDir);

let markdown = `# 浜名湖ポイントマスターインデックス\n\n`;
markdown += `この一覧はポイント記事のメタデータ（Frontmatter）から自動抽出されたものです。\n`;
markdown += `追加で「おすすめ月」や「特記事項」を手動で追記し、まとめ記事生成のベースとして活用してください。\n\n`;
markdown += `| エリア | ポイント名 | Slug | おすすめシーズン | 主なターゲット魚 | ファミリー | 難易度 | おすすめ月 (手動追加用) |\n`;
markdown += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;

for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

    let title = '';
    let bestSeason = '';
    let targetFish = '';
    let family = '';
    let difficulty = '';

    if (match) {
        const fm = match[1];

        // Extract title
        const titleMatch = fm.match(/title:\s*"(.*?)"/);
        if (titleMatch) title = titleMatch[1];
        else {
            const titleMatch2 = fm.match(/title:\s*(.*)/);
            if (titleMatch2) title = titleMatch2[1].trim();
        }

        // Extract bestSeason
        const seasonMatch = fm.match(/bestSeason:\s*(\[.*?\])/);
        if (seasonMatch) bestSeason = seasonMatch[1].replace(/["']/g, '');

        // Extract targetFish
        const fishMatch = fm.match(/targetFish:\s*(\[.*?\])/);
        if (fishMatch) targetFish = fishMatch[1].replace(/["']/g, '');

        // Extract familyFriendly
        if (fm.match(/familyFriendly:\s*true/)) family = '◎';

        // Extract difficulty
        const diffMatch = fm.match(/difficulty:\s*"(.*?)"/);
        if (diffMatch) difficulty = diffMatch[1];
        else {
            const diffMatch2 = fm.match(/difficulty:\s*(.*)/);
            if (diffMatch2) difficulty = diffMatch2[1].trim();
        }
    }

    const relPath = path.relative(path.join(__dirname, 'src', 'content', 'blog'), file);
    const parts = relPath.split(path.sep);
    const area = parts[1];
    const pointDirName = parts[2];
    const slug = `points/${area}/${pointDirName}`;

    let areaName = area;
    if (area === 'omote') areaName = '表浜名湖';
    if (area === 'naka') areaName = '中浜名湖';
    if (area === 'oku') areaName = '奥浜名湖';

    // "～表浜名湖の釣りポイント紹介～" などのサフィックスを除外してスッキリさせる
    if (title.includes('～')) {
        title = title.split('～')[0];
    }

    markdown += `| ${areaName} | ${title} | ${slug} | ${bestSeason} | ${targetFish} | ${family} | ${difficulty} | |\n`;
}

fs.writeFileSync(outputFile, markdown, 'utf-8');
console.log('Success: ' + outputFile);
