import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter'; // リポジトリルートの node_modules を利用

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
const MODEL = 'gemini-3.1-flash-lite-image';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// ── サイトコンテキスト ──────────────────────────────────────────────────────
const SITE_CONTEXT = `[Site Context] This image is for a Japanese saltwater fishing blog exclusively about Lake Hamana (浜名湖), a brackish-water lake in Hamamatsu, Shizuoka, Japan. All imagery must relate to saltwater or brackish-water fishing — marine fish species, tidal environments, fishing gear, and the coastal scenery of Lake Hamana. Do not depict freshwater or mountain fishing elements.`;
// ──────────────────────────────────────────────────────────────────────────

// ── サムネイルのデザイン方針（全記事共通）────────────────────────────────────
// 一覧・カード・SNS では幅 300px 前後に縮小されるため、「小さくても主役が読める」ことを最優先にする。
// 左側の余白などテキスト用スペースは設けない（文字は画像に入れず、記事タイトルは別途表示される）。
// `--style <name>` で切り替え（試作の比較用）。既定は illust。
const STYLE_PRESETS = {
    illust: `Polished, eye-catching digital illustration made to stand out as a small thumbnail in a list of blog cards. Rich saturated colors, strong value contrast, clean confident outlines with painterly shading, cinematic lighting with a bright rim light on the hero subject. Lively and appetizing, not a dry scientific diagram.`,
    photo: `High-end photorealistic photograph, as if shot on a full-frame camera with a fast lens: shallow depth of field, crisp detail on the hero subject, natural but vivid color grading, cinematic golden light. Looks like a real moment captured on Lake Hamana, not a stock photo or a 3D render.`,
    poster: `Bold graphic poster-style illustration: flat but punchy colors with a limited palette of 3–4 hues, thick clean outlines, strong silhouette and dramatic simplified shapes, high contrast that stays readable even at a very small size.`,
};
const DEFAULT_STYLE = 'illust';

const THUMBNAIL_COMPOSITION = `Composition rules:
- ONE clear hero subject that fills roughly 50–65% of the frame, placed on a rule-of-thirds point or centered, with a bold readable silhouette that still reads at 300px wide.
- Dynamic angle (low angle, diagonal, or close-up with slight perspective) and a sense of motion — splash, ripples, a bending rod, steam, or (open-water fish only) a leaping fish.
- At most 2–3 supporting elements, layered as foreground / midground / background for depth. Keep the background simple and softly blurred or graded so the hero pops.
- Complementary color contrast between the hero and the background (e.g. warm orange/gold/red accents against cool blue/teal water).
- Fill the entire 16:9 frame edge to edge. No empty panel, no frame, no border. Keep all important elements inside the central 80% so center-cropping to 16:9, 1.91:1 or 4:3 still works.
- Absolutely no text, letters, numbers, logos, watermarks or UI elements.`;

// ── 時間帯・季節ごとのライティング／配色 ────────────────────────────────────
const SEASON_MOOD = {
    '春': 'soft spring morning light, pastel sky with a hint of cherry-blossom pink, fresh green-tinted blue water',
    '夏': 'bright summer midday or golden-hour sun, vivid aquamarine water, towering clouds, sparkling highlights',
    '秋': 'warm amber and crimson sunset sky, deep blue water, calm crisp autumn atmosphere',
    '冬': 'cold clear winter light, deep navy water with a pale dawn glow on the horizon, crisp breath of cold air',
};
const NEUTRAL_MOOD = 'bright natural daylight with a dramatic, colorful sky and sparkling water highlights';

