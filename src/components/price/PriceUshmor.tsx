import PriceCard from "./PriceCard";
import { NOTES, PROMO } from "./shared";

/** Прайс-лист Усадьбы Ушмор (popup #price-ushmor). */
export default function PriceUshmor() {
  return (
    <PriceCard
      id="price-ushmor"
      variant="ushmor"
      title="Усадьба Ушмор"
      rows={[
        { name: "Аренда усадьбы Ушмор", price: "450 000 ₽" },
        { name: "Аренда усадьбы на Пре", price: "350 000 ₽" },
        { name: "Аренда дома Пра", price: "150 000 ₽" },
        { name: "Аренда зимнего сада", price: "от 300 000 ₽" },
        { name: "Аренда гостевого дома", price: "150 000 ₽" },
        { name: "Фотосессия", price: "от 25 000 ₽" },
      ]}
      promo={PROMO}
      notes={NOTES}
    />
  );
}
