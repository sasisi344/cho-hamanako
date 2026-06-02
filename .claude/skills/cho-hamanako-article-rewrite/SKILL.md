---
name: cho-hamanako-article-rewrite
description: Rewrites Cho! Hamanako MDX articles with forAI integration, tone matching from existing posts, 2000+ char depth for normal articles, and point-comparison matrix for multi-spot content. Use when the user asks to rewrite, update, thicken, or refresh an article.
---

# Cho! Hamanako — 記事リライト

**正本**: `.agents/article-rewrite/SKILL.md`（手順の全文）

## クイックフロー

1. `cho-hamanako-data-set` → `manifest.json` で参照ファイルを決める
2. 対象 MDX + **同カテゴリの良記事1本**を読み、温度を合わせる
3. `> [!forAI]` を論点化
3. 深度: 通常 **2,000字+** / ポイントピラー **3,000字+** → `.agents/base-article-structure/SKILL.md`
4. points まとめ・複数紹介 → **マトリクス必須** → `.agents/point-article/point-comparison-matrix.md`
5. Phase 1 診断 → 構成案 → 執筆 → forAI 削除・`upDate` 更新

## 温度の基準記事（例）

| タイプ | 参照 |
|--------|------|
| ポイント単体 | `src/content/blog/points/naka/gardenpark/index.mdx` |
| ポイントまとめ | `src/content/blog/points/family-car-points/index.mdx` |
| guide/method | `src/content/blog/guide/method/ajing-guide/index.mdx` |

## 併用 SKILL

- `cho-hamanako-base-structure` — モジュール M0〜M9
- `cho-hamanako-writing-voice` — 一人称・読者レベル
- `cho-hamanako-workspace-tasks` — `task.md` バックログ
