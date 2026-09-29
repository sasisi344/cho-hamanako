# W39関連タスク 完了アーカイブ（2026-09-22〜23完了）

元は `task.md` の「✅ 完了フェーズ: 既存記事の整理・リライト」「✅ W39 残タスク → 2026-09-22 完了」セクション。効果測定タスクのみ `task.md` に残し、完了記録として本ファイルに退避。

---

## 完了フェーズ: 既存記事の整理・リライト（2026-09-22 完了分を反映）

re-createフェーズ全タスク完了。詳細は `re-create-phase-completed-2026-09-19.md` 参照。
- cooking 14本リライト・クエリ改善A/B/C（24件）・奥浜名湖内部リンク・ゼロクリック7本タイトル最適化

**2026-09-22 追加完了**（コミット `d279407`）:
- `points/oku/inahako` 新設（猪鼻湖エリアまとめページ、庄内湖と同型）
- `target/kurodai/beginner` タイトル変更 → 正本記事とのKWカニバリ解消
- `points/omote/araibenten-umiduripark` サビキ/青物セクション見出し最適化
- W39優先度「高」3件中2件完了: `points/fukabori/ajing-fukabori`・`target/kibire/cooking`（キビレ食べ方導線追加）
- W39優先度「中」5件中3件完了: `points/family-car-points`・`points/omote/amihosiba`・`points/naka/washidukou`・`guide/logistics/rental-boat-guide`
- W39優先度「低」1件完了: `guide/theory/hamanako-weather-vs-hamamatsu`

**2026-09-23 再検証・追加対応**（コミット `9328a7e`）:
「W39優先度中5件」を実差分で個別に再検証した結果、`amihosiba`・`family-car-points`・`rental-boat-guide`の3件は本文強化・内部リンクが不十分だったため再対応。`miyakodagawa`・`washidukou`は当初対応で十分と確認済み。
- `points/omote/amihosiba`: 競合（東海釣り具・イシグロ）分析を踏まえ月別釣果カレンダー（クロダイ・タコ・カレイ・キス・メバル）・立入エリアと利用ルール・舞阪海岸サーフルアー利用者向け駐車場案内を追加
- `points/family-car-points`: プリンス岬の車横付け情報を実態（西気賀駅利用・コンビニは駐車場利用不可のファミリーマート細江西気賀店）に修正、舘山寺（内浦湾）を新規ポイント追加（6選→7選）、子連れ向け安全・マナーセクションを新設
- `guide/logistics/rental-boat-guide`: ボート推奨ポイント（庄内湖・猪鼻湖・都田川河口・乙女園・中之島〜渚園・村櫛海水浴場沖）への内部リンク追加、船舶職員及び小型船舶操縦者法に基づく法令遵守セクションを新設

W39優先度中5件・全対応完了。

---

## W39 残タスク → 2026-09-22 完了

詳細・根拠: `.workspace/.task/W39-task.md`

- [x] `/points/araibenten-umiduripark` タイトル・meta desc改善（「ライブカメラ・サビキ・青物」をタイトルに明示。GSCで表示114件・CTR6.1%の「新居弁天海釣公園 ライブカメラ」等を狙う）
- [x] `/points/miyakodagawa`（都田川河口） タイトルに「時期・仕掛け」追加＋冒頭に「ハゼ釣りの時期はいつ？」即答Calloutを新設（「都田川 ハゼ釣り 時期」等のクエリ対応）
- [x] `/blog/9-month`（9月ガイド） 導入文を落ちアユ×秋クロダイ訴求に強化＋`10-month`へのBlogCard追加

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

**5エリアまとめページ整備が完了**（猪鼻湖・庄内湖・表浜名湖・奥浜名湖・中浜名湖）。
