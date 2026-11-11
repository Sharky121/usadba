import PriceCard from "./PriceCard";
import { WEDDING_INCLUDES } from "./shared";

/** Свадебный прайс Усадьбы Ушмор. */
export default function PriceWeddingUshmor() {
  return (
    <PriceCard
      id="price-wedding-ushmor"
      variant="ushmor"
      title="Свадьба в усадьбе Ушмор"
      rows={[{ name: "Аренда усадьбы Ушмор под мероприятие", note: "до 30 человек", price: "400 000 ₽" }]}
      includes={WEDDING_INCLUDES}
    />
  );
}
