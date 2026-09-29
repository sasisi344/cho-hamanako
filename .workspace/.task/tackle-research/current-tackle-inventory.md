# 現在のTackleCard採用アイテム一覧

**作成日**: 2026-09-24
**集計方法**: `src/content/affiliates/` 配下の全YAML（221件）と、`src/content/blog` 全体での `<TackleCard id="...">` 実使用回数を突合。
**サマリー**: 登録商品 221件のうち、記事内で実際に使用されているのは 178件。未使用は 43件。

## ⚠️ 壊れているTackleCard参照（要修正・別件バグ）

記事内で `<TackleCard id="...">` が指定されているが、対応する `affiliates/` のYAMLが存在しないもの。本番では赤い「⚠️ Tackle ID not found」エラー枠が表示されている状態。合計 17件。今回のリサーチとは別件だが、実装済みの記事に実害が出ているため優先度高で別タスク化を推奨。

| ID（記事内指定） | 使用箇所 | 使用回数 |
|---|---|---|
| `daiwa-silver-wolf-air` | `src/content/blog/points/fukabori/chining-fukabori/index.mdx`<br>`src/content/blog/points/fukabori/magochi-fukabori/index.mdx` | 2 |
| `seabass/switch-hitter-85s` | `src/content/blog/points/fukabori/mio-suji-area-fukabori/index.mdx` | 1 |
| `seabass/shimano-exsence-silent-assassin-129f` | `src/content/blog/points/fukabori/seabass-season-fukabori/index.mdx` | 1 |
| `seabass/daiwa-lates-93ml` | `src/content/blog/points/fukabori/wading-seabass-fukabori/index.mdx` | 1 |
| `ogk-hasu-combo` | `src/content/blog/points/fukabori/haze-fukabori/index.mdx` | 1 |
| `octopus/megabass-taco-le-99` | `src/content/blog/points/fukabori/tako-fukabori/index.mdx` | 1 |
| `octopus/daiwa-taco-x` | `src/content/blog/points/fukabori/tako-fukabori/index.mdx` | 1 |
| `mu-mukai-haze-crank` | `src/content/blog/points/fukabori/haze-fukabori/index.mdx` | 1 |
| `kurodai/decoy-easyset-chining` | `src/content/blog/target/kurodai/index.mdx` | 1 |
| `kisu-tactics/sasame-karei-assault` | `src/content/blog/points/fukabori/mio-suji-area-fukabori/index.mdx` | 1 |
| `fishing-gear/tsurikens-zen-circular` | `src/content/blog/points/fukabori/mejina-fukabori/index.mdx` | 1 |
| `fishing-gear/daiwa-nanome-iso` | `src/content/blog/points/fukabori/mejina-fukabori/index.mdx` | 1 |
| `daiwa-kisu-special` | `src/content/blog/points/fukabori/kisu-fukabori/index.mdx` | 1 |
| `daiwa-emeraldas-air` | `src/content/blog/points/fukabori/eging-fukabori/index.mdx` | 1 |
| `daiwa-cool-line-800` | `src/content/blog/points/fukabori/haze-fukabori/index.mdx` | 1 |
| `common/shimano-vanquish-c3000` | `src/content/blog/points/fukabori/boat-seabass-fukabori/index.mdx` | 1 |
| `common/shimano-stradic-c3000hg` | `src/content/blog/points/fukabori/wading-seabass-fukabori/index.mdx` | 1 |

---

## 未使用アイテム（どの記事にも貼られていない）

- `common/begrit-sup-anchor`
- `common/best-seller-air-mat`
- `common/daiichiseiko-kousoku-recycler`
- `common/daiwa-hg-shoulder-bag`
- `common/daiwa-polarize-dn-8025`
- `common/eenour-car-refrigerator`
- `common/fkstyle-2hp-outboard`
- `common/gymax-floattube`
- `common/hamamatsu-gyoza-gomihatchin`
- `common/hamanako-unagi-deshiko`
- `common/hewflit-rowboat`
- `common/irisplaza-soft-cooler`
- `common/logos-hyper-hyotenka-cooler-l`
- `common/lsd-one-shot-side`
- `common/oakley-frogskins-polarized`
- `common/onlystyle-shachuhaku-mat`
- `cooking/green-perch`
- `cooking/hayakawa-sasara`
- `cooking/irokcakpt-whetstone`
- `cooking/latuna-cutting-board`
- `cooking/okamoto-pichit-regular`
- `cooking/pearlmetal-bone-tweezers`
- `cooking/sekimagoroku-hekiju-sashimi-210`
- `cooking/shapton-ha-no-kuromaku-1000`
- `flatfish/sample`
- `haze/sample`
- `kurodai/daiwa-liberty-club-isokaze`
- `kurodai/luckycraft-lv-revelation`
- `kurodai/shimano-slx-71xg`
- `kurodai/shimano-ultegra-c5000xg`
- `kurodai/yamatoyo-flouro-harris-common`
- `naturum/ajing`
- `naturum/daiwa`
- `naturum/egi`
- `naturum/seabass`
- `naturum/text-link`
- `seabass/daiwa-liberty-club-t15-300-k`
- `seabass/lumica-power-float`
- `seabass/owner-maru-seigo-hook`
- `travel/asoview-text`
- `travel/jalan-net-text`
- `travel/uqey-banner`
- `travel/uqey-text`

---

