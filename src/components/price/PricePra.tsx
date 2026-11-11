/* eslint-disable */
/** Прайс-лист Усадьбы на Пре (popup #price-pra). */
export default function PricePra() {
  return (
    <div className="price" id="price-pra">
      <div className="price__wrapper">
        <div className="price__header">
          <img className="price__logo" src="/images/logo_pra_white.png" width="100" height="78" alt="Логотип усадьба на Пре" />
          {" "}
          <h3 className="price__title">
            Прайс лист
          </h3>
        </div>
        <div className="price__weekdays price-weekdays">
          {/* <h3 class="price-weekdays__title">Январь - апрель</h3> */}
          <ul className="price-weekdays__list">
            <li className="price-weekdays__item">
              <strong>
                Аренда усадьбы полностью 150&nbsp;тысяч&nbsp;рублей&nbsp;/&nbsp;сутки{" "}
                <span>
                  (до 10 человек)
                </span>
              </strong>
            </li>
            {" "}
            <li className="price-weekdays__item">
              <strong>
                Баня на дровах 15&nbsp;тысяч&nbsp;рублей{" "}
                <span>
                  (без ограничения по времени)
                </span>
              </strong>
            </li>
            {" "}
            <li className="price-weekdays__item">
              <strong>
                Акции
                <br />
              </strong>
              {" "}Для пары с понедельника по четверг 50&nbsp;тысяч&nbsp;рублей{" "}
              <span>
                (закрытие усадьбы полностью)
              </span>
              {" "}При повторном заезде - скидка 10&nbsp;%
              <br />
              При последующих заездах - скидка 20&nbsp;%
            </li>
          </ul>
        </div>
        <div className="price__note">
          * усадьба сдаётся только под один заезд. Без посторонних, под полное закрытие.
          <br />
        </div>
      </div>
    </div>
  );
}
