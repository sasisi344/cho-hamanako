# 転送対象URLリスト

> **実施状況（2026-10-05）: 実装済み（ローカル。未デプロイ・未コミット）。** `astro.config.mjs` の `redirects` を再構成済み。内訳は末尾「§8 実施結果」。本番反映後に、旧URLをGETして転送先が200かを再検証する。

作成日: 2026-10-05
関連: [point-sorting-table.md](point-sorting-table.md)（§1.1補遺）／ 全件のCSV: [redirect-targets.csv](redirect-targets.csv)

## 0. 概要

| 区分 | 件数 | 12mクリック | 内容 |
|---|---:|---:|---|
| **A 既存ルールの修正** | 24 | 3,431※ | `astro.config.mjs` の既存24件のうち**20件が要修正**（転送先が404）。うち2件は実在記事を上書きしている |
| B 旧WP地名記事 | 23 | 5,901 | ポイント記事の旧URL。転送先は `/points/<slug>/` |
| C 旧WP記事（魚種・季節ほか） | 43 | 6,112 | 現行記事への対応づけ（確度つき） |
| D タグ・カテゴリ | 5 | 122 | WP時代の一覧ページ |
| E 移行途中パス | 9＋244（予防） | 62 | `/points/oku/<slug>/` 等。観測された9件＋全記事分の予防リスト |

※ A のクリックはGSC 12mでクリック5以上だった行のみ。B〜Eの旧URL合計は80本・12,197クリック（旧URL82本・12,424クリックから、タチウオ記事（222クリック）と青物のタグ一覧（5クリック）を対象外としたため）。

**実装前提**: 本番はnginxで `.htaccess` は無効。既存と同じ `astro.config.mjs` の `redirects`（meta-refresh）に足すか、サーバー側で301にする。後者が望ましいが設定はリポジトリ外。

## 1. A 既存ルールの修正（最優先・確実）

`astro.config.mjs` の `redirects`（24件）を本番で全件検証した。

**1-1. 実在記事を上書きしている2件（記事が読めない状態）**

`/blog/anazuri/` と `/blog/hamana-depth-map-guide/` は**実在記事の正規URL**だが、同じURLを転送元にするルールがあり、記事本体の代わりに転送スタブ（存在しない `/blog/guide/.../` へ）が出力されている。**ルール2行を削除**すれば記事が復旧する。

| 転送元（=実在記事のURL） | 現在の転送先（404） | 対応 |
|---|---|---|
| `/blog/anazuri/` | `/blog/guide/method/anazuri/` | **ルール削除** |
| `/blog/hamana-depth-map-guide/` | `/blog/guide/points/hamana-depth-map-guide/` | **ルール削除** |

**1-2. 転送先が404の件（転送先の修正）**

（四季ガイドの旧WP URL `/hamanako-seasonal-fishing-patterns-guide/` も同じ不具合だったが、改稿時に修正済みのため表から除く。）

