function onAffiliateClick(e) {
  const a = e.target.closest("a.affiliate-link")
  if (!a || typeof window.gtag !== "function") return
  window.gtag("event", "affiliate_click", {
    aff_id: a.dataset.affId || "",
    aff_brand: a.dataset.affBrand || "",
    aff_name: a.dataset.affName || "",
    // TackleCard の position prop（記事内の節）と、記事の category（points / target / travel など）
    aff_position: a.closest("[data-aff-position]")?.dataset.affPosition || "",
    page_type: a.closest("[data-category]")?.dataset.category || "",
    link_url: a.href,
    page_path: location.pathname,
  })
}

document.addEventListener("click", onAffiliateClick, { capture: true })

// カードが画面に半分以上入ったら affiliate_view を1回だけ送る（クリック率の分母。hq:H-40）
const viewed = new WeakSet()
const viewObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const a = entry.target
            if (!entry.isIntersecting || viewed.has(a)) continue
            if (typeof window.gtag !== "function") continue
            viewed.add(a)
            viewObserver.unobserve(a)
            window.gtag("event", "affiliate_view", {
              aff_id: a.dataset.affId || "",
              aff_position: a.closest("[data-aff-position]")?.dataset.affPosition || "",
              page_type: a.closest("[data-category]")?.dataset.category || "",
              page_path: location.pathname,
            })
          }
        },
        { threshold: 0.5 },
      )
    : null

function observeAffiliateLinks() {
  if (!viewObserver) return
  document.querySelectorAll("a.affiliate-link").forEach((a) => {
    if (!viewed.has(a)) viewObserver.observe(a)
  })
}

observeAffiliateLinks()
document.addEventListener("astro:page-load", observeAffiliateLinks)
