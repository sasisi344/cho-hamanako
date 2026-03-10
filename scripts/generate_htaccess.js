import fs from 'fs';
import path from 'path';

const checklistPath = 'data-set/301redirect/checklist.md';
const redirectsJsonPath = 'redirects.json';
const htaccessPath = 'public/.htaccess';

let htaccessContent = '<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /\n\n';

// 1. Add redirects from redirects.json (those found in frontmatter)
if (fs.existsSync(redirectsJsonPath)) {
    const rawData = fs.readFileSync(redirectsJsonPath, 'utf8');
    const jsonMatch = rawData.match(/--- REDIRECTS JSON ---\n([\s\S]*)/);
    if (jsonMatch) {
        try {
            const redirects = JSON.parse(jsonMatch[1]);
            htaccessContent += '  # Redirects from frontmatter wpSlug\n';
            for (const [oldUrl, newUrl] of Object.entries(redirects)) {
                // Ensure oldUrl starts with / and remove domain if present
                let cleanOld = oldUrl;
                if (cleanOld.startsWith('http')) {
                    const url = new URL(cleanOld);
                    cleanOld = url.pathname;
                }
                htaccessContent += `  RewriteRule ^${cleanOld.replace(/^\//, '').replace(/\/$/, '')}/?$ ${newUrl} [R=301,L]\n`;
            }
            htaccessContent += '\n';
        } catch (e) {
            console.error('Error parsing redirects.json', e);
        }
    }
}

// 2. Add redirects from checklist.md
if (fs.existsSync(checklistPath)) {
    const content = fs.readFileSync(checklistPath, 'utf8');
    const lines = content.split('\n');
    htaccessContent += '  # Redirects from checklist.md\n';

    lines.forEach(line => {
        const match = line.match(/\| \[( |x)\] \| .*? \| (https?:\/\/cho-hamanako\.info\/.*?) \| (.*?) \|/);
        if (match) {
            const oldFullUrl = match[2].trim();
            const newPath = match[3].trim();

            if (newPath && newPath !== '' && !newPath.includes('一覧へ') && !newPath.includes('C:')) {
                try {
                    const url = new URL(oldFullUrl);
                    let oldPath = url.pathname;

                    // Skip if it's already in htaccess (to avoid duplicates)
                    // (Simple check: just see if oldPath is already there)
                    if (!htaccessContent.includes(`^${oldPath.replace(/^\//, '').replace(/\/$/, '')}/?$`)) {
                        htaccessContent += `  RewriteRule ^${oldPath.replace(/^\//, '').replace(/\/$/, '')}/?$ ${newPath.replace(/\\/g, '/')} [R=301,L]\n`;
                    }
                } catch (e) { }
            }
        }
    });
}

htaccessContent += '</IfModule>\n';

fs.writeFileSync(htaccessPath, htaccessContent);
console.log(`Generated ${htaccessPath}`);
