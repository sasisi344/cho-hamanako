> [!NOTE]
> **2026-07-09: 本ファイルの内容は `weekly-task.md` に統合済み（未完了の「11月BF更新」「cooking/travel リライト」も weekly-task.md へ移管）。以後の更新は weekly-task.md で行う。**

# 📅 2026-07-03 タスク更新

> 2026-06-09 タスクの完了確認・新規企画を追加。
> Amazon専用記事・BlogCard導線・family-car-points SEO改善、すべて完了。
> 新企画：「浜名湖完全装備ガイド」記事を追加。

---

## クエリチェック
task>>[access-data/gsc-data/2026]
格納されているのは12ヶ月分のGSCデータ。クエリデータから「見込みKW」「改善KW」を表示回数とクリック数の相対比から探りだして改善タスクを作成する。

### TODO（優先施策・2026-06-17データ分析より）

### Act（前週完了分・2026-07-03確認）

- [x] 🔥【7/10プライムセール】専用記事 `/blog/amazon-sale-tackle-strategy/` を新規作成（消耗品より高単価・コンフォート系を狙う理由＋TackleCard厳選。詳細は `.workspace/.task/weeklyu-task.md`）
- [x] 専用記事公開後、Top LP 3本（`june-tako-opening` / `hamanako-kayak-fishing` / `hamanako-fishing-rules-and-manners`）のまとめに `BlogCard slug="amazon-sale-tackle-strategy"` を1本のみ設置
- [x] `/blog/june-tako-opening/` から関連ポイント記事へ内部リンク強化（舞阪＝`amihosiba` 等）
- [x] SEO継続：`/points/family-car-points/`（表示44・CTR2.3%）のタイトル・説明文改善（2026-07-03実施）

---

## 新規企画：浜名湖完全装備ガイド（2026-07-03 追加）

### 記事の役割と差別化戦略

**競合（世間の声）の傾向（ディープリサーチ 2026-07-03）**

「浜名湖 釣り道具 おすすめ」検索で上位に来るのは以下のパターン：

- 汎用入門セット（竿＋リール＋仕掛け一体）の紹介
- 2000〜3000番スピニングリール万能推し
- 魚種・シーズンを問わないファミリー記事
- 「とりあえずこのセットを買え」型のアフィリエイト記事

**さしし視点の差別化（競合が書けないこと）**

| 競合が書くこと | さしし（地元経験者）が書けること |
|---|---|
| 「汎用ロッドでOK」 | 魚種別専用タックルの効果差を実釣経験で説明できる |
| 「2000〜3000番スピニング」 | 浜名湖の激流対応でPE+フロロリーダーが必須な理由 |
| 「クーラーはあると便利」 | 夏のタコ・真鯛で保冷力が釣行の満足度を決める理由 |
| 「ライフジャケットを着よう」 | カヤック・夜間堤防での実際のリスクから語る安全装備の優先順位 |
| 「セット品でOK」 | 「最初の投資」と「消耗品」の分け方、浜名湖で続けるための道具選び |

**コンセプト**

世間は「なんでも釣れる汎用セット」を薦める。
私（さしし）は「浜名湖でこそ効く、魚種と環境に合わせた道具選び」を案内する。
専門性の根拠は地元20年超の経験と実釣データにある。

---

### 配置・メタ

| 項目 | 案 |
|------|-----|
| カテゴリ | `guide` |
| ディレクトリ | `src/content/blog/guide/logistics/hamanako-complete-tackle-guide/` |
| slug | `hamanako-complete-tackle-guide` |
| URL | `/blog/hamanako-complete-tackle-guide/` |
| タグ例 | `浜名湖`, `釣り道具`, `タックル`, `初心者`, `おすすめ` |
| 文字数目安 | 3,000字以上（ハブ記事として各攻略へ BlogCard 多数） |
| 更新運用 | 新しいアフィリエイト登録時・シーズン前（春・初夏）に `upDate` |

---

### 構成案（3,000字+）

