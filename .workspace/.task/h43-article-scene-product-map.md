# H-43 記事×場面×商品の対応表と、足す商品・竿リールの仕様項目

- 作成: 2026-11-20（Claude）／出どころ: `344blog/hq/backlog.md` H-43
- データ: 記事 287本・カード 582枚（`src/content/blog/` を 11/20 に集計）。PV は GA4 の 11/02〜11/14（`.workspace/access-data/api/2026-11-15-rev-pv/`）。商品一覧は `pnpm run gen:tackle` で 11/20 に作り直した（238件・未使用57件）
- 場面は、本文に出てくる語（ウェーディング・アカエイ・横付け・子ども・ライフジャケット・夜釣り・クーラーなど）で拾い、上位の記事は該当する節を目で確かめた
- 配置のルールは `.agents/affiliate-placement-rules.md`（ポイント記事は §2 の場面だけ、上限3枚、ハブは5枚）

## 1. 全体の数字

| 項目 | 数 |
|---|---|
| 11/02〜11/14 の記事 PV（GA4、記事に対応する分） | 1,928 |
| そのうちカードのない記事の PV | 806（42%） |
| カードのないポイント記事（スポット単体）で PV 10以上 | 15本 |
| ライフジャケットの商品 | 1件（`common/jesbasaro-lifejacket`、大人・手動膨張式）。12記事で使用 |
| クーラーの商品 | 4件。使用は計4か所（`irisplaza-soft-cooler`・`logos-hyper-hyotenka-cooler-l` は0） |

**ずれ**: 手動膨張式のライフジャケットは、落水して気を失うと膨らまない。ボート・カヤック・SUP の記事では合っているが、`guide/method/night-fishing`・`winter-lightgame`・`omote-area-tactics`・`inahako-area-tactics` は岸からの釣りの文脈で使っている。②の固型式ゲームベストが入ったら差し替える。

## 2. 対応表A: カードのない記事（PV 順）

「既存で置ける」は今のカタログで足りるもの。「足りない」は §4 の候補番号。

