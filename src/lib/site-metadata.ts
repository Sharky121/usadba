import type { Metadata, Viewport } from "next";

const DESCRIPTION =
  "Каждый когда-нибудь мечтал оказаться вдали от городской суеты и рутинных проблем в окружении высоких деревьев, слиться с природой, но одновременно находиться в комфортных условиях.";
const OG_TITLE = "Отдых в центре Мещеры - мы готовы исполнить вашу мечту!";

export const DEFAULT_TITLE = 'Аренда усадьбы "Усадьба на Пре", дер. Ушмор - официальный сайт';

/** Мета-теги, одинаковые во всех исходных HTML-страницах. */
export function siteMetadata(title: string = DEFAULT_TITLE): Metadata {
  return {
    title,
    description: DESCRIPTION,
    formatDetection: { telephone: false },
    openGraph: {
      locale: "ru_RU",
      siteName: "Отдых в Центре Мещеры - Мы готовы исполнить Вашу мечту!",
      type: "website",
      title: OG_TITLE,
      description: DESCRIPTION,
      url: "https://otdyh-v-centre-meshery.ru/",
    },
    twitter: {
      card: "summary_large_image",
      title: OG_TITLE,
      description: DESCRIPTION,
    },
  };
}

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: false,
};
