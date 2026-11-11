import "@/styles/site";
import BodyEndScripts from "@/components/BodyEndScripts";
import HeadScripts from "@/components/HeadScripts";
import SiteScripts from "@/components/SiteScripts";
import { siteViewport } from "@/lib/site-metadata";

export const viewport = siteViewport;

export default function NewYearLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadScripts yookassaCss />
      </head>
      <body className="page page-new-year">
        {children}
        <BodyEndScripts />
        <SiteScripts />
      </body>
    </html>
  );
}
