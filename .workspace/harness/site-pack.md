# サイトパック: 釣！浜名湖

作成: 2026-11-27（CC）。どの係（`hb-*`）も、このサイトの作業では最初にこれを最後まで読む。ここは写しと地図で、正本は各節の「正本」。食い違ったら正本に従い、CC に報告する。150行まで（設計: `344blog/hq/.workspace/herness-project.md` §5）。

## 1. 約束

- マントラ: **地元ベテランの、浜名湖・次の一手**（正本 `344blog/hq/.workspace/task/brand-mantra.md`）
- 判断の問い: 読み終えた人が「明日、現場で何をすればいいか」を1つ言えるか。地元で長く釣ってきた人の判断（「私ならこの潮で入ります」）が入っているか
- 外れる: 浜名湖と関係の薄い一般論だけの記事、どこでも書ける製品紹介、判断のないまとめ

## 2. 語り手

- 「私（さしし）」。40代後半、浜松市在住、浜名湖での釣り歴20年超の地元アングラー。**専門家として判断を言う**立場
- 出さない経歴: IT・ブログ・SEO・生成AI（admin-lint が止める）
- 敬体（です・ます）。体温は励ましの言葉ではなく、専門家の判断（「私ならこの潮で入ります」「ここは足場を優先して選びます」）で出す
- **釣行の思い出はポイント記事（`category: points`）だけ**、素材は `.workspace/.data-set/point-memories.md` か記事の `> [!forAI]` に筆者が書いたものだけ。ないときは `{/* MEMORY_NOTE: … */}` を残す。釣果・日付・同行者を作らない
- 読者の習熟度（初級・中級・上級）を先に1つ決め、用語の量を合わせる（正本 `.agents/writing-style/SKILL.md`「読者ペルソナとトーン・カラー」）

## 3. 声の見本

### よい段落（このまま寄せる）

1. 冒頭で、読者の場面から入って答えを言う（`points/family-car-points`、AF-2 で直した後）
   > 子どもと浜名湖へ釣りに行くなら、車の置き方とトイレの有無から行き先を選びましょう。
   >
   > 護岸に車を横付けして竿を出せる砂揚げ場（新居漁港）と、ごく一部で横付けできる雄踏山崎を紹介します。
2. 規制を、場所と行動の言葉で1文目に言い切る（`guide/logistics/rental-boat-guide`、CH-4 の後）
   > 導流堤の南側から砂揚げ場・舞阪港までの水路と、今切大橋から南へ約1,400m沖までは、船での釣りも停泊もできません。
3. 安全を、読者がその場でする行動で書く（`family-car-points`）
   > 砂揚げ場の水際には柵がないため、子どものそばで大人が見守ります。
   >
   > 港湾・漁業の作業が優先なので、車や道具が作業の妨げになるときは釣りを中断して移動します。

### 直した前後（こう書かない → こう書く）

| 前（直す前） | 後（直した後） | 出どころ |
|---|---|---|
| 「釣！浜名湖」をご覧いただきありがとうございます！／陸っぱりでは届かないシャローや対岸を攻められるのが、ボートフィッシングの魅力です。 | 浜名湖で船に乗って釣りをしたいけれど、船の免許がない。／免許なしで借りられる2馬力のレンタルボートは確認できる範囲では見当たらず、カヤック・SUPが現実的です。 | CH-4 `rental-boat-guide`（あいさつ→場面と答え） |
| 見出し「ポイント概要と詳細アクセス」 | 「渚園の駐車場とトイレ｜どこに停めて何分歩く？」 | `.agents/reader-flow-rules.md` §5（見出しは読者の問いの言葉で） |
| タイトル「車横付けOK」（7か所のうち一部だけ） | 本文の全部に当てはまる言葉だけ（「車横付け・駐車場・トイレで選ぶ」） | AF-2 `family-car-points` |

## 4. 言わないこと

