import HomeBody from "@/content/home";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata('Аренда усадьбы "Усадьба на Пре", дер. Ушмор - официальный сайт');

export default function HomePage() {
  return <HomeBody />;
}
