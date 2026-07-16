# 計測タグ設定ガイド（クリック・スクロール等ユーザビリティ指標）

**作成日**: 2026-07-16
**目的**: アフィリエイトのクリック計測、スクロール到達、離脱クリック等の「ユーザビリティ／エンゲージメント指標」を計測する方法をまとめる
**関連**: [affiliate-file.md](./affiliate-file.md) の「4. 計測不能」「改善タスク P1: GA4クリックイベント付与」

---

## 0. 現状（重要な前提）

| 項目 | 状態 |
| :--- | :--- |
| 計測ツール | GA4 単体（`G-EC504C30T1`） |
| 導入方式 | **gtag.js を Partytown（Web Worker）経由** で読み込み（`src/components/BaseHead.astro` 66〜74行） |
| Partytown設定 | `astro.config.mjs` で `forward: ["dataLayer.push"]` のみ |
| GTM | **未導入** |

### ⚠️ Partytown 由来の最重要ポイント

gtag.js が **メインスレッドではなく Worker 内で動作**する。このため:

- **GA4「拡張計測（Enhanced Measurement）」の自動スクロール／離脱クリック計測が正常に発火しない**ことが多い（gtag がページ側の DOM の scroll/click を安定して掴めないため）。
- よって、確実に取りたい指標は **自前で `window.dataLayer.push()` する**のが前提になる。
- メインスレッドには `window.gtag` が存在しない（定義が Worker 側）。→ 計測用の **gtag シム（メインスレッド側）を1つ足す**必要がある。

---

## 1. 方針の選択肢

| 方式 | 向き | 手間 | 本サイトでの推奨 |
| :--- | :--- | :--- | :--- |
| **A. GA4拡張計測（コード0）** | まず簡易的に | 設定画面のトグルのみ | △ Partytown下で不安定。過度に依存しない |
| **B. GA4カスタムイベント（自前 push）** | クリック・スクロールを確実に取る | コンポーネントに数行 | **◎ 今回の本命** |
| **C. GTM導入** | 将来タグを増やす／非エンジニアが管理 | 初期構築あり | ○ 中期的に有力。まずBで実装しGTMは後回し可 |

**結論**: まず **B（GA4カスタムイベント）** を実装。GTM は「タグが増えてきたら」移行を検討。

---

## 2. 【共通準備】メインスレッド用 gtag シムを追加

`src/components/BaseHead.astro` の Partytown ブロック直後に、**通常の（Partytownでない）** script を1本足す。これで記事・コンポーネント側から `gtag('event', ...)` を普通に呼べる（中身は dataLayer.push → forward で Worker へ転送）。

```astro
<!-- BaseHead.astro : 既存の Partytown gtag ブロックの直後に追加 -->
<script is:inline>
  // メインスレッド側 gtag シム（Partytown forward: ["dataLayer.push"] 経由で Worker の gtag.js へ届く）
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
</script>
```

> `astro.config.mjs` の `forward: ["dataLayer.push"]` は既に設定済みのため追加不要。
> もし将来 `gtag(...)` 直呼びを Worker に転送したくなった場合のみ `forward: ["dataLayer.push", "gtag"]` を検討。

---

## 3. 【B-1】アフィリエイト クリック計測

### 対象ファイル
- `src/components/BannerCard.astro`（旅行バナー等）
- `src/components/AffiliateCard.astro`（タックル等）

### 実装（リンクの `<a>` に data 属性 + クリックハンドラ）

`<a>` に計測用の属性を付け、末尾に共通スクリプトを置く。

```astro
<!-- BannerCard.astro の <a> 例 -->
<a
  href={finalLink}
  target="_blank"
  rel="noopener noreferrer sponsored"
  class="no-underline group block affiliate-link"
  data-aff-id={product.id}
  data-aff-brand={product.brand ?? ""}
  data-aff-name={product.name}
>
  ...
</a>
```

```astro
<!-- 各記事/レイアウトで1度だけ読まれる共通スクリプト（例: BaseLayout の末尾）-->
<script is:inline>
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.affiliate-link");
    if (!a || typeof window.gtag !== "function") return;
    window.gtag("event", "affiliate_click", {
      aff_id: a.dataset.affId,        // 例: travel/rakuten-travel-stay
      aff_brand: a.dataset.affBrand,  // 例: 楽天トラベル
      aff_name: a.dataset.affName,
      link_url: a.href,
      page_path: location.pathname,   // どの記事から押されたか
    });
  }, { capture: true });
</script>
```

### GA4側の設定
- イベント名 `affiliate_click` は自動収集される（管理→イベントで確認、初回反映に24〜48h）。
- パラメータ `aff_id` / `page_path` を **カスタムディメンション**に登録すると、レポートで「どの広告が」「どの記事で」押されたか集計可能。
- 必要なら `affiliate_click` を「キーイベント（旧コンバージョン）」に指定。

---

## 4. 【B-2】スクロール到達（読了率の代理指標）

GA4拡張計測の scroll は 90% 単発かつ Partytown下で不安定。**25/50/75/100% を自前計測**する。

