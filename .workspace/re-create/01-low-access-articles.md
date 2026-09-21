# 低アクセス記事一覧（W37時点）

**期間**: 2026-08-14〜09-12（直近30日）
**データ**: `.workspace/access-data/2026/w37/ページ.csv`

---

## A. 直近30日でGSCに一切表示されない記事（ゼロインプレッション、101本）

全記事296本のうちGSC「ページ」レポートに1件も現れなかったもの（記事slugのベース名で照合。生データ: `data/zero-impression-slugs.txt`）。

### A-1. `target/*` 旧サブ記事（62本）→ 詳細は [02-target-hub-legacy-duplication.md](02-target-hub-legacy-duplication.md)

魚種教科書統合プロジェクト（2026-09-04完了）後も残存する beginner/cooking/tactics/season 系の旧記事。最優先の整理対象。

### A-2. target以外（39本）

```
cooking/autumn-hamanako-recipe
cooking/spring-hamanako-recipe
cooking/summer-hamanako-recipe
cooking/winter-hamanako-recipe
guide/beginner/hamanako-tackle-rental-delivery-guide
guide/method/ajing-guide
guide/method/boat-autumn
guide/method/inahako-area-tactics
guide/method/naka-boat-fishing-tactics
guide/method/omote-area-tactics
guide/method/uchibay-kanzanji-area-tactics
guide/method/winter-lightgame
guide/theory
guide/theory/temp-lag-science
guide/theory/tidal-timing-logic
guide/theory/water-temperature-checking
points/fukabori/imagire-area-fukabori
points/fukabori/wading-seabass-fukabori
points/naka/arai-nakanogo
points/oku/hanagawa
points/oku/kanzanji
points/oku/lakesideway
points/oku/mikkabi-eki
points/oku/setosuidou
points/oku/shimo-ona
points/oku/shiras-boat
season/11-november-karei
season/hamanako-karei-fishing-season-opener
season/monthly/1-month
season/monthly/10-month
season/monthly/2-month
season/weekly-2026-03-29
season/weekly-2026-04-02
season/weekly-2026-04-09
season/winter-anazuri-guide-2026
travel/golden-week-family-sabiki-debut
travel/hamamatsu-festival-fishing-trip
travel/hamanako-traditional-fishing-guide
travel/hamanako-winter-fishing-oyster-trip
```

**注目パターン**:
- `points/oku/*`（奥浜名湖エリア）が8本まとまってゼロ表示 → エリアハブページからの内部リンク・インデックス登録状況を確認する
- `guide/method/*` の一部（inahako-area-tactics・uchibay-kanzanji-area-tactics・naka-boat-fishing-tactics・omote-area-tactics）は2026-09-04公開の新しい記事のため、様子見も妥当（要ウォッチ、即リライト対象ではない）
- `season/monthly/*`・`season/weekly-*` は日付・月次性が強く陳腐化しやすい記事群。`upDate` 運用と内部リンクの張替えが必要かもしれない

---

## B. ゼロクリックページ（85ページ、表示回数の多い順）

`data/zero-click-pages.csv` に全件あり。上位30件を抜粋:

| URL | 表示回数 | 平均掲載順位 |
|---|---|---|
| /blog/cooking/kurodai-shioyaki-recipe/ | 60 | 10.55 |
| /blog/guide/theory/hamanako-weather-vs-hamamatsu/ | 59 | 7.56 |
| /blog/target/（カテゴリTOP） | 56 | 15.86 |
| /blog/eging-cooking/ ※現存せず・旧URL | 51 | 34.8 |
| /blog/haze/ | 43 | 10.19 |
| /blog/（ブログTOP） | 40 | 41.92 |
| /blog/flatfish-cooking/ ※現存せず・旧URL | 36 | 14.42 |
| /blog/weekly-report-2026-04-02/ | 34 | 9.26 |
| /blog/kurodai-cooking/ ※現存せず・旧URL | 34 | 18.41 |
| /blog/aji-saba-sappa/（カテゴリ） | 30 | 7.43 |
| /blog/tako-cooking/ ※現存せず・旧URL | 30 | 7.57 |
| /blog/comparison/ | 27 | 9.81 |
| /blog/tako-tactics/ ※現存せず・旧URL | 24 | 7.71 |
| /points/sunza/ | 23 | 7.61 |
| /blog/cooking/beginner/koaji-karaage-recipe/ | 23 | 9.22 |
| /points/washidukou/ | 22 | 6.14 |
| /blog/cooking/nezakana-nitsuke-recipe/ | 22 | 10.32 |
| /blog/anazuri/ | 21 | 10.57 |
| /points/bachinuke-fukabori/ | 18 | 4.83 |
| /blog/mebaru-kasago-cooking/ ※現存せず・旧URL | 17 | 11.53 |
| /blog/november-guide/ | 16 | 6.81 |
| /blog/guide/theory/feeding-switch/ | 16 | 7.06 |
| /points/waji-boat/ | 16 | 10.75 |
| /blog/karei-tactics/ ※現存せず・旧URL | 15 | 10 |
| /blog/travel/hamanako-clam-digging-fishing-2026/ | 13 | 8.23 |
| /points/bentenjimakaihinkouen/ | 13 | 8.62 |
| /blog/hamana-depth-map-guide/ | 13 | 8.85 |
| /blog/mebaru-kasago-points/ | 12 | 8 |
| /blog/guide/theory/mazume-logic/ | 12 | 9.58 |
| /blog/guide/theory/dissolved-oxygen/ | 12 | 10 |

**「※現存せず・旧URL」について**: `src/content/blog/` に対応ファイルが存在しないことを確認済み。魚種教科書統合前の旧URL構造（`/blog/{fish}-cooking/` 等）がGoogleにまだキャッシュされているだけで、対応するコンテンツは既に `target/{fish}/index.mdx` に統合されている。**リライト不要・時間経過で自然にGSCから消える見込み**。ただし該当URLへの外部リンクが残っている場合は301リダイレクト設定を検討。

**要リライト候補**（現存する記事でゼロクリック）:
- `blog/cooking/kurodai-shioyaki-recipe`・`nezakana-nitsuke-recipe`・`beginner/koaji-karaage-recipe` — cooking系レシピのタイトル/OGP画像見直し
- `guide/theory/hamanako-weather-vs-hamamatsu`・`feeding-switch`・`mazume-logic`・`dissolved-oxygen` — theory系はニッチKWだが表示回数はある。タイトルの検索意図適合を確認
- `points/sunza`・`washidukou`・`bachinuke-fukabori`・`waji-boat`・`bentenjimakaihinkouen` — ポイント記事、タイトル・H1のKW一致を確認

---

## 生データ

- `data/zero-click-pages.csv` — クリック0の85ページ全件（URL・表示回数・CTR・掲載順位）
- `data/zero-impression-slugs.txt` — ゼロインプレッションの101記事slug全件
