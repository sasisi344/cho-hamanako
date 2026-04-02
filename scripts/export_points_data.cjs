const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '..', 'src', 'content', 'blog');
const publicDataDir = path.join(__dirname, '..', 'public', 'data');
const outputFileJson = path.join(publicDataDir, 'points.json');
const outputFileCsv = path.join(publicDataDir, 'points.csv');

if (!fs.existsSync(publicDataDir)) {
    fs.mkdirSync(publicDataDir, { recursive: true });
}

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

const allFiles = getFiles(contentDir);
const points = [];

for (const file of allFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) continue;

    const fm = fmMatch[1];

    // Simple YAML parser for the fields we need
    const getVal = (key) => {
        const regex = new RegExp(`^${key}:\\s*(.*)`, 'm');
        const match = fm.match(regex);
        return match ? match[1].trim() : null;
    };

    const draft = getVal('draft') === 'true';
    if (draft) continue;

    const locationSectionMatch = fm.match(/location:\s*\n([\s\S]*?)(?=\n\S|$)/);
    if (!locationSectionMatch) continue;

    const locFm = locationSectionMatch[1];
    const getLocVal = (key) => {
        const regex = new RegExp(`\\s+${key}:\\s*(.*)`);
        const match = locFm.match(regex);
        return match ? match[1].trim().replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1') : null;
    };

    const latStr = getLocVal('lat');
    const lngStr = getLocVal('lng');
    const lat = parseFloat(latStr);
    const lng = parseFloat(lngStr);

    if (isNaN(lat) || isNaN(lng)) continue;

    let title = getVal('title') || '';
    title = title.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');

    const category = getVal('category');

    let summary = getVal('summary') || '';
    summary = summary.replace(/^"(.*)"$/, '$1').replace(/^'(.*)'$/, '$1');

    // Extract tags
    let tags = [];
    const tagsMatch = fm.match(/tags:\s*\[(.*?)\]/);
    if (tagsMatch) {
        tags = tagsMatch[1].split(',').map(t => t.trim().replace(/["']/g, ''));
    }

    // Extract fishing info (Nested properties)
    let targetFish = [];
    const fishInfoMatch = fm.match(/fishinginfo:\s*\n([\s\S]*?)(?=\n\S|$)/);
    if (fishInfoMatch) {
        const fishFm = fishInfoMatch[1];
        const targetMatch = fishFm.match(/targetFish:\s*\[(.*?)\]/);
        if (targetMatch) {
            targetFish = targetMatch[1].split(',').map(t => t.trim().replace(/["']/g, ''));
        }
    }

    const relPath = path.relative(contentDir, file);
    const slug = relPath.replace(/\\/g, '/').replace(/\.mdx?$/, '').replace(/\/index$/, '');

    points.push({
        title,
        lat,
        lng,
        slug,
        category,
        summary,
        tags,
        targetFish,
        address: getLocVal('address'),
        googleMapUrl: getLocVal('googleMapUrl')
    });
}

// Write JSON
fs.writeFileSync(outputFileJson, JSON.stringify(points, null, 2), 'utf-8');

// Write CSV
const header = 'title,lat,lng,slug,category,address,summary,tags,targetFish\n';
const rows = points.map(p => {
    const escape = (s) => `"${(s || '').replace(/"/g, '""')}"`;
    return `${escape(p.title)},${p.lat},${p.lng},${p.slug},${p.category},${escape(p.address)},${escape(p.summary)},${escape(p.tags.join(','))},${escape(p.targetFish.join(','))}`;
}).join('\n');
fs.writeFileSync(outputFileCsv, header + rows, 'utf-8');

console.log(`Successfully generated:\n- ${outputFileJson}\n- ${outputFileCsv}`);
console.log(`Total points exported: ${points.length}`);
