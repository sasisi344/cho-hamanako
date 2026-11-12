# OYSTER-HUT-MOVE 牡蠣小屋と冬の釣り旅 カテゴリ移動・ビルド確認 報告

- 指示書：ユーザー直接依頼「完了にする。カテゴリに記事を移動してビルド確認」。IDは報告用の仮ID。
- 状態：完了。
- 本番記事：[旅行カテゴリの記事](../../../src/content/blog/travel/hamanako-winter-fishing-oyster-trip/index.mdx)

## やったこと

- 承認済みの`.workspace/_draft/2026-11-12-oyster-hut-fishing-final/index.mdx`と`cover.jpg`を、`src/content/blog/travel/hamanako-winter-fishing-oyster-trip/`へ移動し、既存記事を置き換えた。
- 本文・フロントマター・カバーは承認済み完成稿のまま。categoryはtravel、既存slugと初回公開日を維持。移動前後のSHA-256一致を確認。
- 空になった完成稿フォルダを削除。元の本文下書き、アウトライン、調査資料は保持した。
- 以前作成した専用プレビューのimport先3箇所を、移動後の本番記事へ修正。サイトの設定・ルール・管理タスク・ほかの本番記事は未変更。コミット・push・ブランチ操作なし。

## 確認

- サイトCLAUDE.md、記事作成・リライト・カテゴリ・完成ワークフロー、データセット入口、共通実行ルール・筆者プロフィールを確認。
- PowerShellで移動元と移動先の絶対パスがワークスペース内であることを確認し、`Move-Item -LiteralPath`で移動した。
- BlogCard4件のslugと参照先MDX、TackleCard2件のYAMLを確認。編集メモ・forAI・下書き用相対リンクが本番本文にないことを確認。
- `node scripts/check-tackle-ids.mjs`：成功（affiliates238件）。
- `$env:ASTRO_TELEMETRY_DISABLED=1; node node_modules/astro/astro.js build`：**終了コード0、294ページ、49.85秒で成功。** 今回は専用プレビュー設定を使わず、通常の本番設定で実行した。
- 生成HTMLで本文H2が7件、表4件、Instagram iframe2件、関連記事へのリンク4件、アフィリエイトリンク2件を確認。調整した日本語本文が出力され、編集メモがないことを確認。
- canonicalは`https://cho-hamanako.info/blog/travel/hamanako-winter-fishing-oyster-trip/`。noindexなし。以前の専用プレビュールートは本番出力に含まれていない。
- `git diff --name-only`の本番差分は対象記事のMDX1件のみ。カバーは従来と同じ画像のため内容差分なし。
- [ビルドログ](2026-11-12-OYSTER-HUT-MOVE-build.log)／[検証結果](2026-11-12-OYSTER-HUT-MOVE-validation.json)。
- 今回は承認済み完成稿の移動のみで、事実の追加・Web再調査はなし。出典と確認日は完成稿および[前段報告](2026-11-12-OYSTER-HUT-FINAL.md)の2026-11-12の記録を引き継ぐ。

## 画像

- `cover.jpg`を記事と一緒に移動。新規生成・内容変更なし。
- Instagram2件のiframeと元投稿へのリンクは完成稿のまま保持。外部投稿のブラウザー上の操作確認は今回追加していない。

## 止めた箇所（CCの判断が要るもの）

- なし。カテゴリ移動とビルド確認まで完了。デプロイは実施していない。

## 改善提案

- なし。
