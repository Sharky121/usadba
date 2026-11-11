import type { NextConfig } from "next";

// Старые адреса статического сайта (*.html, *.php) продолжают работать.
const PAGES = ["new-year1", "wedding_ushmor", "wedding_pra", "pay", "form", "video"];
const FORM_HANDLERS = ["question", "send", "send-form", "callback", "price"];

const nextConfig: NextConfig = {
  // В репозитории есть lockfile в корне — явно указываем корень приложения
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...PAGES.map((p) => ({ source: `/${p}.html`, destination: `/${p}`, permanent: true })),
    ];
  },
  async rewrites() {
    return FORM_HANDLERS.map((h) => ({ source: `/${h}.php`, destination: `/api/${h}` }));
  },
};

export default nextConfig;
