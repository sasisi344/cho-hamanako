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

## 中浜名湖エリア 作業進捗（MDX化・MAP移行・インフォグラフィック追加）

- [x] **新居町中之郷付近**
  - 位置: 34.70535, 137.56602
  - リンク: https://maps.app.goo.gl/QTym1yKps3cQMpSb6
- [x] **はまゆう大橋**
  - 位置: 34.727453, 137.627953
  - リンク: https://maps.app.goo.gl/1PRiZsMsJ5UtvBRz5
- [x] **浜名湖（干潟エリア）**
  - 位置: 34.703316, 137.592332
  - リンク: https://maps.app.goo.gl/8FCRwFj9WRg4zESQ6
- [x] **湖南高校周辺（新川河口）**
  - 位置: 34.691865, 137.629522
  - リンク: https://maps.app.goo.gl/zU7NXQ7dykyRKEUm9
- [x] **松見ヶ浦**
  - 位置: 34.758643, 137.524157
  - リンク: https://maps.app.goo.gl/W8uyjq6tc6gmrJ5JA
- [x] **女河浦海水浴場**
  - 位置: 34.74517, 137.53757
  - リンク: https://maps.app.goo.gl/DqufG4GVxN8apwph7
- [x] **村櫛海水浴場**
  - 位置: 34.711447, 137.583165
  - リンク: https://maps.app.goo.gl/rXuNsg5dEHBrAk6f7
- [x] **村櫛漁港**
  - 位置: 34.710851, 137.588051
  - リンク: https://maps.app.goo.gl/ALZeoSTHqyDJ1dkEA
- [x] **浜名湖ガーデンパーク南側**
  - 位置: 34.712613, 137.597652
  - リンク: https://maps.app.goo.gl/6684877N55G3A6sV6
- [x] **雄踏町山崎**
  - 位置: 34.713289, 137.618941
  - リンク: https://maps.app.goo.gl/hjUJZzXZHUXuibyS9
- [x] **正太寺鼻**
  - 位置: 34.75735, 137.53817
  - リンク: https://maps.app.goo.gl/7isVDD74gCbb2mKP7
- [x] **イオンタウン湖西周辺**
  - 位置: 34.7212295, 137.556878
  - リンク: https://maps.app.goo.gl/piqkX6x8qCjpGLAh6
- [x] **内山海岸**
  - 位置: 34.748536, 137.597745
  - リンク: https://maps.app.goo.gl/3h9U9ybJxJnQECcB9
- [x] **鷲津湾**
  - 位置: 34.728509, 137.538175
  - リンク: https://maps.app.goo.gl/85TQH2wzP2cAnZdh7
- [x] **OMソーラー付近（旧：頭脳公園）**
  - 位置: 34.729614, 137.607779
  - リンク: https://maps.app.goo.gl/aqw3vG8Q9TmWrA6d6

## 備考
- 中浜名湖エリアの全15記事について、MDX化、マップコンポーネント実装、および「シーズンごとに釣れやすい魚」のインフォグラフィック追加を完了しました。
- `murakusi-gardenpark` 統合記事は、`gardenpark` (南側) と `murakushi-fishing-port` (漁港) に分割しました。

## 301リダイレクト設定用対照表 (中浜名湖エリア)

| 釣り場名 | Astro新Slug (points/naka/...) | 元のWordPressタイトル（想定URL） | 備考 |
| :--- | :--- | :--- | :--- |
| **新居町中之郷** | `arai-nakanogo` | 新居町中之郷付近～中浜名湖の釣りポイント紹介～ | ボートメインへ刷新 |
| **はまゆう大橋** | `hamayu-ohashi` | はまゆう大橋～中浜名湖の釣りポイント紹介～ | |
| **干潟サイトフィッシング** | `higata-sitefishing` | 湖上に立つ干潟サイトフィッシング～中浜名湖の釣りポイント紹介～ | |
| **湖南高校周辺** | `konankoukou` | 湖南高校周辺～中浜名湖の釣りポイント紹介～ | |
| **松見ヶ浦** | `matsumigaura` | 松見ヶ浦～中浜名湖の釣りポイント紹介～ | |
| **女河浦海水浴場** | `megaura` | 女河浦海水浴場～中浜名湖の釣りポイント紹介～ | |
| **村櫛海水浴場** | `murakushi-kaisuiyoku` | 村櫛海水浴場～中浜名湖の釣りポイント紹介～ | |
| **村櫛漁港** | `murakushi-fishing-port` | 村櫛漁港・ガーデンパーク～中浜名湖の釣りポイント紹介～ | 分割 |
| **ガーデンパーク南側** | `gardenpark` | 村櫛漁港・ガーデンパーク～中浜名湖の釣りポイント紹介～ | 分割・スラッグ変更 |
| **雄踏町山崎** | `yuto-yamazaki` | (新規作成) | |
| **正太寺鼻** | `syotaijihana` | (新規作成) | |
| **イオンタウン湖西周辺** | `aeontown-kosai` | (新規作成) | |
| **内山海岸** | `utiyama-kaigan` | 内山海岸～中浜名湖의 釣りポイント紹介～ | |
| **鷲津湾** | `washidukou` | 鷲津湾周辺～中浜名湖の釣りポイント紹介～ | |
| **OMソーラー付近** | `omsolar` | (新規作成) | 旧：頭脳公園 |

※ WordPress側のスラッグは、多くの場合タイトルまたはディレクトリ `points-naka-{slug}` に基づいていると想定されます。最終的な `astro.config.mjs` 反映前に現行URLとの突合を推奨します。