```text
H2 最初に：「浜名湖はフィールドが特殊」——だから道具選びに地元視点が効く
  - 表・中・奥の潮流差、汽水、夏の直射・冬の底冷え
  - 激流今切口 vs 静水庄内湖で必要なラインウェイトが変わる理由

H2 【必携】入門者が最初に揃えるべき5点セット
  - 共通：万能ロッド＋スピニングリール（TackleCard: shimano-holiday-iso, shimano-sedona-c3000 等）
  - ライン：PEライン + フロロリーダーの運用理由（浜名湖では必須）
  - 小物：ハリス、スナップ、クーラーの最小セット
  - ※「セット品」より竿とリールを別々に選ぶべき理由を簡潔に

H2 釣種別：「これだけ揃えれば釣れる」特化タックル

  ### ハゼ・サビキ（初心者・ファミリー向け）
  - TackleCard: haze/daiwa-liberty-club-53-q, aji-saba-sappa/sabiki-starter-set
  - BlogCard: hamanako-sabiki-best-season, haze

  ### タコ（6〜8月の浜名湖イチ推し）
  - TackleCard: tako/abu-tacosfield-762h, tako/daiwa-fune-xt-150pl, tako/yamashita-tako-tenya
  - BlogCard: june-tako-opening, guide-2025

  ### シーバス・クロダイ（オールシーズン）
  - TackleCard: seabass/shimano-encounter-s96m, kurodai/shimano-bream-game
  - BlogCard: seabass, kurodai

  ### カヤックフィッシング（上級）
  - TackleCard: common/sunpercy-pedal-kayak, common/jesbasaro-lifejacket
  - BlogCard: hamanako-kayak-fishing

H2 コンフォート装備：「釣れる」より「また行きたい」を決める道具
  - クーラー（タコ・夏釣行） → TackleCard: common/daiwa-light-trunk-alpha-gu3200
  - ヘッドライト（夜釣り・夜明け） → TackleCard: common/gentos-headlight-cb-300d
  - タックルボックス → TackleCard: common/meihou-vs-3010ndm
  - ポータブル電源（任意・長時間釣行向け） → TackleCard: common/jackery-portable-power-station

H2 まとめ：地元アングラーが道具選びで大切にしていること
  - 消耗品は現地調達 → BlogCard: shops
  - 安全装備はセール待ちより先 → LJ は common/jesbasaro-lifejacket
  - Amazon大型セールの使い方 → BlogCard: amazon-sale-tackle-strategy
  - マナー周知（ゴミ・駐車・立入禁止）
```

---

### TackleCard 一覧（全 ID 実在確認済み）

| 区分 | id |
|------|-----|
| 入門ロッド | `common/shimano-holiday-iso` |
| 入門リール | `common/shimano-sedona-c3000` |
| ハゼ竿 | `haze/daiwa-liberty-club-53-q` |
| サビキ入門セット | `aji-saba-sappa/sabiki-starter-set` |
| タコロッド | `tako/abu-tacosfield-762h` |
| タコリール | `tako/daiwa-fune-xt-150pl` |
| タコエギ | `tako/yamashita-tako-tenya` |
| シーバスロッド | `seabass/shimano-encounter-s96m` |
| チニングロッド | `kurodai/shimano-bream-game` |
| 足漕ぎカヤック | `common/sunpercy-pedal-kayak` |
| LJ | `common/jesbasaro-lifejacket` |
| クーラー（大型） | `common/daiwa-light-trunk-alpha-gu3200` |
| ヘッドライト | `common/gentos-headlight-cb-300d` |
| タックルボックス | `common/meihou-vs-3010ndm` |
| ポータブル電源 | `common/jackery-portable-power-station` |

---

### 実装フェーズ

| Phase | 内容 | 優先度 |
|-------|------|--------|
| 1 | `hamanako-complete-tackle-guide` MDX 新規作成 | 高 |
| 2 | 各釣種記事（haze・tako・seabass・kurodai等）末尾に BlogCard 導線 | 中 |
| 3 | `amazon-sale-tackle-strategy` 末尾に BlogCard 1本（内部ハブとして接続） | 低・任意 |

---

### 成功指標

| KPI | 目標 |
|-----|------|
| 記事 PV | 公開1ヶ月で `amazon-sale-tackle-strategy` の 50% 以上 |
| 内部回遊 | BlogCard クリックで各攻略記事への流入増加 |
| TackleCard | 記事経由のアフィリエイトクリックが分散（特定1品集中を避ける） |

---

## 継続タスク

- [x] 🔥 `hamanako-complete-tackle-guide` 執筆・公開（詳細は上記企画）
- [x] （任意・低）既存記事の TackleCard 不足補完（PFD・タコ網等）— 通常の道具紹介として。セールコピーは付けない（2026-07-03完了：tako/marushin-tako-net-dx を beginner・guide-2025・june-tako-opening に、common/jesbasaro-lifejacket を hamanako-kayak-fishing・hamanako-sup-fishing に追加）
- [ ] 11月BF前：`amazon-sale-tackle-strategy` の `upDate` と冬版チェックリスト差し替え

---

## 📝 未完了リライト（参考）

- cooking: 料理記事は増やせる見込み。現ポスト数確認後に着手
- travel: 中浜名湖エリア（ガーデンパーク・村櫛周辺）は需要確認後に判断
