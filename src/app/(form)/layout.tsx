import { siteViewport } from "@/lib/site-metadata";

export const viewport = siteViewport;

/**
 * form.html — тестовая страница формы бронирования. В оригинале подключался
 * несуществующий public/main.css, поэтому страница без стилей сайта.
 */
export default function FormLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="page page-new-year">{children}</body>
    </html>
  );
}