- 「選ぶ基準は」「〜が候補になります」などの定型句を1記事に並べない（AF-2 で1本に9回）。1本に同じ骨組みが続くと型が透ける
- 「場所による」のようなあいまいな言い方。潮・杭・水深など再現できる条件で書く
- タイトル・summary に、本文の一部にしか当てはまらない言葉を付けない
- カードの節を書き直すとき、元の文の安全・マナーの情報を落とさない
- **導流堤は釣りの説明に使わない**（今切口の特徴として、規制の説明だけに書く）
- 漁業権・漁期・リリースの決まりは `.agents/fishing-laws-hamanako.md` のとおりに書き、言い換えて広げない
- 体験を思わせる語（「行ってみたら」「私が釣った」など）は思い出の範囲の外で使わない（admin-lint の `fabricatedExperience`）
- あいさつ・励ましだけの文（「ようこそ」「ご覧いただきありがとうございます」「いかがでしたか」）

## 5. 記法

- 強調は本番（`src/content/`）では `<strong>…</strong>`。`**` は使わない
- **1文1段落**（文が終わるごとに空行）。日本語と英数字の間にスペースを入れない
- 内部リンクのカード: `<BlogCard slug="…" />`。`slug` はリンク先の frontmatter の `slug:` の値（パスではない）。冒頭に `import BlogCard from "@components/BlogCard.astro";`
- 本文のリンク: `[語句](/blog/{slug}/)`、ポイント記事は `[語句](/points/{slug}/)`。末尾の `/` を付ける。見出し・最初の H2 より前・カードの誘導文には置かない。新しく足すのは1記事2本まで
- 商品のカード: `<TackleCard id="category/id" position="…" />`。ID は `.workspace/.data-set/.index/tackle-card-list.md` の ID 列からだけ。カードの直前に誘導文、置く場所と枚数は `.agents/affiliate-placement-rules.md`
- 編集メモ `> [!forAI]` は記事末尾に1つ。`draft: false` の前に必ず消す
- 画像は記事にマーカー `{/* Image Prompt (...) : ... */}` とプロンプトまで（生成は Codex。`.workspace/codex/image-style.md`）
- frontmatter: 既存記事の `slug`・`date`・カテゴリは変えない。知識（knowledge）を使ったら `research: [<id>#F01,F02]` を足す（`herness-project.md` §7.4）

## 6. 規約の地図（作業 → 開く節）

| 作業 | 開くもの |
|---|---|
| どの記事も（書く前に必ず） | `.agents/reader-flow-rules.md`（タイトル §3・冒頭 §4・見出し §5・つなぎ §6・長さ §7・仕上げの表 §10） |
| 文体・記法の細部 | `.agents/writing-style/SKILL.md` |
| 記事の種類ごとの構成・字数 | ポイント `.agents/point-article/SKILL.md`（3,000字以上）、深掘り `fukabori-article/`、ターゲット `target-article/`、季節 `season-article/`、ガイド `guide-article/`、旅行 `travel-article/`。共通の構成 `.agents/base-article-structure/SKILL.md` |
| リライト | `.agents/article-rewrite/SKILL.md` |
| 商品カードと「欲しくなる流れ」 | `.agents/affiliate-placement-rules.md` §3-1・§3-1a・§3-2・§6 |
| 規制・漁業権 | `.agents/fishing-laws-hamanako.md` |
| カテゴリ・構造化データ | `.agents/category-slug-rules.md`・`.agents/structured-data-rules.md` |
| 指示書で書く回 | 指示書 → `.workspace/codex/order-base.md`（§4 は検収で繰り返し直した点） |
| 事実を探す・残す | `.workspace/.data-set/knowledge/index.md` と `knowledge/CLAUDE.md`（状態が「事実の表」の行だけ根拠にできる）。カード・リンクの ID は `.index/manifest.json` |
| 画像 | `.workspace/codex/image-style.md` |

## 7. 検査（書き終えたら）

| 何を | コマンド（サイトのルートで） |
|---|---|
| 記法・禁止語・体験の語 | `node C:/Users/sasis/344blog/.claude/skills/site-admin/scripts/admin-lint.mjs --site cho-hamanako --files <記事>`（ERROR は0に。WARN は報告書に書く） |
| TackleCard の ID | `pnpm run check:tackle` |
| BlogCard・本文リンクの行き先 | `pnpm run check:links`（行き先がないとビルドが止まる） |
| ビルド | `pnpm build`（書き手は不要。CC が公開の前に） |
