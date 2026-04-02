---
name: rich-content-completion
description: ドラフトから「内部リンク・商品紹介・AI画像」を含むリッチな完成記事を生成する究極のワークフロー
---

# 🌊 リッチコンテンツ完成ワークフロー (Rich Content Completion)

## 🎯 目的
`_draft/` にある下書きやアウトラインを、浜名湖プロジェクトの最高品質基準（内部リンク、タックル紹介、専用アイキャッチ画像）を満たす完成記事として `src/content/blog/` に出力します。

## 🛠 実行ステップ

### ステップ 1: [Mapping] カテゴリと配置の特定
- **保存先ルール**: `.agents/category-slug-rules.md` に準拠。
- **魚種別カテゴリ**: `src/content/blog/target/{fish_name}/{sub_category}/{slug}/index.mdx`
- **サブカテゴリ**: `beginner` (入門), `tactics` (攻略), `season` (時期), `points` (ポイント), `cooking` (料理)。

### ステップ 2: [Drafting] 本文の高品質化（Writing Style厳守）
- **1文1段落**: モバイル可読性を最大化するため、**1つの文が終わるごとに必ず空行を1行挟む**。
- **強調ルール**: `**太字**` は本番環境では使用禁止。すべて `<strong>強調内容</strong>` タグに変換する。
- **フロントマター**:
  - `pubDate` / `upDate`: 実行日の日付。
  - `draft`: `false`
  - `cover`: `"./cover.jpg"`
  - `fishinginfo`: 難易度、ファミリー向け、シーズン、釣法、対象魚を網羅。

### ステップ 3: [Enrichment] コンポーネントによるリッチ化
- **インポート**: 冒頭で `import BlogCard from "@components/BlogCard.astro";` および `import TackleCard from "@components/TackleCard.astro";` を記述。
- **【厳守】リンクの存在確認と捏造禁止 (Anti-Hallucination)**:
  - Agentは絶対に存在しないパス（slugやid）を想像で生成してはいけません。
  - 必ず `list_dir` などのツールを使用して、プロジェクト内にそのリンク先が実在することを確認してから配置すること。
- **内部リンク**: 釣り場の紹介には必ず `<BlogCard slug="points/{area}/{slug}" />` を設置（`slug` の末尾に不要な `/index` はつけないこと。パスの実在を必ず確認）。
- **商品紹介**: タックル紹介には `src/content/affiliates/` から最適なIDを検索・確認し、`<TackleCard id="{category}/{id}" />` を垂直リストで配置（実在するファイル名から拡張子を省いたIDを使用）。

### ステップ 4: [Visualizing] 専用カバー画像の生成
- **スクリプト**: `node scripts/Antigravity-nanobana/generate-image.js` を使用。
- **プロンプト**: 16:9、高コントラスト、プロフェッショナルな釣り写真スタイル。英語で詳細に記述。
- **出力**: 記事ディレクトリ内に `cover.jpg` として保存。

### ステップ 5: [Cleanup] クリーンアップ
- 完成した記事を確認後、`_draft/` 内の元ファイルを削除する。

---

## 🚀 AIエージェントへの指令テンプレート

> 「`.agents/workflows/rich-content-completion.md` に従って、`_draft/` 内のドラフトを完成させてください。**必ず実在するリンク先を確認した上で**、`src/content/affiliates/` から最適なタックルを選んで `TackleCard` を追加し、釣り場には `BlogCard` でリンクを貼ってください。最後に `cover.jpg` の生成までお願いします。」