| PV | 記事 | 本文にある場面（節） | 既存で置ける | 足りない |
|---:|---|---|---|---|
| 90 | `guide/logistics/araibenten-live-camera` | 行く前に混雑・波を見る。新居の駐車 | `travel/rakuten-travel-arai`（trip） | — |
| 37 | `guide/theory/hamanako-depth-map` | 理論の記事。ウェーディングの話は少し | 置かない | — |
| 32 | `guide/logistics/shops` | 釣具店・レンタルボートの店 | 置かない（店を探す記事） | — |
| 27 | `points/omote/otomeen` | 春〜秋の夜の電気ウキ（季節の節）、立ち込みとアカエイ（ルールの節） | `common/gentos-headlight-cb-300d`（time）、`seabass/little-presents-ray-guard-oa-24`（safety） | — |
| 26 | `points/drive-fishing-spots`（条件ハブ） | 車で行く・家族 | `common/sanka-cooler-6bl`、`common/logos-hyper-hyotenka-cooler-l` | ③25Lクーラー、①子ども用 |
| 24 | `points/naka/yuto-yamazaki` | 車横付け（タイトル）、子ども連れ（まとめ）、素足でアカエイ（掟の節） | `common/sanka-cooler-6bl`（access）、エイガード（safety） | ①子ども用、④ |
| 24 | `points/omote/imagiremaisakatei` | 巨大テトラで足場が悪く滑落の危険（潮流の節）、十戒 | — | ②ゲームベスト（スパイクは置かない。筆者は滑りにくいアウトドアシューズ） |
| 24 | `points/omote/shinkawa-kakou` | 河口の立ち込み・アカエイ・増水（安全の節） | エイガード（safety）、`seabass/pykes-peak-wader-summer`（terrain） | — |
| 23 | `guide/logistics/bait-vending-machines` | エサの自販機の場所 | 置かない | — |
| 23 | `points/omote/omote-hamanako-fishing-points`（エリアハブ） | ウェーディング・横付け・家族・ボート | エイガード、ウェーダー、`sanka-cooler-6bl` | ①、③ |
| 22 | `season/yearly-fishing-calendar` | 年間の表 | 置かない（月の記事へ送る） | — |
| 21 | `points/omote/sunaageba` | 横付け（アクセスの節）、「必須装備」にライフジャケット・4m以上のタモ（装備の節）、ドアの先がすぐ海（安全の節） | `sanka-cooler-6bl`（access） | ②、⑤玉網（柄5.4m）、①（家族向けの節） |
| 20 | `points/oku/inahako`（エリアハブ） | 遠浅のウェーディング、瀬戸水道の激流と落水、アカエイ | エイガード、ウェーダー | ②ゲームベスト |
| 20 | `points/oku/pokochan-coast` | ウェーディングとアカエイ、カヤック出艇でライフジャケット、子どもの水遊び | エイガード（safety）、`jesbasaro-lifejacket`（カヤックの文脈なので合う） | ①（子どもの水際） |
| 16 | `points/oku/photonics-under` | 急深で転落＝溺水、ライフジャケット必須、立ち込み禁止 | — | ②（必須と書いてあるのに商品がない。一番合う） |
| 16 | `points/omote/bentenjimakaihinkouen` | 常夜灯の根魚、観光、アカエイ | ヘッドライト（time）、`travel/rakuten-travel-bentenjima`（trip） | ①（家族の観光地） |
| 15 | `points/oku/oku-hamanako-fishing-points`（エリアハブ） | 横付け・家族・アカエイ | エイガード、`sanka-cooler-6bl` | ① |
| 14 | `guide/theory/night-fishing-light` | 夜釣りのライト全般 | ヘッドライト | — |
| 12 | `guide/beginner/hamanako-train-fishing-spots` | 電車で行く・子ども・持ち帰り | `common/irisplaza-soft-cooler`（未使用。電車で運ぶ場面に合う）、`aji-saba-sappa/sabiki-starter-set` | — |
| 12 | `guide/theory/imagiri-current-logic` | 潮流の理論、落水 | — | ②（1枚まで） |
| 12 | `points/naka/aeontown-kosai` | 駐車・家族・持ち帰り | `sanka-cooler-6bl`、`sabiki-starter-set` | ③ |
| 11 | `points/oku/kanzanji` | 夜釣り・家族・観光 | ヘッドライト、`travel/rakuten-travel-kanzanji` | ① |
| 10 | `points/oku/setosuidou` | 激流、ライフジャケット（5回） | — | ② |
| 10 | `points/naka/matsumigaura`・`murakushi-fishing-port`・`naka-hamanako-fishing-points` | 横付け・ボート・アカエイ | エイガード、クーラー | ① |
| 1〜2 | レンタルボート4本（`kyowa-boat`・`kohitomi-boat`・`shiras-boat`・`waji-boat`） | ボート、ライフジャケット（受付で借りる。`rental-boat-guide` 292・329行） | `common/daiwa-polarize-dn-8025`（未使用）、`common/lamicall-waterproof-case` | ④シーバスのタックルセット（回答7。ライフジャケットは受付で借りられるので売らない） |

## 3. 対応表B: カードはあるが、場面に対して足りない記事

| PV | 記事 | 足りない場面 | 足す |
|---:|---|---|---|
| 93 | `guide/beginner/hamanako-fishing-rules-and-manners` | ライフジャケット（6回）・持ち帰り（クーラー10回）。今はヘッドライト1枚 | ②（安全の節）。クーラーは持ち帰りのルールの節にあれば③ |
| 79 | `points/omote/araibenten-umiduripark` | 子どもに着せる場面（CH-3 で「合う商品がない」と報告） | ① |
| 51 | `points/omote/nagisaen` | 遠浅のウェーディング（12回）。エイガードはあるが浮力の装備がない | ②（地形の節。上限3枚なので、`sanka-cooler-6bl` と入れ替えるかは検収で決める） |
| 37 | `points/omote/amihosiba` | 足場・横付け（26回）。ヘッドライト・グリップ・エイガードで3枚が埋まっている | 追加しない（上限） |
| 30 | `points/family-car-points` | 子ども（14回）・ライフジャケット（3回） | ①（ハブなので5枚まで置ける） |
| 26 | `points/oku/miyakodagawa` | 川のウェーディング（19回） | ② |
| 18 | `points/wading-points` | ウェーディング（33回）、落水 | ②。`position` が未指定なので付ける |
| 12 | `guide/method/night-fishing` ほか3本 | 岸の夜釣りで手動膨張式を使っている（§1） | ②（固型式ベスト）に差し替え |

