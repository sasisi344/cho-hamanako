---
name: cho-hamanako-image-generation
description: Generates cover and inline images for Cho! Hamanako using the Antigravity-nanobana Node scripts under .workspace/scripts. Use when the user explicitly asks for cover.png, hero images, thumbnail generation, or Gemini image generation for blog posts.
---

# Cho! Hamanako — 画像生成（Antigravity-nanobana）

## 原則

- **ユーザーが画像生成を明示したときだけ**実行する（`CLAUDE.md` / 344dev 共通ルール）
- Cursor の `generate_image` ツールは使わず、**本リポジトリの Node スクリプト**を使う
- 生成物は **記事と同じフォルダ**（`src/content/blog/.../`）に置く

## 配置

```
.workspace/scripts/Antigravity-nanobana/
├── .env                 # GEMINI_API_KEY（コミットしない）
├── generate-cover.js    # MDX フロントマターからカバー自動生成
└── generate-image.js    # 任意プロンプトで1枚生成
```

## 前提

- Node.js 22、リポジトリルートで実行
- `.env` に `GEMINI_API_KEY`（スクリプト同梱の簡易ローダーが読む）
- モデル: `gemini-3.1-flash-image-preview`（Google Generative Language API）
- 全プロンプトに **SITE_CONTEXT** が前置され、浜名湖・汽水域・海釣り以外（淡水・山岳など）を除外

## 1. カバー画像（推奨・ポイント/季節記事）

**入力**: 記事 MDX のパス  
**出力**: 同ディレクトリの `cover.jpg`（図鑑風 16:9 フラットイラスト）

```bash
cd c:/Users/sasis/344dev/cho-hamanako
node .workspace/scripts/Antigravity-nanobana/generate-cover.js "src/content/blog/points/naka/gardenpark/index.mdx"
```

フロントマターから読む項目:

- `fishinginfo.targetFish` → 被写体
- `fishinginfo.bestSeason` → 水中トーン（春/夏/秋/冬）
- `location.name` → 構図のニュアンス

実行後、MDX の `heroImage: "./cover.jpg"` を設定（既存が `cover.png` ならファイル名を揃える）。

## 2. 任意プロンプト1枚

```bash
node .workspace/scripts/Antigravity-nanobana/generate-image.js "<英語または日本語の画像指示>" "<出力パス>"
```

例:

```bash
node .workspace/scripts/Antigravity-nanobana/generate-image.js "Flat illustration of Hamana Lake at dusk, fishing pier, 16:9" "src/content/blog/guide/method/example/cover.png"
```

`<出力パス>` は記事フォルダ内を推奨。親ディレクトリは自動作成される。

## 執筆中のプロンプトメモ

本文にコメントで残す形式（生成前の設計用）:

```mdx
{/* Image Prompt (cover): 図鑑風、右60%にクロダイ、左40%はテキスト用余白、16:9 */}
```

ユーザー指示後、上記を `generate-cover.js` または `generate-image.js` に反映する。

## 失敗時

- `.env` 未設定 → `Warning: .env file not found` / API エラー
- キー無効 → レスポンス JSON を確認
- 画像データなし → プロンプトを短くし、SITE_CONTEXT 付きで再試行

## やってはいけないこと

- 推測で `public/` 直下に無関係なファイルを大量生成
- 記事と無関係なストック画像の流用（ブランド一貫性）
- API キーを SKILL・MDX・git に書く
