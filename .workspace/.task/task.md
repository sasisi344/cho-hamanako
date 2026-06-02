# 📅 2026-04-21 最新タスク

- ポイント記事（表・中・奥・深堀り）のリライト完了
- 未完成を今後進める

リライトをするにあたって、「> [!forAI]」を使って一次情報の「さししの意見」を付け加えている。ここに入れた文章をもとにリライトしてくれる。1行でいいから音声入力でも可能。

## 未完了のリライト

- cooking
料理記事は増やせる見込みがある。現在のポスト数を調べて、釣れる魚のおすすめ料理を提示する。
- guide
    [x]beginner
    [x]logistics
    [x]shops
    [x]method
- points/family-car-points[x]
- points/weding-points[x]
- season
    [x]tactics
    [x]season（月別12記事・特別記事7本）
- target[x]
- theory[x]
- travel
旅行記事はエリアごとに作成するべきかも。交通手段が限られるし、レンタカー利用も限定的。浜名湖の釣りは移動の自由度が低いことがネック。自動車を使って全周巡るドライブも風光明媚でいいし飲食店も有名どころがある。交通量の観点だと平日がおすすめだが、飲食店に期待するなら日曜日なり週末だろう。ランチ目的なら平日が理想で、釣りの合間は難しいから目的を絞るべきだろう。

この辺りはまだ量も多いためCursorと共同で進める。

---

## 週間PDCAのタスク

**背景**: PV424（好調）だが直帰率68.5%が高い。内部導線の整備が鍵

### [優先] ポイント記事のリライト + 内部リンク設計
- **目的**: 直帰率低減、滞在時間延伸（現在2min06sec → 3min以上目指す）
- **アクション**:
  - [x] "浜名湖 釣りスポット"系ポイント記事TOP5を特定
    - GSC表示数ベースTOP5: family-car-points(1399)、syounaiko(1262)、nakanoshima(979)、miyakodagawa(914)、gardenpark(中浜名湖)
  - [x] 各ポイント記事に「同じエリアの別スポット」へ内部リンク5本追加（W23先行完了）
    - `gardenpark`: murakushi-fishing-port, murakushi-kaisuiyoku, matsumigaura, yuto-yamazaki, syotaijihana（5本追加）
    - `nakanoshima`: nagisaen, amihosiba, bentenjimakaihinkouen, araibenten-umiduripark, imagiremaisakatei（5本追加）
    - `miyakodagawa`: syounaiko, kanzanji, kiga, mikkabi-eki（isajigawと合計5本）
    - `syounaiko`: MapAreaで8スポットあり、W25対応
    - `family-car-points`: 既にBlogCard7本で充実済み
  - [x] ポイント別 × 釣り方（種別）のマトリクス作成
    - `.workspace/.data-set/point-matrix.md` 作成。釣り方別/魚種別/ファミリー向け の3軸一覧
  - [x] 図解・位置情報の追加（視認性改善）
    - `nakanoshima`・`gardenpark`・`miyakodagawa` に MapArea コンポーネント追加。同エリアポイントの位置関係をマップで可視化
- **期限**: W24中に TOP3完了、W25で全体完了

### [補助] 記事効率化の継続
- **目的**: 質を保ちながら執筆時間短縮
- **アクション**:
  - [x] テンプレート化（ポイント記事の標準構成を定義）
    - `.workspace/.data-set/point-article-template.md` 作成。構成チェックリスト・エリア別BlogCard候補リスト含む
  - [x] 画像・図解の資産化（方向性決定）
    - season-infographic.png（36枚・未使用）は低優先。Mermaidフローチャートを主軸に据える方針に決定

---

### [新規] Mermaid フローチャート導入（釣りアルゴリズム図解）

- **目的**: 低コストで「釣り方の決定木」を記事に追加。直帰率低減・滞在時間延伸・内部導線強化
- **コンセプト**: 「この魚を釣るには？」→釣り方→タックルへの分岐。A狙いだがBも釣れる・Cは釣れない、の副産物情報も表現できる

#### Step 1: 実装基盤（`Mermaid.astro` コンポーネント）
  - [x] `pnpm add mermaid` でパッケージ追加
  - [x] `src/components/Mermaid.astro` 作成（クライアントサイドレンダリング）
  - [x] MDXから `<Mermaid code={...}>` で呼び出せることを動作確認

#### Step 2: guide/method 記事への適用（主軸①）
  - [x] `cho-nage-fishing` — 季節×ターゲット決定フロー（キス/ハゼ/カレイ + 外道分岐）
  - [x] `ajing-guide` — 時間帯×季節状況別アプローチフロー
  - [x] `anazuri` — 構造物種類×季節×ターゲット選択フロー
  - [x] 残り method 記事（16記事）への展開
    - hamanako-boat-fishing / hamanako-kurodai-topwater / hamanako-sup-fishing / myaku-hechi-fishing
    - night-float-fishing / chinutop-july / fukase-fishing / night-chining
    - okuhamanako-haze-fishing / night-seabass / benten-nagashi-fishing / boat-autumn
    - casting-gomoku / hamanako-kayak-fishing / night-fishing / winter-lightgame

#### Step 3: target 記事への適用（主軸②）
  - [x] `target/haze` — 季節チェック → スタイル選択 → ポイント → 外道（キビレ・セイゴ・テナガエビ）
  - [x] `target/kurodai` — スタイル5択（エサ/チニング/トップ/前打ち/夜釣り）× 季節分岐
  - [x] `target/seabass` — シーズン4パターン × スタイル（ウェーディング/陸っぱり）× 時間帯
  - [x] 残り target 記事（10記事）への展開
    - aji-saba-sappa / eging / flatfish / karei / kawahagi / kibire / mebaru-kasago / mejina / sayori / tako

- **期限**: W25〜W26（✅ 全完了）

---

### [新規] travel リライト

#### 方向性（確定）

- **軸**: エリア別に再編。「釣りメイン/観光メイン」を記事内で明示する
- **移動前提**: 浜名湖は移動の自由度が低い。1エリア完結のプランに絞る
- **目的を絞る**: 釣りの合間に観光は難しい。釣り×グルメ or 観光×ちょい釣り のどちらかに特化
- **ドライブ動線**: 車で全周するドライブルートも有効（風光明媚・飲食店あり）
- **曜日分け**: 飲食店目的なら週末、釣り数釣りなら平日推奨

#### 構成方針（再設計）

```
travel/
├── hamanako-kanko-hub         ← ハブ。全体への導線。大幅リライト【最優先】
├── omote-area-travel          ← 表浜名湖エリア記事【新規 or 統合】
│     hamanako-winter-fishing-oyster-trip を吸収候補
├── oku-area-travel            ← 奥浜名湖エリア記事【kanzanji拡張】
│     kanzanji-fishing-walk-guide を拡張リライト
├── hamanako-rental-fishing-guide    ← 現状維持（充実済み）
├── hamanako-traditional-fishing-guide ← 現状維持（独自性高い）
└── 時期特化記事（GW/春休み/3月/浜松まつり）← 低優先・現状維持
```

#### 記事別 TODO

**優先度：高（Cursor共同作業前に完了させる）**

- [x] `hamanako-kanko-hub` リライト（2026-06-03）
  - H2を3本→6本以上に拡充（エリア別・マトリクス・目的別・電車・季節別・まとめ）
  - エリア別（表・中・奥）× 目的別（釣りメイン/グルメメイン/体験）のマトリクス表追加
  - 各エリア記事・時期記事・体験記事への BlogCard 導線を整備

- [x] `kanzanji-fishing-walk-guide` 拡張リライト → 「奥浜名湖エリアガイド」へ（2026-06-03）
  - 舘山寺・三ヶ日・気賀・猪鼻湖の4エリアを包含
  - 移動手段（車/天浜線）× 目的別プラン表を追加
  - kanzanji / kiga / mikkabi-eki / sakumekaigan / sakujyoseki / miyakodagawa BlogCard 追加

**優先度：中（エリア統合）**

- [x] `omote-area-travel` 新規作成（表浜名湖エリアガイド）（2026-06-03）
  - 弁天島・新居・舞阪の3エリアを統合、H2 × 7本、2,000字+
  - `hamanako-winter-fishing-oyster-trip` を BlogCard で誘導
  - 釣り×牡蠣小屋×弁天島観光の動線整備、電車アクセス専用H2追加

**優先度：低（現状維持 or 後回し）**

- [x] `hamanako-clam-digging-fishing-2026` タイトルから年号を除去（2026-06-03）
- [ ] 時期特化5記事（GW・春休み・3月・浜松まつり・冬牡蠣）は現状維持
- [ ] 中浜名湖エリア記事（ガーデンパーク・村櫛周辺）は需要確認後に判断

#### エリア記事の共通構成テンプレート

```
1. このエリアで何ができるか（釣り/グルメ/観光 の優先度を明示）
2. アクセス（車・電車・所要時間）
3. 目的別プラン（釣りメイン / グルメメイン / 半日コース）
4. 季節別のおすすめ
5. 関連ポイント記事への BlogCard
6. 周辺グルメ・宿泊情報
```

---

### [新規] ニッチKW施策（2026-06-02 再確認）

- **背景**: 2026-04-05 策定のニッチKWリストを 2026-06-02 に再チェック。依然有効。
- **参照**: `.workspace/.task/niche-kw-tasks.md`

#### フェーズ1（最優先）：電車×釣り ハブ記事の新規作成

- [ ] **「浜名湖 電車 釣り おすすめ 4選」** 新規作成
  - BlogCard 素材（slug 確認済み）:
    - `bentenjimakaihinkouen`（JR弁天島駅 徒歩3分）
    - `araibenten-umiduripark`（JR新居町駅 徒歩圏）
    - `sakumekaigan`（天浜線・佐久米駅 徒歩3分）
    - `sunza`（天浜線・寸座駅）
    - `mikkabi-eki`（天浜線・三ヶ日駅）
    - `miyakodagawa`（天浜線・気賀駅 徒歩圏）
  - 集約ハブ構成。各ポイントへ BlogCard + 駅名・徒歩分を一覧表示

#### フェーズ2（ついでに）：今切口・弁天島系へ激流攻略節を追記

- [ ] `points/omote/imagiremaisakatei` — 下げ潮・激流の攻略H2を追記
- [ ] `points/fukabori/imagire-area-fukabori` — 流し釣りセクション追加
- [ ] `guide/method/night-seabass` — 激流時の注意・活用節を追記（任意）
- [ ] `guide/method/hamanako-kayak-fishing` — 激流時の注意・活用節を追記（任意）

#### フェーズ3（後回し）：観光×釣り導線整備

- [x] `travel/hamanako-kanko-hub` へ除外KW群（1-B）から既存ガイドへの BlogCard 導線確認（2026-06-03）
- [x] 観光名所×釣りサジェストKWの調査（chousa-file.md に結果まとめ済み、2026-06-03）
- [ ] グルメ×釣り場記事（うなぎ×釣り旅・キャンプ×釣り）は次フェーズで判断