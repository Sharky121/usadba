/* eslint-disable */
import Menu from "@/components/Menu";

/** Мессенджер в шапке: на разных страницах исторически разные контакты. */
export const HEADER_CONTACTS = {
  telegram: { type: "telegram", href: "https://t.me/+79155969524", label: "Telegram" },
  whatsappNewYear: { type: "whatsapp", href: "https://wa.me/79857766877", label: "WhatsApp" },
  whatsappPay: { type: "whatsapp", href: "whatsapp://send/?phone=+79106130022", label: "WhatsApp" },
} as const;

type Contact = (typeof HEADER_CONTACTS)[keyof typeof HEADER_CONTACTS];

/** Шапка сайта: логотипы, меню, телефоны, онлайн-оплата, мессенджер. */
export default function SiteHeader({ contact = HEADER_CONTACTS.telegram, withMenu = true }: { contact?: Contact; withMenu?: boolean }) {
  return (
    <header className="page__header page-header" id="page-header-main">
      <div className="page-header__container container">
        <nav className="page-header__site-nav site-nav">
          <button className="site-nav__hamburger hamburger-menu" id="hamburger-menu">
            <div className="hamburger-menu__ico">
              <span className="hamburger-menu__line"></span>
            </div>
            {" "}
            <span className="hamburger-menu__text">
              Меню
            </span>
          </button>
          {" "}
          <a className="site-nav__logo logo" href="/">
            <span className="logo__text">
              Отдых в центре
              <br />
              Мещеры
            </span>
          </a>
          {" "}
          <div className="site-nav__menu site-menu" data-menu="site-menu">
            <div className="site-menu__wrapper">
              <button className="site-menu__close-menu" id="close-mobile-nav">
                Закрыть
              </button>
              {" "}
              <div id="menu">{withMenu && <Menu />}</div>
              {" "}
              <button className="site-menu__pay btn-pay">
                <span>
                  Онлайн оплата
                </span>
              </button>
              {" "}
              <div className="site-menu__social social">
                <ul className="social__list">
                  <li className="social__item">
                    <a className={`social-link social-link--${contact.type}`} href={contact.href} target="_blank">
                      <svg className="social-link__ico" viewBox="0 0 24 24" width="37" height="37" aria-hidden="true" focusable="false">
                        <use xlinkHref="#ico-wa" x="0" y="0"></use>
                      </svg>
                      {" "}
                      <span className="social-link__text">
                        <b>
                          {contact.label}
                        </b>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              {" "}
              <a className="site-menu__address" href="tel:+79106130022">
                <span className="phone">
                  +7 (910){" "}
                  <b>
                    613-00-22
                  </b>
                </span>
              </a>
            </div>
          </div>
          <div className="site-nav__contacts header-contacts">
            <div className="header-contact__wrapper">
              <a className="header-contacts__phone" href="tel:+79106130022">
                <svg viewBox="0 0 1200 1200" width="34" height="34" aria-hidden="true" focusable="false">
                  <use xlinkHref="#ico-phone" x="0" y="0"></use>
                </svg>
                {" "}
                <span>
                  +7 (910){" "}
                  <b>
                    613-00-22
                  </b>
                </span>
              </a>
              {" "}
              <button className="header-contacts__pay btn-pay">
                <span>
                  Онлайн оплата
                </span>
              </button>
            </div>
            <div className="header-contacts__social social">
              <ul className="social__list social__list--inline">
                <li className="social__item">
                  <a className={`social-link social-link--${contact.type}`} href={contact.href} target="_blank">
                    <svg className="social-link__ico" viewBox="0 0 24 24" width="37" height="37" aria-hidden="true" focusable="false">
                      <use xlinkHref="#ico-wa" x="0" y="0"></use>
                    </svg>
                    {" "}
                    <span className="social-link__text visually-hidden">
                      {contact.label}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
