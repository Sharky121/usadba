import SpriteDefault from "@/components/icons/SpriteDefault";
import WeddingFooter from "@/components/layout/WeddingFooter";
import PriceWeddingPra from "@/components/price/PriceWeddingPra";
import Catering from "@/components/sections/wedding-pra/Catering";
import InteriorFloor1 from "@/components/sections/wedding-pra/InteriorFloor1";
import InteriorFloor2 from "@/components/sections/wedding-pra/InteriorFloor2";
import InteriorOverview from "@/components/sections/wedding-pra/InteriorOverview";
import PackageOffer from "@/components/sections/wedding-pra/PackageOffer";
import PraAbout from "@/components/sections/wedding-pra/PraAbout";
import WeddingHero from "@/components/sections/wedding-pra/WeddingHero";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata();

export default function WeddingPraPage() {
  return (
    <>
      <div className="preloader" id="preloader"></div>
      <main className="page__wedding wedding-page">
        <WeddingHero />
        <PraAbout />
        <PackageOffer />
        <Catering />
        <InteriorOverview />
        <InteriorFloor1 />
        <InteriorFloor2 />
      </main>
      <WeddingFooter logo="/images/pra_logo_grey.png" />
      <SpriteDefault />
      <PriceWeddingPra />
    </>
  );
}
