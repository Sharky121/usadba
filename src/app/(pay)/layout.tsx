import "@/styles/site";
import HeadScripts from "@/components/HeadScripts";
import { siteViewport } from "@/lib/site-metadata";

export const viewport = siteViewport;

/** pay.html: только стили и скрипт формы YooKassa в <head>, без index.js. */
export default function PayLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadScripts yookassaCss yookassaJsInHead />
      </head>
      <body className="page">{children}</body>
    </html>
  );
}
