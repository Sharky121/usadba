/* eslint-disable */
/** Свадебный прайс Усадьбы Ушмор. */
export default function PriceWeddingUshmor() {
  return (
    <div className="price price--ushmor" id="price-wedding-ushmor">
      <div className="price__wrapper">
        <div className="price__header">
          <img loading="lazy" decoding="async" src="/images/logo_ushmor_white.png" width="100" height="78" alt="Логотип усадьба Ушмор" />
          {" "}
          <h3>
            Прайс лист
          </h3>
        </div>
        <h4 className="price__title">
          В аренду усадьбы Ушмор под мероприятие до 30 человек входит за 400 тыс.рублей:
        </h4>
        <ul className="price__list">
          <li className="price__item">
            Сопровождение администратора на протяжении всего мероприятия
          </li>
          {" "}
          <li className="price__item">
            Фото/видео съемка на территории усадьбы (услуги фотографа не входят)
          </li>
          {" "}
          <li className="price__item">
            Аренда всей территории и зимнего сада на 12 часов
          </li>
          {" "}
          <li className="price__item">
            Столы/стулья/посуда на 12 часов
          </li>
          {" "}
          <li className="price__item">
            Утро невесты (ранний заезд невесты ,фотосессия в графском доме. При необходимости заезда накануне -возможно размещение в гостевом доме за отдельную плату)
          </li>
          {" "}
          <li className="price__item">
            Апартаменты для ночи молодоженов с завтраком (графский дом)
          </li>
          {" "}
          <li className="price__item">
            Размещение гостей в гостевом доме (до 12 человек)
          </li>
        </ul>
      </div>
    </div>
  );
}
