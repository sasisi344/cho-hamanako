const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const pointsDir = 'c:/Users/sasis/344dev/cho-hama/src/content/blog/points';
const outputFile = 'c:/Users/sasis/344dev/cho-hama/data-set/infrastructure-master.json';

const extractData = (dir) => {
    let results = [];
    const walk = (d) => {
        const files = fs.readdirSync(d);
        for (const file of files) {
            const fullPath = path.join(d, file);
            if (fs.statSync(fullPath).isDirectory()) {
                walk(fullPath);
            } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
                const content = fs.readFileSync(fullPath, 'utf8');
                const { data } = matter(content);
                if (data.location && data.location.name) {
                    // Extract area from path (e.g., .../points/omote/...)
                    const areaMatch = fullPath.match(/[\\/]points[\\/](omote|naka|oku)[\\/]/);
                    const area = areaMatch ? areaMatch[1] : "unknown";

                    // Clean facilities: remove streetLights, keep nightFishing for safety context
                    const facilities = data.facilities || {};
                    delete facilities.streetLights;

                    // Furigana logic: 1. check if name has (reading), 2. check manual map
                    const readingMap = {
                        "新居弁天海釣公園": "あらいべんてんうみづりこうえん",
                        "網干場（あみほしば）": "あみほしば",
                        "網干場": "あみほしば",
                        "砂揚げ場": "すなあげば",
                        "砂揚げ場（新居漁港）": "すなあげば",
                        "今切口舞阪堤": "いまぎれぐちまいさかてい",
                        "弁天島海浜公園": "べんてんじまかいひんこうえん",
                        "渚園": "なぎさえん",
                        "乙女園（うなぎ観音）": "おとめえん",
                        "観月園": "かんげつえん",
                        "正太寺鼻（しょうたいじ）": "しょうたいじはな",
                        "村櫛漁港": "むらくしぎょこう",
                        "村櫛海水浴場": "むらくしかいすいよくじょう",
                        "雄踏山崎": "ゆうとうやまざき",
                        "舘山寺（内浦湾）": "かんざんじ",
                        "都田川河口": "みやこだがわかこう",
                        "伊目": "いめ",
                        "寸座（マリーナ・砂州）": "すんざ",
                        "瀬戸水道": "せとすいどう",
                        "佐久米海岸": "さくめかいがん"
                    };

                    let name = data.location.name;
                    let furigana = "";
                    const m = name.match(/（([^）]+)）/);
                    if (m) {
                        furigana = m[1];
                        name = name.replace(/（[^）]+）/, ""); // Remove from name for master
                    } else if (readingMap[name]) {
                        furigana = readingMap[name];
                    }

                    results.push({
                        id: path.basename(path.dirname(fullPath)),
                        name: name,
                        furigana: furigana,
                        area: area,
                        lat: data.location.lat,
                        lng: data.location.lng,
                        facilities: facilities,
                        summary: data.summary || ""
                    });
                }
            }
        }
    };
    walk(dir);
    return results;
};

const masterData = extractData(pointsDir);
fs.writeFileSync(outputFile, JSON.stringify(masterData, null, 2));
console.log(`Generated master data for ${masterData.length} points at ${outputFile}`);
