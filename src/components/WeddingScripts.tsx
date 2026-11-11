"use client";

import { useEffect } from "react";

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
    import("@fancyapps/ui").then(({ Fancybox }) => {
      if (disposed) return;
      Fancybox.bind("[data-fancybox]", { height: "100%" } as never);
    });

    return () => {
      disposed = true;
      window.removeEventListener("load", hidePreloader);
    };
  }, []);

  return null;
}
