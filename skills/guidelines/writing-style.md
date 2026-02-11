# Skill: Content Writing & Markdown Style Guide

## 🎭 Role & Purpose
This document defines the strict writing and formatting rules for all articles and documentation within the "Cho! Hamanako" project. All agents and writers must adhere to these guidelines to ensure consistency and high readability.

## ✒️ Markdown Formatting Rules

### ✅ Bold Text Spacing & Frequency (Critical)
**Structure Rule**: Always add a half-width space (or zero-width space) **before and after** bold text marker (`**`).
**Usage Rule**: Use bold text sparingly. Limit it to the **first occurrence** of a keyword or the most critical emphasis in a section. Excessive bolding reduces readability.

#### Examples
- ❌ **Bad**: `ここは**重要**なポイントです。次は**重要**な**魚**を紹介します。` (No spaces, excessive usage)
- ✅ **Good**: `ここは **重要** なポイントです。次は重要な魚を紹介します。` (Spaces added, reduced frequency)

### ✅ Headings & SEO
**Rule**: H2 headings must explicitly include **SEO keywords** (e.g., Point Name, Target Fish, Season). Avoid generic headings.
- ❌ **Bad**: `## 釣れる魚`
- ✅ **Good**: `## 弁天島海浜公園で釣れる魚`
- ✅ **Good**: `## 春の浜名湖で狙えるターゲット`

### ✅ Callouts & Emphasis
**Rule**: Use standard Markdown callouts (GitHub/Obsidian style) instead of HTML `<div>` tags for emphasis boxes.
Supported types: `NOTE`, `TIP`, `IMPORTANT`, `WARNING`, `CAUTION`.

#### Examples
```markdown
> [!NOTE]
> 記事の補足情報や、ちょっとした豆知識をここに記述します。

> [!WARNING]
> 立入禁止区域や危険な場所についての警告は、このスタイルを使用してください。
```

## 📝 General Writing Style

### Tone & Voice
- **Friendly but Professional**: 親しみやすいが、専門性を感じる信頼できるトーン。
- **User First**: ユーザー（釣り人）が知りたい「釣果」「場所」「方法」を優先する。

### ✅ Sentence Structure & Rhythm (New)
**Rule**: Prioritize short sentences and frequent line breaks.
- **One Idea per Line**: Avoid long paragraphs. Break text into single sentences or short blocks (1-2 sentences) to create rhythm and whitespace.
- **Simplify Sentences**: Avoid connecting multiple clauses with "ですし", "ため", "ので" repeatedly. Split them into separate sentences.
- **Direct & Clear**: Use direct phrasing. instead of passive or overly complex explanations.

#### Examples
- ❌ **Bad**: `ここはキャンプ場としても人気で、釣りも楽しめますし、レンタル品も充実しているので手ぶらでも大丈夫です。`
- ✅ **Good**: `ここはキャンプ場としても人気です。釣りも楽しめます。\nレンタル品も充実しているので、手ぶらでも大丈夫です。`

### ✅ Heading Specifics
- **Summary Headings**: The final "Summary" heading (`## まとめ`) must include a **concrete conclusion or unique characteristic** of the article.
    - ❌ **Bad**: `## まとめ`
    - ✅ **Good**: `## まとめ：東海地方でも有名だけあって抜群のポテンシャル！`
    - ✅ **Good**: `## まとめ：飛距離を出せるタックルが望ましい`

### Spacing (Japanese & English)
- **English-Japanese Spacing**: Insert a half-width space between English/Numbers and Japanese text (Recommended).
    - Example: `Astro Sphere を使って Web サイトを構築する。`

## 🖼️ Image Generation & Prompts
 
### ✅ Workflow: Prompting, Generation, and Placement
記事内の画像（アイキャッチ・図解）は、以下の3ステップで作成することをプロジェクトの標準ワークフローとする。
 
1. **[Plan] プロンプトの検討と埋め込み**:
    - 記事の適切な位置に HTML コメント形式でプロンプトを記述する。
    - 記事にある最初のH2項目以降から画像挿入するべき位置を調査する。
    - **Eyecatch**: 作成する画像にテキストは使わないこと。前後の文脈となるべく関連性をもたせて、ユーザーが違和感なく見れるように、記事のリズムを大切にすること。作成サイズは6:4を基本とする。
    - **Infographic**: 文字で説明がしづらいと判断した場合に挿入。基本的にH2項目を補足することを意識する。作成サイズは6:4か4:6。
    - **Language**: プロンプト本文は **英語**、画像内テキストは **日本語** で指定する。
 
2. **[Execute] 独自スクリプトによる画像生成**:
    - プロジェクト専用の生成スクリプト `generate-image.js` を使用し、Gemini API を介して画像を生成する。
    - **Command**:
      ```bash
      node skills/scripts/Antigravity-nanobana/generate-image.js "<Prompt Content>" "<Target Path>"
      ```
    - **Target Path**: 記事フォルダ内の `index.md` と同じ階層（Page Bundle 形式）に出力する（例: `./cover.jpg`）。
 
3. **[Finalize] 記事への反映**:
    - 生成された画像を Frontmatter や本文中で参照し、プレビューで確認する。
 
---
 
### ✅ プロンプト記述ルール (Comment-out)
**Rule**: スクリプト実行後も、生成の「設計図」としてコメントプロンプトは記事内に残しておくこと。
 
- **Format**: `<!-- Image Prompt (...) : ... -->`
- **Placement**:
    1. **Eyecatch**: 記事最初のH2以降。フロントマターには含めない。
    2. **Infographics**: 解説セクションの間。
    3. **cover.jpg（Thumbnail）**: ユーザーから指示があるまで作成はしないこと。
 
#### Examples
```markdown
<!-- 
Image Prompt (Eyecatch):
High-impact cinematic 16:9 shot of a red Kasago fish.
Text overlay in Japanese: "浜名湖カサゴ完全攻略" (Max 8 characters for impact)
-->
```

## 🧹 Definition List Formatting (Observation)
Based on recent edits, adding a space before the colon in definition lists or property keys is also practiced, though the Bold Spacing is the primary rule.
- Example: `- **Slug** : ` (Space before colon)
