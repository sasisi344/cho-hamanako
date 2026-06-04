# 🎣 ニッチキーワード（Niche KW）適応タスクリスト

このタスクリストは、浜名湖の釣りサイトにおける「初心者」と「経験者」の検索意図に基づいたニッチキーワードの抽出、既存記事との重複確認、および新規コンテンツの量産を目的としています。

**重複判定基準（2026-06-02）**: 検索意図・H2構成・紹介ポイントが既存記事とおおむね重なる場合は **類似40%以上** とみなし、新規作成タスクから除外し **リライト・統合・内部リンク強化** に切り替える。

---

## 📋 TODO（未完了）

> **確認日**: 2026-06-04 — リポジトリ実在チェック済み

- [ ] **フェーズ2（残）**: 夜釣り系への追記・相互リンク
  - ✅ 済: 今切口深掘り（`imagiremaisakatei`・`imagire-area-fukabori`）への下げ潮H3追記、`benten-nagashi-fishing` BlogCard
  - ✅ 済: `night-seabass` に下げ潮ドリフト・弁天流しリンク
  - ❌ 未: `night-float-fishing` → 今切口・下げ潮・`night-seabass` / `benten-nagashi-fishing` への相互リンク
  - ❌ 未: `night-fishing` → 電気ウキ・激流ポイント節の追記と上記記事への BlogCard

- [ ] **「特産グルメ × 釣り場」**（**要差別化・低優先・保留**）: kanko-hub グルメ節への追記で当面対応。単体記事化は次フェーズで判断。
  - 次フェーズ候補（`.workspace/.task/chousa-file.md` 参照）: うなぎ×釣り旅（優先A）、キャンプ×釣り（優先B）
  - 現状: `hamanako-kanko-hub` にうなぎ・みかんのテキスト言及あり。単体記事・BlogCard 化は未着手。

- [x] **GSC：URLリダイレクト処理の改善**（2026-06-04 実装済み）
  - ✅ `trailingSlash: "always"`（`astro.config.mjs`）— 既存設定を確認
  - ✅ canonical / sitemap / RSS は末尾スラッシュあり（`withTrailingSlash`・`@astrojs/sitemap`）
  - ✅ `generate_redirects.mjs` 改修: ポイント記事の正本 `/points/`、短縮 slug（`slug` / `wpSlug`）の301を一括生成
  - ✅ `.htaccess` 374ルール再生成: 旧WP URL・`/blog/kibire/` 等の短縮リンク・`/blog/points/*` → `/points/*`
  - ✅ 末尾スラッシュ強制ルールを全301の**後**に移動（二重リダイレクト防止）
  - ✅ 地図API・MDX内リンクの `/blog/points/` 誤パスを `/points/` に修正
  - 📌 **デプロイ後**: GSC でサイトマップ再送信 →「ページのインデックス登録」でリダイレクト警告の減少を確認


## 📅 進捗管理

- **開始日**: 2026-04-05
- **目標完了日**: 2026-04-15（重複整理によりスコープ縮小・フェーズ1を電車4選に集中）
- **ステータス**: フェーズ1・3完了（2026-06-03）。フェーズ2は今切口追記済み、夜釣り系相互リンクが残り。

---

<!--
================================================================================
以下、完了済みタスク（2026-06-04 整理時点）
================================================================================

## 🎯 1. ターゲット別キーワード選定 (Selection)

### 🌊 初心者 & ファミリー向け (Beginner/Family)

- [x] **「浜名湖 電車 釣り おすすめ 4選」**（**新規**）: 駅から徒歩圏内のポイントを横断比較する集約記事。各ポイント記事（弁天島・佐久米・寸座・三ヶ日など）に分散している情報のハブ役。
  - 完了: `guide/beginner/hamanako-train-fishing-spots`（2026-06-03）

### ⚓ 経験者 & 深掘りユーザー向け (Experienced/Core)

- [x] **「浜名湖 [特定ポイント] 激流 攻略法」**（**リライト・追記**）: 新規単体記事は作らない。既存の今切口・弁天島系記事へ下げ潮・流しの節を追記する形で対応。
  - 主対象: `points/omote/imagiremaisakatei`、`points/fukabori/imagire-area-fukabori`
  - 補助: `guide/method/night-seabass`、`guide/method/hamanako-kayak-fishing`
  - 完了: 下げ潮ドリフト攻略H3を両記事に追記、`benten-nagashi-fishing` BlogCard設置（2026-06-03）

### 🏢 観光 × 釣り ハイブリッド (Tourism x Fishing Hybrid)

- [x] **「観光名所 × 釣り」サジェストKWの抽出**（**調査タスク**）: ラッコキーワード等から観光スポット（弁天島、ガーデンパーク、はまゆう、みかん、うなぎ等）×「釣り」の組み合わせを洗い出す。公開記事化は `travel/hamanako-kanko-hub` の拡張と役割分担を決めてから。
  - 完了: `.workspace/.task/chousa-file.md` に調査結果まとめ（2026-06-03）
  - 新規記事候補: うなぎ×釣り旅（優先A）、キャンプ×釣り（優先B）
  - 即実施（完了）: kanko-hub に渚園BlogCard・みかん補足・電車4選BlogCardを追記