```astro
<!-- 記事レイアウト（例: src/layouts/BlogPost.astro）の末尾に追加 -->
<script is:inline>
  (function () {
    const marks = [25, 50, 75, 100];
    const fired = new Set();
    function onScroll() {
      const el = document.documentElement;
      const scrolled = (el.scrollTop + window.innerHeight) / el.scrollHeight * 100;
      for (const m of marks) {
        if (scrolled >= m && !fired.has(m)) {
          fired.add(m);
          if (typeof window.gtag === "function") {
            window.gtag("event", "scroll_depth", {
              percent: m,
              page_path: location.pathname,
            });
          }
        }
      }
      if (fired.size === marks.length) window.removeEventListener("scroll", onScroll);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
  })();
</script>
```

- 記事ごとに「75%到達率」を見れば、**離脱ポイント＝広告を置くべき位置**が数値で分かる（affiliate-file.md の「末尾まとめ置き」問題の検証にも直結）。

---

## 5. 【B-3】その他の簡易ユーザビリティ指標

| 指標 | 取り方 |
| :--- | :--- |
| 滞在エンゲージメント | GA4標準の `user_engagement` / エンゲージメント時間（設定不要） |
| 内部リンク(BlogCard)クリック | 上記クリックハンドラを `a.blogcard-link` にも拡張し `event: "internal_link_click"` |
| 目次・CTAクリック | 対象に `data-cta` を付け同パターンで push |
| 離脱リンク全般 | 拡張計測の `click`(outbound) は不安定 → 上記自前クリックで `a[href^="http"]` を拾う方が確実 |

---

## 6. 【C】GTM を使う場合（将来）

1. GTM コンテナ作成 → `GTM-XXXXXXX` 取得。
2. `astro.config.mjs` の `forward` に `["dataLayer.push"]`（既存でOK）。GTM も dataLayer 駆動なので Partytown 経由で動く。
3. `BaseHead.astro` の gtag 直読みを **GTM スニペットに置換**（GA4設定はGTM内の「GA4設定タグ」へ移す）。
4. クリック/スクロールは **GTMの組み込みトリガ**（「リンククリック」「スクロール距離」）で管理画面から設定 → コード変更不要でタグ追加できるのが利点。
5. ただし Partytown 下では GTM の一部自動トリガも DOM 依存で不安定な場合があるため、**重要イベントは 3〜4章の自前 push を dataLayer に送り、GTMは「カスタムイベント」トリガで受ける**構成が堅い。

> 移行判断: 「タグが GA4 だけ」の現状では GTM の旨みは小さい。広告計測・A/B・複数タグが増えたら移行。

---

## 7. 週次アクセス計測（PDCA）への組み込み

- GA4「探索」で `affiliate_click` を **ディメンション: page_path / aff_id、指標: イベント数** で表を作り CSV エクスポート。
- 保存先は既存の `.workspace/access-data/2026/wXX/` に `chohama-aff-wXX.csv` として追加。
- [cho-hamanako-weekly-pdca] のフローに「アフィリエイトCTR = affiliate_click ÷ ページ閲覧数」を1行追加すれば、週次でクリック改善を追える。

---

## 8. 実装チェックリスト

- [x] `BaseHead.astro` にメインスレッド gtag シムを追加（2章） — `src/components/BaseHead.astro`
- [x] `BannerCard.astro` / `AffiliateCard.astro` の `<a>` に `data-aff-*` と `class="affiliate-link"` を付与（3章）
- [x] 共通クリックハンドラを配置（3章） — `src/scripts/affiliate-tracking.js`、`BaseHead.astro` の script import ブロックで読み込み
- [x] 記事レイアウトに scroll_depth 計測を追加（4章） — `src/scripts/scroll-depth.js`（全ページ共通、BaseHead経由）
- [x] `rel` に `sponsored` を追加（SEO/ポリシー適合、既存 `noopener noreferrer` に追記） — 両コンポーネント対応済み
- [x] ビルド確認: `npx astro check`（0エラー）／ `npx astro build`（306ページ成功、生成HTMLに `data-aff-id` 属性・`affiliate_click`/`scroll_depth` イベントコード埋め込み確認済み）
- [ ] GA4管理で `affiliate_click` のカスタムディメンション（aff_id / page_path）登録・キーイベント指定 ※管理画面操作のためユーザー側対応
- [ ] 反映後48h→GA4リアルタイムレポートで発火確認 → 週次CSVに追加

### 実装メモ

- スクロール計測は記事ページに限定せず全ページ共通で読み込む構成にした（コスト微小・実装簡潔化のため）。トップページ等でも `scroll_depth` は発火するが、`page_path` で記事ページのみ後工程でフィルタ可能。
- `AffiliateCard.astro` の末尾に既存の重複 `</div>` あり（今回のタスク範囲外の既存バグ、未修正）。

---

## 参照ファイル

- `src/components/BaseHead.astro`（gtag/Partytown 読み込み）
- `astro.config.mjs`（Partytown forward 設定）
- `src/components/BannerCard.astro` / `AffiliateCard.astro`（計測付与対象）
- `src/layouts/`（scroll計測を入れる記事レイアウト）
