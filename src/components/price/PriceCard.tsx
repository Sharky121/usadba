/** Контакты для кнопок внизу окна — те же, что в шапке сайта. */
const PHONE_HREF = "tel:+79106130022";
const TELEGRAM_HREF = "https://t.me/+79155969524";

const LOGOS = {
  pra: { src: "/images/logo_pra_white.png", alt: "Усадьба на Пре" },
  ushmor: { src: "/images/logo_ushmor_white.png", alt: "Усадьба Ушмор" },
} as const;

export type PriceRow = {
  /** Что сдаётся / услуга */
  name: string;
  /** Цена, например «450 000 ₽» */
  price: string;
  /** Уточнение мелким шрифтом под названием */
  note?: string;
};

type Props = {
  /** id окна — на него ссылаются кнопки «Прайс-лист» (data-src="#...") */
  id: string;
  /** Цветовая тема и логотип */
  variant: keyof typeof LOGOS;
  /** Заголовок под надписью «Прайс-лист» */
  title: string;
  rows: PriceRow[];
  /** Список «В стоимость входит» */
  includes?: string[];
  /** Блок «Акции» */
  promo?: string[];
  /** Примечания внизу */
  notes?: string[];
};

/**
 * Окно прайс-листа (открывается в Fancybox по data-src="#id").
 * Шапка с логотипом, строки «название — цена», акции, примечания и кнопки связи.
 * Содержимое прокручивается внутри окна, шапка и кнопки остаются на месте.
 */
export default function PriceCard({ id, variant, title, rows, includes, promo, notes }: Props) {
  const logo = LOGOS[variant];
  return (
    <div className={`price-card price-card--${variant}`} id={id}>
      <div className="price-card__header">
        <img className="price-card__logo" src={logo.src} width="100" height="78" alt={logo.alt} loading="lazy" decoding="async" />
        <div className="price-card__heading">
          <p className="price-card__eyebrow">Прайс-лист</p>
          <h3 className="price-card__title">{title}</h3>
        </div>
      </div>

      <div className="price-card__body">
        <ul className="price-card__rows">
          {rows.map((row) => (
            <li className="price-card__row" key={row.name}>
              <span className="price-card__name">
                {row.name}
                {row.note && <small className="price-card__row-note">{row.note}</small>}
              </span>
              <strong className="price-card__price">{row.price}</strong>
            </li>
          ))}
        </ul>

        {includes && (
          <div className="price-card__includes">
            <h4 className="price-card__subtitle">В стоимость входит</h4>
            <ul className="price-card__list">
              {includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {promo && (
          <div className="price-card__promo">
            <h4 className="price-card__subtitle">Акции</h4>
            <ul className="price-card__list">
              {promo.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {notes && (
          <p className="price-card__notes">
            {notes.join(" ")}
          </p>
        )}
      </div>

      <div className="price-card__footer">
        <a className="price-card__btn price-card__btn--primary" href={PHONE_HREF}>
          Позвонить
        </a>
        <a className="price-card__btn" href={TELEGRAM_HREF} target="_blank" rel="noopener noreferrer">
          Написать в Telegram
        </a>
      </div>
    </div>
  );
}