## 4. 足す商品の候補（優先順。11/20 のユーザー回答で改訂）

Amazon は自動での取得を 503 で拒むため、販売ページはブラウザ（Claude in Chrome）で確かめた（11/20）。仕様の出どころは各行に書いた。

| # | 種類 | 候補 | 確かめた仕様（出どころ） | 置く記事（§2・§3） | 状態 |
|---|---|---|---|---|---|
| ① | 子ども用ライフジャケット | 固型式の子ども用で、対象体重が書いてあるもの。型番は未確定。膨張式なら ブルーストーム BSJ-8420RS 2.0 カイ | カイ: 体重15kg以上40kg未満の小児用、国交省型式承認 Type A、サスペンダー型・水感知の膨張式（販売店の掲載、[wowma](https://wowma.jp/item/774704859)・[マイナビおすすめナビ](https://osusume.mynavi.jp/14431/)）。固型式の子ども用は公式の仕様表を見つけられていない | 新居弁天海釣公園（最優先。着せている家族が多い）、砂揚げ場、雄踏町山崎、家族・車のハブ2本、ポコちゃん海岸、弁天島海浜公園、舘山寺、エリアハブ（約10記事） | 型番を選ぶ（固型式を探す） |
| ② | 大人用の固型式ゲームベスト（小物が入るもの） | ダイワ DF-6326 ライトフローティングベスト、またはポケットの多いゲームベスト（DF-6026 など） | DF-6326: JCI 承認・性能鑑定適合品、L2、浮力材はポリエチレン独立発泡材（[ダイワ公式](https://www.daiwa.com/jp/product/jqppfaw)）。L2 は浮力7.5kgで漁港・防波堤向け（[my-best](https://my-best.com/29544)）。DF-6026 は固型式・浮力7.5kg以上24時間（販売店の掲載、[wowma](https://wowma.jp/item/773803109)。公式で照らすこと） | 岸の安全（舞阪堤・マイマイ・瀬戸水道・砂揚げ場・ルール記事・今切の潮流）とウェーディング（渚園・都田川・ウェーディング記事・猪鼻湖ハブ）。手動膨張式を岸の文脈で使っている4本も差し替える（約14記事） | 型番を選ぶ。筆者が使う型（回答3・5）なので一次情報として書ける |
| ③ | 中型クーラー 25L | **ダイワ クールラインα3 GU2500**（`common/daiwa-coolline-alpha3-gu2500`、ASIN B09RQHWTS5） | 容量25L、自重4.6kg、外寸31×58×33.5cm、内寸22×43×25.5cm、発泡ウレタン、両開きの上フタ・座れる（Amazon 販売ページ、11/20） | 家族・車のハブ2本、雄踏町山崎、砂揚げ場、イオンタウン湖西、エリアハブ、ルール記事 | **yaml 作成済み**。筆者が使う型（回答6） |
| ④ | 初めてのシーバスのルアー釣りセット | **シマノで揃えるルアーマチック入門セット（シーバスセット）**（`seabass/shimano-lurematic-seabass-set`、ASIN B0GNDDM9K4） | ロッドはルアーマチック S86ML: 8.6ft、適合ルアー6〜28g、PE0.6〜1.5号、2本継、自重145g。PE 糸巻き済みのリール付き（Amazon 販売ページ、11/20。販売元はつり具・TEN 2号店）。リールは2500番（3000番相当。ユーザー確認 11/20） | レンタルボート4本（回答7）。`boat` の場面 | **yaml 作成済み** |
| ④' | エギングセット | **同じ入門セットのエギングセット**（`common/shimano-lure-tackle-set` を差し替え、ASIN B0GMF51Z64。旧 B0FLCRHZ65） | ロッドは S86ML、リールは FX3000 に PE1号100m 巻き済み、エギ8個・スナップ・リーダー・イカ締め・エギバッグ付き（Amazon 販売ページ、11/20）。ユーザー: シーバスセットとリール・ラインが同じで、エギが付く | 今の使用は `guide/method/hamanako-sup-fishing` の1か所（SUP のルアー釣りの節）。エギングの記事にも置ける | **yaml 差し替え済み**（ユーザー指示 11/20）。SUP の節はシーバス・クロダイの文脈なので、書き直すときにシーバスセットへ替えるか検収で決める |
| ⑤ | 玉網（柄 5.4m） | 型番未選定 | 基準は「5.4mあれば足りる。最低でも3m以上」（回答4） | 砂揚げ場、舞阪堤、網干場 | 型番を選ぶ |
| — | ~~スパイクシューズ~~ | 外す | 筆者は舞阪堤のテトラで「滑りにくいアウトドアシューズ」を履く（回答2）。スパイクは勧めない | 舞阪堤の本文に筆者の装備として書く | 商品は置かない |
| — | ~~岸用の自動膨張式ウエスト~~ | 外す | 筆者はベスト型（回答3）。②にまとめる | — | — |

- 次に作るのは①と②。どちらも単価が高く、置ける記事が多い
- 既存の未使用品も使える: `irisplaza-soft-cooler`（電車の記事）、`logos-hyper-hyotenka-cooler-l`（車のハブ）、`daiwa-polarize-dn-8025`（ボート）
- 回答6のリンクは 15L（GU1500、B09RQHK3XB）のページだった。回答の「25L」に合わせて GU2500 の ASIN で作った（ユーザー了承 11/20）
- 商品データ3件（③・④・④'）はユーザーの承認（11/20）で main に入れた

## 5. 竿・リールの yaml に足す仕様の項目

記事で「この釣り場なら〜号のオモリを背負える竿」「〜番のリール」と数字で書けるように、`affiliates` スキーマに任意の `spec` を足す。値はメーカー公式の仕様表から写し、出どころの URL を `specSource` に残す。

**竿（categories にロッドを含む）**

| 項目 | 例 | 使い道 |
|---|---|---|
| `length` | `4.5m` / `6'8"` | 足場の高さ・遠投の要否 |
| `pieces` | `5本継` / `振出` | 電車・自転車で運べるか |
| `closedLength` | `105cm` | 同上 |
| `lureWeight` | `2〜15g`（ルアーロッド） | ルアーの重さとの合わせ |
| `sinkerWeight` | `10〜25号`（磯竿・投げ竿・ちょい投げ） | 新居弁天の10号強〜15号など、オモリとの合わせ（CH-3 の報告で不足と出た） |
| `rodClass` | `1.5号`（磯竿）/ `25号`（投げ竿）/ `ML` | 号数の基準を書く |
| `lineRating` | `PE0.3〜0.8号` | 適合ライン |
| `weight` | `150g` | 長時間の釣り |

**リール（categories にリールを含む）**

| 項目 | 例 | 使い道 |
|---|---|---|
| `size` | `2500S` / `C3000` / `100` | 番手の基準 |
| `gearRatio` | `5.2` / `HG` | 巻き取りの速さ |
| `lineCapacity` | `PE0.8号-200m / ナイロン3号-150m` | 遠投・大物 |
| `maxDrag` | `5kg` | 大物 |
| `weight` | `205g` | — |

**安全装備・クーラー（④①②③を足すときに一緒に入れる）**: ライフジャケットは `inflation`（固型式／自動膨張／手動膨張）・`approval`（Type A／JCI L2 など）・`fitWeight`（15〜40kg）、クーラーは `capacity`（17L）・`weight`。

**実装のしかた（案）**: `src/content/config.ts` の `affiliates` に `spec: z.record(z.string()).optional()` と `specSource: z.string().url().optional()` を足す（自由な項目名にして、竿・リール・装備で使い分ける）。表示（`TackleCard`）は今回は変えず、記事の本文で数字を使う。公開が走る変更なので、ほかの改修とまとめる。最初に埋めるのは、PV 上位の記事で使っている竿・リール（`shimano-holiday-iso-450pts`・`gekkabijin-ajing-68ls`・`23-legalis-lt2000s-p`・`daiwa-liberty-club-short-swing-10-330`・`sabiki-starter-set`）。

## 6. ユーザーの回答（2026-11-20、元は `.workspace/_inbox/H-43.md`）

筆者の一次情報。記事に書くときは筆者の装備・考えとして書いてよい（使用感・「買ってよかった」は作らない）。

| # | 問い | 回答 | 記事での使い方 |
|---|---|---|---|
| 1 | 子どもにライフジャケットを着せる家族は多いか。貸出は | 新居弁天海釣公園のほうが多い。今切ショップにレンタルはない。近くの「海湖館」で貸出がある。ただ釣りの前に立ち寄る必要があり、なければ困るので、子どものためにも自分のためにも親子で買っておき、まず親が見本として着けるべき | ①の場面と正直さの一文。海湖館の貸出は[湖西市観光の告知](https://hamanako-kosai.jp/news-event/7188/)（2024-07-16 掲載）で確認: NPO法人DIGtag から寄贈されたライフジャケットを貸し出し、海湖館受付で申し込む。**無料か・子ども用か・期間は告知に書いていない**ので、記事には「無料」と書かず「受付で借りられる（条件は海湖館へ）」までにする。海湖館は月曜（祝日なら翌日）と年末年始が休み |
| 2 | 舞阪堤のテトラで何を履くか | 滑りにくいアウトドアシューズ | スパイクの商品は置かない。本文に筆者の装備として書く |
| 3 | 岸釣りのライフジャケットの型 | ベスト型で小物も入るタイプ。もとはサーフのルアー釣りで使っていて、ルアーケースや仕掛けの小物が入り、持ち歩くものが決まっていれば取り回しがよい | ②の選ぶ基準（収納・ポケット）と理由 |
| 4 | 玉網の柄の長さ | 5.4mあればよい。最低でも3m以上 | ⑤の基準。砂揚げ場の本文の「4m以上」は、書き直すときに筆者の基準（5.4m、最低3m）に合わせる |
| 5 | ウェーディングでフローティングベストを着けるか | 着けている。小物が入るベスト式 | ②をウェーディングの記事にも置く。「筆者は着けている」と書ける |
| 6 | 家族・車横付けのクーラー | ダイワの25L（クールラインα3） | ③。筆者の装備として書ける |
| 7 | レンタルボート4本にカードを置くか | 初めてのシーバスのルアー釣りを想定するなら、シーバスのタックルセットがあればよい | ④をボートの記事に置く（場面: 初めてボートでシーバスを狙う） |

## 7. 次の手順

1. ~~ユーザーが §6 に答える~~（11/20 済み）。③④は yaml を作った（11/20、`check:tackle` OK）
2. CC が①②の型番を決め、販売ページ（ブラウザ）で ASIN と仕様を照らして yaml を作る。⑤はそのあと
3. §5 のスキーマ変更と、上位の竿・リールの `spec` 入力（CC か Codex のサイト改修）
4. §2・§3 の記事にカードを置く（書き手のサブエージェント。指示書は CC。ポイント記事は5段の型、上限3枚。§6 の回答を一次情報として渡す）。PV の多い順に、`araibenten-umiduripark`（①）→ `hamanako-fishing-rules-and-manners`（②③）→ `photonics-under`・`imagiremaisakatei`・`sunaageba`（②⑤）→ 家族・車のハブ（①③）→ レンタルボート4本（④）。③④だけで先に進められるのは、家族・車のハブとレンタルボート
5. 効果は `affiliate_view` に対するクリック率を公開の前後で比べる（`schedule-task.md` に載せる）
