# travel記事 アフィリエイト配置最適化プラン

**作成日**: 2026-09-04
**背景**: [search-intent-content-restructure.md](search-intent-content-restructure.md) の「本音と建前」ロジックをtravel記事へ横展開。

---

## 問題意識

- travel記事12本中、TackleCard未使用が5本（宿泊プラン系が中心）
- 情報提供で終わっており、読者が「よし予約しよう」と思った**本音転換点**に予約導線が存在しない
- 使えるTackleCardが揃っているのに活用されていない

## 「本音と建前」のtravel版

| | 内容 |
|---|---|
| **建前** | 「浜名湖 観光」「浜名湖 宿泊 おすすめ」「浜松まつり 釣り」 |
| **本音** | 行くと決めたから宿を押さえたい・体験漁法を予約したい・家族に最高の一日を作りたい |

→ 読者が「行こう」と決意した瞬間（プランの説明直後、季節感の提示直後等）にTackleCardを差し込む。

## 実在TackleCard ID（確認済み）

| ID | 用途 |
|---|---|
| `travel/rakuten-travel-stay` | 宿泊予約（楽天トラベル） |
| `travel/jalan-net-banner` | 宿泊予約（じゃらん） |
| `travel/asoview-banner` | 体験・アクティビティ予約 |
| `travel/asoview-text` | 体験テキストリンク |
| `travel/jalan-net-text` | じゃらんテキストリンク |
| `travel/uqey-banner` | レンタカー系 |

---

## 実装スコープ

### Phase 1：TackleCard未使用5記事への挿入（最優先）

| 記事スラッグ | タイトル | 挿入すべきカード |
|---|---|---|
| `hamanako-winter-fishing-oyster-trip` | カレイ・ヒラメ×牡蠣小屋1泊 | rakuten-travel-stay, jalan-net-banner |
| `hamamatsu-festival-fishing-trip` | 浜松まつり×釣り旅 | rakuten-travel-stay, jalan-net-banner |
| `hamanako-unagi-fishing-trip` | うなぎ×釣り旅 | rakuten-travel-stay, asoview-banner |
| `hamanako-camp-fishing` | キャンプ×釣り1泊2日 | rakuten-travel-stay, asoview-banner |
| `hamanako-kanko-hub` | 観光ハブページ | 全カテゴリのアフィリ入口（まとめ導線） |

### Phase 2：既存7記事の配置精度改善（本音転換点の見直し）

対象:
- `hamanako-rental-fishing-guide`
- `hamanako-march-gourmet-shirasu-sayori`
- `hamanako-traditional-fishing-guide`
- `kanzanji-fishing-walk-guide`
- `hamanako-clam-digging-fishing-2026`
- `omote-area-travel`
- `golden-week-family-sabiki-debut`

---

## 挿入タイミングの原則

1. **プラン提示直後**: 「〇〇プラン」「〇〇コース」を提示した直後 → 「このプランで宿泊するなら↓」
2. **季節・時期の強調直後**: 「冬限定」「GW」など時期を強調した直後 → 「早めに宿を確保↓」
3. **締めくくりの前**: まとめH2の直前 → 「この旅を予約する」として締め
4. **体験・アクティビティ紹介直後**: たきや漁・えびすき漁紹介 → asoview-banner