---

## 🚫 1-B. 新規作成から除外した項目（既存でカバー済み）

以下は **類似40%以上** のため、タスクリストから削除。必要なら既存記事のリライト・メタ・内部リンクのみ。

| 削除した予定KW | 代替・統合先（slug） | 理由（要約） |
| :--- | :--- | :--- |
| 釣り竿レンタル 完全ガイド | `travel/hamanako-rental-fishing-guide` | 今切ショップ・レンタル一式・新居町駅アクセス・日帰り/宿泊プランまで網羅済み |
| 手ぶら 釣り サービス | 上記 + `travel/hamanako-kanko-hub` | 観光客向け手ぶら体験は同一記事群で説明済み |
| 初心者 釣り 公園 3選 | `points/family-car-points`、`guide/beginner/family-car-fishing-points` | トイレ・駐車・安全柵付き公園系は6選まとめ＋個別ポイント記事で充足 |
| ウェーディング 毒魚対策 装備リスト | `points/wading-points`、`guide/beginner/hamanako-poisonous-fish-guide`、`target/seabass/tactics` | エイガード・すり足・毒魚・装備が分割済み。wading-points から毒魚ガイドへ BlogCard あり |
| 夜釣り 電気ウキ ポイント 5選 | `guide/method/night-float-fishing`、`guide/method/night-fishing` | 仕掛け理論＋おすすめスポット（弁天島・砂揚げ・橋脚）を既掲載 |
| タイダル（潮汐）影響 徹底分析 | `guide/theory/tide-table-logic`、`guide/theory/tidal-timing-logic` | 潮位ラグ・上げ3分下げ8分・潮の動きの理論を二層でカバー |
| 観光ついでに寄れるポイント | `travel/hamanako-kanko-hub`、`points/drive-fishing-spots`、`travel/kanzanji-fishing-walk-guide`、`points/naka/aeontown-kosai` | 短時間・観光メイン向けの立ち寄り釣りは旅行/ポイント系で説明済み |

**リライト候補（新規ではなく追記）**

- レンタル・手ぶら: 料金表の最新化・体験パッケージの追記 → `hamanako-rental-fishing-guide`
- 公園・ファミリー: 「公園」KW向けに見出し・要約のSEO調整 → `family-car-points`
- 電気ウキ: ポイントを5箇所に増やすなら → `night-float-fishing` または `night-fishing`
- 潮汐: 「潮止まり前後30分」見出しの明示 → `tidal-timing-logic`

---

## 🔍 2. 既存記事との重複・カニバリ確認 (Duplicate Check)

- [x] `src/content/blog/points/` 以下に「電車」「レンタル」の記載あり（弁天島・佐久米・寸座・三ヶ日・新居弁天・ボートレンタル各所など）。**集約記事「電車4選」のみ未整備** → 2026-06-03 整備済み。
- [x] `src/content/blog/guide/` の初心者・安全・夜釣り・潮汐系と予定KWの役割分担を整理（上表 1-B 参照）。
- [x] 重複分は「新規作成」→「リライト・統合」へ切り替え済み（2026-06-02）。

**電車アクセスが明記されている主な既存記事（4選記事の素材）**

| ポイント | slug（BlogCard用） | 駅・備考 |
| :--- | :--- | :--- |
| 弁天島海浜公園 | `bentenjimakaihinkouen` | JR弁天島駅 徒歩約3分 |
| 新居弁天海釣公園 | `araibenten-umiduripark` | JR新居町駅 徒歩圏 |
| 佐久米海岸 | `sakumekaigan` | 天竜浜名湖鉄道・佐久米駅 徒歩約3分 |
| 寸座 | `sunza` | 天竜浜名湖鉄道・寸座駅 |
| 三ヶ日駅周辺 | `mikkabi-eki` | 天竜浜名湖鉄道・三ヶ日駅 |
| 気賀（都田川河口） | `miyakodagawa` | 天竜浜名湖鉄道・気賀駅 徒歩圏 |

---

## ✍️ 3. コンテンツの量産計画 (Implementation Plan)

- [x] **フェーズ1**: **新規**「電車×釣り4選」の公開。レンタル・手ぶらは `hamanako-rental-fishing-guide` のリライト（料金・季節）で対応。
  - 完了: `guide/beginner/hamanako-train-fishing-spots`（2026-06-03）
- [x] **フェーズ2（激流・今切口）**: 今切口深掘り記事への下げ潮追記・BlogCard設置（2026-06-03）。夜釣り系相互リンクは TODO へ移動。
- [x] **フェーズ3**: kanko-hub に omote-area-travel・aeontown-kosai・kanzanji-fishing-walk-guide BlogCard を追加（2026-06-03）。

-->
