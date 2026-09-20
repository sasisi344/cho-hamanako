# 釣！浜名湖 — アクティブタスク

**最終整理**: 2026-09-17  
**管理方針**: このファイルが「今やること」の一覧。完了したタスクは `archive/` へ移動。詳細プランは個別ファイル参照。

## ✅ 完了フェーズ: 既存記事の整理・リライト（2026-09-19 完了）

re-createフェーズ全タスク完了。詳細は `archive/re-create-phase-completed-2026-09-19.md` 参照。
- cooking 14本リライト・クエリ改善A/B/C（24件）・奥浜名湖内部リンク・ゼロクリック7本タイトル最適化

---

## 🔴 W39 アクセス解析 → SEO改善タスク（2026-09-20 追加）

詳細・根拠: `.workspace/.task/W39-task.md`

### 優先度：高（表示多・CTR低 → タイトル/meta desc 改善でクリック増が見込める）

- [ ] `/points/ajing-fukabori`（アジング深掘り）
  タイトル・meta desc 改善（表示 708・CTR 5.9%・順位 8.79）
- [ ] `/blog/kibire-cooking`（キビレ料理）
  タイトル・meta desc 改善 + 導入文を「キビレ 食べ方」クエリに最適化
  （表示 504・CTR 2.2%・エンゲージメント率 0%）
- [ ] `/points/araibenten-umiduripark`（弁天海釣公園ポイント）
  タイトル・meta desc 改善 + 内部リンク追加
  （表示 1,348・CTR 6.1%・順位 10.65）

### 優先度：中（低順位×高CTR or 表示多・低CTR → 本文強化で順位改善）

- [ ] `/points/family-car-points`（車横付けポイント）
  本文強化・内部リンク追加（クリック 117・CTR 12.9%・順位 9.73 → 目標 5〜7 台）
- [ ] `/points/amihosiba`（網干場）
  タイトル改善 + 本文強化（表示 1,246・CTR 5.1%・順位 8.94）
- [ ] `/points/miyakodagawa`（都田川河口）
  タイトル見直し・ハゼシーズン対応（表示 489・CTR 3.1%・順位 8.82）
- [ ] `/blog/rental-boat-guide`（レンタルボートガイド）
  本文強化（クリック 54・CTR 15.7%・順位 9.18 → 順位改善狙い）
- [ ] `/points/washidukou`（鷲津港）
  meta desc 確認・追加（表示 24・CTR 0%・順位 6.0 でクリックゼロ）

### 優先度：低

- [ ] `/blog/9-month`（9月ガイド）導入文強化・秋記事への内部リンク（エンゲージメント率 12.5%）
- [ ] `/blog/guide/theory/hamanako-weather-vs-hamamatsu` タイトル確認（表示 50・CTR 0%・順位 7.4）

### 優先度：中〜高 ★構造的取りこぼし★ エリア横断KWへの非対応

**発見の経緯（W37）**: 「猪鼻湖 釣り」の順位が弱い原因を調査したところ、競合サイトは
「猪鼻湖」をタイトルに持つ"エリア全ポイントまとめページ"を持っていた。
当サイトは各スポットを個別ページ（`/points/sakujyoseki` `/points/ina` 等）で持つが、
「猪鼻湖」というエリア名でまとめたページがなく、エリア横断クエリを取りこぼしている。

**W39でも弱いことを確認**:
- 「猪鼻湖 釣り」: 32表示・順位10.84・CTR6.25%（クリック2）
- 「猪鼻湖 釣り ポイント」: 30表示・CTR0%・順位6.73
- 「庄内湖」: 76表示・CTR1.32%・順位10.18
- 「庄内湖 釣り」: 0クリック、表示3

**同じ取りこぼし構造が疑われるエリア**（GSCで要確認）:
| エリア名 | 対象クエリ例 | 既存の対応 |
|---------|------------|----------|
| 猪鼻湖 | 猪鼻湖 釣り・猪鼻湖 釣り ポイント | 個別ポイントページのみ |
| 庄内湖 | 庄内湖 釣り・庄内湖 釣り ポイント | 個別ポイントページのみ |
| 表浜名湖 | 表浜名湖 釣り ポイント | 個別ポイントページのみ |
| 奥浜名湖 | 奥浜名湖 釣り ポイント | `okuhamanako-haze-fishing` のみ |
| 中浜名湖 | 中浜名湖 釣り ポイント | 個別ポイントページのみ |

