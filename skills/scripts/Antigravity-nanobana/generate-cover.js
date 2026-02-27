import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ESMで__dirnameを使用するための定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .envファイルを読み込む
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split(/\r?\n/).forEach(line => {
        if (!line || line.trim().startsWith('#')) return;
        let cleanLine = line.trim();
        cleanLine = cleanLine.replace(/^export\s+/, '').replace(/^\$env:/, '');
        const match = cleanLine.match(/^([^=]+)=(.*)$/);
        if (match) {
            const key = match[1].trim();
            let value = match[2].trim();
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            process.env[key] = value;
        }
    });
} else {
    console.warn(`Warning: .env file not found at ${envPath}`);
}

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-3-pro-image-preview';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// ── サイトコンテキスト ──────────────────────────────────────────────────────
const SITE_CONTEXT = `[Site Context] This image is for a Japanese saltwater fishing blog exclusively about Lake Hamana (浜名湖), a brackish-water lake in Hamamatsu, Shizuoka, Japan. All imagery must relate to saltwater or brackish-water fishing — marine fish species, tidal environments, fishing gear, and the coastal scenery of Lake Hamana. Do not depict freshwater or mountain fishing elements.`;
// ──────────────────────────────────────────────────────────────────────────

// ── 季節ごとの水中カラー定義 ────────────────────────────────────────────────
const SEASON_MOOD = {
    '春': 'soft green-tinted blue water, gentle light filtering from above, spring underwater atmosphere',
    '夏': 'bright aquamarine water, warm sunlight shimmer, vibrant summer underwater scene',
    '秋': 'amber-tinted deep blue water, muted tones, calm autumn underwater atmosphere',
    '冬': 'deep cool blue water, cold dark tones, minimal light, winter night underwater scene',
};
// ──────────────────────────────────────────────────────────────────────────

// ── フロントマターのシンプルなパーサー ──────────────────────────────────────
function parseFrontmatter(content) {
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return {};
    const yaml = match[1];

    const result = {};

    // title
    const titleMatch = yaml.match(/^title:\s*["']?(.+?)["']?\s*$/m);
    if (titleMatch) result.title = titleMatch[1].trim();

    // fishinginfo.bestSeason
    const bestSeasonMatch = yaml.match(/bestSeason:\s*\[([^\]]+)\]/);
    if (bestSeasonMatch) {
        result.bestSeason = bestSeasonMatch[1]
            .split(',')
            .map(s => s.trim().replace(/["']/g, ''));
    }

    // fishinginfo.targetFish
    const targetFishMatch = yaml.match(/targetFish:\s*\[([^\]]+)\]/);
    if (targetFishMatch) {
        result.targetFish = targetFishMatch[1]
            .split(',')
            .map(s => s.trim().replace(/["']/g, ''));
    }

    // location.name
    const locationNameMatch = yaml.match(/name:\s*["'](.+?)["']/);
    if (locationNameMatch) result.locationName = locationNameMatch[1].trim();

    return result;
}

// ── フロントマターからカバー画像プロンプトを生成 ─────────────────────────────
function buildCoverPrompt(meta) {
    const { targetFish = [], bestSeason = [], locationName = '' } = meta;

    // 魚種リスト（英名付きで渡す）
    const fishSubject = targetFish.join(' and ') || 'saltwater fish';

    // 主季節を1つ選ぶ（最初の値を使用）
    const primarySeason = bestSeason[0] || '冬';
    const seasonMood = SEASON_MOOD[primarySeason] || SEASON_MOOD['冬'];

    // 場所のニュアンス
    const locationNote = locationName
        ? `The location context is "${locationName}", reflected subtly in the composition.`
        : '';

    return `A clean 2D flat illustration styled like a scientific fish field guide (図鑑) with a sense of life and movement.
Subject: ${fishSubject} — illustrated in a natural swimming pose (slight body curve, fins spread, tail in motion). Use thin precise outlines with simple flat coloring and delicate scale/fin details. No gradients, no photorealism.
Seasonal atmosphere: ${seasonMood}. Keep it minimal; water is suggested by color, not rendered in detail.
${locationNote}
Composition: Fish occupy the right 60% of the 16:9 frame. The left 40% is clear flat background for text placement. A few minimal abstract bubbles hint at underwater life.
Overall feel: Elegant, alive, and informative. Like a premium Japanese saltwater fish encyclopedia (海水魚図鑑) cover. No text, no logos. 16:9 wide format.`;
}

// ── 画像を生成するAPI呼び出し ────────────────────────────────────────────────
async function generateImage(prompt) {
    const requestData = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
            temperature: 1.0,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192
        }
    };

    return new Promise((resolve, reject) => {
        const requestBody = JSON.stringify(requestData);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-goog-api-key': API_KEY,
                'Content-Length': Buffer.byteLength(requestBody)
            }
        };

        const req = https.request(API_URL, options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => resolve(JSON.parse(data)));
        });

        req.on('error', reject);
        req.write(requestBody);
        req.end();
    });
}

// ── メイン処理 ───────────────────────────────────────────────────────────────
async function main() {
    const articlePath = process.argv[2];

    if (!articlePath) {
        console.error('使用方法: node generate-cover.js "<MDXファイルパス>"');
        console.error('例: node generate-cover.js "src/content/blog/guide/hamanako-winter-lightgame-rockfish-points/index.mdx"');
        process.exit(1);
    }

    // MDXファイルの読み込みとフロントマター解析
    if (!fs.existsSync(articlePath)) {
        console.error(`エラー: ファイルが見つかりません: ${articlePath}`);
        process.exit(1);
    }

    const content = fs.readFileSync(articlePath, 'utf8');
    const meta = parseFrontmatter(content);

    console.log('📄 フロントマター解析結果:');
    console.log(`  title      : ${meta.title || '(未定義)'}`);
    console.log(`  targetFish : ${(meta.targetFish || []).join(', ') || '(未定義)'}`);
    console.log(`  bestSeason : ${(meta.bestSeason || []).join(', ') || '(未定義)'}`);
    console.log(`  location   : ${meta.locationName || '(未定義)'}`);

    // プロンプト組み立て
    const coverPrompt = buildCoverPrompt(meta);
    const finalPrompt = `${SITE_CONTEXT}\n\n${coverPrompt}`;

    console.log('\n🖼️  カバー画像を生成中...\n');

    // API呼び出し
    const response = await generateImage(finalPrompt);

    // 結果の保存
    const outputPath = path.join(path.dirname(articlePath), 'cover.jpg');

    if (response.candidates?.[0]?.content?.parts) {
        let saved = false;
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData?.data) {
                const buffer = Buffer.from(part.inlineData.data, 'base64');
                fs.mkdirSync(path.dirname(outputPath), { recursive: true });
                fs.writeFileSync(outputPath, buffer);
                console.log(`✓ カバー画像を保存しました: ${outputPath}`);
                saved = true;
            }
        }
        if (!saved) {
            console.error('画像データが含まれていませんでした。APIレスポンス:', JSON.stringify(response, null, 2));
        }
    } else {
        console.error('生成に失敗しました:', JSON.stringify(response, null, 2));
    }
}

main();
