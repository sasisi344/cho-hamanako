const marks = [25, 50, 75, 100]
const fired = new Set()

function onScrollDepth() {
  const el = document.documentElement
  const scrolled = ((el.scrollTop + window.innerHeight) / el.scrollHeight) * 100
  for (const m of marks) {
    if (scrolled >= m && !fired.has(m)) {
      fired.add(m)
      if (typeof window.gtag === "function") {
        window.gtag("event", "scroll_depth", {
          percent: m,
          page_path: location.pathname,
        })
      }
    }
  }
  if (fired.size === marks.length) {
    window.removeEventListener("scroll", onScrollDepth)
  }
}

window.addEventListener("scroll", onScrollDepth, { passive: true })
