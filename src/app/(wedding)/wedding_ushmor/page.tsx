import SpriteDefault from "@/components/icons/SpriteDefault";
import WeddingFooter from "@/components/layout/WeddingFooter";
import PriceWeddingUshmor from "@/components/price/PriceWeddingUshmor";
import Apartments from "@/components/sections/wedding-ushmor/Apartments";
import EarlHouse from "@/components/sections/wedding-ushmor/EarlHouse";
import Features from "@/components/sections/wedding-ushmor/Features";
import Gallery from "@/components/sections/wedding-ushmor/Gallery";
import Garden from "@/components/sections/wedding-ushmor/Garden";
import GuestHouse from "@/components/sections/wedding-ushmor/GuestHouse";
import Library from "@/components/sections/wedding-ushmor/Library";
import Organization from "@/components/sections/wedding-ushmor/Organization";
import UshmorAbout from "@/components/sections/wedding-ushmor/UshmorAbout";
import WeddingHero from "@/components/sections/wedding-ushmor/WeddingHero";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata();

export default function WeddingUshmorPage() {
  return (
    <>
      <div className="preloader" id="preloader"></div>
      <main className="page__wedding wedding-page">
        <WeddingHero />
        <UshmorAbout />
        <Organization />
        <EarlHouse />
        <Apartments />
        <Garden />
        <Library />
        <GuestHouse />
        <Features />
        <Gallery />
      </main>
      <WeddingFooter logo="/images/logo_ushmor_red.png" />
      <SpriteDefault />
      <PriceWeddingUshmor />
    </>
  );
}
