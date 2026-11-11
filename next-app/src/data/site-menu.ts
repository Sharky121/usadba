export type SiteMenuSubitem = {
  title: string;
  slug: string;
};

export type SiteMenuEntry = {
  title: string;
  slug: string;
  submenu: SiteMenuSubitem[];
};

/** Как в src/js/menu/menu.jsx */
export const SITE_MENU: SiteMenuEntry[] = [
  {
    title: "Усадьба на Пре",
    slug: "pra",
    submenu: [
      { title: "Об усадьбе", slug: "pra" },
      { title: "Территория", slug: "pra-territory" },
      { title: "Интерьер усадебного дома", slug: "pra-interior" },
      { title: "Обзор интерьера", slug: "pra-interior-review" },
      { title: "Баня", slug: "pra-sauna" },
    ],
  },
  {
    title: "Усадьба Ушмор",
    slug: "ushmor",
    submenu: [
      { title: "Об Усадьбе", slug: "ushmor" },
      { title: "Территория", slug: "ushmor-territory" },
      { title: "Графский дом", slug: "earl-house" },
      { title: "Обзор интерьера", slug: "ushmor-interior" },
      { title: "Гостевой дом Усадьбы Ушмор", slug: "ushmor-guest" },
    ],
  },
  {
    title: "Контакты",
    slug: "contacts",
    submenu: [],
  },
];
