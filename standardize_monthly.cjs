const fs = require('fs');
const path = require('path');

const baseDir = './src/content/blog/season/monthly';

function standardize(month) {
    const dirPath = path.join(baseDir, `${month}-month`);
    const filePath = path.join(dirPath, 'index.mdx');
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Extract Sections
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatterMatch) return;
    const frontmatter = frontmatterMatch[0];

    const body = content.replace(frontmatter, '').trim();

    // Split into Intro, Points, Fish, Summary
    // Fish section
    let fishSection = '';
    const fishMatch = body.match(/## \d+月の浜名湖で釣れる魚([\s\S]*?)(?=##|$)/);
    if (fishMatch) {
        fishSection = fishMatch[0].trim();
    } else {
        const altFishMatch = body.match(/## \d+月に釣れやすいターゲット([\s\S]*?)(?=##|$)/);
        if (altFishMatch) {
            fishSection = altFishMatch[0].replace(/## \d+月に釣れやすいターゲット/, `## ${month}月の浜名湖で釣れる魚`).trim();
        }
    }

    // Points section
    let pointsSection = '';
    const pointsMatch = body.match(/## \d+月のおすすめポイント\d+選([\s\S]*?)(?=##|$)/);
    if (pointsMatch) {
        pointsSection = pointsMatch[0].trim();
        // Number the H3s
        let count = 1;
        pointsSection = pointsSection.replace(/### (?:[0-9]+\. )?(.*)/g, (match, title) => {
            return `### ${count++}. ${title}`;
        });
    }

    // Summary section
    let summarySection = '';
    const summaryMatch = body.match(/## まとめ([\s\S]*?)$/);
    if (summaryMatch) {
        summarySection = summaryMatch[0].trim();
    }

    // Intro section (everything before the first H2)
    const sections = body.split(/^## /m);
    let intro = sections[0].trim();
    // Remove "import BlogCard..." if it's duplicated or mislocated
    intro = intro.replace(/import BlogCard from "@components\/BlogCard\.astro";/, '').trim();

    // Re-assemble
    let newContent = frontmatter + '\n';
    newContent += 'import BlogCard from "@components/BlogCard.astro";\n\n';
    newContent += intro + '\n\n';

    if (fishSection) {
        newContent += fishSection + '\n\n';
    }

    if (pointsSection) {
        newContent += pointsSection + '\n\n';
    }

    if (summarySection) {
        // Clean up summary box if needed
        summarySection = summarySection.replace(/\*\*本記事の要点\*\*/g, '**本記事の要点**').replace(/\*\*本記事の要約\*\*/g, '**本記事の要約**');
        newContent += summarySection + '\n';
    }

    // Final cleanup of extra newlines
    newContent = newContent.replace(/\n{3,}/g, '\n\n');

    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Standardized month ${month}`);
}

for (let i = 1; i <= 12; i++) {
    standardize(i);
}
