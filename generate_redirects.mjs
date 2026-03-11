import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog');
const CONTENT_DIRS = [
    path.join(process.cwd(), 'src/content/blog'),
    path.join(process.cwd(), 'src/content/points')
];
const HTACCESS_PATH = path.join(process.cwd(), 'public/.htaccess');

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

console.log('Scanning content for wpSlug...');

let allFiles = [];
CONTENT_DIRS.forEach(dir => {
    allFiles = allFiles.concat(getAllFiles(dir));
});

let redirectRules = [];

for (const filePath of allFiles) {
    const content = fs.readFileSync(filePath, 'utf8');

    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (match) {
        const frontmatter = match[1];

        // Match wpSlug or wpslug
        const slMatch = frontmatter.match(/^wp[sS]lug:\s*["']?([^"'\r\n]+)["']?/m);

        if (slMatch) {
            let rawSlug = slMatch[1].trim();

            // Extract path if it's a full URL
            let oldPath = '';
            if (rawSlug.startsWith('http')) {
                try {
                    const url = new URL(rawSlug);
                    oldPath = url.pathname;
                } catch (e) {
                    oldPath = rawSlug;
                }
            } else {
                oldPath = rawSlug;
            }

            // Decode URL-encoded characters (like %e4...)
            let decodedPath;
            try {
                decodedPath = decodeURIComponent(oldPath);
            } catch (e) {
                decodedPath = oldPath;
            }

            // Remove leading/trailing slashes for RewriteRule regex
            let matchPath = decodedPath;
            if (matchPath.startsWith('/')) matchPath = matchPath.substring(1);
            if (matchPath.endsWith('/')) matchPath = matchPath.slice(0, -1);
            
            // Construct new path
            // Find which content dir this file belongs to
            const parentDir = CONTENT_DIRS.find(dir => filePath.startsWith(dir));
            let relativePath = path.relative(parentDir, filePath).split(path.sep).join('/');
            
            relativePath = relativePath.replace(/\.mdx?$/, '');
            if (relativePath.endsWith('/index')) relativePath = relativePath.slice(0, -6);

            const categoryMatch = frontmatter.match(/^category:\s*["']?([^"'\n\r]+)["']?/m);
            let newPath = '';
            
            if (parentDir.endsWith('points')) {
                newPath = `/points/${relativePath}`;
            } else {
                newPath = `/blog/${relativePath}`;
            }

            // Escape special regex characters in decodedPath (simplified)
            const escapedMatchPath = matchPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            
            redirectRules.push(`  RewriteRule ^${escapedMatchPath}/?$ ${newPath} [R=301,L]`);
            console.log(`Found: ${matchPath} -> ${newPath}`);
        }
    }
}

if (fs.existsSync(HTACCESS_PATH)) {
    let htaccess = fs.readFileSync(HTACCESS_PATH, 'utf8');
    const markerBegin = '# BEGIN GENERATED REDIRECTS';
    const markerEnd = '# END GENERATED REDIRECTS';
    
    const newContent = `${markerBegin}\n${redirectRules.join('\n')}\n  ${markerEnd}`;
    
    if (htaccess.includes(markerBegin) && htaccess.includes(markerEnd)) {
        const regex = new RegExp(`${markerBegin}[\\s\\S]*?${markerEnd}`, 'g');
        htaccess = htaccess.replace(regex, newContent);
    } else {
        // Append inside mod_rewrite block if exists
        if (htaccess.includes('RewriteEngine On')) {
            htaccess = htaccess.replace('RewriteEngine On', `RewriteEngine On\n\n  ${newContent}`);
        } else {
            htaccess += `\n\n<IfModule mod_rewrite.c>\n  RewriteEngine On\n  ${newContent}\n</IfModule>\n`;
        }
    }
    
    fs.writeFileSync(HTACCESS_PATH, htaccess);
    console.log(`\nSuccessfully updated ${HTACCESS_PATH} with ${redirectRules.length} rules.`);
} else {
    const htaccessContent = `<IfModule mod_rewrite.c>\n  RewriteEngine On\n  # BEGIN GENERATED REDIRECTS\n${redirectRules.join('\n')}\n  # END GENERATED REDIRECTS\n</IfModule>\n`;
    fs.writeFileSync(HTACCESS_PATH, htaccessContent);
    console.log(`\nCreated ${HTACCESS_PATH} with ${redirectRules.length} rules.`);
}
