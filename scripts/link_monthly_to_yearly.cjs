const fs = require('fs');
const path = require('path');

const baseDir = 'c:/Users/sasis/344dev/cho-hama/src/content/blog/season/monthly';
const yearlyCalendarSlug = 'season/yearly-fishing-calendar';

const linkBlock = `
---

### 浜名湖釣りカレンダーをチェック
浜名湖の四季を通じた魚の動きや、攻略の基本理論は「年間釣りカレンダー」にまとめています。

<BlogCard slug="${yearlyCalendarSlug}" />
`;

for (let i = 1; i <= 12; i++) {
    const filePath = path.join(baseDir, `${i}-month`, 'index.mdx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (!content.includes(yearlyCalendarSlug)) {
            content = content.trimEnd() + linkBlock;
            fs.writeFileSync(filePath, content);
            console.log(`Updated: ${filePath}`);
        } else {
            console.log(`Already updated: ${filePath}`);
        }
    }
}
