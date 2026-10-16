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