| 旧URL | 12mク | 現在の転送先（404） | 正しい転送先 |
|---|---:|---|---|
| /2024/10/12月の浜名湖でおすすめの釣りポイント/ | 438 | `/blog/season/monthly/12-month/` | `/blog/12-month/` |
| /2024/11/1月の浜名湖で狙える！釣り人おすすめポイントと/ | 359 | `/blog/season/monthly/1-month/` | `/blog/1-month/` |
| /2024/10/11月の浜名湖でおすすめの釣りポイント5選/ | 344 | `/blog/season/monthly/11-month/` | `/blog/11-month/` |
| /2024/11/浜名湖周辺にある釣具店をエリア別やおすすめで/ | 333 | `/blog/guide/logistics/shops/` | `/blog/shops/` |
| /2025/02/7月の浜名湖でおすすめの釣りポイント7選/ | 312 | `/blog/season/monthly/7-month/` | `/blog/7-month/` |
| /2024/11/釣りにめっちゃ役立つ！浜名湖全域の水深を知る/ | 312 | `/blog/guide/points/hamana-depth-map-guide/` | `/blog/hamana-depth-map-guide/` |
| /2024/12/2月の浜名湖でおすすめの釣りポイント6選/ | 228 | `/blog/season/monthly/2-month/` | `/blog/2-month/` |
| /2024/09/10月の浜名湖でおすすめの釣りポイント8選/ | 137 | `/blog/season/monthly/10-month/` | `/blog/10-month/` |
| /2025/12/winter12-3-lightgame-rockfish/ | 18 | `/blog/guide/method/winter-lightgame/` | `/blog/winter-lightgame/` |
| /2025/09/9月の浜名湖投げ釣り五目！キス・カワハギ・ヘダ/ | <5 | `/blog/guide/method/casting-gomoku/` | `/blog/casting-gomoku/` |
| /2025/01/3月の浜名湖でおすすめの釣りポイント10選/ | <5 | `/blog/season/monthly/3-month/` | `/blog/3-month/`<br>※GSC上の実URLは「9選」。**9選のキーも追加** |
| /2025/02/4月の浜名湖でおすすめの釣りポイント8選/ | <5 | `/blog/season/monthly/4-month/` | `/blog/4-month/` |
| /2025/02/5月の浜名湖でおすすめの釣りポイント9選/ | <5 | `/blog/season/monthly/5-month/` | `/blog/5-month/` |
| /2025/02/6月の浜名湖でおすすめの釣りポイント9選/ | <5 | `/blog/season/monthly/6-month/` | `/blog/6-month/` |
| /2025/02/8月の浜名湖でおすすめの釣りポイント10選/ | <5 | `/blog/season/monthly/8-month/` | `/blog/8-month/` |
| /2024/09/9月の浜名湖でおすすめの釣りポイント6選/ | <5 | `/blog/season/monthly/9-month/` | `/blog/9-month/` |
| /hamanako-fishing-calendar-guide/ | <5 | `/blog/season/yearly-fishing-calendar/` | `/blog/yearly-fishing-calendar/` |

**1-3. 正常な4件（変更なし）**: ルールとマナー／車横付け（`family-car-fishing-points`）／`/blog/guide-2025/`→`tako-kanzen-guide`／`rental-fishing-guide`→新居海釣り公園。

水深図の旧WP URLは、上記スタブ削除後に `/blog/hamana-depth-map-guide/` へ転送する（1-2に含む）。

## 1-4. 旧URLと現行記事の対応づけの方法

旧WPのURLは日本語スラッグ（＝旧記事タイトルの先頭部分）なので、現行記事のタイトル・タグ・要約との**文字列の類似度**で対応を検証した（2文字連続の一致を、出現の少ない文字列ほど重く数える）。あわせて、旧URLの**年月**と現行記事の**公開日**（WPからの移行で引き継がれている）が一致するかも見た。各表の「根拠」列に結果を載せている。

- **地名記事は、タイトル類似で手動の対応とほぼ一致**する（舘山寺・瀬戸水道・新居弁天海釣公園・湖南高校・はまゆう大橋・佐久米・伊目・パークビレッジ・ボートレース・女河浦・松見ヶ浦ほか）。
- **束ね記事は類似が割れる**（猪鼻湖・中之島/渚園・村櫛/ガーデンパーク・乙女園/サクラマル・庄内湖・鷲津）。旧記事が複数スポットを扱っていたため。猪鼻湖は個別スポットが上位に並ぶが、旧記事が猪鼻湖全体の紹介だったことと整合する。代表1本またはハブへ転送する判断は維持した。
- **魚種・季節記事は、類似度だけでは当たらない**。現行タイトルが「教科書」「完全ガイド」に書き換わっているため、「浜名湖で〇〇を釣る方法」の共通語に埋もれる。公開年月が一致する記事が残っているもの（カサゴ・ウェーディング・サビキ・3月・水温・9月カレイ）は確度が高い。一致する記事がないものは、2026年3月の魚種別リライトで別記事に置き換わった可能性が高く、魚種・意図（ポイント／入門）から推定している（確度○）。
- 英語スラッグの旧URL（31件）はタイトル照合ができないため、語句から推定している。

## 2. B 旧WP地名記事（ポイント記事）

全て現在404。転送先は実在・実体（スタブでない）を確認済み。確度「○」は旧記事が複数スポットを束ねていたもの（代表1本へ転送し、他スポットは本文から誘導）。

