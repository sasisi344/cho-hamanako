# 浜名湖ヒラメ・マゴチ釣りの教科書｜再構築タスク

**作成日**: 2026-09-04  
**参照メソッド**: [target-textbook-method.md](target-textbook-method.md)  
**正本スラッグ**: `flatfish`（`target/flatfish/index.mdx` を書き換え）

---

## 1. 現状記事一覧（5記事）

| スラッグ | 役割 | TackleCard |
|---|---|---|
| `flatfish`（index） | ハブ（書き換え対象） | なし |
| `flatfish/beginner` | 入門 | — |
| `flatfish/cooking` | 料理 | — |
| `flatfish/points` | ポイント | — |
| `flatfish/points/bentenjima` | 深掘りポイント（弁天島） | — |
| `flatfish/tactics` | 攻略 | — |
| `flatfish/november-guide` | 季節（11月攻略） | — |

### 特記事項

- `magochi`（マゴチ）のタクティクス記事が別ディレクトリ（`target/magochi/tactics/magochi-bottom-wind`）に1本だけ存在する
- flatfishとmagochi の統合または接続が必要

---

## 2. 削除候補

現時点では削除なし。magochi記事との接続設計が優先。

---

## 3. 教科書章構成案

```
序章    ｜ 初心者はbeginner記事へ。ヒラメとマゴチの釣り方の差
第1章   ｜ 生態（ヒラメ vs マゴチの棲み分け・砂底への依存・捕食行動の差）
第2章   ｜ 年間シーズナリティ（ヒラメ:秋〜冬/マゴチ:夏が旬/11月の両狙い）
第3章   ｜ 釣法選択（泳がせ釣り/ルアー/ぶっ込みの使い分け）
第4章   ｜ なぜ釣れないのか（アワセタイミング・泳がせエサの管理・レンジ）
第5章   ｜ 実績タックル大全（釣法別TackleCard）
第6章   ｜ 時合・潮・ベイトの原則
終章    ｜ ポイント（弁天島等）・料理・マナー
```

### 追記事項

- `magochi/tactics/magochi-bottom-wind` を終章または第3章でBlogCardとして接続

---

## 4. 必要な一次情報

- [ ] ヒラメとマゴチを同日に狙った際の使い分け
- [ ] 「泳がせ釣りでヒラメがエサを噛んだが乗らなかった」経験

---

## 5. 次のアクション

1. `magochi/tactics/magochi-bottom-wind` の内容確認とslug確認
2. アフィリエイトデータ（`affiliates/flatfish/`）確認
3. 執筆
