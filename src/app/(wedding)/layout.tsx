import "@/styles/wedding";
import HeadScripts from "@/components/HeadScripts";
import WeddingScripts from "@/components/WeddingScripts";
import { siteViewport } from "@/lib/site-metadata";

export const viewport = siteViewport;

export default function WeddingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadScripts />
      </head>
      <body className="page">
        {/* Google Tag Manager (noscript) — в исходных wedding_*.html стоял в <head> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N6PF2LW" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />
        {children}
        <WeddingScripts />
      </body>
    </html>
  );
}
