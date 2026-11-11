import GtmNoscript from "@/components/common/GtmNoscript";
import SpriteNewYear from "@/components/icons/SpriteNewYear";
import SiteHeader, { HEADER_CONTACTS } from "@/components/layout/SiteHeader";
import PricePra from "@/components/price/PricePra";
import PriceUshmorNewYear from "@/components/price/PriceUshmorNewYear";
import NewYearScreen from "@/components/sections/new-year/NewYearScreen";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata("Новогодний заезд и новогодние каникулы — Усадьба на Пре и Ушмор");

export default function NewYearPage() {
  return (
    <>
      <GtmNoscript />
      <SiteHeader contact={HEADER_CONTACTS.whatsappNewYear} />
      <main className="page__main page-main">
        <NewYearScreen />
      </main>
      <SpriteNewYear />
      <PricePra />
      <PriceUshmorNewYear />
    </>
  );
}