| 旧URL | 12mク | 転送先 | 確度 | 備考 | 根拠 |
|---|---:|---|:-:|---|---|
| /2024/08/猪鼻湖（三ヶ日）～奥浜名湖の釣りポイント紹介/ | 1,168 | `/points/inahako/` | ○ | 旧記事は猪鼻湖全体を束ねていた（推定）。ハブへ。個別スポットは本文から誘導 | タイトル類似では圏外。1位は/points/mikkabi-eki/(0.46) |
| /2024/08/中之島・渚園～表浜名湖の釣りポイント紹介～/ | 800 | `/points/nagisaen/` | ○ | 2スポット束ね。渚園の検索需要が大きいため渚園へ。`/points/nakanoshima/` を本文から強く誘導 | タイトル類似2位(0.52)。1位は/blog/winter-shinp-strategy/(0.53)／公開年月一致 |
| /2024/08/舘山寺（内浦湾）～奥浜名湖の釣りポイント紹介/ | 628 | `/points/kanzanji/` | ◎ |  | タイトル類似1位(0.58)／公開年月一致 |
| /2024/08/都田川河口～奥浜名湖の釣りポイント紹介～/ | 626 | `/points/miyakodagawa/` | ◎ |  | タイトル類似3位(0.48)。1位は/points/hanagawa/(0.5)／公開年月一致 |
| /2024/08/村櫛漁港付近・ガーデンパーク～中浜名湖の釣り/ | 529 | `/points/murakushi-fishing-port/` | ○ | 2スポット束ね。ガーデンパークへは本文から誘導 | タイトル類似3位(0.23)。1位は/blog/naka-boat-fishing-tactics/(0.47)／公開年月一致 |
| /2024/08/瀬戸水道～奥浜名湖の釣りポイント紹介～/ | 261 | `/points/setosuidou/` | ◎ |  | タイトル類似1位(0.5)／公開年月一致 |
| /2024/08/新居弁天海釣公園～表浜名湖の釣りポイント～/ | 244 | `/points/araibenten-umiduripark/` | ◎ |  | タイトル類似1位(0.78)／公開年月一致 |
| /2024/11/浜名湖でおすすめのウェーディングポイント10選と/ | 230 | `/points/wading-points/` | ◎ | 自動突合(wpSlug) | タイトル類似1位(1)／公開年月一致 |
| /2024/11/湖南高校周辺～中浜名湖のポイント紹介～/ | 164 | `/points/konankoukou/` | ◎ |  | タイトル類似1位(0.65) |
| /2024/08/はまゆう大橋～中浜名湖の釣りポイント紹介～/ | 148 | `/points/hamayu-ohashi/` | ◎ |  | タイトル類似1位(0.65)／公開年月一致 |
| /2024/08/佐久米海岸～奥浜名湖の釣りポイント紹介～/ | 143 | `/points/sakumekaigan/` | ◎ |  | タイトル類似1位(0.71)／公開年月一致 |
| /2024/08/乙女園・サクラマル（弁天島）～表浜名湖の釣り/ | 136 | `/points/otomeen/` | ○ | 2スポット束ね。サクラマルへは本文から誘導 | タイトル類似3位(0.26)。1位は/points/sakuramaru/(0.34)／公開年月一致 |
| /2024/08/伊目～奥浜名湖の釣りポイント紹介～/ | 115 | `/points/ime/` | ◎ |  | タイトル類似1位(0.55)／公開年月一致 |
| /2024/08/鷲津湾周辺～中浜名湖の釣りポイント紹介～/ | 112 | `/points/washidukou/` | ◎ |  | タイトル類似2位(0.37)。1位は/points/naka-hamanako-fishing-points/(0.52)／公開年月一致 |
| /2024/11/浜名湖パークビレッジ付近～表浜名湖の釣りポイ/ | 105 | `/points/parkvillege/` | ◎ |  | タイトル類似1位(0.69) |
| /2024/08/気賀・寸座～奥浜名湖の釣りポイント紹介～/ | 101 | `/points/kiga/` | ○ | 2スポット束ね。寸座へは本文から誘導 | タイトル類似1位(0.44)／公開年月一致 |
| /2024/08/庄内湖～奥浜名湖の釣りポイント紹介～/ | 100 | `/points/syounaiko/` | ◎ |  | タイトル類似では圏外。1位は/points/oku-hamanako-fishing-points/(0.71)／公開年月一致 |
| /2024/08/ボートレース浜名湖（浜名湖競艇場）～表浜名湖/ | 96 | `/points/boatrace-hamanako/` | ◎ |  | タイトル類似1位(0.52)／公開年月一致 |
| /2024/08/女河浦海水浴場～中浜名湖の釣りポイント紹介～/ | 76 | `/points/megaura/` | ◎ |  | タイトル類似1位(0.88)／公開年月一致 |
| /2024/08/松見ヶ浦～中浜名湖の釣りポイント紹介～/ | 60 | `/points/matsumigaura/` | ◎ |  | タイトル類似1位(0.48)／公開年月一致 |
| /2024/08/浜名湖の干潟サイトフィッシング～中浜名湖の釣/ | 39 | `/points/higata-sitefishing/` | ◎ | 自動突合(タイトル前方一致) | タイトル類似1位(0.81)／公開年月一致 |
| /2024/11/omote-hamanako-konankoukou/ | 10 | `/points/konankoukou/` | ◎ | 別系統の旧URL | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2024/08/新居町中之郷付近～中浜名湖の釣りポイント紹介/ | 10 | `/points/arai-nakanogo/` | ◎ |  | タイトル類似1位(0.48)／公開年月一致 |

