---
name: cho-hamanako-schedule-task
description: Moves effect-measurement and watch items from W{nn}-task.md to schedule-task.md. Use when the user says "効果測定をscheduleに移動", "schedule整理", or when finishing a weekly PDCA Act section.
---

# Cho! Hamanako — 効果測定・経過観察のスケジュール管理

## ファイルの役割

| ファイル | 用途 |
|----------|------|
| `.workspace/.task/W{nn}-task.md` | **実作業タスク**のみ。完了したら archive へ移動できる状態を保つ |
| `.workspace/.task/schedule-task.md` | **効果測定・経過観察・時期待ち**タスク。確認時期が来たら週次タスクに組み込む |

## どちらに入れるかの判断基準

**W{nn}-task.md に置く（実作業）**

- 記事の title / summary / 冒頭 / 内部リンクを今すぐ変更する
- forAI ブロックを処理して本文に反映する
- GSC / GA4 でデータを取って分析する
- ユーザー操作が必要な手順（Search Console 手動リクエストなど）

**schedule-task.md に移す（待ち系）**

- 改善済み記事の効果測定（「W43目安で CTR 確認」など）
- 順位・クリックが少なくサンプル待ちのページ経過観察
- 釣りシーズンが合わないため Spring / Fall 以降に確認
- 外部イベント待ち（国土地理院の湖沼図公開など）
- 閾値トリガー（「月50件超えたら専用分析」など）

---

## 作業手順

### 1. W{nn}-task.md から移す項目を特定

以下のパターンを探す：

- `効果測定は W{nn} 目安`
- `W{nn} で確認`
- `経過観察`
- `シーズン外のため {月} 以降に確認`
- `公開を待って更新`
- `閾値を超えたら`
- 内容が「作業」でなく「観察・確認」だけの `[ ]` チェックボックス

### 2. schedule-task.md を開いて追記

ファイルパス: `.workspace/.task/schedule-task.md`

セクション構成：

```
## W{nn} 目安（{年}-{月}{旬}）
## 春シーズン（{年}年{月}月〜）
## 継続観察（期限なし・閾値トリガー）
```

追記する書式：

```markdown
- [ ] `{slug}`: {確認内容} — {改善作業の要約}（{改善した週}）
```

例：
```markdown
- [ ] `kibire-cooking`: CTR・順位改善確認 — title を「臭み対策」軸に変更、冒頭に早見表追加（W41）
```

### 3. W{nn}-task.md を更新

移した項目は **行ごと削除**し、該当セクションの末尾に1行だけ残す：

```markdown
効果測定・経過観察 → [schedule-task.md](schedule-task.md) に集約
```

### 4. forAI ブロックの処理

移動と同時に `> [!forAI]` ブロックが残っていれば処理する：

- 内容を schedule-task.md の備考（箇条書き）か、W{nn}-task.md の残件メモに反映
- ブロックは**必ず削除**する（2重処理防止）

---

## schedule-task.md のメンテナンス

### 確認時期が来たとき

1. schedule-task.md 該当項目を W{nn}-task.md の Act セクションへ移す
2. schedule-task.md の `[ ]` を `[x]` にして archive へ移動（または行削除）

### 完了・不要になったとき

- 確認して問題なかった → `[x]` にして archive へ
- 記事削除・方針変更で不要 → 行削除

---

## 他 SKILL との関係

| SKILL | 連携タイミング |
|-------|---------------|
| `cho-hamanako-weekly-pdca` | Act 生成後、効果測定行を schedule-task.md に仕分ける |
| `cho-hamanako-workspace-tasks` | タスク全体の場所・構成の確認 |
