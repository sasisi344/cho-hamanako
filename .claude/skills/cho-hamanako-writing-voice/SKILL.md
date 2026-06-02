---
name: cho-hamanako-writing-voice
description: Sets reader level, tone, depth, and word-count targets for Cho! Hamanako articles. Use when writing or rewriting prose, choosing beginner vs expert voice, or matching article temperature to point, guide, season, or fukabori types.
---

# Cho! Hamanako — ライティングの温度と深度

**正本**: `.agents/writing-style/SKILL.md`  
本 SKILL は執筆前の**判断フレーム**のみ。細部・Markdown 規約は正本に従う。

## 語り手（固定）

- 一人称: **私** または **私（さしし）**
- 調子: です・ます。情報の羅列ではなく **現場経験** の重み
- 視点: 初心者の頃の自分に教える温かさ + 上級者も唸るリアル

## 手順: 深度を決めてから書く

1. **主な読者**を1つ選ぶ（下表）
2. **記事タイプ**に対応する `.agents/*-article/SKILL.md` を開く
3. タイプ別の **最低文字数・セクション比率** があればそちらを優先

## 読者レベル → 温度

| 読者 | 用語 | 説明の重心 | 距離感 |
|------|------|------------|--------|
| **初級** | 専門語は極力回避。必要なら括弧で言い換え | 手順・見分け・「まずこれだけ」 | 伴走。上から目線にしない |
| **中級** | 用語OK。初出で一言定義 | コツと**理由**（なぜそうするか） | 隣で話すベテラン |
| **上級・分析** | 用語を積極使用。定義は短く | 観察→仮説→根拠→結論。水域固有の整理 | 密度高め。地元の身体知で冷たくしない |

## カテゴリ別の温度・深度（目安）

| タイプ | 典型読者 | 文字数目安 | 体温・構成の要点 |
|--------|----------|------------|------------------|
| **通常**（guide / season / travel / theory） | 初級〜中級 | **2,000+ 必須**、理想 2,500〜3,500 | 結・論・解・結。`.agents/base-article-structure/SKILL.md` |
| **points**（ピラー） | 中級〜 | **3,000〜5,000+** | 再現性のある現場描写。マトリクスで近隣と差別化 |
| **fukabori** | 上級・分析 | タイプ SKILL 優先 | 因果・データ。序論→観測→考察 |
| **points まとめ** | 検索意図で可変 | 2,000+ 全体 | マトリクスでグルーピング。子記事へ回遊 → `point-comparison-matrix.md` |

**温度**: リライト・新規とも、同カテゴリの完成記事（gardenpark / family-car-points / ajing-guide 等）を1本参照。詳細は `cho-hamanako-base-structure`。

## 「体温」を入れる箇所

- **冒頭**: 最近の釣行の一言 + 読者へのメッセージ
- **結び**: 行動・マナー・次に読む記事への橋
- **専門パート**: 読者レベルに合わせた用語密度（初級では言い換え）

## 現場至上主義

- 「場所による」だけで終わらせない → 潮・杭・時期など **再現可能な条件**
- 読後に **明日現場で何をするか** が分かる密度（H2 あたり 300〜500 字の塊を意識）

## 本番 Markdown（再掲・厳守）

- `<strong>` のみ（`**` 禁止）
- 1文1段落
- 日本語と英数字の間にスペースを入れない
- `> [!forAI]`: リライト用メモ。`draft: false` 前に**必ず削除**

## 記事作成との連携

執筆開始時は `cho-hamanako-article-creation` SKILL と併用し、タイプ別 SKILL を必ず1つ読む。
