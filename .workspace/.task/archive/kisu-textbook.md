# 浜名湖キス釣りの教科書｜再構築タスク

**作成日**: 2026-09-04  
**参照メソッド**: [target-textbook-method.md](target-textbook-method.md)  
**正本スラッグ**: `kisu`（`target/kisu/index.mdx` を**新規作成**）

---

## 1. 現状記事一覧（8記事・indexなし）

| ファイルパス | 役割 | TackleCard |
|---|---|---|
| `target/kisu/beginner/` | 入門 | — |
| `target/kisu/cooking/` | 料理 | — |
| `target/kisu/points/` | ポイント | — |
| `target/kisu/points-top5/` | ポイントTOP5 | — |
| `target/kisu/tactics/` | 攻略 | — |
| `target/kisu/season/seasonal-guide/` | 季節ガイド | — |
| `target/kisu/season/may-fishing/` | 5月攻略 | — |
| `target/kisu/season/may-fishing-top5/` | 5月TOP5 | — |

### 緊急課題：indexが存在しない

8記事あるのにハブページがない。各記事が独立して存在しており、検索からたどり着いた読者が全体像を把握できない。教科書記事の新規作成が最優先。

### 見えてきた歪み

1. **ポイント記事が重複気味** — `points`と`points-top5`の内容差異を確認要
2. **5月シーズン記事が2本** — `may-fishing`と`may-fishing-top5`の棲み分けが不明
3. **indexなし** — 他魚種と比べて最も基盤が脆弱

---

## 2. 削除候補

- `points`と`points-top5`：内容を読んで統合可否を判断（どちらかに集約できる可能性あり）
- `may-fishing`と`may-fishing-top5`：同様に確認要

---

## 3. 教科書章構成案

キスはちょい投げの代名詞で入門難易度が低い。教科書は「釣果を安定させる中級以上の内容」に絞る。

```
序章    ｜ 初心者はbeginner記事へ。この記事の対象（釣れはするが数・型を伸ばしたい人）
第1章   ｜ 生態・環境（砂泥底・水温・汽水への適応、シロギスとアオギスの棲み分け）
第2章   ｜ 年間シーズナリティ（5〜9月夏型/秋の落ちキス/冬の深場）
第3章   ｜ 釣法選択とポイント逆算（ちょい投げ/本投げ/引き釣りの使い分け）
第4章   ｜ なぜ釣れないのか（投点・仕掛け引き速度・エサ鮮度・砂地の見極め）
第5章   ｜ 実績タックル大全（釣法別TackleCard）
第6章   ｜ 時合・潮・底質の原則
終章    ｜ ポイント・料理・マナー
```

---

## 4. 必要な一次情報

- [ ] 「隣は釣れているのに自分は釣れなかった」具体的エピソード
- [ ] 投点のミスで釣果が変わった経験
- [ ] 浜名湖固有のキス釣りの特徴（砂底エリアの特定、水温変化の影響）
- [ ] 食べ方：天ぷら以外の実体験レシピ

---

## 5. 次のアクション

1. 各記事のfrontmatterとslugを確認
2. points / points-top5・may-fishing / may-fishing-top5の内容を読んで重複度判断
3. アフィリエイトデータ（`affiliates/kisu/`）確認
4. 一次情報ヒアリング
5. index.mdx新規作成（カバー画像の用意も必要）
