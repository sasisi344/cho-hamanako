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

## 1. カバー画像（サムネイル）

**入力**: 記事 MDX のパス（＋任意で記事に合わせたシーン指示）
**出力**: 同ディレクトリの `cover.jpg`（クリックされる構図のイラスト 16:9。**テキスト用の余白は作らず、画面全体を使う**）

記事の内容に合わせたシーン指示の作り方は [cho-hamanako-thumbnail-prompt](../cho-hamanako-thumbnail-prompt/SKILL.md) を参照。

```bash
cd c:/Users/sasis/344dev/cho-hamanako

# プロンプトの確認だけ（API は呼ばない）
node .workspace/scripts/Antigravity-nanobana/generate-cover.js "src/content/blog/points/naka/gardenpark/index.mdx" --dry-run

# 記事に合わせたシーン指示つきで生成（ユーザーが生成を明示したときのみ）
node .workspace/scripts/Antigravity-nanobana/generate-cover.js "<index.mdx>" --scene-file "<scene.txt>"
```

オプション: `--scene "<英語>"` / `--scene-file <path>`（記事固有のシーン指示）、`--style illust|photo|poster`（画風プリセット、既定 illust）、`--out <path>`（出力先変更）、`--dry-run`（プロンプト表示のみ）。

共通で適用されるデザイン方針（スクリプト内 `THUMBNAIL_STYLE` / `THUMBNAIL_COMPOSITION`）: 主役1つで画面の50〜65%、動きのある構図、補色コントラスト、中央80%に要素を収める、文字・ロゴなし。

`--scene` 省略時はフロントマター（`title` / `category` / `tags` / `fishinginfo.targetFish・methods・bestSeason` / `location.name`）と記事タイプ（料理・ポイント・魚種・季節・手法など）から簡易シーンを自動生成する。`bestSeason` が1〜2季節の記事のみ季節ライティングが付く。

実行後、MDX の `cover: ./cover.jpg` を確認（既存が `cover.png` ならファイル名を揃える）。

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
{/* Image Prompt (cover): 主役=クロダイが跳ねる、夕焼け、補色コントラスト、16:9 */}
```

ユーザー指示後、`cho-hamanako-thumbnail-prompt` の手順でシーン指示にして `generate-cover.js` に渡す（`generate-image.js` は任意の1枚用）。

## 失敗時

- `.env` 未設定 → `Warning: .env file not found` / API エラー
- キー無効 → レスポンス JSON を確認
- 画像データなし → プロンプトを短くし、SITE_CONTEXT 付きで再試行

## やってはいけないこと

- 推測で `public/` 直下に無関係なファイルを大量生成
- 記事と無関係なストック画像の流用（ブランド一貫性）
- API キーを SKILL・MDX・git に書く