// ── 魚種の英名と見た目の手がかり（誤った魚を描かせないため）────────────────
const FISH_EN = {
    'クロダイ': 'black sea bream (chinu), dark silver-gray body with a high arched back',
    'チヌ': 'black sea bream (chinu), dark silver-gray body with a high arched back',
    'キビレ': 'yellowfin sea bream (kibire), silver body with distinctive yellow pelvic and anal fins',
    'キチヌ': 'yellowfin sea bream (kibire), silver body with distinctive yellow pelvic and anal fins',
    'シーバス': 'Japanese sea bass (seabass / suzuki), long silver body with a sharp dorsal fin',
    'スズキ': 'Japanese sea bass (seabass / suzuki), long silver body with a sharp dorsal fin',
    'ハゼ': 'Japanese goby (haze), small brown-beige spotted body with a big head and upturned mouth',
    'マハゼ': 'Japanese goby (haze), small brown-beige spotted body with a big head and upturned mouth',
    'アジ': 'Japanese horse mackerel (aji), blue-green back with silver belly and a lateral line of scutes',
    'マアジ': 'Japanese horse mackerel (aji), blue-green back with silver belly and a lateral line of scutes',
    'サバ': 'chub mackerel (saba), wavy dark stripes on a blue-green back',
    'イワシ': 'Japanese sardine, slender silver body with dark spots',
    'タコ': 'common octopus (madako), reddish-brown with tentacles gripping a rock',
    'マダコ': 'common octopus (madako), reddish-brown with tentacles gripping a rock',
    'キス': 'Japanese whiting (kisu), very slender pencil-like pale golden-silver body with a small pointed snout, a sandy-bottom fish caught on a bait rig by surf casting from a sandy beach',
    'シロギス': 'Japanese whiting (kisu), very slender pencil-like pale golden-silver body with a small pointed snout, a sandy-bottom fish caught on a bait rig by surf casting from a sandy beach',
    'カサゴ': 'marbled rockfish (kasago), mottled red-orange body with spiny fins and a big mouth',
    'メバル': 'Japanese rockfish (mebaru), large dark eyes, grayish-amber to reddish body',
    'カワハギ': 'thread-sail filefish (kawahagi), flat rhomboid body with a small mouth and a single dorsal spine',
    'サヨリ': 'Japanese halfbeak (sayori), very slender silver body with a long needle-like lower jaw tipped in red-orange',
    'マゴチ': 'bartail flathead (magochi), flat broad head, sandy brown mottled body lying on the sand',
    'ヒラメ': 'olive flounder (hirame), flat left-eyed body on the sand',
    'カレイ': 'flatfish (karei), flat right-eyed brownish body on the sand',
    'アオリイカ': 'bigfin reef squid (aoriika), translucent body with a wide fin skirt',
    'イカ': 'squid, translucent body with a fin skirt',
    'メジナ': 'Japanese opaleye (mejina), dark blue-gray round body with big eyes',
    'ボラ': 'flathead gray mullet, silver-gray body with a blunt head',
    'ショゴ': 'juvenile amberjack (shogo), olive back with a yellow stripe',
    'カンパチ': 'greater amberjack, olive back with a diagonal dark band across the eye',
    'ワラサ': 'yellowtail (warasa), blue-gray back with a yellow lateral stripe',
    'イナダ': 'yellowtail (inada), blue-gray back with a yellow lateral stripe',
    'ウナギ': 'Japanese eel (unagi), long dark glossy body',
    'マダイ': 'red sea bream (madai), vivid pink-red body with blue dots',
};

// ── 記事タイプ別の「何を主役にするか」──────────────────────────────────────
// tags / パス / category から判定する。`--scene` で記事ごとに上書きできる。
const ARCHETYPES = {
    cooking: 'Hero: an appetizing finished dish made from the target fish (sashimi platter, golden fried fish, or grilled whole fish) in the foreground, with steam or a glistening highlight, and a small whole fresh fish or a glimpse of the Hamana Lake shoreline behind it. Warm, delicious, mouth-watering color.',
    spot: 'Hero: the signature view of the fishing spot (pier, bridge, rocky shore, or tidal flat that really exists there) at dramatic light, with a silhouetted angler holding a bent rod and/or a fish leaping from the water in the foreground.',
    target: "Hero: the target fish big and close in a dynamic pose that is natural for the species — open-water fish (sea bass, sea bream, mackerel) may leap with a splash; bottom fish (whiting, goby, flathead, flounder, rockfish) are shown being lifted out of the water on the rig or hugging the sea floor, never leaping. A hint of the bait/lure or a bent rod enters the frame. Show the fish's real distinguishing features accurately.",
    method: 'Hero: the key fishing action of the method (rod bending against a fighting fish, a hand lifting a catch, the distinctive rig or lure in close-up) in a Hamana Lake setting.',
    gear: 'Hero: the key tackle (rod, reel, rig, lure) in a dramatic close-up with a blurred Hamana Lake scene behind it.',
    season: 'Hero: the seasonal target fish or catch in front of a scene that clearly says the season (light, sky color, atmosphere).',
    travel: 'Hero: the recognizable scenery or landmark of the area, plus one small appetizing element (a local dish or a catch) in the foreground.',
    default: 'Hero: the most recognizable single subject of the article (fish, spot, or catch) in a dynamic, appealing composition set in Hamana Lake.',
};
// ──────────────────────────────────────────────────────────────────────────

