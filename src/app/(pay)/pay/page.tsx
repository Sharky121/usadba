import PayBody from "@/content/pay";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata();

export default function PayPage() {
  return <PayBody />;
}
