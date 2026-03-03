const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\sasis\\344dev\\cho-hama\\src\\content\\blog\\season\\monthly';
const months = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

months.forEach(month => {
    const filePath = path.join(baseDir, month, 'index.mdx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Find the second occurrence of ---
        const lines = content.split('\n');
        let dashCount = 0;
        let index = -1;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].trim() === '---') {
                dashCount++;
                if (dashCount === 2) {
                    index = i;
                    break;
                }
            }
        }

        if (index !== -1) {
            // Check if wpSlug already exists
            if (!content.includes('wpSlug:')) {
                lines.splice(index, 0, 'wpSlug: ""');
                fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
                console.log(`Added wpSlug to ${month}`);
            } else {
                console.log(`wpSlug already exists in ${month}`);
            }
        }
    }
});
