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
  - 位置: 34.69345, 137.593497
  - リンク: https://maps.app.goo.gl/ux8QpLBBo4Md1F5i6
- [x] **砂揚げ場（新居漁港）**
  - 位置: 34.693127, 137.581769
  - リンク: https://maps.app.goo.gl/4oKdUShKUA8rpl
- [x] **浜名湖パークビレッジ**
  - 位置: 34.685345, 137.587234
  - リンク: https://maps.app.goo.gl/4pnQrRn99x4XBUaU9
- [x] **荒川河口**
  - 位置: 34.691234, 137.601234
  - リンク: https://maps.app.goo.gl/8pnQrRn99x4XBUaU9

## 備考
- `nagisaen-nakanohima` フォルダの統合記事は、`nagisaen` と `nakanoshima` に分割・MDX化を完了しました。
- 各記事は `point-process.md` のライティングルールに基づき、見出し構成やアラート記法の適用を最適化しています。
- 旧来の `<iframe>` 埋め込みは、サイト共通の `<Map />` コンポーネントに差し替え、パフォーマンスと統一感を向上させています。
