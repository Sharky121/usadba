import PriceCard from "./PriceCard";
import { NOTES, PROMO } from "./shared";

/** Прайс-лист Усадьбы на Пре (popup #price-pra). */
export default function PricePra() {
  return (
    <PriceCard
      id="price-pra"
      variant="pra"
      title="Усадьба на Пре"
      rows={[
        { name: "Аренда усадьбы полностью", note: "до 10 человек", price: "150 000 ₽ / сутки" },
        { name: "Баня на дровах", note: "без ограничения по времени", price: "15 000 ₽" },
      ]}
      promo={PROMO}
      notes={NOTES}
    />
  );
}
