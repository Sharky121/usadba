/* eslint-disable @typescript-eslint/no-explicit-any */

const PHOTO_SELECTOR = ".owl-carousel .owl-item img, .gallery__image, .ushmor-gallery__item img";

/** Адрес полноразмерного фото: href ссылки-обёртки, иначе src самой картинки. */
function fullSrc(img: HTMLImageElement): string {
  return img.closest("a[href]")?.getAttribute("href") || img.getAttribute("src") || "";
}

/**
 * Клик по фото в карусели или в сетке фотографий открывает Fancybox со всеми фото этого блока
 * (со стрелками и миниатюрами). Клоны слайдов, которые Owl Carousel создаёт для бесконечной
 * прокрутки, в галерею не попадают — иначе фото дублировались бы.
 * Возвращает функцию, снимающую обработчик.
 */
export function bindPhotoGalleries(Fancybox: any): () => void {
  const onClick = (evt: MouseEvent) => {
    const img = (evt.target as Element | null)?.closest?.(PHOTO_SELECTOR) as HTMLImageElement | null;
    if (!img) return;

    const carousel = img.closest(".owl-carousel");
    const group = carousel || img.closest(".gallery, .ushmor-gallery");
    if (!group) return;

    const imgs = Array.from(
      group.querySelectorAll<HTMLImageElement>(carousel ? ".owl-item:not(.cloned) img" : "img"),
    );
    const sources = imgs.map(fullSrc).filter(Boolean);
    if (!sources.length) return;

    evt.preventDefault();
    const startIndex = Math.max(0, sources.indexOf(fullSrc(img)));
    Fancybox.show(
      sources.map((src) => ({ src, type: "image" })),
      { startIndex, infinite: sources.length > 1 },
    );
  };

  document.addEventListener("click", onClick);
  return () => document.removeEventListener("click", onClick);
}