// ── 釣り場の特徴（.data-set の施設マスタ。記事ディレクトリ名 = id）─────────────
// ポイント記事の風景を「実データにある特徴」で描かせるために使う（推測で景色を足させない）。
const INFRA_PATH = path.join(__dirname, '../../.data-set/.index/infrastructure-master.json');

function findSpotSummary(articlePath) {
    if (!fs.existsSync(INFRA_PATH)) return '';
    const id = path.basename(path.dirname(path.resolve(articlePath)));
    const spots = JSON.parse(fs.readFileSync(INFRA_PATH, 'utf8'));
    const hit = spots.find((s) => s.id === id);
    return hit?.summary ? String(hit.summary) : '';
}

// ── フロントマター解析（gray-matter。ブロック形式／インライン形式の両方に対応）──
function parseArticle(articlePath) {
    const content = fs.readFileSync(articlePath, 'utf8');
    const { data } = matter(content);
    const fi = data.fishinginfo || {};
    const arr = (v) => (Array.isArray(v) ? v.map(String) : v ? [String(v)] : []);
    return {
        title: data.title ? String(data.title) : '',
        summary: data.summary ? String(data.summary).trim() : '',
        category: data.category ? String(data.category) : '',
        tags: arr(data.tags),
        targetFish: arr(fi.targetFish),
        methods: arr(fi.methods),
        bestSeason: arr(fi.bestSeason),
        locationName: data.location?.name ? String(data.location.name) : '',
    };
}

function detectArchetype(meta, articlePath) {
    const p = articlePath.replace(/\\/g, '/');
    const hay = [...meta.tags, meta.title].join(' ');
    if (/(レシピ|料理|食べ方|捌き方|さばき方|下処理)/.test(hay) || p.includes('/cooking/')) return 'cooking';
    if (meta.category === 'points' || p.includes('/points/')) return 'spot';
    if (meta.category === 'season' || p.includes('/season/')) return 'season';
    if (meta.category === 'travel' || p.includes('/travel/')) return 'travel';
    if (p.includes('/guide/method/')) return 'method';
    if (meta.category === 'guide' && /(タックル|ロッド|リール|道具|仕掛け)/.test(hay)) return 'gear';
    if (meta.category === 'target' || p.includes('/target/')) return 'target';
    return 'default';
}

function pickMood(meta) {
    // 季節が1〜2つに絞られる記事だけ季節色を付ける（通年記事は晴天デフォルト）
    const seasons = meta.bestSeason.filter((s) => SEASON_MOOD[s]);
    if (seasons.length >= 1 && seasons.length <= 2) return SEASON_MOOD[seasons[0]];
    return NEUTRAL_MOOD;
}

function describeFish(names, max) {
    // 主役は先頭の最大2種に絞る（全部描かせると主役がぼやける）
    return names.slice(0, max).map((n) => FISH_EN[n] || n).join('; and ');
}

// ── 記事メタからシーン指示を自動生成（--scene 未指定時のフォールバック）─────────
function buildAutoScene(meta, archetype, spotSummary) {
    // ポイント記事は風景が主役なので、魚は添え役の1種だけにする
    const fish = describeFish(meta.targetFish, archetype === 'spot' ? 1 : 2);
    const lines = [ARCHETYPES[archetype] || ARCHETYPES.default];
    if (fish) lines.push(`${archetype === 'spot' ? 'Accent fish' : 'Hero fish'} (draw accurately): ${fish}.`);
    if (meta.locationName) lines.push(`Location: "${meta.locationName}" on Lake Hamana — show recognizable features of this spot, do not invent landmarks.`);
    if (spotSummary) lines.push(`Spot facts from our field data (Japanese; depict only features stated here): ${spotSummary}`);
    if (meta.summary) lines.push(`Article summary (Japanese, context only — pick ONE visual idea from it, never render it as text): ${meta.summary}`);
    if (meta.methods.length) lines.push(`Fishing method hint: ${meta.methods.slice(0, 2).join(', ')}.`);
    lines.push(`Article title (for context only, never render it as text): ${meta.title}`);
    return lines.join('\n');
}

