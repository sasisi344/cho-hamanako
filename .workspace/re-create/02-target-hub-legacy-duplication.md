# target/* 旧サブ記事の重複コンテンツ問題（2026-09-19 方針変更によりクローズ）

> **クローズ理由**: 2026-09-19 確認の結果、62本のほぼ全件に内部リンク（BlogCard）が存在しており「孤立」という前提が崩れた。beginner/tactics/season系はクラスター構造のサブ記事として機能中のため維持。cooking系は「釣れる場所×調理」軸でのリライト・タイトル最適化を別途実施（rewrite-trackerで管理）。`target/kisu`（0refs）のみ今後のGSC確認後に要検討。

---

# （元ドキュメント）target/* 旧サブ記事の重複コンテンツ問題

**背景**: 2026-09-04完了の「魚種別教科書記事プロジェクト」（`.workspace/.task/archive/target-textbook-archive-index.md`）で、13魚種すべてについて `target/{fish}/index.mdx` を書籍レベルの統合記事として作成した。しかし統合前の個別記事（beginner・cooking・tactics・season/* など）が**削除されずファイルとして残存**しており、`src/pages/blog/[...slug].astro` のルーティング上 `/blog/target/{fish}/{sub}/` として今も公開され続けている。

## 確認した事実

- 該当62本は直近30日のGSC「ページ」レポートに1件も現れない（表示回数0）＝実質誰にも見られていない
- `src/content/blog/` 内でこれら62本を `BlogCard slug="..."` で参照している箇所は0件（内部リンクからも完全に孤立）
- 唯一の例外として `target/mebaru-kasago/winter-kasago` は内部リンクあり・GSCにも表示あり → これは削除対象ではない（季節特化の独立記事として機能している可能性）

## 対象62本（魚種別）

| 魚種 | 旧サブ記事 | 統合先（正本） |
|---|---|---|
| アジ・サバ・サッパ | beginner, cooking, sabiki-guide, tactics | `target/aji-saba-sappa/index.mdx` |
| エギング | aori-guide, beginner, cooking, tactics | `target/eging/index.mdx` |
| ヒラメ・マゴチ | beginner, cooking, tactics | `target/flatfish/index.mdx` |
| ハゼ | beginner, cooking, tactics, season/november-ochihaze | `target/haze/index.mdx` |
| カレイ | beginner, cooking, tactics, season/spring-hanami-karei | `target/karei/index.mdx` |
| カワハギ | beginner, boat-guide, cooking, tactics | `target/kawahagi/index.mdx` |
| キビレ | （index自体もヒットなし）, beginner, cooking, tactics | `target/kibire/index.mdx` |
| キス | （index自体もヒットなし）, beginner, cooking, season/may-fishing-top5, tactics | `target/kisu/index.mdx` |
| クロダイ | beginner, boke-bait-tackle, cooking, season/spring-nokkomi-guide, season/winter-tactics, tactics | `target/kurodai/index.mdx` |
| メバル・カサゴ | beginner, cooking, kasago-guide, tactics | `target/mebaru-kasago/index.mdx` |
| メジナ | beginner, cooking, tactics | `target/mejina/index.mdx` |
| サヨリ | boat-guide, cooking, season/april-guide, season/large-sayori-guide, tactics/uragake-gear | `target/sayori/index.mdx` |
| シーバス | bachinuke-lures, bachinuke-prep, bachinuke-spots-yore, beginner, cooking, season/winter-lunker, tactics | `target/seabass/index.mdx` |
| タコ | beginner, cooking, guide-2025, season/early-summer, tactics | `target/tako/index.mdx` |

※完全なslugリストは `data/zero-impression-slugs.txt` の `target/` プレフィックス行を参照。

## 注意点（要検証してから着手）

1. **`target/kisu` と `target/kibire` はindex自体もGSC非表示**。正本記事そのものがまだ十分にインデックスされていない可能性があるため、旧サブ記事の削除より先に正本記事のインデックス状況（Search Consoleでの直接確認）を見ること
2. アフィリエイトリンク（TackleCard）が旧サブ記事側にのみ存在する場合、削除前に正本記事側への移植が必要
3. 画像（cover.jpg等）や個別のURLが外部サイトから被リンクされていないか、可能な範囲で確認する

## 推奨アクション（rewrite-trackerで管理）

魚種ごとに以下の3択で判断する:

- **A. 単純削除＋301リダイレクト**（正本に情報が完全に統合済みで独自価値なしと判断できる場合）
- **B. 差分吸収してから削除**（旧記事にしかない一次情報・実績データがある場合、正本に統合してから削除）
- **C. 保留**（`target/mebaru-kasago/winter-kasago` のように独立した季節特化記事として価値がある場合はそのまま残す）

判断はユーザー確認の上で実施する（一括自動削除はしない）。
