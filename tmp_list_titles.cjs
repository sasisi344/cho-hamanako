const fs = require('fs');
const path = require('path');
const monthlyDir = 'src/content/blog/season/monthly';
const months = fs.readdirSync(monthlyDir);
months.forEach(month => {
    const filePath = path.join(monthlyDir, month, 'index.mdx');
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        const titleMatch = content.match(/title: "(.*)"/);
        if (titleMatch) {
            console.log(`${month}: ${titleMatch[1]}`);
        }
    }
});
