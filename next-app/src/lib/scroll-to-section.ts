/** Как в src/js/common.js: scrollBy + offset под фиксированный хедер (60 / 90 px при ≥1280). */
export function getHeaderScrollOffsetPx(): number {
  if (typeof window === "undefined") return 60;
  return window.matchMedia("(min-width: 1280px)").matches ? 90 : 60;
}

export function scrollToSectionById(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const offset = getHeaderScrollOffsetPx();
  const top = el.getBoundingClientRect().top - offset;

  window.scrollBy({
    top,
    left: 0,
    behavior: "smooth",
  });
}
