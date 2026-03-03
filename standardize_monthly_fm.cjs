const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\sasis\\344dev\\cho-hama\\src\\content\\blog\\season\\monthly';

const monthData = {
    "3-month": {
        summary: "3月の浜名湖釣りでおすすめのポイントを厳選して紹介します。春の兆しとともに、乗っ込みのクロダイや回復個体のメバルなど、魚たちの活性が上がり始めるシーズンの開幕を狙いましょう。",
        tags: ["3月", "クロダイ", "メバル", "シーバス", "浜名湖"],
        targets: ["クロダイ", "キビレ", "シーバス", "メバル", "カサゴ"]
    },
    "4-month": {
        summary: "4月の浜名湖釣りでおすすめのポイントを厳選して紹介します。本格的な春を迎え、シーバスやクロダイの活性が急浮上。サヨリなどの小魚も接岸し、ルアーフィッシングも楽しくなる時期です。",
        tags: ["4月", "シーバス", "クロダイ", "サヨリ", "浜名湖"],
        targets: ["シーバス", "クロダイ", "キビレ", "サヨリ", "コウイカ"]
    },
    "5-month": {
        summary: "5月の浜名湖釣りでおすすめのポイントを厳選して紹介します。ゴールデンウィークを迎え、シロギスやマゴチなど夏に向けた魚種も登場。ファミリーフィッシングにも最適なベストシーズンです。",
        tags: ["5月", "シロギス", "マゴチ", "アジ", "浜名湖"],
        targets: ["シロギス", "マゴチ", "アジ", "クロダイ", "シーバス"]
    },
    "6-month": {
        summary: "6月の浜名湖釣りでおすすめのポイントを厳選して紹介します。梅雨入りとともにマダコが最盛期を迎え、アジやシロギスの数釣りも好調。エネルギッシュな初夏の釣りを楽しめる時期です。",
        tags: ["6月", "マダコ", "アジ", "シロギス", "浜名湖"],
        targets: ["マダコ", "クロダイ", "アジ", "シロギス", "マゴチ"]
    },
    "7-month": {
        summary: "7月の浜名湖釣りでおすすめのポイントを厳選して紹介します。夏休みシーズン到来！アジやワカシなどの回遊魚が賑わせ、ファミリーでのサビキ釣りやハゼ釣りも本格始動する時期です。",
        tags: ["7月", "アジ", "回遊魚", "ハゼ", "浜名湖"],
        targets: ["アジ", "ワカシ", "ショッコ", "クロダイ", "マゴチ", "ハゼ"]
    },
    "8-month": {
        summary: "8月の浜名湖釣りでおすすめのポイントを厳選して紹介します。真夏のピーク、ハゼ釣りが最盛期を迎え、夜は手軽にクロダイやキビレが狙えます。マダコ狙いのラストスパートも楽しめる時期です。",
        tags: ["8月", "ハゼ", "クロダイ", "マダコ", "浜名湖"],
        targets: ["ハゼ", "クロダイ", "シーバス", "マダコ", "アジ"]
    },
    "9-month": {
        summary: "9月の浜名湖釣りでおすすめのポイントを厳選して紹介します。秋の荒食いシーズン目前！サイズアップしたハゼや、回遊が活発になるサヨリ、アオリイカの新子など、多種多様なターゲットが狙える時期です。",
        tags: ["9月", "ハゼ", "サヨリ", "アオリイカ", "浜名湖"],
        targets: ["ハゼ", "サヨリ", "クロダイ", "アオリイカ", "カワハギ", "アジ"]
    },
    "10-month": {
        summary: "10月の浜名湖釣りでおすすめのポイントを厳選して紹介します。浜名湖釣りの黄金期！シーバスの落ちシーズンやカレイの接岸開始など、大物狙いから数釣りまで、最高に盛り上がる秋の釣りを楽しめます。",
        tags: ["10月", "シーバス", "カレイ", "ハゼ", "浜名湖"],
        targets: ["シーバス", "カレイ", "クロダイ", "ハゼ", "チンタ"]
    },
    "11-month": {
        summary: "11月の浜名湖釣りでおすすめのポイントを厳選して紹介します。冬に向けた本格的なカレイシーズンの開幕。夜釣りではメバルやカサゴが好調になり、落ち着いた環境で良型を狙える魅力的な時期です。",
        tags: ["11月", "カレイ", "メバル", "カサゴ", "浜名湖"],
        targets: ["カレイ", "メバル", "カサゴ", "クロダイ", "シーバス"]
    },
    "12-month": {
        summary: "12月の浜名湖釣りでおすすめのポイントを厳選して紹介します。1年の締めくくりに、寒カレイやチンタの数釣りを満喫。冬の澄んだ空気の中で、価値ある一匹との出会いを楽しめるシーズンです。",
        tags: ["12月", "カレイ", "チンタ", "メバル", "浜名湖"],
        targets: ["カレイ", "メバル", "カサゴ", "チンタ"]
    }
};

Object.keys(monthData).forEach(month => {
    const filePath = path.join(baseDir, month, 'index.mdx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const data = monthData[month];

        // Extract title
        const titleMatch = content.match(/title:\s*"(.*)"/);
        const title = titleMatch ? titleMatch[1] : "";

        // Extract wpSlug
        const wpSlugMatch = content.match(/wpSlug:\s*"(.*)"/);
        const wpSlug = wpSlugMatch ? wpSlugMatch[1] : "";

        const newFrontmatter = `---
title: "${title}"
summary: "${data.summary}"
pubDate: 2024-12-26
upDate: 2026-03-03
category: "season"
tags: ${JSON.stringify(data.tags)}
fishinginfo:
  targetFish: ${JSON.stringify(data.targets)}
wpSlug: "${wpSlug}"
---`;

        const updatedContent = content.replace(/---[\s\S]*?---/, newFrontmatter);
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated frontmatter for ${month}`);
    }
});
