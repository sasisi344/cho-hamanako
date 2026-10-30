# 釣！浜名湖 — 画像のトーンとキャラクター性

作成: 2026-10-30（CC。既存のスクリプト・スキルの方針をまとめた案。ユーザー確認待ちの項目は §6）。画像の流れは `C:\Users\sasis\344dev\hq\org\README.md` §4。

## 1. 絵の人格（キャラクター性）

**浜名湖で20年超釣ってきた地元の釣り人が、現場で見せてくれる景色。**

- 臨場感と活気。「今週末行きたくなる」ワクワクを優先する
- 主役は魚・釣り場・料理。季節と時間帯（朝マズメ・夕マズメ・夜釣り）の光で空気を伝える
- 浜名湖（汽水・海釣り）以外の景色（淡水・山岳・外国の港）を描かない

## 2. トーン

| 項目 | 指定 |
|---|---|
| スタイル | 鮮やかなデジタルイラスト（`generate-cover.js` の既定 `illust`）。彩度高め、明暗のコントラスト強め、輪郭はっきり |
| 色 | 主役と背景を補色で分ける（暖色のアクセント × 青・青緑の水） |
| 避ける | くすんだ色、暗く沈んだ画面、ストックフォト風、文字入り画像 |

## 3. 種類ごとの仕様

| 種類 | 仕様の正本 | 要点 |
|---|---|---|
| サムネイル（cover） | `.claude/skills/cho-hamanako-thumbnail-prompt/SKILL.md` | 16:9、文字なし、主役は1つ、重要要素は中央80%、記事本文・データセットにある釣り場の特徴だけを描く |
| 説明画像（仕掛け図・ポイントの位置関係・時期の早見など） | このファイル | 下の型。数値・位置は本文と `.workspace/.data-set` で確認済みのものだけ |

説明画像の型: 白〜淡い水色の背景のすっきりした図解。サムネイルほど派手にしない（情報が主役）。画像内の文字は日本語で最小限（ラベル程度）。1記事3枚まで。

## 4. プロンプトの型（英語）

- サムネイル: スキルの手順でシーン指示を作り、`generate-cover.js --scene` に渡す（スタイル・季節の光はスクリプトが前置する）
- 説明画像: `Clean explanatory diagram for a Japanese saltwater fishing blog about Lake Hamana. Subject: <何を>. Layout: <構図>. Style: simple flat illustration, light background, clear labels in Japanese only where listed: <文言>. No photorealism, no decorative clutter.`

## 5. 生成（サムネイルの段階だけ）

`.claude/skills/cho-hamanako-image-generation/SKILL.md` の手順。`generate-cover.js`（カバー）と `generate-image.js`（説明画像）。保存先は記事と同じフォルダ。先に `--dry-run` でプロンプトを確かめる。

## 6. 未決（ユーザー確認）

- マスコット・案内役のキャラクターを置くか（現在なし）