## aji-saba-sappa

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 5 | `aji-saba-sappa/hayabusa-sabiki-set` | ハヤブサ かんたん飛ばしサビキセット 4本鈎 | ハヤブサ | アジ・サバ・イワシ・サッパ | サビキ釣り・投げサビキ | 仕掛け・サビキセット |
| 4 | `aji-saba-sappa/hayabusa-koaji-senka` | ハヤブサ(Hayabusa) 小アジ専科 ツイストケイムラレインボー | ハヤブサ(Hayabusa) | アジ・サバ・サッパ | サビキ釣り | 仕掛け |
| 4 | `aji-saba-sappa/morigen-esatsuke-meijin` | もりげん(MORIGEN) P-700 エサつけ名人 | もりげん | アジ・サバ・イワシ・サッパ | サビキ釣り・トリックサビキ | 便利グッズ・サビキ用品 |
| 4 | `aji-saba-sappa/sabiki-starter-set` | つり具TEN サビキ釣り入門 完全セット | clubTEN | アジ・サバ・サッパ | サビキ釣り | セット |
| 3 | `aji-saba-sappa/23-legalis-lt2000s-p` | ダイワ(DAIWA) 23レガリス LT2000S-P | ダイワ(DAIWA) | アジ・メバル・カサゴ | ルアー釣り | リール |
| 3 | `aji-saba-sappa/ajimebyte-worm-30pcs` | TACKLAND アジメバイト(アジングワーム) 30本セット | TACKLAND | アジ・メバル・カサゴ | ルアー釣り | ルアー |
| 3 | `aji-saba-sappa/gekkabijin-ajing-68ls` | ダイワ(DAIWA) アジングロッド 月下美人 68L-S・R | ダイワ(DAIWA) | アジ・メバル・カサゴ | ルアー釣り | ロッド |
| 3 | `aji-saba-sappa/owner-sabiki-base` | オーナー(OWNER) ショートハイパーパニック7 | オーナー | アジ・サバ・イワシ・サッパ | サビキ釣り・パニックサビキ | 仕掛け・サビキ |
| 2 | `aji-saba-sappa/ajing-worm-set-55pcs` | アジング・メバリング用 ワーム55本セット | TWINFALCONS | アジ・メバル・カサゴ | ルアー釣り | ルアー |
| 2 | `aji-saba-sappa/daiwa-aji-hunter` | ダイワ(DAIWA) 快適職人サビキ ウィリー5本 MIX | ダイワ | アジ・サバ・イワシ・サッパ | サビキ釣り・投げサビキ | 仕掛け・サビキ |
| 2 | `aji-saba-sappa/shimano-holiday-iso-450pts` | シマノ(SHIMANO) ホリデー 磯 450PTS | シマノ(SHIMANO) | アジ・サバ・サッパ・クロダイ・キビレ | サビキ釣り・餌釣り | ロッド |

## common

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 15 | `common/jesbasaro-lifejacket` | JES-BASARO (ジェスバサロ) 手動膨張式 ライフジャケット | JES-BASARO | 全魚種 | ボート釣り・カヤック・SUP | 安全装備 |
| 7 | `common/gentos-headlight-cb-300d` | ジェントス LEDヘッドライト CB-300D | ジェントス | 全魚種 | 夜釣り | その他 |
| 5 | `common/shimano-ultegra-c3000` | シマノ アルテグラ C3000 | シマノ | 全魚種 | ルアーフィッシング・エギング・シーバスゲーム | リール |
| 3 | `common/daiwa-liberty-club-isokaze` | ダイワ リバティクラブ 磯風 | ダイワ | クロダイ・メジナ・キビレ・アジ・サバ | サビキ釣り・ウキフカセ・ウキ釣り | ロッド |
| 3 | `common/jackery-portable-power-station` | Jackery ポータブル電源 | Jackery |  | 遠征・宿泊・車中泊 | 車中泊グッズ |
| 3 | `common/shimano-holiday-iso` | シマノ ホリデー磯 | シマノ | アジ・サバ・クロダイ・キビレ | サビキ釣り・ウキ釣り・投げウキ釣り | ロッド |
| 3 | `common/shimano-sedona-c3000` | シマノ セドナ C3000 | シマノ | 全魚種 | 投げ釣り・ルアーフィッシング・サビキ釣り | リール |
| 3 | `common/shimano-vanford` | シマノ (SHIMANO) スピニングリール 24 ヴァンフォード C3000HG | シマノ | シーバス・クロダイ・キビレ・メバル | ルアー釣り・チニング | リール |
| 3 | `common/sunpercy-pedal-kayak` | サンパーシー ペダル式カヤック フィッシング | サンパーシー | 全魚種 | ボート釣り・カヤック | ボート・SUP |
| 2 | `common/aquamarina-fishing-boat` | アクアマリーナ(AQUA MARINA) ゴムボート BT-88890 | AQUA MARINA | 全魚種 | ボート釣り | ボート・SUP |
| 2 | `common/daiwa-light-trunk-alpha-gu3200` | ダイワ ライトトランクα GU3200 | ダイワ | シーバス・クロダイ・ヒラメ・マゴチ | ルアーフィッシング・船釣り・エサ釣り | クーラーボックス |
| 2 | `common/kisangel-kayak-flag` | Kisangel カヤックフラッグポール 120CM 安全旗 | Kisangel | 全魚種 | ボート釣り・カヤック・SUP | 安全装備 |
| 2 | `common/lamicall-waterproof-case` | Lamicall IPX8 防水スマホケース 2枚セット | Lamicall | 全魚種 | ボート釣り・カヤック・SUP・ウェーディング | 安全装備 |
| 2 | `common/meihou-vs-3010ndm` | メイホウ (MEIHO) バーサス VS-3010NDM | メイホウ | 全魚種 | ルアーフィッシング・エギング | 収納・ケース |
| 2 | `common/seaplus-fishing-sup` | SEAPLUS サップ スタンドアップパドルボード 釣りフルセット | SEAPLUS | 全魚種 | ボート釣り・SUP | ボート・SUP |
| 1 | `common/abu-garcia-one-shoulder-bag` | アブガルシア (Abu Garcia) ワンショルダーバッグ | アブガルシア | クロダイ・キビレ・シーバス・ハゼ | ルアーフィッシング・エギング・ハゼクラ | 収納・バッグ |
| 1 | `common/captainstag-inflatable-kayak` | キャプテンスタッグ(CAPTAIN STAG) インフレータブルカヤック カヌー US-1003 | CAPTAIN STAG | 全魚種 | ボート釣り・カヤック | ボート・SUP |
| 1 | `common/daiwa-legalis` | ダイワ(DAIWA) スピニングリール 23レガリス LT3000-CXH | ダイワ(DAIWA) | シーバス・クロダイ・マゴチ | ルアー釣り・餌釣り | リール |
| 1 | `common/daiwa-liberty-club-t15` | ダイワ リバティクラブ T15-300・K | ダイワ | キス・シーバス・キビレ・クロダイ | 投げ釣り・ブッコミ釣り | ロッド |
| 1 | `common/daiwa-mobile-thermometer` | ダイワ 水温チェッカー | ダイワ | 全魚種 | 水温計測 | common |
| 1 | `common/sanka-cooler-6bl` | サンカ ワンブッシュで開閉できるクーラー 6BL | サンカ | ハゼ・キス | エサ釣り・ライトゲーム | クーラーボックス |
| 1 | `common/shimano-lure-tackle-set` | シマノ ルアー釣りセット（ルアーマチック S86ML & PEライン糸巻済リール） | シマノ | シーバス・クロダイ・キビレ・マゴチ | ルアーフィッシング・チニング | タックルセット・ロッド・リール |
| 1 | `common/shimano-polarize-hg-066n` | シマノ (SHIMANO) 撥水ハーフフィッシンググラスPC HG-066N | シマノ | 全魚種 | 船釣り・堤防釣り・波止釣り | アイウェア |
| 0 | `common/begrit-sup-anchor` | BeGrit カヤックアンカー アンカー牽引ロープ アンカーキット | BeGrit | 全魚種 | ボート釣り・SUP・カヤック | ボート・SUP |
| 0 | `common/best-seller-air-mat` | Amazonベストセラー エアーマット | Amazon |  | 遠征・車中泊・キャンプ | 車中泊グッズ |
| 0 | `common/daiichiseiko-kousoku-recycler` | 第一精工 高速リサイクラー2.0 | 第一精工 | 全魚種 | 全釣法 | メンテナンス・小物 |
| 0 | `common/daiwa-hg-shoulder-bag` | ダイワ (DAIWA) HGショルダーバッグLT (C) | ダイワ | クロダイ・キビレ・シーバス・ハゼ | ルアーフィッシング・ライトゲーム | 収納・バッグ |
| 0 | `common/daiwa-polarize-dn-8025` | ダイワ (DAIWA) 偏光グラス DN-8025 | ダイワ | クロダイ・キビレ・シーバス | トップウォーター・ウェーディング | アイウェア |
| 0 | `common/eenour-car-refrigerator` | EENOUR 車内冷蔵庫 | EENOUR |  | 遠征・宿泊・車中泊 | 車中泊グッズ |
| 0 | `common/fkstyle-2hp-outboard` | Fkstyle 空冷式2ストローク 2馬力船外機モーター | Fkstyle | 全魚種 | ボート釣り | ボート・SUP |
| 0 | `common/gymax-floattube` | GYMAX 釣り用フローター | GYMAX | 全魚種 | フローター | ボート・SUP |
| 0 | `common/hamamatsu-gyoza-gomihatchin` | 五味八珍「冷凍」浜松餃子 | 五味八珍 |  | 土産・グルメ | お土産・グルメ |
| 0 | `common/hamanako-unagi-deshiko` | 浜名湖うなぎ「でしこ」 | うなぎのたなか |  | 土産・グルメ | お土産・グルメ |
| 0 | `common/hewflit-rowboat` | Hewflit フィッシングボート オール2本セット | Hewflit | 全魚種 | ボート釣り | ボート・SUP |
| 0 | `common/irisplaza-soft-cooler` | アイリスプラザ ソフトクーラーボックス | アイリスプラザ |  | ライトゲーム・ピクニック | クーラーボックス |
| 0 | `common/logos-hyper-hyotenka-cooler-l` | ロゴス ハイパー氷点下クーラーL | ロゴス |  | キャンプ・遠征・宿泊 | クーラーボックス |
| 0 | `common/lsd-one-shot-side` | LSDデザインズ ワンショットサイド | LSDデザインズ | ハゼ・メバル・カサゴ | ハゼクラ・ライトゲーム | 収納・バッグ |
| 0 | `common/oakley-frogskins-polarized` | オークリー (Oakley) Frogskins (偏光モデル) | オークリー | クロダイ・キビレ・シーバス | 観光・ルアーフィッシング | アイウェア |
| 0 | `common/onlystyle-shachuhaku-mat` | オンリースタイル 車中泊専用マット | オンリースタイル |  | 遠征・宿泊・車中泊 | 車中泊グッズ |

