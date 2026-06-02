---
name: cho-hamanako-data-set
description: Accesses Cho! Hamanako .workspace/.data-set via .index/manifest.json for BlogCard slugs, TackleCard IDs, point infrastructure JSON, fish biology, and point matrices. Use at the start of article creation or rewrite before reading full datasets.
---

# Cho! Hamanako — データセット参照

**正本**: `.agents/data-set-access/SKILL.md`

## 毎回の入口（1ファイル）

```
.workspace/.data-set/.index/manifest.json
```

`lookup_by_task` で次に開くパスを決め、**1〜3ファイルだけ**読む。

## よく使うパス

| 目的 | パス |
|------|------|
| BlogCard slug | `.workspace/.data-set/.index/blog-card-index.md` |
| TackleCard id | `.workspace/.data-set/.index/tackle-card-list.md` |
| ポイント設備・GPS | `.workspace/.data-set/.index/infrastructure-master.json` |
| 釣り方×ポイント | `.workspace/.data-set/point-matrix.md` |
| 魚種リサーチ | `.workspace/.data-set/.index/biological/*.md` |
| 記事横断検索 | `.workspace/.data-set/llms.json` |

## ルール

- slug / id は **推測禁止**（インデックス or `src/content` で確認）
- 矛盾時は **本番 MDX / YAML 優先**

## 併用

- `cho-hamanako-article-creation` / `cho-hamanako-article-rewrite`
