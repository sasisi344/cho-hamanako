# Skill: Content Writing & Markdown Style Guide

## 🎭 Role & Purpose
This document defines the strict writing and formatting rules for all articles and documentation within the "Cho! Hamanako" project. All agents and writers must adhere to these guidelines to ensure consistency and high readability.

## ✒️ Markdown Formatting Rules

### ✅ Bold Text Spacing (Critical)
**Rule**: Always add a half-width space (or zero-width space) **before and after** bold text marker (`**`).
This improves readability and prevents the bold text from blending into the surrounding characters.

#### Examples
- ❌ **Bad**: `ここは**重要**なポイントです。` (No spaces)
- ✅ **Good**: `ここは **重要** なポイントです。` (Spaces added)
- ✅ **Good**: `**Astro** は高速です。` (At start of line)
- ✅ **Good**: `これが **結論** です。`

*Note: The user revision history shows this rule is strictly enforced even in documentation files.*

## 📝 General Writing Style

### Tone & Voice
- **Friendly but Professional**: 親しみやすいが、専門性を感じる信頼できるトーン。
- **User First**: ユーザー（釣り人）が知りたい「釣果」「場所」「方法」を優先する。

### Spacing (Japanese & English)
- **English-Japanese Spacing**: Insert a half-width space between English/Numbers and Japanese text (Recommended).
    - Example: `Astro Sphere を使って Web サイトを構築する。`

## 🖼️ Image Generation & Prompts
 
### ✅ Workflow: Prompting, Generation, and Placement
記事内の画像（アイキャッチ・図解）は、以下の3ステップで作成することをプロジェクトの標準ワークフローとする。
 
1. **[Plan] プロンプトの検討と埋め込み**:
    - 記事の適切な位置に HTML コメント形式でプロンプトを記述する。
    - **Eyecatch**: メインのテロップは **8文字程度** に抑え、ユーザーの関心を引くインパクト（強い言葉、鮮やかな色彩）を重視する。
    - **Language**: プロンプト本文は **英語**、画像内テキストは **日本語** で指定する。
 
2. **[Execute] 独自スクリプトによる画像生成**:
    - プロジェクト専用の生成スクリプト `generate-image.js` を使用し、Gemini API を介して画像を生成する。
    - **Command**:
      ```bash
      node skills/script/Antigravity-nanobana/generate-image.js "<Prompt Content>" "<Target Path>"
      ```
    - **Target Path**: 記事フォルダ内の `index.md` と同じ階層（Page Bundle 形式）に出力する（例: `./cover.jpg`）。
 
3. **[Finalize] 記事への反映**:
    - 生成された画像を Frontmatter や本文中で参照し、プレビューで確認する。
 
---
 
### ✅ プロンプト記述ルール (Comment-out)
**Rule**: スクリプト実行後も、生成の「設計図」としてコメントプロンプトは記事内に残しておくこと。
 
- **Format**: `<!-- Image Prompt (...) : ... -->`
- **Placement**:
    1. **Eyecatch**: フロントマター直下。
    2. **Infographics**: 解説セクションの間。
 
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
