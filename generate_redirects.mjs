import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');

function getAllFiles(dirPath, arrayOfFiles = []) {
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

const allFiles = getAllFiles(CONTENT_DIR);
const redirects = {};

for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, 'utf8');

    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (match) {
        const frontmatter = match[1];

        // Just match the whole line for wpSlug or wpslug
        const slMatch = frontmatter.match(/^wp[sS]lug:\s*["']?([^"'\r\n]+)["']?/m);

        if (slMatch) {
            let oldPath = slMatch[1].trim();

            if (oldPath.startsWith('http://') || oldPath.startsWith('https://')) {
                try {
                    const url = new URL(oldPath);
                    oldPath = url.pathname;
                } catch (e) { }
            }

            let decodedPath;
            try {
                decodedPath = decodeURI(oldPath);
            } catch (e) {
                decodedPath = oldPath;
            }

            if (!decodedPath.startsWith('/')) decodedPath = '/' + decodedPath;
            if (!decodedPath.endsWith('/') && !decodedPath.includes('.')) decodedPath = decodedPath + '/';

            let relativePath = path.relative(CONTENT_DIR, filePath).split(path.sep).join('/');
            relativePath = relativePath.replace(/\.mdx?$/, '');
            if (relativePath.endsWith('/index')) relativePath = relativePath.slice(0, -6);

            const categoryMatch = frontmatter.match(/^category:\s*["']?([^"'\n\r]+)["']?/m);
            let newPath = '';
            if (categoryMatch && categoryMatch[1] === 'points') {
                newPath = `/points/${relativePath}`;
            } else {
                newPath = `/blog/${relativePath}`;
            }

            redirects[decodedPath] = newPath;
            console.log(`Found: ${filePath}\n       ${decodedPath}  ->  ${newPath}`);
        }
    }
}

console.log('\n--- REDIRECTS JSON ---');
console.log(JSON.stringify(redirects, null, 2));