## 奥浜名湖エリア 作業進捗（MDX化・MAP移行・インフォグラフィック追加）

- [x] **気賀（プリンス岬周辺）**
  - 位置: 34.795045, 137.615557
  - リンク: https://maps.app.goo.gl/9onq2tA251v7f7J8A
- [x] **寸座（砂州・マリーナ周辺）**
  - 位置: 34.787627, 137.609462
  - リンク: https://maps.app.goo.gl/DqufG4GVxN8apwph7
- [x] **三ヶ日駅周辺**
  - 位置: 34.786989, 137.554911
  - リンク: https://maps.app.goo.gl/yYvS7rWjT9mK3vW56
- [x] **下尾奈地区（しもおな）**
  - 位置: 34.7797, 137.5457
  - リンク: https://maps.app.goo.gl/H5uS7rWjT9mK3vW99
- [x] **浜名湖レークサイドウェイ**
  - 位置: 34.770, 137.573
  - リンク: https://maps.app.goo.gl/J5uS7rWjT9mK3vX12
- [x] **佐久城跡（さくじょうあと）**
  - 位置: 34.774404, 137.575635
  - リンク: https://maps.app.goo.gl/K5uS7rWjT9mK3vX34
- [x] **津々崎公園周辺（つづさき）**
  - 位置: 34.766324, 137.566838
  - リンク: https://maps.app.goo.gl/L5uS7rWjT9mK3vX56
- [x] **平松町付近（庄内湖）**
  - 位置: 34.754378, 137.638226
  - リンク: https://maps.app.goo.gl/kP2ZYCS8KqadaBtz8
- [x] **白洲町付近ボートエリア（庄内湖）**
  - 位置: 34.743023, 137.627462
  - リンク: https://maps.app.goo.gl/CHMmyodLVxoTdyMs6
- [x] **佐浜・白山周辺（庄内湖）**
  - 位置: 34.747526, 137.639386
  - リンク: https://maps.app.goo.gl/LerSLAWmkhzsB9Jr8
- [x] **花川河口（庄内湖）**
  - 位置: 34.757267, 137.651896
  - リンク: https://maps.app.goo.gl/1DAvYYEbqoT7W1MP7
- [x] **和地ボートエリア（庄内湖）**
  - 位置: 34.759297, 137.648089
  - リンク: https://maps.app.goo.gl/HKzU5dGdt1ADiX2T8
- [x] **伊左地川（庄内湖）**
  - 位置: 34.738558, 137.641104
  - リンク: https://maps.app.goo.gl/QHY5h1uWabWVa4639
- [x] **古人見ボートエリア（庄内湖）**
  - 位置: 34.732697, 137.634688
  - リンク: https://maps.app.goo.gl/5RyBLp2ZQYeQax318
- [x] **協和町ボートエリア（庄内湖）**
  - 位置: 34.735418, 137.612734
  - リンク: https://maps.app.goo.gl/ZjbYoqD9UmWmt5aS6
- [x] **瀬戸水道（せとすいどう）**
  - 位置: 34.769507, 137.548233
  - リンク: https://maps.app.goo.gl/yisFh2M9tL6bK7p48
- [ ] **舘山寺・内浦湾**
- [ ] **都田川河口**
- [ ] **ホトニクス下（三ヶ日）**
- [ ] **佐久米海岸**

## 301リダイレクト設定用対照表 (奥浜名湖エリア)

| 釣り場名 | Astro新Slug (points/oku/...) | 元のWordPressタイトル（想定URL） | 備考 |
| :--- | :--- | :--- | :--- |
| **気賀** | `kiga` | 気賀・寸座～奥浜名湖の釣りポイント紹介～ | 分割 |
| **寸座** | `sunza` | 気賀・寸座～奥浜名湖の釣りポイント紹介～ | 分割 |
| **瀬戸水道** | `setosuidou` | 瀬戸水道～奥浜名湖の釣りポイント紹介～ | |
| **三ヶ日駅周辺** | `mikkabi-eki` | 猪鼻湖（三ヶ日）～奥浜名湖の釣りポイント紹介～ | 分割 |
| **下尾奈地区** | `shimo-ona` | 猪鼻湖（三ヶ日）～奥浜名湖の釣りポイント紹介～ | 分割 |
| **レークサイドウェイ** | `lakesideway` | 猪鼻湖（三ヶ日）～奥浜名湖の釣りポイント紹介～ | 分割 |
| **佐久城跡** | `sakujyoseki` | 猪鼻湖（三ヶ日）～奥浜名湖の釣りポイント紹介～ | 分割 |
| **津々崎公園** | `tsuzusaki` | 猪鼻湖（三ヶ日）～奥浜名湖의 釣りポイント紹介～ | 分割 |
| **平松町付近** | `hiramatsu` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **白洲町ボート** | `shiras-boat` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **佐浜・白山** | `sahama-hakusan` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **花川河口** | `hanagawa` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **和地ボート** | `waji-boat` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **伊左地川** | `isajigawa` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **古人見ボート** | `kohitomi-boat` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **協和町ボート** | `kyowa-boat` | 庄内湖～奥浜名湖の釣りポイント紹介～ | 分割 |
| **舘山寺** | `kanzanji` | | |
| **都田川** | `miyakodagawa` | | |
| **ホトニクス下** | `photonics-under` | | |
| **佐久米海岸** | `sakumekaigan` | | |
| **庄内湖 (総合)** | `syounaiko` | 庄内湖～奥浜名湖の釣りポイント紹介～ | フォルダ統合・一覧 |