## cooking

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 4 | `cooking/shimomura-verdun-deba-150` | 下村工業 ヴェルダン 出刃庖丁 150mm OVD-15 | 下村工業 | 全魚種 | 料理 | 包丁 |
| 4 | `cooking/shimomura-verdun-scissors` | 下村工業 ヴェルダン キッチンバサミ2 OVK-2 | 下村工業 | 全魚種 | 料理 | 小物 |
| 4 | `cooking/wadaisuke-brass-scaler` | 和平フレイズ 味道 真鍮うろコ取り 大 AD-235 | 和平フレイズ | 全魚種・マダイ・クロダイ | 料理 | 小物 |
| 2 | `cooking/kai-fish-bone-tweezers` | 貝印 骨抜き（先斜め）DH7134 | 貝印 | 全魚種 | 料理 | 小物 |
| 2 | `cooking/lumica-ikijime-set` | ルミカ 神経締めセット ロング A20242 | ルミカ | 全魚種 | 下処理 | 小物 |
| 2 | `cooking/okamoto-pichit-regular-32` | オカモト 業務用ピチット レギュラー 32枚ロール | オカモト | 全魚種 | 料理・熟成 | 消耗品 |
| 1 | `cooking/sekimagoroku-ginju-sashimi-210` | 貝印 関孫六 銀寿 本鋼 刺身包丁 210mm AK5207 | 貝印 | 全魚種 | 料理 | 包丁 |
| 1 | `cooking/shinden-brass-scaler` | 浅野木工所 真鍮ウロコ取 大 08035 | 浅野木工所 | 全魚種・マダイ・クロダイ | 料理 | 小物 |
| 0 | `cooking/green-perch` | グリーンパーチ 魚を包む緑の紙 | 不明 | 全魚種 | 料理・熟成 | 消耗品 |
| 0 | `cooking/hayakawa-sasara` | 早川工業 PP魚の内臓取り ササラ | 早川工業 | 全魚種 | 料理 | 小物 |
| 0 | `cooking/irokcakpt-whetstone` | IROKCAKPT 包丁研ぎ石 #1000/#6000 | IROKCAKPT | 全魚種 | メンテナンス | 小物 |
| 0 | `cooking/latuna-cutting-board` | Latuna 抗菌 まな板 ノンスリップ 33.5ｘ23.5cm | Latuna | 全魚種 | 料理 | 小物 |
| 0 | `cooking/okamoto-pichit-regular` | オカモト 業務用ピチット レギュラー 32枚ロール | オカモト | 全魚種 | 料理・熟成 | 消耗品 |
| 0 | `cooking/pearlmetal-bone-tweezers` | パール金属 ベジライブ ステンレス 骨抜き CC-1101 | パール金属 | 全魚種 | 料理 | 小物 |
| 0 | `cooking/sekimagoroku-hekiju-sashimi-210` | 貝印 関孫六 碧寿 ST 和包丁 刺身 210mm AK5076 | 貝印 | 全魚種 | 料理 | 包丁 |
| 0 | `cooking/shapton-ha-no-kuromaku-1000` | シャプトン 刃の黒幕 オレンジ 中砥 #1000 | シャプトン | 全魚種 | メンテナンス | 小物 |

