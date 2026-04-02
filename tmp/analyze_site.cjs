const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function getFiles(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(fullPath));
        } else if (fullPath.endsWith('.md') || fullPath.endsWith('.mdx')) {
            results.push(fullPath);
        }
    });
    return results;
}

const blogDir = path.resolve('src/content/blog');
const files = getFiles(blogDir);

const data = files.map(file => {
    const content = fs.readFileSync(file, 'utf8');
    try {
        const { data: fm } = matter(content);
        if (fm.draft === true) return null;

        let relPath = path.relative(blogDir, file).replace(/\\/g, '/');
        let slugBase = relPath.replace(/\/index\.mdx?$/, '').replace(/\.mdx?$/, '');

        // Astro's default slugging logic removes category if the file is in a folder with the same name as the category?
        // No, Astro's `getCollection('blog')` gives slugs relative to `src/content/blog`.
        // So for `src/content/blog/guide/post/index.mdx`, slug is `guide/post`.

        let slug = fm.slug || slugBase;
        let url = '';

        // Based on src/pages/blog/[...slug].astro and src/pages/points/[...slug].astro
        if (fm.category === 'points') {
            // points URLs are /points/[slug minus leading points/]
            url = '/points/' + slug.replace(/^points\//, '');
        } else {
            // regular URLs are /blog/[slug]
            url = '/blog/' + slug;
        }

        return {
            title: fm.title,
            category: fm.category || 'uncategorized',
            tags: fm.tags || [],
            url: url,
            file: relPath
        };
    } catch (e) {
        return null;
    }
}).filter(d => d !== null);

// Grouping by Category
const categories = {};
const allTags = new Set();

data.forEach(item => {
    if (!categories[item.category]) {
        categories[item.category] = [];
    }
    categories[item.category].push(item);
    item.tags.forEach(tag => allTags.add(tag));
});

console.log('--- SITE STRUCTURE ---');
Object.keys(categories).sort().forEach(cat => {
    console.log(`\n### Category: ${cat}`);
    categories[cat].sort((a, b) => a.title.localeCompare(b.title)).forEach(item => {
        console.log(`- [${item.title}](${item.url})  (Tags: ${item.tags.join(', ')})`);
    });
});

console.log('\n--- ALL TAGS ---');
console.log(Array.from(allTags).sort().join(', '));
