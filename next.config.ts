import type { NextConfig } from "next";

// Старые адреса статического сайта (*.html, *.php) продолжают работать.
const PAGES = ["new-year1", "wedding_ushmor", "wedding_pra", "pay", "form", "video"];
const FORM_HANDLERS = ["question", "send", "send-form", "callback", "price"];

const nextConfig: NextConfig = {
  // В репозитории есть lockfile в корне — явно указываем корень приложения
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
  // На сервере сборка идёт в отдельную папку и подменяет .next только при успехе (scripts/remote-build.sh)
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Файлы из public по умолчанию отдаются без кэширования — задаём его явно.
  async headers() {
    const cache = (source: string, value: string) => ({ source, headers: [{ key: "Cache-Control", value }] });
    return [
      cache("/fonts/:path*", "public, max-age=31536000, immutable"),
      cache("/images/:path*", "public, max-age=2592000, stale-while-revalidate=86400"),
      cache("/video/:path*", "public, max-age=2592000"),
      cache("/pdf/:path*", "public, max-age=86400"),
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
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
