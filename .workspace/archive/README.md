# 下書き・アウトラインのアーカイブ

整理日：2026-11-12

今回制作した冬の浜名湖旅行記事の下書き・アウトラインと、その共通資料を保管しています。

フォルダ名は人間が記事を識別できる名称にし、元ファイル名は作成日と制作段階を追えるよう維持しました。

## 記事・企画と本番の対応

| ID | 保管フォルダ | 状態 | 本番記事 |
|---|---|---|---|
| A | [2026-11-牡蠣小屋と冬の釣り旅](2026-11-牡蠣小屋と冬の釣り旅/) | 本番移行済み | [牡蠣小屋と冬の釣り旅](../../src/content/blog/travel/hamanako-winter-fishing-oyster-trip/index.mdx) |
| B | [2026-11-牡蠣カバ丼と冬の写真旅](2026-11-牡蠣カバ丼と冬の写真旅/) | 本番移行済み | [牡蠣カバ丼と冬の写真旅](../../src/content/blog/travel/hamanako-kabakadon-photo-trip/index.mdx) |
| 共通 | [2026-11-冬の浜名湖旅行の共通資料](2026-11-冬の浜名湖旅行の共通資料/) | 企画・投稿選定の履歴 | A・B・Cで共用 |
| C | [2026-11-自然で休む浜名湖旅](2026-11-自然で休む浜名湖旅/) | 本番移行済み | [冬の浜名湖へ誘う記事](../../src/content/blog/travel/hamanako-nature-rest-trip/index.mdx) |

「本番移行済み」はリポジトリ内の本番記事への反映を示します。

外部サイトの公開状態や、現在の店舗営業を示すものではありません。

## 保管ファイル一覧

| ID | 制作段階 | ファイル |
|---|---|---|
| A | アウトライン | [2026-11-11-oyster-hut-fishing-outline.md](2026-11-牡蠣小屋と冬の釣り旅/2026-11-11-oyster-hut-fishing-outline.md) |
| A | 本文下書き・文体調整稿 | [2026-11-12-oyster-hut-fishing-draft.md](2026-11-牡蠣小屋と冬の釣り旅/2026-11-12-oyster-hut-fishing-draft.md) |
| B | アウトライン | [2026-11-11-kabakadon-photo-trip-outline.md](2026-11-牡蠣カバ丼と冬の写真旅/2026-11-11-kabakadon-photo-trip-outline.md) |
| B | 本文下書き・行程調整稿 | [2026-11-12-kabakadon-photo-trip-draft.md](2026-11-牡蠣カバ丼と冬の写真旅/2026-11-12-kabakadon-photo-trip-draft.md) |
| 共通 | 記事候補・役割分担 | [2026-11-11-winter-trip-outlines.md](2026-11-冬の浜名湖旅行の共通資料/2026-11-11-winter-trip-outlines.md) |
| 共通 | Instagram投稿候補・採否メモ | [2026-11-11-instagram-post-candidates.md](2026-11-冬の浜名湖旅行の共通資料/2026-11-11-instagram-post-candidates.md) |
| C | 初期アウトライン（作成時は保留案） | [2026-11-11-nature-rest-trip-outline.md](2026-11-自然で休む浜名湖旅/2026-11-11-nature-rest-trip-outline.md) |
| C | 本文下書き・2視点の調整稿 | [2026-11-12-nature-rest-trip-draft.md](2026-11-自然で休む浜名湖旅/2026-11-12-nature-rest-trip-draft.md) |

Cは2026-11-12に独立記事の未作成を確認した後、本文下書きを2視点へ調整し、本番移行まで完了しました。

フォルダ名を「2026-11-自然で休む浜名湖旅」へ変更し、初期アウトラインと本文下書きを一緒に保管しています。

## AI向けの参照方法

- 現在の本文・slug・店舗選定・埋め込みの採用結果は、上表の本番MDXを正本として確認する。
- このフォルダの資料は制作当時の検討履歴。本文中に「未実施」「候補」「未確認」とあっても、現在の制作状況は本READMEの状態欄と本番記事で確認する。
- Instagram候補集の「採用」は選定時の判断を含む。本番に埋め込まれている投稿は本番MDXで確認し、不採用の候補を自動で復活させない。
- 営業日・価格・提供時期などは資料の確認日当時の情報。新しい記事へ使うときは一次情報を再確認する。
- Cの本番slugは`travel/hamanako-nature-rest-trip`。釣り好きな人を誘う視点と、未経験の人を誘う視点の両方を扱う。
- 旧パスを受け取ったときは[index.json](index.json)の`moves`と`relocations`を参照する。`from`・`to`・`production`のパスは、すべてリポジトリルートからの相対パス。
- `index.json`の`groups`に記事・企画の状態と本番記事、`moves`に旧新パスと移動前後のハッシュ、`link_updates`に移動に伴う相対リンク修正対象を記録している。

## 関連資料の入口

調査・報告書は元の保管場所に残し、ここから参照します。

- [冬の来訪を増やすブレスト](../_inbox/2026-11-11-winter-outing-market-brainstorm.md)
- [自然で休む旅の構想](../_inbox/2026-11-11-hamamatsu-nature-rest-trip-concept.md)
- [Web類似調査・既存記事との照合](../_inbox/2026-11-11-winter-trip-web-research.md)
- [牡蠣小屋記事のリライト計画](../_inbox/2026-11-11-oyster-trip-rewrite-plan.md)
- [キャッチコピーと記事の目的](../_inbox/2026-11-11-winter-trip-copy-and-purpose.md)
- [旅行記事の文体調整フォーマット](../codex/reports/2026-11-12-TRAVEL-VOICE-FORMAT.md)
- [A：牡蠣小屋記事の本番移行・ビルド報告](../codex/reports/2026-11-12-OYSTER-HUT-MOVE.md)
- [B：牡蠣カバ丼記事の完成・ビルド報告](../codex/reports/2026-11-12-KABAKADON-FINAL.md)
- [B：画像プロンプト削除・commit・pushの報告](../codex/reports/2026-11-12-KABAKADON-PUSH.md)
- [C：自然で休む旅の本番移行・画像・ビルド報告](../codex/reports/2026-11-12-NATURE-REST-FINAL.md)
- [今回の整理作業の報告](../codex/reports/2026-11-12-WINTER-TRIP-ARCHIVE.md)

_draftに残っている別件の資料は今回の移動対象に含めていません。
