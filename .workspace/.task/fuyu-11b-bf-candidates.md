# FUYU-11b ブラックフライデー2026 セール対象の候補リスト

作成: 2026-11-19（CC）。11/27 の朝に、このファイルの表をそのまま埋めて使う。

## 前提

- 期間（Amazon 公式 [aboutamazon.jp](https://www.aboutamazon.jp/news/retail/amazon-black-friday-2026)、11/19 更新）: **先行セール 11/27（金）0:00〜11/29（日）23:59、本セール 11/30（月）0:00〜12/07（月）23:59**
- どの商品がセール対象かは、先行セールの始まる **11/27 まで分からない**。このリストは「確認する候補」であって、対象の予想を記事に書くためのものではない
- 記事には**価格・割引率を書かない**（`winter-monetization-2026-11.md` §3）。書くのは「〇月〇日時点で対象だった」ことと、確かめた日だけ
- 対象は期間中に入れ替わる。先行（11/27）と本番の初日（11/30）の2回確認する

## 確認の手順（11/27・11/30）

1. 下の表の ASIN を上から順に `https://www.amazon.co.jp/dp/<ASIN>` で開く（ログインした状態のブラウザ。ログインなしでは表示が安定しない）
2. 商品ページに「ブラックフライデー先行セール」「ブラックフライデー」などのセールのバッジ、またはタイムセールの表示があるかを見る。クーポンだけの場合は「クーポン」と書く（セール対象とは分ける）
3. 結果欄に `対象`／`クーポン`／`対象外`／`在庫なし` のどれかを書く
4. 優先 A を先に済ませる（BF の2記事に出ている商品）。時間がなければ B は 11/30 に回してよい
5. `対象` が出たら、下の「反映の型」で記事を直し、main へ出す承認の表をユーザーに見せる（`src/**` なので deploy が走る）

## 候補の表

「見込み」は**予想**（カテゴリの傾向。モバイルバッテリー系の家電・定番の日用品・大手ブランドはセールに入りやすい）で、確認の順番の参考にするだけ。記事には使わない。

### 優先 A: BF の2記事に出ている商品（21件）

記事: `amazon-sale-tackle-strategy`（セール）、`winter-cold-protection-guide`（防寒）

| ID | 商品 | ASIN | 出ている BF 記事 | ほかの掲載数 | 見込み | 11/27 | 11/30 |
|---|---|---|---|---|---|---|---|
| winter/umibozu-3finger-glove | UMIBOZU フィッシンググローブ 3フィンガー 裏起毛 | B0CQ1M9ZW6 | 防寒 | 6 | 中 | 表示なし（親ページ。サイズ未選択で価格・バッジが出ない） | |
| winter/thermos-ffx-502 | サーモス 山専用ステンレスボトル FFX-502 0.5L | B0FVCJYBW9 | 防寒 | 4 | 高 | 対象外 | |
| winter/hokkairo-haru-30 | ホッカイロ 貼る レギュラー 30個入 | B00O7H046C | 防寒 | 1 | 高 | クーポン | |
| winter/mazume-winter-boots | マズメ ウインターブーツ MZRB-806 | B0DFKMNB65 | 防寒 | 1 | 低 | 対象外 | |
| winter/daiwa-rainmax-winter-suit | ダイワ RAINMAX ウインタースーツ DW-3525 | B0FNR2QP1Z | 防寒 | 0 | 中 | 対象外 | |
| winter/makku-bousui-bokan-suit | マック 防水防寒スーツ 耐水圧10,000mm | B09HMG9LBF | 防寒 | 0 | 中 | 対象外 | |
| winter/otafuku-inner-glove | おたふく手袋 冬用防寒インナーグローブ 下履き用 | B0CDPH6DBG | 防寒 | 0 | 中 | 対象外 | |
| winter/otafuku-neckwarmer-jw124 | おたふく手袋 冬用ネックウォーマー JW-124 | B00EVN5UWA | 防寒 | 0 | 中 | 対象外 | |
| winter/otafuku-thermodeo-highneck | おたふく手袋 冬用インナー 長袖ハイネック サーモデオ JW-275 | B08KHYTP61 | 防寒 | 0 | 中 | **対象** | |
| common/gentos-headlight-cb-300d | ジェントス LEDヘッドライト CB-300D | B06XQ5NRB6 | セール | 8 | 高 | 対象外 | |
| common/jesbasaro-lifejacket | JES-BASARO 手動膨張式 ライフジャケット | B07YWGH228 | セール | 11 | 低 | **対象** | |
| mebaru-kasago/23-gekkabijin-lt2000s-p | ダイワ 23 月下美人 LT2000S-P | B0CCN5L6F6 | セール | 5 | 中 | 対象外 | |
| seabass/daiwa-seabass-hunter-x | ダイワ シーバスハンターX 90L・R | B08VD8624M | セール | 6 | 中 | 対象外 | |
| seabass/dress-chloroprene-wader-winter | DRESS クロロプレン ラジアルソール ウェーダー | B0CKBQJMCM | セール | 4 | 低 | 在庫なし | |
| tako/abu-tacosfield-762h | アブガルシア タコスフィールド TKFS-762H | B00WKXB1T4 | セール | 4 | 中 | 在庫なし | |
| common/daiwa-light-trunk-alpha-gu3200 | ダイワ ライトトランクα GU3200 | B083WGJM7D | セール | 1 | 中 | 対象外 | |
| common/meihou-vs-3010ndm | メイホウ バーサス VS-3010NDM | B000AR3LDG | セール | 1 | 中 | 対象外 | |
| common/lamicall-waterproof-case | Lamicall IPX8 防水スマホケース 2枚セット | B0BQRCN4B1 | セール | 1 | 高 | **対象** | |
| common/aquamarina-fishing-boat | アクアマリーナ ゴムボート BT-88890 | B06XR46NG7 | セール | 1 | 低 | 対象外 | |
| common/sunpercy-pedal-kayak | サンパーシー ペダル式カヤック フィッシング | B095NR3QWX | セール | 2 | 低 | 対象外 | |
| common/jackery-portable-power-station | Jackery ポータブル電源 | —（A8 のリンク。Amazon ではない） | セール | 1 | 別扱い | | |

- Jackery は A8 経由で公式ストアへ飛ぶリンクなので、Amazon のセールとは別。公式ストアの BF セールの有無を見て、ある場合だけ書くかを決める（A8 のプログラムの規約で、セールの文言に制限がないかを先に確かめる）

### 優先 B: 冬カードのうち BF の2記事にないもの（9件）

対象になっても、BF の2記事に足すかは別に決める（防寒ガイドの節に合うものだけ）。

| ID | 商品 | ASIN | 掲載している記事 | 見込み | 11/27 | 11/30 |
|---|---|---|---|---|---|---|
| winter/samonic-rechargeable-warmer | SAMONIC 充電式カイロ 12000mAh | B0CH88R9WY | なし（未掲載） | 高 | **対象** | |
| winter/shimano-basic-warm-glove | シマノ ベーシックウォーム グローブ 3本カット | B0FKGFVT6Z | なし（未掲載） | 中 | 表示なし（親ページ） | |
| winter/daiwa-winter-boots-wr3302 | ダイワ 防寒ブーツ WR-3302 | B09K2KJ9JH | なし（未掲載） | 中 | 対象外 | |
| winter/otafuku-thermodeo-tights | おたふく手袋 冬用ロングタイツ サーモデオ JW-274 | B08KHZH1LF | なし（未掲載） | 中 | 対象外 | |
| winter/nt-benzine-500ml | タカビシ化学 カイロ用NTベンジン 500ml | B005CIVO78 | なし（未掲載） | 低 | 対象外（値引き表示・クーポンあり、BFバッジなし） | |
| winter/ten-anazuri-set | つり具TEN 穴釣り 完全釣りセット エサ付 | B0GN64MRSH | なし（未掲載） | 低 | 対象外 | |
| winter/hakkin-warmer-standard | ハクキンカイロ ハクキンウォーマー スタンダード | B00N4FDANC | `season/monthly/1-month` | 中 | 対象外（値引き表示あり、BFバッジなし） | |
| winter/daiwa-anazuri-senka | ダイワ 穴釣り専科 | B083SF82FD | `season/winter-anazuri-guide-2026` ほか1 | 中 | 対象外（値引き表示・クーポンあり、BFバッジなし） | |
| winter/fivestar-kiwakko | FIVE STAR 防波堤 穴釣り竿 キワっ子 | B07Z7RKSD1 | `target/mebaru-kasago/beginner` | 低 | 表示なし（親ページ） | |

- 未掲載の6件は、対象になっても記事に新しくカードを置くのは FUYU-11b の範囲外（置くなら別タスク）。SAMONIC（充電式カイロ）だけは防寒ガイドの「熱源」の節に合うので、対象なら足す案をユーザーに出す

## 反映の型（11/27 に `対象` が出たら）

価格と割引率は書かない。確かめた日を必ず入れる。

- 防寒ガイド（`winter-cold-protection-guide`）: 期間の段落（「2026年の Amazon ブラックフライデーは〜」）の直後に1段落足す

  > 11月27日に確かめたところ、この記事で紹介している〇〇と〇〇は、先行セールの対象になっていました。対象は期間中に入れ替わることがあるので、買う前に商品ページで確かめてください。

- セール記事（`amazon-sale-tackle-strategy`）: 「11月前後（ブラックフライデー）」の節の期間の文の直後に、同じ形で1文足す。対象が1件もなければ何も足さない
- 11/30 の確認で対象が変わったら、日付と商品名を書き換える（「11月30日に確かめたところ〜」）
- 12/08 以降: セールの段落を消すか、「2026年は〜でした」の過去形に直すかを決める（FUYU-11c の最後）

## 結果の記録

11/27・11/30 の確認が済んだら、表の結果欄を埋め、ここに1行ずつ書く。

- 11/27: ログインしたブラウザで29件の商品ページの「ブラックフライデー先行セール」のバッジを確認（CC）。対象は4件: おたふく サーモデオ ハイネック JW-275（防寒ガイド）、JES-BASARO ライフジャケット・Lamicall 防水ケース（セール記事）、SAMONIC 充電式カイロ（未掲載）。2記事に「11月27日時点で対象」の1文を反映（価格・割引率は書かない）。SAMONIC を防寒ガイドの熱源の節に足すかはユーザー判断。Jackery（A8）は未確認
- 11/30:
