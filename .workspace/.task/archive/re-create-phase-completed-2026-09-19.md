# re-create フェーズ 完了アーカイブ

**完了日**: 2026-09-19  
**作業ハブ元**: `.workspace/re-create/`

## 完了したタスク一覧

### 1. cooking記事「釣れる場所×調理」リライト（14本）
target/{fish}/cooking/ 系列に「浜名湖で釣った○○の食べ方」KWを付与し、対応するpoints BlogCardを追加。

| 優先 | 魚種 | 状態 |
|---|---|---|
| 高 | カレイ・タコ・カワハギ・キス | 完了 |
| 中 | クロダイ・ハゼ・シーバス・アジ・サバ | 完了 |
| 低 | キビレ・メバルカサゴ・エギング・ヒラメマゴチ・サヨリ・メジナ | 完了 |

### 2. クエリ改善タスクA（9件）完了

| 対象 | 変更内容 |
|---|---|
| araibenten-live-camera | タイトル変更・冒頭直リンクCallout追加 |
| hamanako-fishing-rules-and-manners | 冒頭禁止魚介テーブル・タコ/ウナギ/イセエビH2追加 |
| june-tako-opening | タイトル・summaryに「2026」「漁期」明示 |
| family-car-points | タイトルに「車横付けOK」明示 |
| family-car-fishing-points | 末尾にfamily-car-points BlogCard追加 |
| ajing-fukabori | タイトル・summaryに「常夜灯」「場所・使い方」追加 |
| night-fishing-light | 「禁止？合法？」追記・冒頭即答Callout追加 |
| benten-nagashi-fishing | タイトルを「弁天流し釣り 仕掛け・コツ完全ガイド」に変更 |
| nakanoshima | タイトル・summaryを「浜名湖 中之島 釣りポイント」に最適化 |

### 3. クエリ改善タスクB（9件）完了

| 対象 | 変更内容 |
|---|---|
| megaura | タイトル「女河浦海水浴場跡地 釣りポイント」最適化 |
| imagiremaisakatei | タイトル更新・禁止ゾーンH2追加 |
| tako-fukabori | タイトルに「時期・シーズン（5〜9月）」追加・FAQテーブル追加 |
| isajigawa | タイトル「庄内湖 釣りポイント」最適化 |
| eging-fukabori | タイトル「浜名湖エギング ポイント・時期・攻略ガイド」変更 |
| amihosiba | タイトル「舞阪 網干場 釣りポイント」変更 |
| sakujyoseki | タイトル「猪鼻湖 釣りポイント」最適化 |
| rental-boat-guide | 「免許不要で乗れるレンタルボートはある？」H2＋比較テーブル追加 |

### 4. クエリ改善タスクC（6件）完了

| 対象 | 変更内容 |
|---|---|
| murakushi-kaisuiyoku | タイトル「村櫛海水浴場跡地 釣りポイント」最適化 |
| hamanako-unagi-fishing-trip | タイトルに「うなぎ釣り ポイント・仕掛け・漁業権」追加・漁業権H2追加 |
| kurodai/beginner | タイトルに「仕掛け（オモリ・ハリス・針）」追加 |
| night-fishing | タイトル「浜名湖 夜釣り ポイント完全ガイド」に変更 |
| season/monthly/8-month | タイトル「浜名湖 8月 釣り2026」最適化 |
| sakujyoseki | Bで対応済み |

### 5. 奥浜名湖8本 内部リンク追加
0refsだった hanagawa/shimo-ona/arai-nakanogo に BlogCard を追加して孤立解消。

### 6. ゼロクリック points系5本 タイトル最適化
sunza / washidukou / bachinuke-fukabori / waji-boat / bentenjimakaihinkouen

### 7. ゼロクリック7本「ファイル未発見」問題の解決（2026-09-19）

**原因**: 前回の検索でslugのパス形式（`cooking/kurodai-shioyaki-recipe` など）を見落とし、ファイルが見つからないと誤判定していた。

**実際の場所と対応**:

| URL | 実ファイルパス | タイトル最適化 |
|---|---|---|
| `/blog/cooking/kurodai-shioyaki-recipe/` | `src/content/blog/cooking/kurodai-shioyaki-recipe/index.mdx` | 「浜名湖で釣ったクロダイ（チヌ）の塩焼きレシピ｜皮パリッと身ふっくらに仕上げるコツ」 |
| `/blog/cooking/nezakana-nitsuke-recipe/` | `src/content/blog/cooking/nezakana-nitsuke-recipe/index.mdx` | 「浜名湖で釣ったメバル・カサゴの煮付けレシピ｜根魚を絶品に仕上げる基本の煮汁」 |
| `/blog/cooking/beginner/koaji-karaage-recipe/` | `src/content/blog/cooking/beginner/koaji-karaage-recipe/index.mdx` | 「浜名湖で釣った小アジの唐揚げレシピ｜サビキで釣れたアジを骨まるごとカリカリに」 |
| `/blog/guide/theory/hamanako-weather-vs-hamamatsu/` | `src/content/blog/guide/theory/hamanako-weather-vs-hamamatsu/index.mdx` | 「浜名湖 釣り 天気予報の使い方｜地元アングラーが実際に使うサービスと釣行判断フロー」 |
| `/blog/guide/theory/feeding-switch/` | `src/content/blog/guide/theory/feeding-switch/index.mdx` | 「浜名湖 時合（捕食スイッチ）のメカニズム｜急に爆釣が始まる科学的な理由と予測法」 |
| `/blog/guide/theory/mazume-logic/` | `src/content/blog/guide/theory/mazume-logic/index.mdx` | 「浜名湖 マヅメ時間の科学｜なぜ朝夕に魚が釣れるのか・時間帯別の攻略ポイント」 |
| `/blog/guide/theory/dissolved-oxygen/` | `src/content/blog/guide/theory/dissolved-oxygen/index.mdx` | 「浜名湖 夏の釣り 魚の居場所｜溶存酸素量（DO）と水温で読む澪筋・流れの攻略法」 |

## 監視のみ（対応不要）

- 旧URL構造（`/blog/{fish}-cooking/` 等）のGSC残留表示 — 自然消滅待ち
- 2026-09-04公開の `guide/method/*` 新規4本 — 公開間もないため様子見
- `target/*` 旧サブ記事62本（beginner/tactics/season系）— 内部リンクで機能中のため維持
