---
description: draftにある下書き（アウトライン）を完成させて公開前まで
---

# 📄 記事作成・完成ワークフロー (Article Creation Workflow)

このドキュメントは、`.workspace/draft/` にあるアウトラインから、本番コンテンツ（MDX）を生成し、サムネイル作成までを完結させるための標準手順を定義します。

---

## 🔄 全体プロセス

1.  **[Preparation]**: ドラフトの読み込みとナレッジの収集
2.  **[Structuring]**: カテゴリ決定とスラッグ設定
3.  **[Drafting]**: 本文執筆（ライティングスタイル準拠）
4.  **[Visualizing]**: サムネイル・画像生成
5.  **[Validation]**: 最終チェックとデプロイ準備

---

## 🛠️ 各ステップの詳細

### ステップ 1: [Preparation] ドラフトとナレッジの収集

- **ドラフト確認**: 対象 MDX またはタスク MD を読み、SEOターゲットと構成を把握する。
- **データセット入口**: [data-set-access/SKILL.md](../data-set-access/SKILL.md) に従い、まず `.workspace/.data-set/.index/manifest.json` を読む。
- **ナレッジ同期**: manifest の `lookup_by_task` で必要なファイルのみ開く（例: 魚種 → `.index/biological/`、ポイント → `infrastructure-master.json` + `point-matrix.md`、内部リンク → `blog-card-index.md`）。

### ステップ 2: [Structuring] カテゴリとスラッグの決定

- **ルール参照**: `.agents/category-slug-rules.md` に基づき、適切な保存先ディレクトリを決定する。
  - 例：4月のサヨリ記事 → `src/content/blog/season/spring/sayori-april/`
- **スラッグ生成**: 英字・小文字・ハイフン繋ぎのクリーンなスラッグを設定する。

### ステップ 3: [Drafting] 本文執筆

- **基本原則**: `.agents/writing-style/SKILL.md` を厳守。
  - **1文1段落ルール**: 1文ごとに必ず空行を1行入れる。
  - **強調ルール**: 本番公開用には `<strong>強調内容</strong>` タグを使用する。Markdown spacing `**` は使用禁止。
  - **スペース**: タグの前後には半角スペースを入れない（日本語と英数字の直接接続も可）。
  - **H2見出し**: 必ずSEOキーワードを含める。
- **コンポーネント配置**:
  - 冒頭に `<BlogCard />` による内部リンクを設置。
  - 道具紹介には `<TackleCard />` を垂直リストで配置。
- **データ引用**: リサーチデータに基づき、「なぜ今、ここで釣れるのか」を論理的に記述する。

### ステップ 4: [Visualizing] 画像・サムネイル生成

- **プロンプト作成**: 記事の内容に即した16:9の画像プロンプトを執筆中にコメントアウト `{/* Image Prompt (...) */}` で記述する。
- **サムネイル生成**: `generate_image` ツールを使用して `cover.png` を生成し、記事フォルダ内に保存する。
- **フロントマター設定**: `heroImage: "./cover.png"` を設定する。

### ステップ 5: [Validation] 最終チェック

- **リンクの厳格な存在確認（ハルシネーションの防止）**: 
  - `BlogCard` の `slug` や `TackleCard` の `id` が、**プロジェクト内に実在しているか**を必ず確認してください。
  - 想像や推測で存在しないパス（例：`slug="points/.../index"` のような存在しないスラッグ）を作らないこと。必ず `list_dir` や `find_by_name` 等でファイルの実在を確認し、正確な値を設定してください。
- **フォーマット確認**: `npm run lint` や `prettier` があれば実行（または目視でMarkdownの崩れをチェック）。
- **呼称チェック**: 正しい名称（例：網干場＝「あみほしば」）が使われているか再確認。

---

## 🚀 実行コマンド例（AIエージェントへの指令）

AIに作業を依頼する際は、以下のように伝えてください。

> 「`.agents/workflows/article-creation-workflow.md` と `data-set-access` SKILL に従って記事を完成させて。`.workspace/.data-set/.index/manifest.json` から必要な data-set だけ読んで。**必ず BlogCard / TackleCard の slug・id がインデックスまたは src/content に実在することを確認して**。」

---

## 📝 更新履歴

- 2024-03-17: 初版作成。網干場の読み修正およびカテゴリ・スラッグルールを統合。