**対応の方向性（優先度 中）**:
- [ ] 各エリアのGSCクエリ（表示回数・順位）を一覧化し、取りこぼし規模を定量化
- [ ] 取りこぼし上位エリアから「エリアまとめページ」を新規作成 or 既存記事のタイトルにエリア名を追加
  - 例: 猪鼻湖なら `/blog/inoko-fishing-points`（猪鼻湖の釣りポイント完全ガイド）を新規作成し
    `sakujyoseki`・`ina`・`mikkabi-eki`・`pokochan-coast` を BlogCard でまとめる
  - または: `/blog/yearly-fishing-calendar` 等の既存エリア記事にセクション追加

---

## 🟡 次フェーズ: 低アクセス記事の継続監視・改善

### 1. ゼロインプレッション記事（要様子見）
- [ ] `guide/method/*` 新規4本（2026-09-04公開）— GSCインデックス取得まで様子見（10月以降確認）
- [ ] `season/*`・`travel/*` 系ゼロインプレ記事 — 季節到来後に表示増加を確認してから判断

### 2. target/kisu インデックス確認
- [ ] **低優先**: `target/kisu`（index・0refs）のGSCインデックス状況をSearch Consoleで確認

### 3. エンゲージメント率改善（全体27.5%）
- [ ] **低優先**: 滞在時間0ページの冒頭構成見直し（サイト全体の課題、個別対応は優先度低）

### 4. GSC手動作業（要ユーザー操作）
- [ ] 浜名湖ポイントインデックス確認（Search Consoleから手動リクエスト）
- [ ] OGP画像更新（主要points記事）

---

## 🟡 優先度 低・時期指定

### 4. amazon-sale-tackle-strategy 更新
- [ ] **2026-10月末**: `amazon-sale-tackle-strategy` の `upDate` 更新＋冬版チェックリスト差し替え（メバル・シーバス・防寒・照明）

### 5. キャンプ記事リサーチ
- [x] 浜名湖キャンプ場リサーチ完了（2026-09-04）
  - 調査済み: 渚園・カナル・パークビレッジ・ASOVIVA・one FRIT
  - ゆるキャン聖地×釣りセグメント・レンタル重要度分析済み
  - data-set更新済み: `.workspace/.data-set/travel-research/camp-fishing-nagisaen.md`
- [x] 記事化完了（2026-09-04）: `travel/hamanako-camp-fishing` リライト＆5施設拡張

---

## 参照ファイル（アクティブ）

| ファイル | 用途 |
|----------|------|
| `weekly-task.md` | 週次PDCAトラック・効果測定タスク |
| `affiliate-file.md` | 旅行系アフィリエイト改善の詳細（P2配置最適化が残件） |

## アーカイブ済みファイル（参照のみ）

`archive/` フォルダに格納。完了・不要と判断したもの。
- `re-create-phase-completed-2026-09-19.md`（re-createフェーズ全完了: cooking14本・クエリ改善24件・ゼロクリック7本タイトル最適化）
- `season-monthly-target-fish-restructure-completed-2026-09-04.md`（月次記事12本へtarget/*・season/*BlogCard追加完了 2026-09-04）
- `murakushi-rental-completed-2026-09-16.md`（村櫛エリア新規記事見送り判断＋既存記事リライト、釣具レンタルオンラインサービス調査＆新規記事化・旧記事統合 完了 2026-09-16）
- `tactics-article-briefs.md`・`tactics-expansion-plan.md`（tactics 4記事完了 2026-09-04）
- `kurodai-new-session.md`・`search-intent-content-restructure.md`（クロダイ教科書完成・complete-guide削除・BlogCard修正完了 2026-09-04）
- 旅行アフィリエイト基本配置（unagi/camp/kanko-hub の3記事に楽天・じゃらん・asoview 配置完了 2026-09-04）
- `chousa-file.md`（観光KW調査 → weekly-task.mdに統合済み・完了）
- `cooking-post.md`（cooking20本目標達成済み）
- `method-guide-rewrite-task.md`（guide/method・theory リライト完了）
- `analytics-tracking-setup.md`（計測タグ実装完了）
- `content-linking-map.md`（古い内部リンク設計図 → 新方針に吸収）
- `query-check.md`（古いGSCデータ分析 → 現行データで管理）
- `ajing-rulecolor-check.md`（スクレイパー設計図 → 優先度低で棚上げ）
- `catch-data-scraper-requirements.md`（釣果スクレイパー設計図 → 優先度低で棚上げ）
