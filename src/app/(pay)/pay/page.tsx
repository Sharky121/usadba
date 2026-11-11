import GtmNoscript from "@/components/common/GtmNoscript";
import SpriteDefault from "@/components/icons/SpriteDefault";
import SiteHeader, { HEADER_CONTACTS } from "@/components/layout/SiteHeader";
import PaymentForm from "@/components/sections/pay/PaymentForm";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata();

export default function PayPage() {
  return (
    <>
      <GtmNoscript />
      <SiteHeader contact={HEADER_CONTACTS.whatsappPay} withMenu={false} />
      <PaymentForm />
      <SpriteDefault />
    </>
  );
}
