# 月次記事「おすすめ対象魚」強化プラン

**作成日**: 2026-09-04
**目的**: 1〜12月それぞれの月次記事を「その月に釣れる対象魚」がわかる記事に強化する。

---

## 現状の構造的問題

### 問題1: 月次記事がポイント記事にしかリンクしていない

全12記事のBlogCardが**釣り場（points/*）への誘導のみ**。  
魚種別ターゲット記事（`target/*`）へのリンクが**1月・8月・9月・10月・11月・12月はゼロ**。  
7月のみ例外的に `tako-fukabori`・`haze-fukabori`（pontis/fukabori系）を参照。

→ 読者が「この月に何を釣ればいい？」と知りたいのに、**対象魚の詳細記事へ誘導されていない**。

### 問題2: 1月はBlogCardが完全ゼロ

`season/monthly/1-month/index.mdx`（168行）にBlogCardが一本もない。  
最も内部リンクが乏しい月。

### 問題3: season固有記事が月次記事から参照されていない

以下の記事が月次記事のBlogCardに含まれていない（孤立状態）：

| 記事スラッグ | 対応月 | 状態 |
|---|---|---|
| `01-january-kasago` | 1月 | 月次記事からリンクなし |
| `11-november-karei` | 11月 | 月次記事からリンクなし |
| `12-december-chinta` | 12月 | 月次記事からリンクなし |
| `hamanako-karei-fishing-season-opener` | 11〜12月 | 月次記事からリンクなし |
| `bachinuke-season-forecast-2026` | 2月 | 月次記事からリンクなし |
| `winter-anazuri-guide-2026` | 1〜2月 | 月次記事からリンクなし |

### 問題4: 9月の主力ターゲット（青物）のtarget記事が存在しない

9月のtargetFish: `シーバス、カンパチ、ワカシ、クロダイ`  
→ カンパチ・ワカシ（青物）に対応する `target/*` 記事がサイト内に存在しない。

---

## 月別 現状マップ

### 1月
- **タイトル**: カサゴ・カレイ穴釣りベストシーズン攻略
- **targetFish**: カサゴ、メバル、カレイ、クロダイ
- **BlogCard**: **なし（0本）**← 最優先で修正が必要
- **使えるtarget記事**: `winter-kasago`（カサゴ）/ `karei-beginner`・`karei-tactics` / `mebaru-kasago-beginner` / `kurodai/season/winter-tactics`
- **使えるseason記事**: `01-january-kasago`・`winter-anazuri-guide-2026`
- **不足**: target記事へのリンク全般

### 2月
- **タイトル**: バチ抜けシーバス開幕とメバルの荒食い
- **targetFish**: シーバス、メバル、カサゴ、クロダイ
- **BlogCard**: nagisaen・imagiremaisakatei・araibenten・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `haku-pattern`・`haku-sasuke`・`winter-shinp-strategy`・`winter-lunker`（シーバス） / `mebaru-kasago-beginner`・`winter-kasago`
- **使えるseason記事**: `bachinuke-season-forecast-2026`
- **不足**: シーバス・メバルのtarget記事リンク

### 3月
- **タイトル**: 乗っ込みクロダイ・バチ抜けシーバス春爆
- **targetFish**: クロダイ、シーバス、キビレ、メバル
- **BlogCard**: araibenten・nagisaen・setosuidou・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `spring-nokkomi-guide`・`chinu-nokkomi-bait`（クロダイ） / `haku-pattern`（シーバス） / `kibire-beginner`・`kibire-tactics`
- **不足**: target記事へのリンク

### 4月
- **タイトル**: 乗っ込みクロダイのクライマックスとサヨリ大回遊
- **targetFish**: サヨリ、クロダイ、シーバス、キビレ、コウイカ
- **BlogCard**: amihosiba・araibenten・nakanoshima・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `april-guide`・`large-sayori-guide`（サヨリ） / `spring-nokkomi-guide`（クロダイ） / `eging-aori-guide`（コウイカ）
- **不足**: target記事へのリンク

### 5月
- **タイトル**: シロキス接岸とマゴチ追従の春シンクロ
- **targetFish**: シロキス、マゴチ、クロダイ、アジ
- **BlogCard**: bentenjima・imagiremaisakatei・syounaiko・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `may-fishing`・`may-fishing-top5`・`kisu-beginner`（キス） / `magochi-bottom-wind`（マゴチ）
- **不足**: target記事へのリンク、マゴチ記事が1本のみ（充実度低）

### 6月
- **タイトル**: 梅雨のマダコ数釣りとチヌトップ開幕
- **targetFish**: マダコ、クロダイ、キビレ、シーバス
- **BlogCard**: bentenjima・murakushi・nakanoshima・yearly-calendar・rainy-day-fishing・wading-points（ポイント系）
- **使えるtarget記事**: `june-tako-opening`・`early-summer`・`tako-beginner`（タコ） / `kibire-tactics`（キビレ） / `chinutop-lures`（クロダイチヌトップ）
- **不足**: target記事へのリンク

### 7月
- **タイトル**: 夏休みファミリーサビキとハゼ釣りの黄金期
- **targetFish**: アジ、サバ、マハゼ、タコ
- **BlogCard**: araibenten・amihosiba・miyakodagawa・bentenjima・yearly-calendar・family-car-points・**tako-fukabori**・**haze-fukabori**（← points/fukabori 系で魚種深掘り済み）
- **状態**: 最も充実。ただし `target/*` への直接リンクではなくpoints/fukabori経由
- **追加できるtarget記事**: `haze-beginner`・`aji-saba-sappa-beginner`・`sabiki-guide`・`sabiki-set-comparison`

### 8月
- **タイトル**: 酷暑の夕釣りクロダイと澪筋戦略
- **targetFish**: クロダイ、キビレ、マハゼ、アジ
- **BlogCard**: imagiremaisakatei・amihosiba・bentenjima・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `august-hazekura`（ハゼ） / `chinutop-lures`・`kurodai-tactics`（クロダイ） / `kibire-tactics`（キビレ）
- **不足**: target記事へのリンク

### 9月
- **タイトル**: 落ちアユシーバスと青物ナブラの秋荒食い開幕
- **targetFish**: シーバス、カンパチ、ワカシ、クロダイ
- **BlogCard**: imagiremaisakatei・amihosiba・miyakodagawa・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `autumn-guide`・`bachinuke-forecast`（シーバス） / `kurodai-tactics`
- **★不足**: カンパチ・ワカシ（青物）の**target記事がサイト内に存在しない**
- **対応選択肢**: ① 青物target記事を新規作成 ② 9月の主役をシーバス・クロダイにフォーカスし直す

### 10月
- **タイトル**: ヒラメ接岸とコノシロシーバスの秋クライマックス
- **targetFish**: ヒラメ、シーバス、マコガレイ、サヨリ
- **BlogCard**: amihosiba・imagiremaisakatei・matsumigaura・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `november-guide`（ヒラメ）/ `autumn-guide`・`bachinuke-forecast`（シーバス） / `karei-beginner`（カレイ） / `large-sayori-guide`（サヨリ）
- **不足**: target記事へのリンク

### 11月
- **タイトル**: カレイ黄金期と落ちシーバスの秋最終章
- **targetFish**: カレイ、シーバス、ヒラメ、マハゼ
- **BlogCard**: araibenten・bentenjima・amihosiba・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `karei-beginner`・`karei-tactics`・`hamanako-karei-fishing-season-opener`・`11-november-karei` / `november-guide`（ヒラメ） / `november-ochihaze`（ハゼ）
- **不足**: target記事へのリンク

### 12月
- **タイトル**: カレイ最終章と冬のメバル・カサゴ穴釣り
- **targetFish**: カレイ、メバル、カサゴ、チンタ
- **BlogCard**: araibenten・sunaageba・imagiremaisakatei・yearly-calendar（ポイントのみ）
- **使えるtarget記事**: `karei-beginner`・`karei-tactics` / `winter-kasago`・`mebaru-kasago-beginner` / `12-december-chinta`
- **不足**: target記事へのリンク

---

## 優先修正ランク

### S: 最優先（月次記事が空に近い）
- **1月** → BlogCard=0本。target記事・season記事を追加

### A: 高優先（ポイント記事のみ、target記事が豊富に使える）
- **11月** → カレイ・ヒラメが充実。season固有記事も3本あり
- **2月** → バチ抜けシーバス season記事あり
- **12月** → カレイ・メバル・チンタのtarget記事あり

### B: 中優先（target記事を追加すれば完成する）
- **3月** → 乗っ込みクロダイ season記事あり
- **4月** → サヨリ season記事あり
- **6月** → タコ season記事あり
- **8月** → ハゼ season記事あり（august-hazekura）
- **10月** → ヒラメ・シーバス記事あり

### C: 要検討（target記事追加 + 魚種方針の見直し）
- **9月** → 青物のtarget記事なし → 方針確定が必要
- **5月** → マゴチ記事が薄い

### 現状で最も充実
- **7月** → fukabori記事まで入っており相対的に充実

---

## 実装状況（2026-09-04 完了）

全12月の月次記事にtarget/*・season/*記事のBlogCardを追加済み。

| 月 | 優先度 | 状態 | 追加した主なBlogCard |
|---|---|---|---|
| 1月 | S | ✅ 完了 | winter-kasago, karei-beginner, karei-tactics, mebaru-kasago-beginner, 01-january-kasago, winter-anazuri-guide-2026 |
| 2月 | A | ✅ 完了 | haku-pattern, haku-sasuke, winter-shinp-strategy, winter-lunker, mebaru-kasago-beginner, winter-kasago, bachinuke-season-forecast-2026 |
| 3月 | B | ✅ 完了 | spring-nokkomi-guide, chinu-nokkomi-bait, haku-pattern, kibire-beginner, kibire-tactics |
| 4月 | B | ✅ 完了 | april-guide, large-sayori-guide, spring-nokkomi-guide, aori-guide |
| 5月 | B | ✅ 完了 | may-fishing, may-fishing-top5, kisu-beginner, magochi-bottom-wind |
| 6月 | B | ✅ 完了 | june-tako-opening, early-summer, tako-beginner, kibire-tactics, chinutop-lures |
| 7月 | 充実 | ✅ 完了 | haze-beginner, aji-saba-sappa-beginner, sabiki-guide, sabiki-set-comparison |
| 8月 | B | ✅ 完了 | august-hazekura, chinutop-lures, kurodai-tactics, kibire-tactics |
| 9月 | C | ✅ 完了（方針②採用）| autumn-guide, bachinuke-forecast, kurodai-tactics, chinutop-lures ※青物（カンパチ・ワカシ）は浜名湖では難しいため対象から除外。frontmatter・本文・タイトル・まとめすべて修正済み |
| 10月 | B | ✅ 完了 | november-guide, autumn-guide, bachinuke-forecast, karei-beginner, large-sayori-guide |
| 11月 | A | ✅ 完了 | karei-beginner, karei-tactics, november-guide, november-ochihaze, 11-november-karei, hamanako-karei-fishing-season-opener |
| 12月 | A | ✅ 完了 | karei-beginner, karei-tactics, winter-kasago, mebaru-kasago-beginner, 12-december-chinta |

**残課題**: なし（9月の青物は浜名湖では難しいとして対象から除外済み）。

---

## 修正方針（各月共通）

各月次記事のBlogCardを以下の構成に揃える：

```
1. target/* の「ベスト1〜2魚種」の関連記事（beginner or tactics or season）
2. season固有記事（その月専用の season/xx 記事があれば）
3. 既存のポイント記事（現状のまま維持）
4. yearly-fishing-calendar（維持）
```

---

## 実装時の注意

- BlogCard の slug は**実在確認必須**（CLAUDE.md ハルシネーション防止ルール）
- 上記マップの「使えるtarget記事」スラッグはすべて `grep -r "^slug:"` で確認済み
- 9月の青物方針は着手前にユーザーに確認する
- season固有記事（01-january-kasago等）は月次記事に追加するだけでOK（記事自体の修正不要）
