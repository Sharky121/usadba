"use client";

import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    ymaps?: any;
    jQuery?: any;
    $?: any;
    ym?: (...args: unknown[]) => void;
  }
}

const PRA_COORDS = [55.146111, 40.048516];
const USHMOR_COORDS = [55.178604, 40.104163];
const CENTER_COORDS = [55.139267, 40.137438];

const OWL_NAV_TEXT = [
  `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
        <use xlink:href="#ico-left-arrow" x="0" y="0"></use>
       </svg>
      `,
  `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
        <use xlink:href="#ico-right-arrow" x="0" y="0"></use>
       </svg>
      `,
];

function initMap() {
  const ymaps = window.ymaps;
  if (!document.getElementById("map")) return;

  const ryazanMap = new ymaps.Map("map", { center: CENTER_COORDS, zoom: 11 });

  const praPlacemark = new ymaps.Placemark(
    PRA_COORDS,
    { balloonContent: "«Усадьба на Пре»" },
    {
      iconLayout: "default#image",
      iconImageHref: "/images/pin-pra.svg",
      iconImageSize: [27, 39],
      iconImageOffset: [-13.5, -39],
    },
  );

  const ushmorPlacemark = new ymaps.Placemark(
    USHMOR_COORDS,
    { balloonContent: "«Усадьба Ушмор»" },
    {
      iconLayout: "default#image",
      iconImageHref: "/images/pin-ushmor.svg",
      iconImageSize: [27, 39],
      iconImageOffset: [-13.5, -39],
    },
  );

  ryazanMap.geoObjects.add(praPlacemark);
  ryazanMap.geoObjects.add(ushmorPlacemark);
}

function closeMenu() {
  document.querySelector('[data-menu="site-menu"]')?.classList.remove("site-menu--isOpen");
  document.querySelector(".body-overlay")?.remove();
}

function toggleMenu() {
  const menu = document.querySelector('[data-menu="site-menu"]');
  if (!menu) return;
  menu.classList.toggle("site-menu--isOpen");
  if (menu.classList.contains("site-menu--isOpen")) {
    const overlay = document.createElement("div");
    overlay.className = "body-overlay";
    document.body.append(overlay);
  } else {
    document.querySelector(".body-overlay")?.remove();
  }
}

/**
 * Поведение страниц на основе index.css/index.js — порт src/js/common.js:
 * меню и плавная прокрутка, фиксированная шапка, Fancybox (галереи и popup-прайсы),
 * Owl Carousel, маски телефонов, форма консультации, Яндекс.Карта, модалка онлайн-оплаты YooKassa.
 */
