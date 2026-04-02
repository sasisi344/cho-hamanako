---
name: writing-style
description: "浜名湖Webサイト全体に適用される共通の執筆スタイル・Markdown記法・コンポーネント使用ガイドライン"
---

# 🖋️ Writing Style & Markdown Guide

## 🎭 役割と目的

このスキルは、「釣！浜名湖」プロジェクトにおけるすべての記事執筆とドキュメント作成に適用される厳格なルールを定義します。一貫したトーン＆マナーを維持し、ユーザーの読みやすさとSEOを最大化します。

## ✒️ Markdown 記法ルール

### ✅ 強調 (Emphasis)

- **Production Rules (本番用)**: 記事の強調（太字）には、すべて <code>&lt;strong&gt;強調内容&lt;/strong&gt;</code> タグを使用してください。Markdownの標準記法（`**...**`）は、レンダリングエラー防止のため本番環境（`src/content/`）では使用禁止です。
- **Drafting Phase**: 執筆中の視認性のために `**` を使用しても構いませんが、最終出力時には必ず `<strong>` に変換されている必要があります。
- **SEO Strategy**: 同一キーワードの過剰な強調を避け、1段落あたり1〜2箇所程度の自然な密度を維持してください。タグの前後には半角スペースを入れないでください。

### ✅ 見出しとSEO

- **H2見出し**: 必ず <strong>SEOキーワード</strong>（ポイント名、魚種名、時期など）を含めてください。「釣れる魚」などの汎用的な見出しは避けます。
- **H2まとめ**: 記事の結論や独自の特徴を反映させてください（例：`## まとめ：遠投が必要なポイント`）。

### ✅ 1文1段落ルール (重要)

- **1 Sentence = 1 Paragraph**: 文章がブロック状に重なるのを防ぐため、<strong>1つの文が終わるごとに必ず空行を1行挟んでください</strong>。
- これにより、モバイルデバイスでの可読性が向上し、リズムの良い文章になります。

### ✅ スペースの扱い

- **和欧混在**: 日本語と英数字・記号の間には **スペースを入れない** でください（標準化済み）。
- 例：`AstroSphereで構築する9月のレポート。`

---

## 🛠️ コンポーネント使用ガイドライン

### ✅ 強調ボックス (Callouts)

- Markdownの引用記法（`> [!NOTE]`）は使用 **不可**。
- AstroのHTMLコンポーネントを使用してください。
  - 補足：`<div class="note">内容</div>`
  - 警告：`<div class="note warn">内容</div>`

### ✅ 内部リンク (BlogCard)

- 可能な限り `<BlogCard slug="slug" />` を使用してください。
- 記事冒頭に `import BlogCard from "@components/BlogCard.astro";` が必要です。
- **【重要: リンクの捏造禁止】**: `slug` に指定する値は、必ず `src/content/blog/` 配下のフロントマターで定義された `slug` を使用してください。
- **データ取得元**: `[blog-card-index.md](file:///c:/Users/sasis/344ob/344ob/08_blog-master/01_cho-hamanako/.workspace/.data-set/.index/blog-card-index.md)` を参照し、実在するタイトルとスラッグのペアを正確に指定すること。
- **パス形式**: 現在のルールではディレクトリ階層を含まない「短縮スラッグ（例: `chinutop-lures`）」を推奨します。

### ✅ 道具紹介 (TackleCard)

- 複数紹介する場合は、必ず **垂直方向のリスト** にしてください（グリッド禁止）。
- **【重要: IDの捏造禁止】**: `id` に指定する値は、必ず `src/content/affiliates/` 配下に実在するデータを使用してください。
- **データ取得元**: `[tackle-card-list.md](file:///c:/Users/sasis/344ob/344ob/08_blog-master/01_cho-hamanako/.workspace/.data-set/.index/tackle-card-list.md)` を参照し、実在する魚種カテゴリと商品ID（スラッグ）を正確に組み合わせて指定すること（例: `kurodai/shimano-risewalk`）。
- 記述例：

```mdx
<div class="flex flex-col gap-4">
  <TackleCard id="id-1" noMargin={true} />
  <TackleCard id="id-2" noMargin={true} />
</div>
```

---

## 🖼️ 画像作成・配置ワークフロー

1. **[Plan]**: 記事内にプロンプトをコメントアウト `{/* Image Prompt (...) : ... */}` で記述。16:9を基本とする。
2. **[Execute]**: `generate_image` ツールを使用して `cover.png`等を作成。
3. **[Finalize]**: フロントマターまたは本文中で参照。

---

## 🐦 SNS埋め込み

記事にSNS（XのpostUrl・Instagramなど）のURLがある場合は、エラー回避をするためコンポーネントをフロントマターで指定する。

```
import Tweet from "@components/Tweet.astro";
import TwitterScript from "@components/TwitterScript.astro";
```