## eging

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 3 | `eging/daiwa-emeraldas-83m` | ダイワ エメラルダス 83M・J | ダイワ | アオリイカ・コウイカ | エギング | ロッド |
| 3 | `eging/duel-ez-q-mag-cast` | DUEL EZ-Q マグキャスト 3.0号 | DUEL | アオリイカ・コウイカ | エギング | ルアー |
| 3 | `eging/marushin-kouika-buster-2` | マルシン漁具 ドラゴン コウイカバスター2 | マルシン漁具 | コウイカ | エギング | ルアー |
| 2 | `eging/daiwa-emeraldas-83m-j` | ダイワ エメラルダス 83M・J | ダイワ | アオリイカ・コウイカ | エギング | ロッド |
| 2 | `eging/duel-ez-q-a1756-kvrp` | デュエル EZ-Q キャスト 喰わせ 3号 | デュエル | アオリイカ・コウイカ | エギング | ルアー |
| 2 | `eging/gamakatsu-kouika-leader` | がまかつ コウイカリーダー 2本仕掛 | がまかつ | コウイカ | エギング | ライン |
| 1 | `eging/friday-ika-gaff-300` | Friday イカギャフ 300 | Friday | アオリイカ・コウイカ | エギング | その他 |
| 1 | `eging/shimano-sephia-master-flouro-leader` | シマノ セフィア マスターフロロリーダー | シマノ | アオリイカ・コウイカ | エギング | ライン |
| 1 | `eging/shimano-sephia-master-fluoro-leader` | シマノ セフィア マスターフロロリーダー | シマノ | アオリイカ・コウイカ | エギング | ライン |

## flatfish

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 5 | `flatfish/jackson-teppan-blade-20g` | ジャクソン テッパンブレード 20g | ジャクソン | ヒラメ・マゴチ・シーバス | ルアーフィッシング | ルアー |
| 5 | `flatfish/magochi-jighead` | オンスタックル(OZ Tackle) ZZヘッド | OZ Tackle | マゴチ・シーバス | ボトムワインド | ルアー・ジグヘッド |
| 5 | `flatfish/magochi-worm` | オンスタックル(OZ Tackle) マナティー | OZ Tackle | マゴチ・シーバス | ボトムワインド | ルアー・ワーム |
| 4 | `flatfish/shimano-silent-assassin-80s` | シマノ エクスセンス サイレントアサシン 80S AR-C | シマノ | ヒラメ・マゴチ・シーバス | ルアーフィッシング | ルアー |
| 3 | `flatfish/duo-beach-walker-flipper-z24` | DUO ビーチウォーカー フリッパー Z24 | DUO | ヒラメ・マゴチ | ルアーフィッシング | ルアー |
| 3 | `flatfish/owner-teibo-nomase-set-h6253` | オーナー 堤防 泳がせのませ遊動胴突 H-6253 | オーナー | ヒラメ・マゴチ・青物 | エサ釣り・泳がせ釣り | 仕掛け |
| 2 | `flatfish/major-craft-maki-jig-jet` | メジャークラフト マキジグ ジェット 30g | メジャークラフト | マゴチ・ヒラメ・シーバス・青物 | ショアジギング・ライトショアジギング | ルアー・メタルジグ |
| 2 | `flatfish/tacklehouse-rolling-bait-77` | タックルハウス ローリングベイト 77 | タックルハウス | ヒラメ・マゴチ・シーバス | ルアーフィッシング | ルアー |
| 0 | `flatfish/sample` | DUO ビーチウォーカー ハウル 21g | DUO | マゴチ・ヒラメ | フラットフィッシュ | ルアー |

## haze

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 6 | `haze/lucky-craft-hazedra` | ラッキークラフト ハゼアン 35DR (ハゼクラ) | ラッキークラフト | ハゼ | ハゼクラ | ルアー |
| 6 | `haze/sasame-choi-haze-set-5go` | ささめ針 ちょいハゼセット 5号 | ささめ針 | ハゼ | 投げ釣り | 仕掛け |
| 3 | `haze/luckycraft-clutch-dr` | ラッキークラフト クランクベイト クラッチDR | ラッキークラフト | ハゼ | ハゼクランク | ルアー |
| 3 | `haze/marukyu-power-isome-brown-m` | マルキュー パワーイソメ (中) 茶イソメ | マルキュー | ハゼ | ミャク釣り・ウキ釣り・投げ釣り | エサ |
| 2 | `haze/sasame-haze-set` | ささめ針 ちょいハゼセット 9号 | ささめ針 | ハゼ | 投げ釣り | 仕掛け |
| 2 | `haze/shimano-lurematic-trout` | シマノ(SHIMANO) ルアーマチック S60UL (トラウト推奨モデル) | シマノ | ハゼ・トラウト・セイゴ・クロダイ（チンタ） | ハゼクランク・エリアトラウト・ライトゲーム | ロッド・スピニングロッド |
| 1 | `haze/abu-troutfield-tfs-502ul` | アブガルシア トラウトフィールド TFS-502UL | アブガルシア | ハゼ | ハゼクランク | ロッド |
| 1 | `haze/alive-nasu-omori-2go` | アライブ ナスオモリパック 2号 | アライブ | ハゼ | 投げ釣り | オモリ |
| 1 | `haze/daiwa-liberty-club-53-q` | ダイワ リバティクラブ 硬調53・Q | ダイワ | ハゼ | ミャク釣り・ウキ釣り | ロッド |
| 1 | `haze/daiwa-liberty-club-short-swing-10-330` | ダイワ リバティクラブ ショートスイング 10号-330・N | ダイワ | ハゼ | 投げ釣り | ロッド |
| 1 | `haze/duel-cn500-2go` | デュエル カーボナイロンライン CN500 2号 | デュエル | ハゼ | ミャク釣り・ウキ釣り・投げ釣り | ライン |
| 1 | `haze/gamakatsu-onidume-haze-m` | がまかつ サポートフック鬼爪 ハゼクラスペシャル M | がまかつ | ハゼ | ハゼクランク | フック |
| 1 | `haze/owner-haze-light-hot-6go` | オーナー ハゼライト 糸付 6号 | オーナー | ハゼ | ミャク釣り | 仕掛け |
| 1 | `haze/sasame-haze-tama-uki-36m-4go` | ささめ針 ハゼ玉ウキ仕掛けセット(3.6m) 4号 | ささめ針 | ハゼ | ウキ釣り | 仕掛け |
| 1 | `haze/shimano-sedona-c2000shg` | シマノ 23 セドナ C2000SHG | シマノ | ハゼ | ハゼクランク | リール |
| 1 | `haze/sunline-small-game-leader-fc-5lb` | サンライン ソルティメイト スモールゲームリーダー FC 5lb | サンライン | ハゼ | ハゼクランク | ライン |
| 0 | `haze/sample` | ダイワ ハゼクランク ピーナッツ | ダイワ | ハゼ | ハゼクランク | ルアー |

