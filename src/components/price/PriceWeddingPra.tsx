import PriceCard from "./PriceCard";
import { WEDDING_INCLUDES } from "./shared";

/** Свадебный прайс Усадьбы на Пре. Текст — как в исходной странице (там указана аренда усадьбы Ушмор). */
export default function PriceWeddingPra() {
  return (
    <PriceCard
      id="price-wedding-pra"
      variant="pra"
      title="Свадьба в усадьбе"
      rows={[{ name: "Аренда усадьбы Ушмор под мероприятие", note: "до 30 человек", price: "400 000 ₽" }]}
      includes={WEDDING_INCLUDES}
    />
  );
}
