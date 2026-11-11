/* eslint-disable */
/** Футер свадебных страниц. */
export default function WeddingFooter({ logo }: { logo: string }) {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">
          Приглашаем к сотрудничеству
          <br />
          свадебные агентства
        </h2>
        <div className="footer__logo">
          <img src={logo} width="120" alt="" />
        </div>
        <div className="footer__info">
          <dl className="footer__desc-list desc-list">
            <div className="desc-list__item">
              <dt className="desc-list__term visually-hidden">
                Номер телефона
              </dt>
              <dd className="desc-list__definition">
                Бронирование по телефону: +7 (910) 613-00-22
              </dd>
            </div>
            <div className="desc-list__item">
              <dt className="desc-list__term visually-hidden">
                Адрес
              </dt>
              <dd className="desc-list__definition">
                Рязанская область, Клепиковский район, д. Ушмор
              </dd>
            </div>
            <div className="desc-list__item">
              <dt className="desc-list__term visually-hidden">
                Яндекс карта
              </dt>
              <dd className="desc-list__definition">
                <a href="">
                  Мы на Яндекс Картах
                </a>
              </dd>
            </div>
            <div className="desc-list__item">
              <dt className="desc-list__term visually-hidden">
                Электронная почта
              </dt>
              <dd className="desc-list__definition">
                <a href="mailto: info@usadba-na-pre.ru">
                  e-mail: info@usadba-na-pre.ru
                </a>
              </dd>
            </div>
            <div className="desc-list__item">
              <dt className="desc-list__term visually-hidden">
                Адрес основного сайта
              </dt>
              <dd className="desc-list__definition">
                <a href="/">
                  usadba-na-pre.ru
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
  );
}
