# WordPress Content Conversion & Rewrite Rules (WP Content Check)

## 📌 Workflow Overview
WordPressからエクスポートされ、インボックス（一時保管用フォルダ）に保存されたMarkdown形式の記事を解析し、Astro向けに最適化・カテゴリ分類・タグ付け・リライトを行うためのルールセットです。
AIエージェントはこのルールに従ってバッチ処理、または個別処理を実行します。

## 🎯 処理ステップ (Processing Steps)

### Step 0: WP記事のメタデータ読取 (Prompt Parsing)
WPからエクスポートされた記事（インボックスのMarkdown）は、記事冒頭に以下の情報を含む `prompt` ブロックが記載されている前提で処理を開始します。AIはこれを読み取り、Frontmatter構築とリライトの土台とします。

**必要なパラメーター:**
- タイトル情報（自動取得または記載）
- `修正前slug`: （旧WordPressのURL）
- `cover.jpg取得`: （アイキャッチ画像URL）
- **`pubDate`**: （元の公開日。SEO評価引き継ぎのため必須）
- **`WPカテゴリ`**: （旧WPカテゴリ。新たなカテゴリ分けの推測に使用）
- **`WPタグ`**: （旧WPタグ。新たなタグ設定の推測に使用）
※ *GoogleMap情報や緯度経度（location）は、AIが地名などから推測・検索して自動補完するため事前記述は不要です。*
### Step 1: 記事のインテント（検索意図）解析
- 記事の「旧タイトル」と「本文内容」を読み込みます。
- メインとなる検索キーワード（メインKW）を抽出し、ユーザーの「検索意図（インテント）」を明確にします。
- 必要に応じて、Astro移行に合わせてより引きのある（CTRの高い）タイトルへリライト案を生成します。

### Step 2: カテゴリとタグの振り分け
`skills/agents/category-slug-rules.md` のルールに則り、以下を決定します。
- **カテゴリの決定**: メインKWに基づき、単一のカテゴリ（`points`, `guide`, `season`, `cooking`, `news` のいずれか）に振り分けます。
  - **※注意**: 「魚種（ハゼ、シーバス等）」はカテゴリではなく、必ず**タグ**に割り当てます。
- **タグの設定**: 記事から「魚種（例:`haze`）」「釣り方（例:`lure`）」「場所の特徴（例:`river-mouth`）」等の要素を3〜5個抽出し、英字スラッグのタグとして設定します。

### Step 3: Astro用 Frontmatter の構築
AstroのContent Collectionsに対応し、かつブログ全体でパラメータ検索を容易にするため、以下の統一フォーマット（ポイント紹介記事基準）でFrontmatterを構築します。不要な項目もスキーマの一貫性を保つため極力維持（またはnull/false設定）します。

```yaml
---
title: "記事のタイトル（SEOおよびSXO最適化版）"
summary: "100文字〜120文字程度の概要・メタディスクリプション"
pubDate: 2024-08-01
upDate: 2026-02-18
category: "points" # guide, season, cooking, news 等に合わせて変更
tags: ["浜名湖", "釣り場", "中浜名湖", "新居", "湖西市"] # 抽出したタグ配列を記入
draft: false
noindex: false
cover: "./cover.jpg" # または既存のアイキャッチ画像パス
fishinginfo:
  difficulty: "Beginner" # Beginner, Intermediate, Advanced など
  familyFriendly: true
  bestSeason: ["春", "夏", "秋"]
  methods: ["ルアー", "エサ釣り", "ウキ釣り"]
  targetFish: ["キビレ", "シーバス", "クロダイ", "ハゼ"]
facilities:
  parking: false
  parkingFee: "なし"
  toilet: false
  convenienceStore: "コンビニ等の名称"
  nightFishing: true
  streetLights: true
location:
  name: "ポイント名や地域名"
  address: "おおよその住所"
  lat: 34.710048 # 緯度
  lng: 137.560150 # 経度
  googleMapUrl: "https://goo.gl/maps/example"
---
```

### Step 4: URL（Slug）の最適化
- 古いWordPressの「日本語URL」や、冗長すぎるURL（例：日付入りなど）から脱却します。
- WordPressのslugはリダイレクト処理をするためにもリストで補完しておくこと。
- メインKWを含む、3〜5単語程度の簡潔な英字スラッグ（kebab-case）を自動生成します。

### Step 5: Astro向けリライト・フォーマット修正
- **見出し（H2, H3）の整理**: 構造的に正しい見出し順路になっているか確認します。
- **UXの向上（SXO戦略）**: ターゲット層（このブログでは初心者〜中級者）に合わせ、リード文（導入部）で「記事の結論・読むメリット」を先に伝え、サイト滞在時間を伸ばす構成に修正します（`writing-style.md`準拠）。
- **WordPress特有記法の除去**: `[caption]` ショートコード、不必要なHTMLタグ、空の改行タグ(`<br>`)などをクリーンなMarkdown記法に変換します。
- **記事中のadタグ**: 記事中にある[ad]タグは削除していい。
- **アイキャッチ＆インフォグラフィックの配置**: アイキャッチかインフォグラフィックのどちらか必ず1枚は記事に使うこと。listは5行以上なら画像とみなしていい。アイキャッチにはテキストを使わないこと。インフォグラフィックには日本語テキストを使うこと。

### Step 6: 保存先ディレクトリへの提案・出力
処理とリライトが完了したコンテンツを、新しいAstroのフォルダ構造（例：Astro本番の `src/content/blog/{category}/` や、リライト待ちの `draft/{category}/` ）へ配置するように提案・出力します。
