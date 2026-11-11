"use client";

import { useEffect } from "react";
import { bindPhotoGalleries } from "@/lib/gallery";

/** Порт src/js/weddind-common.js: скрытие прелоадера и галереи Fancybox на свадебных страницах. */
export default function WeddingScripts() {
  useEffect(() => {
    const hidePreloader = () => {
      const preloader = document.querySelector<HTMLElement>("#preloader");
      if (preloader) preloader.style.display = "none";
    };
    if (document.readyState === "complete") hidePreloader();
    else window.addEventListener("load", hidePreloader);

    let disposed = false;
    let unbindGalleries = () => {};
    import("@fancyapps/ui").then(({ Fancybox }) => {
      if (disposed) return;
      Fancybox.bind("[data-fancybox]", { height: "100%" } as never);
      // Фото в сетках открываются галереей со стрелками (src/lib/gallery.ts)
      unbindGalleries = bindPhotoGalleries(Fancybox);
    });

    return () => {
      disposed = true;
      unbindGalleries();
      window.removeEventListener("load", hidePreloader);
    };
  }, []);

  return null;
}
