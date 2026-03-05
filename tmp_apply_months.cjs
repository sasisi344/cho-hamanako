const fs = require('fs');
const path = require('path');

const indexFile = path.join(__dirname, 'skills', 'agents', 'points-master-index.md');
const srcDir = path.join(__dirname, 'src', 'content', 'blog');

// Read the index file
const indexContent = fs.readFileSync(indexFile, 'utf8');
const lines = indexContent.split('\n');

let updatedCount = 0;

for (const line of lines) {
    if (!line.startsWith('|')) continue;
    if (line.includes(' Slug ') || line.includes(':---')) continue; // skip header

    const cols = line.split('|').map(c => c.trim());
    if (cols.length < 9) continue; // Needs to be an actual row

    const slug = cols[3];
    const monthsRaw = cols[8];

    if (!slug || slug === 'points/oku/syounaiko') continue;

    let months = [];
    if (monthsRaw) {
        months = monthsRaw.split(',').map(n => parseInt(n.trim(), 10)).filter(n => !isNaN(n));
    }

    if (months.length === 0) continue;

    const mdxPath = path.join(srcDir, slug, 'index.mdx');
    if (!fs.existsSync(mdxPath)) {
        console.log(`Not found: ${mdxPath}`);
        continue;
    }

    let mdxContent = fs.readFileSync(mdxPath, 'utf8');

    // Check if bestMonths is already there
    if (mdxContent.includes('bestMonths:')) {
        // replace existing
        const rx = /bestMonths:\s*\[.*?\]/;
        mdxContent = mdxContent.replace(rx, `bestMonths: [${months.join(', ')}]`);
    } else {
        // find bestSeason and insert after
        const rx = /(bestSeason:\s*\[.*?\])/;
        mdxContent = mdxContent.replace(rx, `$1\n  bestMonths: [${months.join(', ')}]`);
    }

    fs.writeFileSync(mdxPath, mdxContent, 'utf8');
    updatedCount++;
}

console.log(`Successfully updated ${updatedCount} point files with bestMonths.`);
