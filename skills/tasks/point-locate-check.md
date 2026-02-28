# 表浜名湖エリア 記事位置・MAPリンク修正 TODO

表浜名湖エリアの各記事におけるフロントマターの `location` (lat, lng, googleMapUrl) の修正、および本文内の `<Map />`, `<GMapButton />` コンポーネントへの移行作業進捗状況です。

## 作業済みリスト

- [x] **網干場（舞阪港）**
  - 位置: 34.686523, 137.605481
  - リンク: https://maps.app.goo.gl/9yGgqP23p8n53GvH6
- [x] **新居弁天海釣公園**
  - 位置: 34.680210058567154, 137.5958742880753
  - リンク: https://maps.app.goo.gl/H5uS7rWjT9mK3vW87
- [x] **弁天島海浜公園**
  - 位置: 34.681311879824115, 137.60145281816503
  - リンク: https://maps.app.goo.gl/J5uS7rWjT9mK3vW88
- [x] **ボートレース浜名湖周辺**
  - 位置: 34.691234, 137.581234
  - リンク: https://maps.app.goo.gl/K5uS7rWjT9mK3vW31
- [x] **今切口舞阪堤**
  - 位置: 34.680456, 137.605789
  - リンク: https://maps.app.goo.gl/L5uS7rWjT9mK3vW85
- [x] **渚園**
  - 位置: 34.696123, 137.601456
  - リンク: https://maps.app.goo.gl/N5uS7rWjT9mK3vW84
- [x] **中之島**
  - 位置: 34.695345, 137.601234
  - リンク: https://maps.app.goo.gl/m7uP9rWjT9mK3vW86
- [x] **乙女園（うなぎ観音）**
  - 位置: 34.69490479372826, 137.59440889631668
  - リンク: https://maps.app.goo.gl/y9jqeu1KmAwJKgCj6
- [x] **サクラマル**
  - 位置: 34.69231, 137.59374
  - リンク: https://maps.app.goo.gl/ux8QpLBBo4Md1F5i6
- [x] **砂揚げ場（新居漁港）**
  - 位置: 34.693127, 137.581769
  - リンク: https://maps.app.goo.gl/4oKdUShKUA8rpl
- [x] **浜名湖パークビレッジ**
  - 位置: 34.685345, 137.587234
  - リンク: https://maps.app.goo.gl/4pnQrRn99x4XBUaU9
- [x] **新川河口**
  - 位置: 34.700498, 137.616386
  - リンク: https://maps.app.goo.gl/fu2UDArL69c29csr8
- [x] **観月園**
  - 位置: 34.69679, 137.60100
  - リンク: https://maps.app.goo.gl/8RrzHCbWftTL3JYQ9

## 備考
- `nagisaen-nakanohima` フォルダの統合記事は、`nagisaen` と `nakanoshima` に分割・MDX化を完了しました。
- 各記事は `point-process.md` のライティングルールに基づき、見出し構成やアラート記法の適用を最適化しています。
- 旧来の `<iframe>` 埋め込みは、サイト共通の `<Map />` コンポーネントに差し替え、パフォーマンスと統一感を向上させています。

## 301リダイレクト設定用対照表 (表浜名湖エリア)

WordPressからの移行に伴い、SEO評価を継承するためのリダイレクト用データです。

| 釣り場名 | Astro新Slug (points/omote/...) | 元のWordPressタイトル（想定URL） | 備考 |
| :--- | :--- | :--- | :--- |
| **網干場** | `amihosiba` | 網干場（舞阪港）～表浜名湖の釣りポイント紹介～ | |
| **新居弁天海釣公園** | `araibenten-umiduripark` | 新居弁天海釣公園～表浜名湖の釣りポイント紹介～ | |
| **弁天島海浜公園** | `bentenjimakaihinkouen` | 弁天島海浜公園～表浜名湖の釣りポイント紹介～ | |
| **ボートレース浜名湖周辺** | `boatrace-hamanako` | ボートレース浜名湖周辺～表浜名湖の釣りポイント紹介～ | |
| **今切口舞阪堤** | `imagiremaisakatei` | 今切口舞阪堤～表浜名湖の釣りポイント紹介～ | |
| **渚園** | `nagisaen` | 中之島・渚園～表浜名湖の釣りポイント紹介～ | 中之島・渚園を分割 |
| **中之島** | `nakanoshima` | 中之島・渚園～表浜名湖の釣りポイント紹介～ | 中之島・渚園を分割 |
| **乙女園（うなぎ観音）** | `otomeen` | 乙女園（うなぎ観音）～表浜名湖の釣りポイント紹介～ | |
| **サクラマル** | `sakuramaru` | サクラマル～表浜名湖の釣りポイント紹介～ | |
| **砂揚げ場（新居漁港）** | `sunaageba` | 砂揚げ場（新居漁港）～表浜名湖の釣りポイント紹介～ | |
| **浜名湖パークビレッジ** | `parkvillege` | 浜名湖パークビレッジ周辺～表浜名湖の釣りポイント紹介～ | |
| **新川河口** | `shinkawa-kakou` | (新設または統合データより作成) | |
| **観月園** | `kangetsuen` | (新設または統合データより作成) | |

※ WordPress側のスラッグは、多くの場合タイトルまたはディレクトリ `points-omote-{slug}` に基づいていると想定されます。最終的な `astro.config.mjs` 反映前に現行URLとの突合を推奨します。