## karei

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 4 | `karei/daiwa-prime-surf-t25-405-w` | ダイワ プライムサーフ T25-405・W | ダイワ | カレイ・キス | 投げ釣り | ロッド |
| 3 | `karei/berkley-sw-pulse-worm` | バークレー SWパルスワーム | バークレー | カレイ・アイナメ・カサゴ | カレイング・ロックフィッシュ | ルアー |
| 3 | `karei/sasame-canon-ball-karei` | ささめ針 一投入魂キャノンボールカレイ | ささめ針 | カレイ | 投げ釣り | 仕掛け |
| 2 | `karei/daiwa-pr100h` | ダイワ PR100H | ダイワ | カレイ・カワハギ・カサゴ | 船釣り・ボート釣り | リール |
| 2 | `karei/owner-funa-karei-base` | オーナー 船カレイの基本 | オーナー | カレイ | 船釣り・ボート釣り | 仕掛け |
| 1 | `karei/daiwa-21-karei-82-160` | ダイワ 21 カレイ 82-160 | ダイワ | カレイ | 船釣り・ボート釣り | ロッド |
| 1 | `karei/yamatoyo-flouro-shock-leader` | ヤマトヨテグス フロロショックリーダー | ヤマトヨテグス | カレイ・シーバス | カレイング・ルアーフィッシング | ライン |

## kawahagi

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 5 | `kawahagi/prox-kawahagi-game-st2` | プロックス カワハギゲームST2 | プロックス | カワハギ | 船釣り | ロッド |
| 3 | `kawahagi/daiwa-d-max-kawahagi-ss` | ダイワ D-MAX カワハギ糸付き 30SS ネオフック | ダイワ | カワハギ | エサ釣り・船釣り・堤防釣り | フック |
| 3 | `kawahagi/daiwa-pr100h` | ダイワ PR100H | ダイワ | カワハギ・カレイ | 船釣り・ボート釣り | リール |
| 3 | `kawahagi/gamakatsu-iso-kawahagi-perfect` | がまかつ 磯カワハギパーフェクト仕掛 | がまかつ | カワハギ | 堤防釣り・胴突き釣り | 仕掛け |
| 3 | `kawahagi/marukyu-power-isome-brown-m` | マルキュー パワーイソメ (中) 茶イソメ | マルキュー | カワハギ・ハゼ・キス | 投げ釣り・堤防釣り | エサ |
| 2 | `kawahagi/sasame-k-902-nage-kawahagi` | ささめ針 投げカワハギ | ささめ針 | カワハギ | 投げ釣り | 仕掛け |
| 2 | `kawahagi/shimano-kawahagi-miki-ito` | シマノ カワハギ幹糸仕掛け | シマノ | カワハギ | 船釣り | 仕掛け |

## kibire

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 3 | `kibire/bremia-risewalk-65f` | シマノ ブリームエディション ライズウォーク 65F | シマノ | クロダイ・キビレ | チヌトップ | ルアー・トップウォーター |
| 3 | `kibire/shimano-bremia-bb-s78ml` | シマノ ブレニアス BB S78ML | シマノ | キビレ・クロダイ | チニング・ライトゲーム | ロッド・スピニングロッド |
| 2 | `kibire/gamakatsu-ken-tsuki-maru-seigo` | がまかつ ケン付き丸セイゴ | がまかつ | キビレ・クロダイ・シーバス | ブッコミ釣り | その他 |
| 2 | `kibire/ima-chappy-80` | ima チャッピー 80 | ima | キビレ・クロダイ・シーバス | ルアーフィッシング・トップゲーム | ルアー・ペンシルベイト |
| 2 | `kibire/ima-popkey-80` | ima ポッキー 80 | ima | キビレ・クロダイ・シーバス | ルアーフィッシング・トップゲーム | ルアー・ペンシルベイト |
| 2 | `kibire/shimano-holiday-iso-400` | シマノ ホリデー磯 4号 400 | シマノ | キビレ・クロダイ・スズキ | ウキ釣り・サビキ釣り | ロッド |
| 2 | `kibire/shimano-holiday-spin-405ext` | シマノ ホリディースピン 405EXT | シマノ | キビレ・クロダイ・キス | 投げ釣り・ブッコミ釣り | ロッド |
| 2 | `kibire/toray-super-strong-float` | 東レ スーパーストロング ハイポジションフロート | 東レ | キビレ・クロダイ・メジナ | ウキ釣り | ライン |
| 1 | `kibire/dress-fish-grip-twin-gold` | DRESS フィッシュグリップ ツインゴールド | DRESS | キビレ・クロダイ・シーバス | 全般 | その他 |
| 1 | `kibire/duel-pe-line-4colors` | DUEL PEライン 4色マーキング | DUEL | キビレ・クロダイ・シーバス | ブッコミ釣り・投げ釣り | ライン |

