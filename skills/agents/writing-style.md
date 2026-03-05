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
**Rule**: Use HTML `<div>` tags for emphasis boxes in accordance with the Astro Sphere theme support. Do **NOT** use Markdown blockquote callouts (`> [!NOTE]`).
Supported types: `note`, `note warn`.

#### Examples
```html
<div class="note">
記事の補足情報や、ちょっとした豆知識をここに記述します。
</div>

<div class="note warn">
**注意！**
立入禁止区域や危険な場所、マナーについての警告は、このスタイルを使用してください。
</div>
```

## 📝 General Writing Style

### Tone & Voice
- **Friendly & Conversational**: 釣り仲間に宛てた手紙やLINEのような、温かみのある親しみやすいトーン。ただし、馴れ馴れしすぎず、読んでいてワクワクするような「釣り人同士の共感」を大切にする。ユーモアも交えてOK。
- **User First**: ユーザー（釣り人）が知りたい「釣果」「場所」「方法」を優先しつつ、機械的な箇条書きや説明にならないよう人間味のある言葉選びをする。

### ✅ Sentence Structure & Rhythm (New)
**Rule**: Markdownの仕様上、空行を挟むことで独立した `<p>` タグになります。**1つの文（センテンス）が終わるごとに必ず空行を挟む（1センテンス＝1段落）** ことを絶対のルールとします。
- **1 Sentence = 1 Paragraph**: 文章が連なってブロックになるのを避け、1文ごとに空行を入れて、余白たっぷりのリズムを作ってください。
- **Conversational Smoothness**: 短く切りすぎでロボットのようにならないよう、「〜ですよね」「〜も面白いですよ！」などの語尾を活用し、流れるようなリズムを作る。
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
- **English-Japanese Spacing**: Do NOT insert spaces between English/Numbers and Japanese text (Standardized).
    - Example: `AstroSphereを使ってWebサイトを構築する。`
    - Example: `9月の浜名湖。`

## 🐟 Fishing Knowledge & Accuracy (浜名湖の釣果に関するルール)

**Rule**: 浜名湖の実情に即した正確な情報を提供するため、以下の魚種に関する記述は原則として禁止、または注意すること。

- **アイナメ (Ainame)**: **浜名湖ではまず釣れません。** 記事のターゲット魚種やポイント紹介の候補から **完全に削除** してください。
- **季節感の徹底**: 魚種ごとのベストシーズンを厳守し、水温や潮の状況に不自然な記述（例：冬にアジ爆釣など）を避けること。

### ✅ Internal Linking Strategy (BlogCards)
**Rule**: Use the Astro `<BlogCard>` component for prominent internal links to other generated points or articles, instead of standard plain text Markdown links. This ensures high visibility and CTR.
- **Workflow**: 
  1. Change the file extension from `.md` to `.mdx` if the file doesn't already use it. 
  2. Import the component at the top inside the frontmatter (or right after):
     ```mdx
     import BlogCard from "@components/BlogCard.astro";
     ```
  3. Use the component in the body by providing the relative slug:
     ```mdx
     <BlogCard slug="points/oku/miyakodagawa" />
     ```
- **When NOT to use**: For inline links that are just part of a running sentence, regular Markdown links `[text](url)` are still acceptable to maintain reading rhythm.

## 🖼️ Image Generation & Prompts
 
### ✅ Workflow: Prompting, Generation, and Placement
記事内の画像（アイキャッチ・図解）は、以下の3ステップで作成することをプロジェクトの標準ワークフローとする。
 
1. **[Plan] プロンプトの検討と埋め込み**:
    - 記事の適切な位置に MDX コメント形式 `{/* ... */}` でプロンプトを記述する。
    - 記事にある最初のH2項目以降から画像挿入するべき位置を調査する。
    - **Eyecatch**: 作成する画像にテキストは使わないこと。前後の文脈となるべく関連性をもたせて、ユーザーが違和感なく見れるように、記事のリズムを大切にすること。作成サイズは16:9を基本とする。
    - **Infographic**: 文字で説明がしづらいと判断した場合に挿入。基本的にH2項目を補足することを意識する。作成サイズは6:4か4:6。
    - **Language**: プロンプト本文は **英語**、画像内テキストは **日本語** で指定する。
 
2. **[Execute] 独自スクリプトによる画像生成 (優先ルール)**:
    - プロジェクト専用の生成スクリプト `generate-image.js` を使用し、Gemini API を介して画像を生成します。 **AI標準の画像生成ツールよりも、このスクリプトの使用を最優先してください。**
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
 
- **Format**: `{/* Image Prompt (...) : ... */}`
- **Placement**:
    1. **Eyecatch**: 記事最初のH2以降。フロントマターには含めない。
    2. **Infographics**: 解説セクションの間。
    3. **cover.jpg（Thumbnail）**: ユーザーから指示があるまで作成はしないこと。
 
#### Examples
```markdown
{/* 
Image Prompt (Eyecatch):
High-impact cinematic 16:9 shot of a red Kasago fish.
Text overlay in Japanese: "浜名湖カサゴ完全攻略" (Max 8 characters for impact)
*/}
```

## 🧹 Definition List Formatting (Observation)
Based on recent edits, adding a space before the colon in definition lists or property keys is also practiced, though the Bold Spacing is the primary rule.
- Example: `- **Slug** : ` (Space before colon)

## 🎣 Point Article Structure

### ✅ Seasonal Information Section
**Rule**: Standardize the "Seasonal Information" section in point introduction articles using the following structure.
- **H3 Headings**: strictly use `狙い目のシーズン`, `シーズンごとに釣れやすい魚`, and `ポイントの補足`.
- **Format**: Use bullet points for readability.

#### Standard Template
```markdown
### 狙い目のシーズン

*   **Target Fish 1** : Month range
*   **Target Fish 2** : Month range

### シーズンごとに釣れやすい魚

*   **春**：Fish List
    *   Description of spring fishing...
*   **夏**：Fish List
    *   Description of summer fishing...
*   **秋**：Fish List
    *   Description of autumn fishing...
*   **冬**：Fish List
    *   Description of winter fishing...

### ✨️ポイントの補足

*   春：Specific advice...
*   夏：Specific advice...
*   秋：Specific advice...
*   冬：Specific advice...

General advice text follows here.
```

## 🐟 Target Species Hub (Cluster) Rules

### ✅ Frontmatter for species index.mdx
**Rule**: Every species hub article (`/target/{species}/index.mdx`) must include detailed `fishinginfo` to enable site-wide filtering and search.

```yaml
fishinginfo:
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  familyFriendly: boolean
  bestSeason: ["春", "夏", "秋", "冬"]
  methods: ["method1", "method2"]
  targetFish: ["fish_name"]
```

### ✅ Article Cluster Structure
**Rule**: Species-specific content should be organized into the following categories to cover all user intents:
1.  **Hub (index.mdx)** : The terminal/main pillar page.
2.  **Beginner (/beginner/)** : "How-to" for families and novices.
3.  **Tactics (/tactics/)** : Advanced methods and lure strategies.
4.  **Points (/points/)** : Top 5-10 specific spots for that fish.
5.  **Cooking/Season (/cooking/)** : Recipes and seasonal patterns.
