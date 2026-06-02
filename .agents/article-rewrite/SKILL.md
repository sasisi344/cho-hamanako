---
name: article-rewrite
description: Rewrites existing Cho! Hamanako MDX articles using forAI notes, live article tone matching, flexible depth from base-article-structure, and point-comparison matrix for multi-spot posts. Use when the user asks to rewrite, thicken, update, or refresh blog content.
---

# 記事リライト

## 目的

- 薄い・古い記事を **深度ティア** に合わせて厚くする
- **`> [!forAI]`** の一次情報（さししの意見）を本文へ統合する
- **既存記事の温度**を維持しつつ、構成を [base-article-structure/SKILL.md](../base-article-structure/SKILL.md) で整える
- ポイント系は **類似ポイントのマトリクス**で差別化と内部リンクを設計する

## 着手前（必須）

| 順 | 作業 | 参照 |
|----|------|------|
| 1 | **data-set 入口** | [data-set-access/SKILL.md](../data-set-access/SKILL.md) → `.workspace/.data-set/.index/manifest.json` |
| 2 | 対象 `index.mdx` を全文読む | `src/content/blog/...` |
| 3 | manifest に従い必要な data-set のみ開く | 最大3ファイル（blog-card / infrastructure / biological 等） |
| 4 | 同 `category` の良記事 1本を読み、温度の基準にする | 例: `gardenpark` / `family-car-points` / `ajing-guide` |
| 5 | `> [!forAI]` があれば論点リスト化 | [writing-style/SKILL.md](../writing-style/SKILL.md) |
| 6 | 深度ティア・タイプ別 SKILL | [base-article-structure/SKILL.md](../base-article-structure/SKILL.md)、`*-article/SKILL.md` |
| 7 | points まとめ・複数紹介なら **マトリクス** | [point-comparison-matrix.md](../point-article/point-comparison-matrix.md) + `point-matrix.md` |

タスク文脈: `.workspace/.task/task.md`、専用バックログ（`method-guide-rewrite-task.md` 等）

## リライト手順

### Phase 1 — 診断（書き換えない）

出力（思考または短いメモ）に含める:

1. **現状文字数**（本文のみ概算）と **目標ティア**
2. **欠けているモジュール**（M1 結論、M7 安全、M9 回遊 等）
3. **温度**: 冒頭パターン・語尾・段落長が基準記事とずれていないか
4. **事実**: 店名・料金・座標が `.data-set` / 他記事と矛盾していないか
5. **リンク**: 壊れ・捏造 slug の有無

### Phase 2 — 構成案

- 既存 H2 は **活かす**（URL・アンカー・SEO を考慮）。不足モジュールだけ追加
- タイトル・`summary`・**最初の H2** を検索意図で一本化（GSC タスク時）
- ポイントまとめ: マトリクスでグルーピングした **H2 案**を先に示す（ユーザー承認があればそれに従う）

### Phase 3 — 執筆

- [writing-style/SKILL.md](../writing-style/SKILL.md): 私（さしし）、1文1段落、`<strong>`
- forAI の各項目 → 該当 H2・Callout へ分散（一箇所に詰め込まない）
- **追記優先**: 既存の良い段落は削らず、理由・現場・季節・マナーを足す
- 内部リンク追加時は `manifest.json` → `blog-card-index.md` で slug 確認

### Phase 4 — 仕上げ

- [ ] 深度下限（通常 **2,000+**、points ピラー **3,000+**）
- [ ] `upDate` を更新
- [ ] `> [!forAI]` **全削除**
- [ ] `draft: false` なら forAI 残存なし
- [ ] 同エリア BlogCard（ポイントピラーは末尾5本目安）

画像: ユーザー明示時のみ `.claude/skills/cho-hamanako-image-generation`

## 深度の上げ方（2,000字未満の通常記事）

優先順:

1. **最初の H2** に結論段落を足す（M1）
2. 薄い H2 それぞれに **「なぜ浜名湖では」** を1段落
3. 季節・潮・風など **条件の切り口**を H3 で1つ追加
4. まとめ + マナー（M7/M8）
5. 実在する関連記事へ BlogCard（M9）

水増し禁止: 同義反復・一般論のコピペは足さない。

## ポイント記事リライトの追加ルール

### 単一ポイント（ピラー）

- [point-article/SKILL.md](../point-article/SKILL.md) の標準 H2 を満たす
- 「概要とアクセス」「季節の戦法」に **600〜1000字級**の塊を意識
- マトリクス: **同エリア・同スタイル**の近隣ポイントと比較表をメモし、**このポイントだけの強み**を本文に反映

### 複数ポイント紹介・まとめ

1. [point-comparison-matrix.md](../point-article/point-comparison-matrix.md) で候補抽出・グルーピング
2. 各ポイント: **選定理由・魚×月×スタイルの適合**のみ（駐車場の全文転載は子記事へ）
3. 各 H2 直下に `<BlogCard slug="frontmatterのslug" />`（パス推測禁止）
4. [summary-article-process.md](../summary-article-process.md) の 3D（魚種×時期×スタイル）を踏襲

## forAI の扱い

```markdown
> [!forAI]
> - 精算機は入口左
> - 春はミオ筋寄りが効く
```

→ 駐車 H3 / 春 H3 / Callout に分割統合。音声1行メモも同様。

## 依頼例

> `guide/theory/wind-direction-fish` をリライト。forAI あり。通常記事で2000字以上。理論は上級寄りだが結びはマナー。

エージェントは Phase 1 診断 → 構成差分 → 執筆 → Phase 4 チェックの順で実行。

## 関連

- 基本構成: [base-article-structure/SKILL.md](../base-article-structure/SKILL.md)
- 新規作成: [.agents/workflows/article-creation-workflow.md](../workflows/article-creation-workflow.md)
- Claude Code 入口: `.claude/skills/cho-hamanako-article-rewrite`
