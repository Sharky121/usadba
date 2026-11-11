import PriceCard from "./PriceCard";
import { NOTES, PROMO } from "./shared";

/** Новогодний прайс Усадьбы Ушмор (popup #price-ushmor). */
export default function PriceUshmorNewYear() {
  return (
    <PriceCard
      id="price-ushmor"
      variant="ushmor"
      title="Усадьба Ушмор"
      rows={[
        {
          name: "Аренда усадьбы с размещением в гостевом доме",
          note: "до 10 человек",
          price: "150 000 ₽ / сутки",
        },
      ]}
      promo={PROMO}
      notes={NOTES}
    />
  );
}