export default function SiteScripts() {
  useEffect(() => {
    let disposed = false;
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window | Document | Element,
      type: K | string,
      fn: (e: any) => void,
    ) => {
      target.addEventListener(type, fn);
      cleanups.push(() => target.removeEventListener(type, fn));
    };

    const desktop = window.matchMedia("(min-width: 1280px)").matches;
    const offsetHeader = desktop ? 90 : 60;

    // Фиксированная шапка при прокрутке
    const header = document.querySelector("#page-header-main");
    const main = document.querySelector("main");
    const onScroll = () => {
      if (!header || !main) return;
      if (document.documentElement.scrollTop > 40) {
        header.classList.add("page-header--fixed-top");
        main.style.paddingTop = "60px";
      } else {
        header.classList.remove("page-header--fixed-top");
        main.style.paddingTop = "0px";
      }
    };
    on(window, "scroll", onScroll);
    onScroll();

    // Мобильное меню
    const hamburger = document.querySelector("#hamburger-menu");
    const closeBtn = document.querySelector("#close-mobile-nav");
    if (hamburger) on(hamburger, "click", toggleMenu);
    if (closeBtn) on(closeBtn, "click", toggleMenu);

    // Плавная прокрутка к секциям по [data-scroll] (делегирование — работает и для пунктов React-меню)
    on(document, "click", (evt: MouseEvent) => {
      const link = (evt.target as Element | null)?.closest?.("[data-scroll]") as HTMLElement | null;
      if (!link) return;
      const target = document.getElementById(link.dataset.scroll || "");
      if (!target) return;
      evt.preventDefault();
      closeMenu();
      // Во время прокрутки догружаются lazy-картинки и смещают секцию — после остановки доводим позицию.
      let corrections = 3;
      const started = Date.now();
      const scrollToTarget = () => {
        const delta = target.getBoundingClientRect().top - offsetHeader;
        if (Math.abs(delta) < 2 || corrections-- <= 0 || Date.now() - started > 4000) return;
        window.addEventListener("scrollend", scrollToTarget, { once: true });
        window.scrollBy({ top: delta, left: 0, behavior: "smooth" });
      };
      scrollToTarget();
    });

    // #callback — ссылка-заглушка
    const callback = document.querySelector("#callback");
    if (callback) on(callback, "click", (e: Event) => e.preventDefault());

    // Видео в блоке свадеб: React не выставляет атрибут muted при SSR — нужен для автоплея
    document.querySelectorAll<HTMLVideoElement>("video[autoplay]").forEach((v) => {
      v.muted = true;
      v.play().catch(() => {});
    });

    // Яндекс.Карта (скрипт API подключён в layout)
    let mapTimer: ReturnType<typeof setInterval> | undefined;
    if (document.getElementById("map")) {
      const tryInit = () => {
        if (window.ymaps) {
          clearInterval(mapTimer);
          window.ymaps.ready(initMap);
          return true;
        }
        return false;
      };
      if (!tryInit()) mapTimer = setInterval(tryInit, 100);
      cleanups.push(() => clearInterval(mapTimer));
    }

    (async () => {
      const [{ Fancybox }, { default: Swal }, { default: IMask }, { default: jQuery }, swalCfg] = await Promise.all([
        import("@fancyapps/ui"),
        import("sweetalert2/dist/sweetalert2.js"),
        import("imask"),
        import("jquery"),
        import("@/lib/swal-config"),
      ]);
      if (disposed) return;

      swalCfg.applySwalDefaults(Swal);

      // Fancybox 4.0.31 сам привязывается к [data-fancybox] при импорте с опциями по умолчанию.
      // Вызов Fancybox.bind(document.body, selector, opts) из common.js в этой версии ничего не менял,
      // поэтому повторяем фактическое поведение — привязку с опциями по умолчанию.
      Fancybox.bind("[data-fancybox]");

      document.querySelectorAll<HTMLInputElement>('[type="tel"]').forEach((el) => {
        const mask = IMask(el, { mask: "+{7} (000) 000-00-00" });
        cleanups.push(() => mask.destroy());
      });

      // Форма «Консультация» — отправка в API route (вместо question.php)
      const questionForm = document.querySelector<HTMLFormElement>("#question-form");
      if (questionForm) {
        on(questionForm, "submit", (evt: SubmitEvent) => {
          evt.preventDefault();
          const formData = new FormData(evt.target as HTMLFormElement);
          fetch("/api/question", { method: "POST", body: formData })
            .then((response) => {
              if (response.ok) swalCfg.swalFormSuccess(Swal);
              else swalCfg.swalServerError(Swal);
            })
            .catch((error) => swalCfg.swalFormError(Swal, error));
        });
      }

      // Онлайн-оплата YooKassa
      document.querySelectorAll(".btn-pay").forEach((el) => {
        on(el, "click", () => swalCfg.swalPaymentModal(Swal));
      });

      // Owl Carousel требует глобальный jQuery
      window.jQuery = window.$ = jQuery;
      await import("owl.carousel");
      if (disposed) return;
      const owlConfig = { dots: false, nav: true, loop: true, lazyLoad: true, autoHeight: false, navText: OWL_NAV_TEXT };
      jQuery(".ushmor-territory__gallery").owlCarousel({
        responsive: {
          0: { items: 1 },
          768: { margin: 20, items: 2 },
          1280: { margin: 60, items: 3 },
        },
        ...owlConfig,
      });
      jQuery(".owl-carousel").owlCarousel({ items: 1, ...owlConfig });
    })();

    return () => {
      disposed = true;
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