## kisu

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 4 | `kisu/hayabusa-light-shot-set` | ハヤブサ ライトショット 投げキスセット | ハヤブサ | キス・ハゼ | 投げ釣り | ライン |
| 3 | `kisu/fuji-waraku-tenbin` | ミニジェット天秤 2JO-S 8号 | 富士工業 | シロギス・ハゼ・カレイ | ちょい投げ・投げ釣り | 天秤・釣具 |
| 3 | `kisu/hayabusa-nage-kisu-tenbin-hayagake-2hon` | ハヤブサ 投げキス天秤式 早掛キス 2本鈎 | ハヤブサ | キス | 投げ釣り | 仕掛け |
| 3 | `kisu/marukyu-power-mini-isome-red-4-5cm` | マルキュー パワーミニイソメ(約4.5cm) 赤イソメ | マルキュー | キス | 投げ釣り | エサ |
| 3 | `kisu/shimano-active-cast` | シマノ アクティブキャスト 1050 | シマノ | キス・カレイ | 投げ釣り | リール |
| 2 | `kisu/sasame-kisu-base-hook` | ささめ針(SASAME) キス 仕掛け | ささめ針 | シロギス | 投げ釣り・ちょい投げ | 仕掛け・キス仕掛け |
| 2 | `kisu/shimano-kisu-special-taper-pl-n71q` | シマノ キススペシャル テーパー PL-N71Q | シマノ | キス | 投げ釣り | ライン |
| 1 | `kisu/hayabusa-kisu-hook` | ハヤブサ(Hayabusa) 投げキス 3本鈎 2セット | ハヤブサ | シロギス | 投げ釣り・ちょい投げ | 仕掛け・キス仕掛け |

## kurodai

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 8 | `kurodai/zipbaits-fakee-dog-ds` | ジップベイツ ザブラ フェイキードッグ DS | ジップベイツ | クロダイ・キビレ | トップゲーム | ルアー |
| 6 | `kurodai/shimano-bream-game` | シマノ ブリームゲーム | シマノ | クロダイ・キビレ | チニング | ロッド |
| 5 | `kurodai/decoy-easy-set-chining` | デコイ イージーセット チニング | デコイ | クロダイ・キビレ | ボトムゲーム | ルアー |
| 4 | `kurodai/megabass-popping-duck` | メガバス POPPING DUCK | メガバス | クロダイ・キビレ | トップゲーム | ルアー |
| 3 | `kurodai/gamakatsu-chinu-hook` | がまかつ 糸付 海上のチヌ | がまかつ | クロダイ | 前打ち・ダンゴ釣り・ウキフカセ | 針 |
| 3 | `kurodai/zipbaits-zabra-popper` | ジップベイツ ザブラポッパー | ジップベイツ | クロダイ・キビレ | トップゲーム | ルアー |
| 2 | `kurodai/invicta-rnd-bg-85` | 宇崎日新 インヴィクタ RND-BG-85 | 宇崎日新 | クロダイ | 前打ち・落とし込み | リール |
| 2 | `kurodai/marukyu-power-dango-chinu` | マルキユー パワーダンゴチヌ | マルキユー | クロダイ | ダンゴ釣り | その他 |
| 2 | `kurodai/owner-boke-hook` | オーナー(OWNER) バラ ボケ専用 (ヒネリなし) | オーナー(OWNER) | クロダイ・キビレ | フカセ釣り・ウキ釣り・ミャク釣り | 針 |
| 2 | `kurodai/shimano-risewalk` | シマノ ライズウォーク 65S | シマノ | クロダイ・キビレ | トップゲーム | ルアー |
| 2 | `kurodai/yamatoyo-chinu-harris` | ヤマトヨテグス チヌハリス 50m | ヤマトヨテグス | クロダイ | 前打ち・ダンゴ釣り・ウキフカセ | ライン |
| 1 | `kurodai/akemigai-bait` | 赤貝ムキミ | Local | クロダイ・キビレ | ブッコミ釣り・フカセ釣り | エサ |
| 1 | `kurodai/prominent-multi-kurodai-ug` | 宇崎日新 プロミネント マルチ クロダイUG 3304 | 宇崎日新 | クロダイ | 前打ち・ダンゴ釣り | ロッド |
| 1 | `kurodai/seaguar-pe-x8` | クレハ シーガー PE X8 200m | クレハ | クロダイ・シーバス・メバル | ルアーフィッシング・ウキフカセ | ライン |
| 1 | `kurodai/shimano-sedona-c2000shg` | シマノ セドナ C2000SHG | シマノ | クロダイ・メバル・アジ・シーバス | ウキフカセ・ライトゲーム | リール |
| 1 | `kurodai/tacklehouse-resistance-pencil` | タックルハウス レジスタンス | タックルハウス | クロダイ・キビレ | トップゲーム | ルアー |
| 0 | `kurodai/daiwa-liberty-club-isokaze` | ダイワ リバティクラブ 磯風 1.5-53・K | ダイワ | クロダイ・メジナ・アジ・サバ | ウキフカセ・サビキ釣り・ダンゴ釣り | ロッド |
| 0 | `kurodai/luckycraft-lv-revelation` | ラッキークラフト LV レボリューション | ラッキークラフト | クロダイ・キビレ | ボトムゲーム | ルアー |
| 0 | `kurodai/shimano-slx-71xg` | シマノ SLX 71XG | シマノ | クロダイ・シーバス | チニング | リール |
| 0 | `kurodai/shimano-ultegra-c5000xg` | シマノ アルテグラ C5000XG | シマノ | クロダイ・シーバス | チニング・シーバスゲーム | リール |
| 0 | `kurodai/yamatoyo-flouro-harris-common` | ヤマトヨテグス フロロハリス 10m | ヤマトヨテグス | クロダイ・シーバス | チニング・シーバスゲーム | ライン |

