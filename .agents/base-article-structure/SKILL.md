---
name: base-article-structure
description: Defines modular MDX article skeletons, flexible depth tiers, and minimum word counts for Cho! Hamanako. Use when planning, writing, or rewriting any blog post before applying category-specific SKILLs.
---

# 基本記事構成（モジュール型）

## 使い方

1. **データ**: [data-set-access/SKILL.md](../data-set-access/SKILL.md) → `.workspace/.data-set/.index/manifest.json`
2. **記事タイプ**を決める（points / guide / season / travel / まとめ 等）
3. 下の **深度ティア** で目標文字数を選ぶ（タイプ別 SKILL が上書きする場合はそちら優先）
4. **モジュール**を組み合わせて H2 構成案を作る（全部入りにしない）
5. 文体・温度は [writing-style/SKILL.md](../writing-style/SKILL.md) と **対象記事の既存本文**を参照

## 深度ティア（柔軟設定）

| ティア | 本文目安（日本語） | 向く記事 | 備考 |
|--------|-------------------|----------|------|
| **A 通常** | **2,000字以上**（必須下限） | guide・season・travel・target 残存記事 | 2,000未満はリライト対象。理想は 2,500〜3,500 |
| **B 充実** | 3,000字以上 | 月次レポート実践パート、旅行ハブ | writing-style のサイト理想に近い |
| **C ピラー** | 3,000〜5,000+ | `category: points` の単一ポイント記事 | [point-article/SKILL.md](../point-article/SKILL.md) 優先 |
| **D ハブ・まとめ** | 2,000〜3,500 | 複数ポイント紹介・ターミナル | 子記事へ回遊。各ポイントは短く差別化 |

**カウント**: フロントマター・import・コンポーネント行・空行は除き、読者に見える本文テキストで概算する。

## 温度の取り方（現行記事準拠）

新規でもリライトでも、**同カテゴリの完成記事 1〜2本**を開き、以下を揃える。

| 要素 | ポイント単体（例: gardenpark） | ポイントまとめ（例: family-car-points） | ガイド・釣法（例: ajing-guide） |
|------|-------------------------------|----------------------------------------|--------------------------------|
| 冒頭 | 「釣！浜名湖」へようこそ + ポイントの核心 | 読者の悩み（家族・車等）→ 選定基準 | 結論・流行・浜名湖固有の一言 |
| 一人称 | 私（さしし）／私たち | 私（さしし） | 私 or 本記事では（既存に合わせる） |
| 語尾 | です・ます。「〜してみてください」可 | 短い段落 + 各H2が1ポイント | 断言 + 理由。季節は H3 分割 |
| 強調 | `<strong>` のみ、KW・地名 | 選定理由・差別化ワード | 技法名・シーズン名 |
| 段落 | **1文1段落**（空行必須） | 1ポイントあたり 3〜6文 + BlogCard | H2 下は 300字前後の塊 |
| 体温 | 最近の釣行・現場の一言 | まとめで行動喚起 | まとめでマナー・次の一手 |

**原則**: リライト時は **既存記事の温度を壊さない**。薄いだけなら構成と深度を足す。トーンだけ古い場合は、上表の同カテゴリ記事に寄せつつ、一人称・forAI の一次情報を優先する。

## 共通モジュール（H2 ブロック）

必要なものだけ採用する。順序はタイプ別 SKILL で調整可。

| ID | モジュール名 | 役割 | 目安文字数 |
|----|-------------|------|------------|
| M0 | リード（H2なし） | 検索意図への即答・歓迎 | 150〜350 |
| M1 | 結論・答え（H2） | SXO：最初に答え | 200〜400 |
| M2 | 前提・定義 | 用語・浜名湖限定の注意 | 200〜500 |
| M3 | 核心解説 | 理由・地形・時期 | 400〜800 × n |
| M4 | 実践・手順 | 再現可能なアクション | 400〜800 |
| M5 | 道具・タックル | TackleCard（guide 等） | 各カード前後に文 |
| M6 | エリア・ポイント | BlogCard / Map | 差別化文 + カード |
| M7 | 安全・マナー | 毒魚・禁止・騒音 | 200〜400 |
| M8 | まとめ | Callout TIP + IMPORTANT | 200〜400 |
| M9 | 回遊 | 同エリア BlogCard 5本等 | 短い導線文のみ |

## タイプ別：推奨モジュールの組み合わせ

### 通常記事（guide / season / travel / theory）— ティア A 以上

```
M0 → M1（結論）→ M3（核心）×2〜4 → M4 → [M5] → M7 → M8 → [M9]
```

- guide/method: [guide-article/SKILL.md](../guide-article/SKILL.md) の「結・論・解・結」
- 各 H2 に **最低1段落（300字前後）**。H2だけで終わらせない

### ポイント単体（points ピラー）— ティア C

```
M0 + Map/GMapButton
→ ポイント概要と詳細アクセス（M2+M4）
→ 水中構造（M3）
→ メインターゲットと季節の戦法（M3+M4）
→ 安全・注意（M7）
→ まとめ（M8）
→ 同じエリアの釣りスポット（M9）
```

詳細: [point-article/SKILL.md](../point-article/SKILL.md)、テンプレ: `.workspace/.data-set/point-article-template.md`

### ポイントまとめ・複数紹介 — ティア D + マトリクス必須

```
M0（選定基準を明示）
→ [スタイル別 H2] × 各ポイント H3 or H2
  └ 各ブロック: 差別化2〜4文 + BlogCard のみ（駐車場の全複写はしない）
→ M8 + M9
```

**必須**: 執筆前に [point-comparison-matrix.md](../point-article/point-comparison-matrix.md) で類似ポイントを整理する。

## フロントマター（共通最小）

```yaml
title: ""
summary: ""   # 70〜120字・KW含む
pubDate:
upDate:
category:
tags: []      # 3〜5
draft: false
slug:
```

ポイントは `location` / `fishinginfo` / `facilities` / `cover` を [point-article/SKILL.md](../point-article/SKILL.md) に従いフル設定。

## 公開前チェック

- [ ] 深度ティアの下限を満たす
- [ ] 1文1段落、`<strong>` のみ
- [ ] 各 H2 に実質コンテンツ（見出しだけ不可）
- [ ] BlogCard / TackleCard 実在確認
- [ ] `> [!forAI]` 削除（リライト時は内容を本文へ反映済み）

## 関連

- リライト手順: [article-rewrite/SKILL.md](../article-rewrite/SKILL.md)
- 執筆スタイル: [writing-style/SKILL.md](../writing-style/SKILL.md)
- ポイントマトリクス: [point-article/point-comparison-matrix.md](../point-article/point-comparison-matrix.md)
