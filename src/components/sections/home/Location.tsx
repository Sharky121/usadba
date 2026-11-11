/* eslint-disable */
/** ГДЕ НАС НАЙТИ */
export default function Location() {
  return (
    <section className="page__section page-section location" id="contacts">
      <div className="page-section__container container">
        <div className="page-section__header">
          <h2 className="page-section__title">
            Где нас найти
          </h2>
          <p className="page-section__subtitle">
            Дорога не займет много времени
            <br />
            Мы находимся:{" "}
            <b>
              Москва — 170 км — Усадебный Комплекс — 80 км — Рязань
            </b>
          </p>
        </div>
        <div className="page-section__col">
          <div className="map" id="map"></div>
        </div>
        <div className="page-section__col address">
          <h3 className="address__title">
            Контакты
          </h3>
          <ul className="address__list">
            <li className="address__item address-item">
              <h4 className="address-item__title">
                Реквизиты
              </h4>
              <p className="address-item__description">
                ООО "УК УШМОР" ИНН 6234173874 ОГРН 1176234028651
              </p>
            </li>
            {" "}
            <li className="address__item address-item">
              <h4 className="address-item__title">
                Усадьба на Пре
              </h4>
              <p className="address-item__description">
                Рязанская область, Клепиковский район, с.Подлипки
              </p>
              <p className="address-item__description">
                Координаты:{" "}
                <b>
                  55.150803, 40.051944
                </b>
              </p>
              <p className="address-item__description">
                <a className="address-item__link" href="https://yandex.ru/profile/191804673753">
                  Яндекс карты
                </a>
              </p>
            </li>
            {" "}
            <li className="address__item">
              <h4 className="address-item__title">
                Усадьба Ушмор
              </h4>
              <p className="address-item__description">
                Рязанская область, Клепиковский район, д.Ушмор.
              </p>
              <p className="address-item__description">
                Координаты:{" "}
                <b>
                  55.180429, 40.092341
                </b>
              </p>
              <p className="address-item__description">
                <a className="address-item__link" href="https://yandex.ru/profile/233487873190">
                  Яндекс карты
                </a>
              </p>
            </li>
            {" "}
            <li className="address__item">
              <h4 className="address-item__title">
                Бронирование усадеб по телефону:
              </h4>
              <p className="address-item__description">
                <a className="address-item__link" href="tel:+79106130022">
                  8 (910) 613-00-22
                </a>
                {" "}
                <br />
                {" "}
                <span>
                  (с 8.00 до 22.00 ежедневно)
                </span>
              </p>
            </li>
            {" "}
            <li className="address__item">
              <h4 className="address-item__title">
                Email
              </h4>
              <p className="address-item__description">
                <a className="address-item__link" href="mailto:info@usadba-na-pre.ru">
                  info@usadba-na-pre.ru
                </a>
                {" "}
                <br />
              </p>
            </li>
            {" "}
            <li className="address__item">
              <div className="social">
                <ul className="social__list">
                  <li className="social__item">
                    <a className="social-link social-link--telegram" href="https://t.me/+79155969524" target="_blank">
                      <svg className="social-link__ico" viewBox="0 0 24 24" width="37" height="37" aria-hidden="true" focusable="false">
                        <use xlinkHref="#ico-wa" x="0" y="0"></use>
                      </svg>
                      {" "}
                      <span className="social-link__text">
                        Telegram
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