## 3. C 旧WP記事（魚種・季節・その他）

確度の意味: ◎=同一記事（スラッグ・wpSlug・公開日・タイトルのいずれかで確認）／○=同一テーマの1本に推定／△=複数候補・要判断／×=対応記事なし。

| 旧URL | 12mク | 転送先 | 確度 | 備考 | 根拠 |
|---|---:|---|:-:|---|---|
| /2024/11/浜名湖シロギス釣りのベストポイント5選！初心者/ | 1,276 | `/blog/points-top5/` | ◎ | 公開日2024-11-12が一致（同一記事） | タイトル類似1位(0.39)／公開年月一致 |
| /2024/11/浜名湖で楽しむアジングの醍醐味：評価の高いポ/ | 578 | `/blog/ajing-guide/` | ◎ | 自動突合(wpSlug) | タイトル類似では圏外。1位は/points/pokochan-coast/(0.14) |
| /2024/10/浜名湖でスズキ（シーバス）釣りのおすすめポイ/ | 446 | `/blog/seabass-points/` | ○ | シーバスのポイント記事 | タイトル類似では圏外。1位は/blog/seabass-cooking/(0.31) |
| /2024/12/浜名湖でカサゴを釣りたいならここ！おすすめの/ | 356 | `/blog/kasago-guide/` | ◎ | 公開月一致（2024-12） | タイトル類似では圏外。1位は/blog/winter-kasago/(0.32)／公開年月一致 |
| /2024/11/【初心者必見】冬の浜名湖でカレイを釣る方法！/ | 354 | `/blog/karei-beginner/` | ○ | 初心者向けカレイ。代替: /blog/karei/ | タイトル類似では圏外。1位は/blog/winter-kasago/(0.31) |
| /2024/11/【完全ガイド】浜名湖でハゼ釣りを楽しむ！おす/ | 318 | `/blog/haze-points/` | ○ | ポイント紹介系。代替: /blog/haze/ | タイトル類似では圏外。1位は/blog/hazekura-gear/(0.39) |
| /2025/10/冬の浜名湖釣りガイド｜初心者向けの釣り方とお/ | 247 | `/blog/seasonal-patterns-guide/` | ◎ | 【転送先確定】「冬」単独の総合記事は現行になく、タイトルに春夏秋冬を含む四季ガイドへ。転送先は改稿予定（seasonal-guide-rewrite.md）。12mの「冬」クエリは179クリック/817表示（「浜名湖 冬 釣り」98クリック・平均3.1位）で、冬の総合ページ新設も検討余地あり。代替: /blog/12-month/ /blog/winter-lightgame/ | タイトル類似では圏外。1位は/blog/karei-beginner/(0.29) |
| /2024/11/浜名湖でサヨリを釣る方法！おすすめのシーズン/ | 207 | `/blog/sayori-beginner-guide/` | ○ | 代替: /blog/sayori/ | タイトル類似では圏外。1位は/blog/guide/beginner/hamanako-sabiki-best-season/(0.41) |
| /2025/01/3月の浜名湖でおすすめの釣りポイント9選/ | 192 | `/blog/3-month/` | ◎ | 既存設定は「10選」で不一致。公開日2025-01が一致 | タイトル類似では圏外。1位は/points/wading-points/(0.43)／公開年月一致 |
| /2024/11/浜名湖でカワハギを釣る方法完全ガイド！釣れる/ | 171 | `/blog/kawahagi/` | ○ | 代替: /blog/kawahagi-beginner/ | タイトル類似では圏外。1位は/blog/kawahagi-beginner/(0.39) |
| /2026/01/hamanako-bachinuke-seabuss/ | 167 | `/points/bachinuke-fukabori/` | ○ | バチ抜けシーバス | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2024/11/浜名湖でメバルを釣る方法～初心者から上級者ま/ | 160 | `/blog/mebaru-beginner/` | ◎ | 自動突合(wpSlug) | タイトル類似では圏外。1位は/blog/eging-beginner/(0.17)／公開年月一致 |
| /2024/11/浜名湖でサビキ釣りを楽しもう！おすすめのシー/ | 159 | `/blog/guide/beginner/hamanako-sabiki-best-season/` | ◎ | 自動突合(タイトル前方一致) | タイトル類似1位(1)／公開年月一致 |
| /2024/12/tactics-fish-kasago/ | 158 | `/blog/mebaru-kasago/` | ○ | 魚種別記事へ（指定） | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2024/10/浜名湖でキビレを釣るおすすめのポイントと方法/ | 154 | `/blog/kibire-points/` | ○ | 代替: /blog/kibire/ | タイトル類似では圏外。1位は/blog/hazekura-intro/(0.29) |
| /2025/04/浜名湖でメジナを釣る方法のまとめ！初心者にも/ | 138 | `/blog/mejina/` | ○ | 代替: /blog/mejina-beginner/ | タイトル類似では圏外。1位は/blog/mejina-cooking/(0.17) |
| /2024/12/釣りに行く直前、浜名湖の状況をライブカメラや/ | 131 | `/blog/araibenten-live-camera/` | ○ | 現行は「新居ライブカメラ終了＋代替カメラ」記事 | タイトル類似1位(0.27) |
| /2025/12/seabass-winter-pointtactics/ | 111 | `/blog/winter-lunker/` | ○ | 冬シーバス。代替: /blog/winter-shinp-strategy/ | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/09/9月の浜名湖カレイ釣り開幕！投げ釣りで狙う秋の/ | 74 | `/blog/hamanako-karei-fishing-season-opener/` | ◎ | 公開日2025-09が一致 | タイトル類似1位(0.46)／公開年月一致 |
| /2025/12/hamana-winter-tinu-tactics/ | 69 | `/blog/winter-tactics/` | ◎ | 冬クロダイ・公開日2025-12が一致 | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2026/02/bachinuke-forecast/ | 64 | `/blog/bachinuke-forecast/` | ◎ | 自動突合(スラッグ一致) | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/12/araibenten-12m-winter-fishguide/ | 58 | `/points/araibenten-umiduripark/` | ○ | 新居海釣り公園の冬。代替: /blog/12-month/ | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/01/浜名湖の水温をチェックできる有能なウェブサイ/ | 51 | `/blog/water-temperature-checking/` | ◎ | 公開日2025-01-15が一致（記事側wpSlugは誤設定） | タイトル類似1位(0.46)／公開年月一致 |
| /2025/11/hirame-hama-11/ | 43 | `/blog/november-guide/` | ○ | ヒラメ11月 | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/11/araibenten-11-5select/ | 42 | `/points/araibenten-umiduripark/` | ○ | 新居海釣り公園の11月。代替: /blog/11-month/ | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/12/hamanako-12season-fishguide/ | 42 | `/blog/12-month/` | ○ | 12月ガイド | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/10/【秋の浜名湖】初心者におすすめハゼ・アジ釣り/ | 42 | `/blog/haze/` | ○ | 魚種別記事へ（指定） | タイトル類似では圏外。1位は/blog/hazekura-intro/(0.23) |
| /2025/11/hamanako-egging-technic-timepoint/ | 36 | `/points/eging-fukabori/` | ○ | エギングのポイント・時期。代替: /blog/eging-tactics/ | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2024/09/今何が釣れる？浜名湖釣魚カレンダーを公開/ | 36 | `/blog/yearly-fishing-calendar/` | ○ |  | タイトル類似1位(0.26) |
| /2025/12/hamana-kasago-bignner-winter/ | 33 | `/blog/winter-kasago/` | ◎ | 公開日2025-12が一致 | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/10/10月の浜名湖ハゼ釣り完全ガイド！秋の大型ハゼを/ | 31 | `/blog/haze/` | ○ | 魚種別記事へ（指定） | タイトル類似では圏外。1位は/blog/10-month/(0.43) |
| /2025/11/hama11-karei-jsseki/ | 25 | `/blog/11-november-karei/` | ○ | 11月カレイ | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/12/hamanako-mebaru-winter-ptactics/ | 22 | `/blog/winter-lightgame/` | ○ | 冬のメバル・カサゴ。代替: /blog/mebaru-beginner/ | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2024/11/浜名湖の魚を全て釣るには？エサ釣りとルアー釣/ | 22 | `/blog/seasonal-patterns-guide/` | ○ | 四季のシーズナルパターンが適する（指定） | ユーザー判断 |
| /2025/11/bansyu-seabass-area/ | 18 | `/blog/seabass/` | ○ | 晩秋シーバス。シーバスの魚種別記事へ（指定） | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2026/01/hamanako-tsurigushop-choice/ | 14 | `/blog/shops/` | ○ | 釣具店 | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2026/02/feb-season-forecast/ | 13 | `/blog/2-month/` | ○ | 2月ガイド | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/11/hamanako-aorisq-bignner-guide/ | 13 | `/blog/aori-guide/` | ◎ | 公開日2025-11が一致 | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/11/beginner-haze-konanch/ | 11 | `/blog/haze-beginner/` | ○ | ハゼ入門 | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/10/10月の浜名湖投げ釣り入門！カワハギ・ヘダイを狙/ | 9 | `/blog/casting-gomoku/` | ○ | キス・カワハギ・ヘダイの投げ釣り | タイトル類似1位(0.65) |
| /2026/01/winter-mebaru-beginner/ | 8 | `/blog/mebaru-beginner/` | ○ |  | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2026/02/bachinuke-tackle/ | 7 | `/blog/bachinuke-tackle/` | ◎ | 自動突合(スラッグ一致) | 英語スラッグ（タイトル照合不可。語句から推定） |
| /2025/11/11bansyu-kibire-float/ | 6 | `/blog/kibire/` | ○ | キビレの電気ウキ | 英語スラッグ（タイトル照合不可。語句から推定） |

