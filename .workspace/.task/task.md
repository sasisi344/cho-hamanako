# 釣！浜名湖 — アクティブタスク

**最終整理**: 2026-09-26
**管理方針**: このファイルが「今やること」の一覧。完了したタスクは `archive/` へ移動。詳細プランは個別ファイル参照。

## ✅ 完了フェーズ: 既存記事の整理・リライト（2026-09-22 完了分を反映）

re-createフェーズ全タスク完了。詳細は `archive/re-create-phase-completed-2026-09-19.md` 参照。
- cooking 14本リライト・クエリ改善A/B/C（24件）・奥浜名湖内部リンク・ゼロクリック7本タイトル最適化

**2026-09-22 追加完了**（コミット `d279407`）:
- `points/oku/inahako` 新設（猪鼻湖エリアまとめページ、庄内湖と同型）
- `target/kurodai/beginner` タイトル変更 → 正本記事とのKWカニバリ解消
- `points/omote/araibenten-umiduripark` サビキ/青物セクション見出し最適化
- W39優先度「高」3件中2件完了: `points/fukabori/ajing-fukabori`・`target/kibire/cooking`（キビレ食べ方導線追加）
- W39優先度「中」5件中3件完了: `points/family-car-points`・`points/omote/amihosiba`・`points/naka/washidukou`・`guide/logistics/rental-boat-guide`
- W39優先度「低」1件完了: `guide/theory/hamanako-weather-vs-hamamatsu`
- 2026-09-26: W39優先度「低」`points/omote/nagisaen` エンゲージメント改善（導入Callout＋キャンプ/表浜名湖ハブへのBlogCard）→ **W39全件完了**
- 2026-09-26: `Callout.astro` の `title` prop が描画されていなかった不具合を修正

---

## ✅ W39 残タスク → 2026-09-22 完了

詳細・根拠: `.workspace/.task/W39-task.md`

- [x] `/points/araibenten-umiduripark` タイトル・meta desc改善（「ライブカメラ・サビキ・青物」をタイトルに明示。GSCで表示114件・CTR6.1%の「新居弁天海釣公園 ライブカメラ」等を狙う）
- [x] `/points/miyakodagawa`（都田川河口） タイトルに「時期・仕掛け」追加＋冒頭に「ハゼ釣りの時期はいつ？」即答Calloutを新設（「都田川 ハゼ釣り 時期」等のクエリ対応）
- [x] `/blog/9-month`（9月ガイド） 導入文を落ちアユ×秋クロダイ訴求に強化＋`10-month`へのBlogCard追加

### 効果測定（着手済みタスクの追跡）

- [ ] 上記3件 + `araibenten-umiduripark`セクション見出し改善分の効果測定（目安 W41 = 2026-10月上旬にGSCで確認）
- [ ] クロダイKWカニバリ解消の効果測定（目安 W41にGSCで正本記事の順位変化を確認）

### 優先度：中〜高 ★構造的取りこぼし★ エリア横断KWへの非対応

**発見の経緯（W37）**: 「猪鼻湖 釣り」の順位が弱い原因を調査したところ、競合サイトは
「猪鼻湖」をタイトルに持つ"エリア全ポイントまとめページ"を持っていた。
当サイトは各スポットを個別ページ（`/points/sakujyoseki` `/points/ina` 等）で持つが、
「猪鼻湖」というエリア名でまとめたページがなく、エリア横断クエリを取りこぼしていた。

- [x] **猪鼻湖**: `points/oku/inahako` 新設で対応完了（2026-09-22）
- [x] **庄内湖**: `points/oku/syounaiko` が既存のエリアまとめ型ページ（inahako新設時に参照元として確認済み）
- [x] **表浜名湖**: `points/omote/omote-hamanako-fishing-points` 新設で対応完了（2026-09-22）。13ポイントを3クラスター（西部・今切口〜新居／中央・弁天島／東部・雄踏〜浜名湖大橋）に整理し統合。`araibenten-umiduripark`・`amihosiba`から逆リンク追加
- [x] **奥浜名湖**: `points/oku/oku-hamanako-fishing-points` 新設で対応完了（2026-09-22）。猪鼻湖(inahako)・庄内湖(syounaiko)は既存ハブへ誘導し、専用ガイドのなかった「内浦湾・舘山寺」6ポイント（kanzanji/sunza/ina/kiga/ime/miyakodagawa）を深掘り。既存の`okuhamanako-haze-fishing`（ハゼ釣り手法記事）ともリンク。カニバリ回避のため猪鼻湖・庄内湖の内容は重複させず誘導のみ。inahako/syounaiko/kanzanji/miyakodagawaから逆リンク追加
- [x] **中浜名湖**: `points/naka/naka-hamanako-fishing-points` 新設で対応完了（2026-09-22）。「中浜名湖」単体クエリは0表示だが、「村櫛海水浴場」（34表示・7.24位）「村櫛海岸」（12表示）等の村櫛系クエリは合計約58表示と実需あり。村櫛を核心エリアとして位置づけ、鷲津湾〜雄踏15ポイントを3クラスターで整理。`murakushi-kaisuiyoku`・`murakushi-fishing-port`・`yuto-yamazaki`から逆リンク追加

**判断メモ（2026-09-22）**: 「浜名湖 魚釣り」を1ページで統合狙いする案を検討したが、W39データで同語が0表示・近似語「浜名湖 釣り」も21表示/38.33位（大手ポータル独占の激戦区）と確認。統合ではなく**1エリア1ページ方式を維持**し、「表浜名湖 釣り ポイント」（12表示・9.58位）等の実需クエリを個別に狙う方針とした。

**5エリアまとめページ整備が完了**（猪鼻湖・庄内湖・表浜名湖・奥浜名湖・中浜名湖）。次の一手: 各ページの効果（順位・CTR変化）をW41（2026-10月上旬目安）でGSC確認する。

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