## mebaru-kasago

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 4 | `mebaru-kasago/23-gekkabijin-lt2000s-p` | ダイワ 23 月下美人 LT2000S-P | ダイワ | メバル・カサゴ・アジ | ライトゲーム・メバリング・アジング | リール・スピニングリール |
| 4 | `mebaru-kasago/owner-ainame-brakuri` | オーナー あいなめブラクリ | オーナー | カサゴ・アイナメ | 穴釣り | その他 |
| 4 | `mebaru-kasago/tiemco-super-living-fish` | ティムコ スーパーリビングフィッシュ | ティムコ | メバル・アジ | フライフィッシング・ライトゲーム | ルアー |
| 3 | `mebaru-kasago/daiwa-hardrock-k` | ダイワ HARDROCK X 86MHB・K | ダイワ | メバル・カサゴ・キジハタ | ロックフィッシュ | ロッド |
| 2 | `mebaru-kasago/daiwa-pr100-h` | ダイワ PR100H | ダイワ | カサゴ・アイナメ | 穴釣り | リール |
| 2 | `mebaru-kasago/ogk-fune-kawahagi` | OGK 船カワハギ 175 | OGK | カサゴ・カワハギ | 穴釣り | ロッド |
| 1 | `mebaru-kasago/daiwa-pr100-hl` | ダイワ PR100HL | ダイワ | メバル・カサゴ | ロックフィッシュ・穴釣り | リール |
| 1 | `mebaru-kasago/daiwa-tatula-100-xhl` | ダイワ 24 TATULA TW 100XHL | ダイワ | メバル・クロダイ・シーバス | ロックフィッシュ・チニング | リール |
| 1 | `mebaru-kasago/goture-fly-rod-set` | Goture フライフィッシング スターターキット | Goture | メバル・ニジマス | フライフィッシング | ロッド |
| 1 | `mebaru-kasago/maxcatch-fly-line` | Maxcatch フライフィッシングライン | Maxcatch | メバル | フライフィッシング | ライン |
| 1 | `mebaru-kasago/yamatoyo-flouro-value` | ヤマトヨテグス フロロバリュー 500m | ヤマトヨテグス | カサゴ・魚種全般 | 穴釣り・その他 | ライン |

## mejina

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 2 | `mejina/daiwa-liberty-club-isokaze-mejina` | ダイワ リバティクラブ 磯風 1.5-45・K | ダイワ | メジナ・クロダイ | ウキフカセ | ロッド |
| 2 | `mejina/duel-pink-flouro-iso` | デュエル 魚に見えないピンクフロロ 磯ハリス | デュエル | メジナ・クロダイ | ウキフカセ | ライン |
| 2 | `mejina/duel-tg-wave-master` | デュエル TG ウェーブマスター | デュエル | メジナ・クロダイ | ウキフカセ | その他 |
| 2 | `mejina/owner-keimura-okiamigure` | オーナー ケイムラ沖アミグレ | オーナー | メジナ | ウキフカセ | 針 |
| 1 | `mejina/dress-bakkan-amazon` | DRESS バッカンミニ+Plus Amazon限定ロゴモデル | DRESS | 魚種全般 | ウキフカセ・サビキ釣り・ルアー | その他 |
| 1 | `mejina/shimano-ultegra-c3000xg` | シマノ アルテグラ C3000XG | シマノ | メジナ・魚種全般 | ウキフカセ・ルアー | リール |
| 1 | `mejina/toray-super-strong-float` | 東レ スーパーストロング ハイポジションフロート | 東レ | メジナ・アジ・サバ | ウキフカセ・サビキ釣り | ライン |
| 1 | `mejina/tsulino-bucket-rope` | Tsulino 網付き水汲みバケツ 21cm | Tsulino | 魚種全般 | エサ釣り・ルアー | その他 |
| 1 | `mejina/varivas-varmas-iso` | バリバス バーマックス磯 蛍光イエロー | バリバス | メジナ・クロダイ | ウキフカセ | ライン |

## naturum

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 1 | `naturum/shimano` | シマノ製品特集 | SHIMANO |  |  | brand |
| 1 | `naturum/top` | ナチュラム TOP | ナチュラム |  |  | common |
| 0 | `naturum/ajing` | アジング特集 | ナチュラム | aji |  | ajing |
| 0 | `naturum/daiwa` | ダイワ特集 | DAIWA | common |  | brand |
| 0 | `naturum/egi` | エギ特集 | ナチュラム | squid |  | eging |
| 0 | `naturum/seabass` | シーバスルアー特集 | ナチュラム | seabass |  | seabass |
| 0 | `naturum/text-link` | アウトドア＆スポーツ ナチュラム | ナチュラム |  |  | common |

## sayori

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 7 | `sayori/owner-sokkou` | オーナー(OWNER) 釣り日和 速攻サヨリ仕掛 3-0.8-2 | オーナー | サヨリ | 浦安釣法・エサ釣り | 仕掛け |
| 6 | `sayori/ss-2-ex` | 工房浦安 スーパーサヨリン2EX 夜光 M 黄プロペラ | 工房浦安 | サヨリ | 浦安釣法 | 仕掛け・ウキ |
| 3 | `sayori/marufuji-trick` | マルフジ(Marufuji) P-084 サヨリトリック 4号 | マルフジ | サヨリ | エサ釣り・バケ | 仕掛け |
| 3 | `sayori/owner-buttobasi` | オーナー(OWNER) ぶっ飛びサヨリ仕掛け 3.5-0.6-4 | オーナー | サヨリ | エサ釣り | 仕掛け |