## 4. D タグ・カテゴリ

| 旧URL | 12mク | 転送先 | 確度 | 備考 | 根拠 |
|---|---:|---|:-:|---|---|
| /tag/マゴチ/ | 51 | `/blog/flatfish/` | ○ | マゴチ・ヒラメ（フラットフィッシュ）の統合記事へ（指定） | タイトル類似では圏外。1位は/points/magochi-fukabori/(1) |
| /category/奥浜名湖/ | 21 | `/points/oku-hamanako-fishing-points/` | ○ | カテゴリ一覧→エリアハブ | タイトル類似では圏外。1位は/blog/inahako-area-tactics/(1) |
| /category/表浜名湖/ | 20 | `/points/omote-hamanako-fishing-points/` | ○ | カテゴリ一覧→エリアハブ | タイトル類似では圏外。1位は/blog/omote-area-tactics/(1) |
| /tag/サヨリ/ | 15 | `/blog/sayori/` | ○ | タグ一覧 | タイトル類似では圏外。1位は/points/boat-gomoku-fukabori/(1) |
| /tag/シーバス/ | 15 | `/blog/seabass/` | ○ | タグ一覧 | タイトル類似では圏外。1位は/blog/cooking/winter-hamanako-recipe/(1) |

## 5. E 移行途中パス

