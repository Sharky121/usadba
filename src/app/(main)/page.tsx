import GtmNoscript from "@/components/common/GtmNoscript";
import YookassaTemplate from "@/components/common/YookassaTemplate";
import SpriteHome from "@/components/icons/SpriteHome";
import SiteHeader, { HEADER_CONTACTS } from "@/components/layout/SiteHeader";
import PricePra from "@/components/price/PricePra";
import PriceUshmor from "@/components/price/PriceUshmor";
import EarlHouse from "@/components/sections/home/EarlHouse";
import Location from "@/components/sections/home/Location";
import OurHousesDesktop from "@/components/sections/home/OurHousesDesktop";
import PraAbout from "@/components/sections/home/PraAbout";
import PraHouseMobile from "@/components/sections/home/PraHouseMobile";
import PraInterior from "@/components/sections/home/PraInterior";
import PraInteriorReview from "@/components/sections/home/PraInteriorReview";
import PraSauna from "@/components/sections/home/PraSauna";
import PraTerritory from "@/components/sections/home/PraTerritory";
import Question from "@/components/sections/home/Question";
import UshmorAbout from "@/components/sections/home/UshmorAbout";
import UshmorGuestHouse from "@/components/sections/home/UshmorGuestHouse";
import UshmorHouseMobile from "@/components/sections/home/UshmorHouseMobile";
import UshmorInterior from "@/components/sections/home/UshmorInterior";
import UshmorTerritory from "@/components/sections/home/UshmorTerritory";
import WeddingScreen from "@/components/sections/home/WeddingScreen";
import WelcomeScreen from "@/components/sections/home/WelcomeScreen";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata('Аренда усадьбы "Усадьба на Пре", дер. Ушмор - официальный сайт');

export default function HomePage() {
  return (
    <>
      <GtmNoscript />
      <SiteHeader contact={HEADER_CONTACTS.telegram} />
      <main className="page__main page-main">
        <WelcomeScreen />
        <WeddingScreen />
        <OurHousesDesktop />
        {/* Усадьба на Пре */}
        <PraHouseMobile />
        <PraAbout />
        <PraTerritory />
        <PraInterior />
        <PraInteriorReview />
        <PraSauna />
        {/* Усадьба Ушмор */}
        <UshmorHouseMobile />
        <UshmorAbout />
        <UshmorTerritory />
        <EarlHouse />
        <UshmorInterior />
        <UshmorGuestHouse />
        <Location />
        <Question />
      </main>
      <SpriteHome />
      <PricePra />
      <PriceUshmor />
      <YookassaTemplate />
    </>
  );
}
