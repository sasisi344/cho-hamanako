import fs from 'node:fs';
import path from 'node:path';

const contentDir = 'src/content';

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file));
        } else {
            if (file.endsWith('.md') || file.endsWith('.mdx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = getFiles(contentDir);

function cleanup(content) {
    const parts = content.split(/^---$/m);
    if (parts.length < 3) {
        return processBody(content);
    }
    const frontmatter = parts[1];
    const body = parts.slice(2).join('---');
    return `---${frontmatter}---${processBody(body)}`;
}

function processBody(body) {
    // 1. Replace **bold** with <strong>bold</strong>
    body = body.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    const lines = body.split('\n');
    let inCodeBlock = false;
    const processedLines = lines.map(line => {
        if (line.trim().startsWith('```')) {
            inCodeBlock = !inCodeBlock;
            return line;
        }
        if (inCodeBlock) return line;

        // Restore accidentally removed spaces after list markers/headers
        // Only if it's a marker at the start of the line followed by Japanese
        line = line.replace(/^(\s*[*+-])([\u3040-\u9FFF])/, '$1 $2');
        line = line.replace(/^(\s*#+)([\u3040-\u9FFF])/, '$1 $2');
        line = line.replace(/^(\s*>\s*)([\u3040-\u9FFF])/, '$1 $2');

        // Protect component tags and attributes
        const placeholders = [];
        let protectedLine = line.replace(/<[^>]+>/g, (match) => {
            placeholders.push(match);
            return `__PLACEHOLDER_${placeholders.length - 1}__`;
        });

        // Protect Markdown list/header markers at the start of the line for the rest of processing
        let prefix = '';
        protectedLine = protectedLine.replace(/^(\s*([*+-]|#+|>\s+|[0-9]+\.)\s+)/, (match) => {
            prefix = match;
            return '';
        });

        // Japanese character range
        const jp = '[\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFF]';
        const en = '[a-zA-Z0-9]';
        // Specific symbols to handle (mainly punctuation and range markers)
        const sym = '[〜～！％＆（）＝＋－＊／：；＜＞？＠［］＾＿｀｛｜｝]'; 
        const h_sym = '[!%&()=+\\-*/:;<>?@\\[\\]^_{|}]';

        // Apply space removal (Only for cases that are likely NOT Markdown markers)
        // Alphanumeric + Space + Japanese
        protectedLine = protectedLine.replace(new RegExp(`(${en})\\s+(${jp})`, 'g'), '$1$2');
        // Japanese + Space + Alphanumeric
        protectedLine = protectedLine.replace(new RegExp(`(${jp})\\s+(${en})`, 'g'), '$1$2');
        
        // Japanese + Space + Symbol
        protectedLine = protectedLine.replace(new RegExp(`(${jp})\\s+(${sym}|${h_sym})`, 'g'), '$1$2');
        // Symbol + Space + Japanese
        protectedLine = protectedLine.replace(new RegExp(`(${sym}|${h_sym})\\s+(${jp})`, 'g'), '$1$2');
        
        // Alphanumeric + Space + Range/Punctuation Symbol
        protectedLine = protectedLine.replace(new RegExp(`(${en})\\s+([〜～!?:;,])`, 'g'), '$1$2');
        protectedLine = protectedLine.replace(new RegExp(`([〜～!?:;,])\\s+(${en})`, 'g'), '$1$2');

        // Restore prefix
        protectedLine = prefix + protectedLine;

        // Restore placeholders
        for (let i = 0; i < placeholders.length; i++) {
            protectedLine = protectedLine.replace(`__PLACEHOLDER_${i}__`, placeholders[i]);
        }

        return protectedLine;
    });

    return processedLines.join('\n');
}

const changes = [];

files.forEach(file => {
    const originalContent = fs.readFileSync(file, 'utf8');
    const newContent = cleanup(originalContent);
    if (originalContent !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        changes.push(file);
    }
});

console.log(`Total files cleaned: ${changes.length}`);