Astro移行の途中で公開されていた `/points/<域>/<slug>/` や `/blog/<カテゴリ>/<slug>/` の旧パス。実URLは `slug:` フロントマターで決まるため、旧パスは現在404。

**観測された9件**（GSC 12mでクリック5以上）:

| 旧URL | 12mク | 転送先 | 確度 | 備考 | 根拠 |
|---|---:|---|:-:|---|---|
| /blog/guide/method/ajing-guide/ | 11 | `/blog/ajing-guide/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /blog/target/eging/squid-complete/ | 9 | `/blog/squid-complete/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /points/oku/pokochan-coast/ | 8 | `/points/pokochan-coast/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /points/naka/washidukou/ | 7 | `/points/washidukou/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /blog/season/yearly-fishing-calendar | 6 | `/blog/yearly-fishing-calendar/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /blog/guide/method/night-fishing/ | 6 | `/blog/night-fishing/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /blog/guide/logistics/parking-toilet-guide | 5 | `/blog/parking-toilet-guide/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /blog/guide/method/hamanako-kayak-fishing/ | 5 | `/blog/hamanako-kayak-fishing/` | ◎ | 自動突合(旧(移行途中)URL) |  |
| /points/naka/gardenpark/ | 5 | `/points/gardenpark/` | ◎ | 自動突合(旧(移行途中)URL) |  |

**予防リスト**: 観測外の旧パス244件は [redirect-targets.csv](redirect-targets.csv) の「E 移行途中パス(全記事)」。旧パスが404のものだけを抽出済み（旧パスが生きている0件は除外）。クリック実績が少ないため優先度は低い。

## 6. 要判断（確度△・×）

**なし**（全件判断済み）。

**対象外（判断済み）**: 「浜名湖でタチウオを釣るならここ！…」（/2024/11/、222クリック）は現行にタチウオ記事がないため転送しない。「/tag/青物/」（5クリック）は需要が小さく、現行の青物記事が「浜名湖 青物 時期」で3位を取れているため、個別の転送は行わない。

## 7. 実装時の注意

- **転送先は必ず「実体」を確認**: 200でも転送スタブのことがある（上記1-1）。本リストの転送先は、本番で200かつスタブでないことを確認済み（検証日 2026-10-05、不合格2件：/blog/hamana-depth-map-guide/=STUB、/blog/anazuri/=STUB）。
- **末尾スラッシュ**: GSCには末尾なしのURL（`/blog/season/yearly-fishing-calendar` 等）も出る。nginxは末尾なしを404にするため、必要ならサーバー側で補う。
- **束ね記事（○）**: 旧記事が複数スポットだったものは、転送後に代表記事の本文から他スポットへ誘導する。
- **効果測定**: 転送の追加・修正前後でGSCの旧URL行と転送先の表示を比べる。リライトと同時に行うと切り分けできないため、転送を先に。
- **確認コマンド（例）**: 実装後に `redirect-targets.csv` の旧URLをGETし、meta-refreshの転送先が200かを再検証する。

## 8. 実施結果（2026-10-05）

| 項目 | 結果 |
|---|---|
| 既存ルールの修正（A） | 転送先404の18件を実URLに修正（四季ガイドの旧WP URLの1件を含む）。実在記事を上書きしていた2件（`/blog/anazuri/`、`/blog/hamana-depth-map-guide/`）を削除し、両記事が実ページとして出力されることを確認。3月記事は「9選」のキーを追加（「10選」は残置） |
| 新規追加 | B（旧WP地名記事）24件、C（魚種・季節ほか）42件、D（タグ・カテゴリ）5件、E（移行途中パス・観測分）9件。**合計103件**（既存23件を含む） |
| 判断済みの転送先 | 「冬の浜名湖釣りガイド」→四季ガイド／カサゴ・ハゼ（要判断だった3件）→魚種別記事／`/tag/マゴチ/`→`/blog/flatfish/`（マゴチ・ヒラメの統合記事）／晩秋シーバス→`/blog/seabass/` |
| 対象外 | タチウオ記事（現行記事なし）、`/tag/青物/`（需要が小さく、現行記事が「浜名湖 青物 時期」で3位を取れているため個別転送しない） |
| 未決 | なし。「魚を全て釣るには？エサ釣りとルアー釣り…」（22クリック）は、四季のシーズナルパターンが適するとして `/blog/seasonal-patterns-guide/` へ転送 |
| 検証 | ビルド成功。全件で、転送元のスタブが生成され、転送先が実ページ（スタブでない）であることを `dist/` で確認。転送元が実在ページと衝突するキーなし、重複キーなし |
| 内部リンク切れ | 32か所を修正（`yearly-fishing-calendar` 12、四季ガイドB 12（下書き）、ほか8）。再スキャンで切れ0（254リンク） |

**未実施**:
- 移行途中パスの予防リスト（244件、CSV「E 移行途中パス(全記事)」）は追加していない。観測された9件のみ。クリック実績がほぼないため。
- 末尾スラッシュなしのURL（`/blog/season/yearly-fishing-calendar` 等）は、nginx側の対応が要る。
- meta-refresh ではなくサーバー側301にする場合は、nginx設定（リポジトリ外）で対応。
- デプロイ後の本番検証。