// ── 最終プロンプトの組み立て ──────────────────────────────────────────────────
function buildCoverPrompt(meta, archetype, scene, style, spotSummary) {
    const sceneBlock = scene || buildAutoScene(meta, archetype, spotSummary);
    return `${STYLE_PRESETS[style]}

Scene brief:
${sceneBlock}

Lighting / mood: ${pickMood(meta)}.

${THUMBNAIL_COMPOSITION}

16:9 wide format.`;
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

// ── 引数解析 ─────────────────────────────────────────────────────────────────
// node generate-cover.js "<MDX>" [--scene "<英語のシーン指示>" | --scene-file <path>] [--style illust|photo|poster] [--out <path>] [--dry-run]
function parseArgs(argv) {
    const args = { articlePath: null, scene: null, style: DEFAULT_STYLE, out: null, dryRun: false };
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === '--scene') args.scene = argv[++i];
        else if (a === '--scene-file') args.scene = fs.readFileSync(argv[++i], 'utf8').trim();
        else if (a === '--style') args.style = argv[++i];
        else if (a === '--out') args.out = argv[++i];
        else if (a === '--dry-run') args.dryRun = true;
        else if (!args.articlePath) args.articlePath = a;
    }
    return args;
}

// ── メイン処理 ───────────────────────────────────────────────────────────────
async function main() {
    const { articlePath, scene, style, out, dryRun } = parseArgs(process.argv.slice(2));

    if (!articlePath) {
        console.error('使用方法: node generate-cover.js "<MDXファイルパス>" [--scene "<シーン指示>"] [--scene-file <path>] [--style illust|photo|poster] [--out <path>] [--dry-run]');
        console.error('例: node generate-cover.js "src/content/blog/target/kibire/cooking/index.mdx" --dry-run');
        process.exit(1);
    }

    if (!fs.existsSync(articlePath)) {
        console.error(`エラー: ファイルが見つかりません: ${articlePath}`);
        process.exit(1);
    }

    if (!STYLE_PRESETS[style]) {
        console.error(`エラー: --style は ${Object.keys(STYLE_PRESETS).join(' / ')} のいずれか（指定: ${style}）`);
        process.exit(1);
    }

    const meta = parseArticle(articlePath);
    const archetype = detectArchetype(meta, articlePath);
    const spotSummary = archetype === 'spot' ? findSpotSummary(articlePath) : '';

    console.log('📄 記事メタ:');
    console.log(`  title      : ${meta.title || '(未定義)'}`);
    console.log(`  type       : ${archetype}${scene ? '（--scene でシーン上書き）' : ''}`);
    console.log(`  style      : ${style}`);
    console.log(`  targetFish : ${meta.targetFish.join(', ') || '(未定義)'}`);
    console.log(`  bestSeason : ${meta.bestSeason.join(', ') || '(未定義)'}`);
    console.log(`  location   : ${meta.locationName || '(未定義)'}`);
    if (archetype === 'spot') console.log(`  spot data  : ${spotSummary ? 'infrastructure-master.json から取得' : '(施設マスタに該当なし — --scene 推奨)'}`);

    const finalPrompt = `${SITE_CONTEXT}\n\n${buildCoverPrompt(meta, archetype, scene, style, spotSummary)}`;

    if (dryRun) {
        console.log('\n--- 生成プロンプト（--dry-run: API は呼びません）---\n');
        console.log(finalPrompt);
        return;
    }

    if (!API_KEY) {
        console.error('エラー: GEMINI_API_KEY が未設定です（.env を確認）');
        process.exit(1);
    }

    console.log('\n🖼️  カバー画像を生成中...\n');
    const response = await generateImage(finalPrompt);

    const outputPath = out || path.join(path.dirname(articlePath), 'cover.jpg');

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
