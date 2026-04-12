"""Compare WP-era vs post-Astro GSC exports (query-level)."""
from __future__ import annotations

import csv
from collections import defaultdict
from pathlib import Path
from urllib.parse import unquote

# Approximate day counts (adjust if your GSC export ranges differ)
WP_DAYS = 92  # e.g. 2025-11 ~ 2026-01
ASTRO_DAYS = 28  # filename: after28days

HERE = Path(__file__).resolve().parent
WP_CSV = HERE / "GSC-2025-11-2026-1.csv"
ASTRO_CSV = HERE / "GSC-query-data-20260407 - chohamanako-0407-after28days.csv"
OUT_CSV = HERE / "query-compare-weakened.csv"
OUT_MD = HERE / "query-compare-priority.md"


def _int_field(s: str) -> int:
    s = (s or "").strip().replace(",", "")
    return int(s) if s else 0


def _float_field(s: str) -> float:
    s = (s or "").strip().replace(",", "")
    return float(s) if s else 0.0


def parse_row(row: list[str]) -> tuple[str, str, int, int, float]:
    q, page = row[0].strip(), row[1].strip()
    clicks = _int_field(row[2])
    imp = _int_field(row[3])
    pos = _float_field(row[5])
    return q, page, clicks, imp, pos


def aggregate_by_query(path: Path) -> dict[str, dict]:
    agg: dict[str, dict] = defaultdict(
        lambda: {"clicks": 0, "imp": 0, "pos_w": 0.0, "pages": []}
    )
    with path.open(encoding="utf-8-sig", newline="") as f:
        reader = csv.reader(f)
        next(reader, None)  # header
        for row in reader:
            if len(row) < 6:
                continue
            q, page, clicks, imp, pos = parse_row(row)
            d = agg[q]
            d["clicks"] += clicks
            d["imp"] += imp
            d["pos_w"] += pos * imp
            if imp > 0 or clicks > 0:
                d["pages"].append((page, clicks, imp, pos))
    for d in agg.values():
        if d["imp"] > 0:
            d["avg_pos"] = d["pos_w"] / d["imp"]
        else:
            d["avg_pos"] = 0.0
        d["pages"].sort(key=lambda x: -x[2])
    return dict(agg)


def path_to_slug_hint(url: str) -> str:
    """Rough hint for content team: blog/... or points/... or legacy /2024/..."""
    try:
        path = unquote(url.split("cho-hamanako.info", 1)[-1].split("?")[0])
    except Exception:
        path = url
    if "/blog/" in path:
        i = path.index("/blog/")
        return path[i:].rstrip("/")
    if "/points/" in path:
        i = path.index("/points/")
        return path[i:].rstrip("/")
    return path[:120]


def main() -> None:
    wp = aggregate_by_query(WP_CSV)
    astro = aggregate_by_query(ASTRO_CSV)
    common = set(wp.keys()) & set(astro.keys())

    rows: list[dict] = []
    for q in common:
        w, a = wp[q], astro[q]
        if w["imp"] < 10 and a["imp"] < 10:
            continue
        w_cpd = w["clicks"] / WP_DAYS
        a_cpd = a["clicks"] / ASTRO_DAYS
        delta_pos = a["avg_pos"] - w["avg_pos"]
        delta_cpd = a_cpd - w_cpd
        top_page = a["pages"][0][0] if a["pages"] else ""
        rows.append(
            {
                "query": q,
                "wp_clicks": w["clicks"],
                "wp_imp": w["imp"],
                "wp_pos": round(w["avg_pos"], 2),
                "astro_clicks": a["clicks"],
                "astro_imp": a["imp"],
                "astro_pos": round(a["avg_pos"], 2),
                "delta_pos": round(delta_pos, 2),
                "delta_cpd": round(delta_cpd, 6),
                "top_astro_page": top_page,
                "slug_hint": path_to_slug_hint(top_page),
            }
        )

    rows.sort(key=lambda x: (x["delta_cpd"], x["delta_pos"]))

    with OUT_CSV.open("w", encoding="utf-8-sig", newline="") as f:
        if rows:
            w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
            w.writeheader()
            w.writerows(rows)

    # --- Markdown report: priority buckets
    meaningful = [r for r in rows if r["wp_clicks"] >= 3]
    meaningful.sort(key=lambda x: x["delta_cpd"])

    pos_slip = [r for r in rows if r["wp_imp"] >= 30 and r["astro_imp"] >= 10]
    pos_slip.sort(key=lambda x: -x["delta_pos"])

    lines = [
        "# GSC クエリ比較（WP期間 vs Astro直近28日）",
        "",
        "## 前提・限界",
        "",
        f"- WP: `{WP_CSV.name}` を **約{WP_DAYS}日** とみなして1日あたりクリックに換算。",
        f"- Astro: `{ASTRO_CSV.name}` を **{ASTRO_DAYS}日** とみなす。",
        "- 同一クエリでも **URLが複数行** あるため、**クエリ単位でクリック・表示を合算**した。",
        "- 期間・季節・需要変動が混ざるため、「順位下落」だけでなく **冬→春の需要変化** も含みうる。",
        "- 出力: `query-compare-weakened.csv`（全件ソート: 日次クリック悪化が大きい順）。",
        "",
        "## 優先改善: 日次クリックの落ち込みが大きいクエリ（WP期間クリック3+）",
        "",
        "| クエリ | WP→Astro 平均掲載位置 | WP click / Astro click | 主に出ているURL（Astro側） |",
        "|--------|----------------------|-------------------------|------------------------------|",
    ]
    for r in meaningful[:35]:
        lines.append(
            f"| {r['query']} | {r['wp_pos']} → {r['astro_pos']} (Δ{r['delta_pos']:+g}) | "
            f"{r['wp_clicks']} / {r['astro_clicks']} | `{r['slug_hint']}` |"
        )

    lines.extend(
        [
            "",
            "## 参考: 表示数が多いのに掲載位置が悪化したクエリ（WP imp≥30 & Astro imp≥10）",
            "",
            "| クエリ | 位置 Δ | WP pos → Astro pos | WP imp / Astro imp | slug ヒント |",
            "|--------|--------|--------------------|--------------------|-------------|",
        ]
    )
    for r in pos_slip[:25]:
        lines.append(
            f"| {r['query']} | {r['delta_pos']:+g} | {r['wp_pos']} → {r['astro_pos']} | "
            f"{r['wp_imp']} / {r['astro_imp']} | `{r['slug_hint']}` |"
        )

    lines.extend(["", "## 記事単位のまとめ（slug_hint 頻出）", ""])
    from collections import Counter

    cnt = Counter()
    for r in meaningful[:50]:
        cnt[r["slug_hint"]] += 1
    for slug, n in cnt.most_common(20):
        lines.append(f"- **{slug}**（上表に {n} 回）")

    OUT_MD.write_text("\n".join(lines), encoding="utf-8")

    print("Wrote:", OUT_CSV)
    print("Wrote:", OUT_MD)
    print("Common queries (aggregated):", len(common))
    print("Rows written:", len(rows))


if __name__ == "__main__":
    main()