## seabass

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 10 | `seabass/duo-bay-ruf-manic-95` | DUO(デュオ) シンキングペンシル ベイルーフ マニック95 | DUO | シーバス・キビレ | バチ抜けパターン・ドリフト | ルアー・シンキングペンシル |
| 9 | `seabass/jackson-nyoro-nyoro-85` | ジャクソン(Jackson) シンキングペンシル にょろにょろ 85mm | ジャクソン | シーバス・メバル | バチ抜けパターン・スローリトリーブ | ルアー・シンキングペンシル |
| 8 | `seabass/pickup-nogare-120f` | ピックアップ(Pick Up) ノガレ120F | Pickup | シーバス | バチ抜けパターン・デッドスロー | ルアー・フローティング |
| 7 | `seabass/pykes-peak-wader-summer` | PYKES PEAK 夏用ウェーダー ラジアルソール | PYKES PEAK | シーバス・クロダイ | ウェーディング | その他 |
| 6 | `seabass/bassday-range-vib-70es` | バスデイ レンジバイブ 70ES | バスデイ | シーバス・クロダイ・フラットフィッシュ | シーバスゲーム・チニング | ルアー |
| 6 | `seabass/daiwa-seabass-hunter-x` | ダイワ シーバスハンターX 90L・R | ダイワ | シーバス・クロダイ | シーバスゲーム・チニング | ロッド |
| 6 | `seabass/little-presents-ray-guard-oa-24` | リトルプレゼンツ エイガード OA-24 | リトルプレゼンツ | 全魚種 | ウェーディング | その他 |
| 6 | `seabass/sasuke-sf75` | アイマ(ima) サスケ(sasuke) SF-75 | ima | シーバス・クロダイ | ハクパターン・デッドスロー | ルアー・ミノー |
| 6 | `seabass/shimano-exsence-silent-assassin` | シマノ エクスセンス サイレントアサシン 99F | シマノ | シーバス・サワラ | シーバスゲーム | ルアー |
| 5 | `seabass/daiwa-silverwolf-76ml-s-w` | ダイワ シルバーウルフ 76ML-S・W | ダイワ | シーバス・クロダイ・キビレ | ウェーディング・チニング | ロッド |
| 5 | `seabass/dress-chloroprene-wader-winter` | DRESS クロロプレン ラジアルソール ウェーダー | DRESS | シーバス・クロダイ | ウェーディング | その他 |
| 5 | `seabass/shimano-exsence-silent-assassin-99f` | シマノ エクスセンス サイレントアサシン 99F | シマノ | シーバス・クロダイ・サワラ | シーバスゲーム・チニング | ルアー・フローティングミノー |
| 4 | `seabass/fuji-tokki-ff-n30lg-float` | 富士灯器 涙型自立電気ウキ FF-N30LG 3号 緑 | 富士灯器 | シーバス・タチウオ・キビレ | ウキ釣り・夜釣り | その他 |
| 4 | `seabass/shimano-encounter-s96m` | シマノ エンカウンター S96M | シマノ | シーバス・クロダイ・ヒラメ | シーバスゲーム・チニング | ロッド |
| 3 | `seabass/corsair-65` | エバーグリーン(EVERGREEN) コルセア65 | EVERGREEN | シーバス・クロダイ | ハクパターン・シンキングペンシル | ルアー・シンペン |
| 3 | `seabass/pazdesign-feel-120` | パズデザイン(Pazdesign) フィール 120 (feel 120) | パズデザイン | シーバス・クロダイ | バチ抜けパターン・ドリフト | ルアー・シンキングペンシル |
| 2 | `seabass/daiwa-morethan-pe-tw` | ダイワ モアザン PE TW 1000XH-TW | ダイワ | シーバス | シーバスゲーム | リール |
| 2 | `seabass/little-presents-wading-staff-ac-184` | リトルプレゼンツ ウェーディングスタッフ AC-184 | リトルプレゼンツ | 全魚種 | ウェーディング | その他 |
| 1 | `seabass/daiwa-hvf-land-surf` | ダイワ ランドサーフT 25-405・J | ダイワ | シーバス・クロダイ・キス | ブッコミ釣り・投げ釣り | ロッド |
| 0 | `seabass/daiwa-liberty-club-t15-300-k` | ダイワ リバティクラブ T15-300・K | ダイワ | シーバス・クロダイ・キス | 投げ釣り・ブッコミ釣り | ロッド |
| 0 | `seabass/lumica-power-float` | ルミカ 烈光 Aタイプ 3号 | ルミカ | シーバス・タチウオ・クロダイ | ウキ釣り・夜釣り | その他 |
| 0 | `seabass/owner-maru-seigo-hook` | オーナー 糸付 丸セイゴ 14号 | オーナー | シーバス・セイゴ・マダイ | ウキ釣り・投げ釣り | 針 |

## tako

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 10 | `tako/yamashita-tako-tenya` | ヤマシタ タコ掛 投用 LL40 | ヤマシタ | タコ | タコテンヤ | その他 |
| 6 | `tako/dragon-octopus-tap` | マルシン漁具 オクトパスタップ 3.5号 | マルシン漁具 | タコ | タコエギング | ルアー |
| 5 | `tako/abu-tacosfield-762h` | アブガルシア タコスフィールド TKFS-762H | アブガルシア | タコ | タコエギング・タコテンヤ | ロッド |
| 4 | `tako/daiwa-fune-xt-150pl` | ダイワ フネ XT 150PL-OP | ダイワ | タコ | タコエギング・タコテンヤ | リール |
| 4 | `tako/marushin-tako-net-dx` | マルシン漁具 タコ入れ網DX L | マルシン漁具 | タコ | タコエギング・タコテンヤ | その他 |
| 1 | `tako/line-system-nylon-shock-leader` | ラインシステム ナイロンショックリーダー | ラインシステム | タコ・大型魚 | タコエギング・ショアジギング | ライン |

## travel

| 使用回数 | ID | 商品名 | ブランド | 対象魚種 | 釣法 | カテゴリ |
|---|---|---|---|---|---|---|
| 13 | `travel/jalan-net-banner` | じゃらんnet（バナー） | リクルート |  | 遠征・宿泊 | 旅行・宿泊 |
| 13 | `travel/rakuten-travel-stay` | 楽天トラベル（宿泊） | 楽天トラベル |  | 観光・遠征 | 旅行・観光 |
| 4 | `travel/asoview-banner` | asoview!（アソビュー！）バナー | asoview! |  | 観光・レジャー | 旅行・観光 |
| 4 | `travel/rakuten-travel-car` | 楽天トラベル（レンタカー） | 楽天トラベル |  | 観光・レンタカー | 旅行・観光 |
| 0 | `travel/asoview-text` | asoview!（アソビュー！） | asoview! |  | 観光・レジャー | 旅行・観光 |
| 0 | `travel/jalan-net-text` | じゃらんnet | リクルート |  | 遠征・宿泊 | 旅行・宿泊 |
| 0 | `travel/uqey-banner` | Uqey（ユーキー）バナー | Uqey |  | 観光・レンタカー | 旅行・観光 |
| 0 | `travel/uqey-text` | 待たないレンタカー【Uqey（ユーキー）】 | Uqey |  | 観光・レンタカー | 旅行・観光 |
