/* eslint-disable */
/** Главный экран */
export default function WelcomeScreen() {
  return (
    <section className="page__section page-section welcome-screen">
      <div className="welcome-screen__container container">
        <div className="welcome-screen__header welcome-header">
          <a className="welcome-header__link" href="#pra">
            <img className="welcome-header__logo" src="/images/logo_pra_white.png" width="120" height="94" alt="Логотип усадьба на Пре" />
          </a>
          {" "}
          <div className="welcome-header__wrapper">
            <h2 className="welcome-header__title">
              Премиальный отдых на
              <br />
              озере в сердце Мещеры
            </h2>
            <p className="welcome-header__subtitle">
              Комфортабельные усадьбы
              <br />
              на лоне природы
            </p>
            {" "}
            {/* Стили кнопки: btn--wedding-luxe (по умолчанию) | btn--wedding-glass | btn--wedding-frame | btn--beige */}
            {" "}
            <a className="welcome-header__wedding-btn btn btn--wedding-glass" href="https://свадьба-в-усадьбе-ушмор.рф" target="_blank" rel="noopener noreferrer">
              <span className="btn__text">
                Про свадьбы
              </span>
            </a>
          </div>
          {" "}
          <a className="welcome-header__link" href="#ushmor">
            <img className="welcome-header__logo" src="/images/logo_ushmor_white.png?hash=7rrwe7b1" width="120" height="94" alt="Логотип усадьба на Пре" />
          </a>
          {" "}
          <div className="welcome-header__awards awards">
            <ul className="awards__list">
              <li className="awards__item">
                <img className="awards__img" src="/images/wa_logo.png" width="80" alt="" />
              </li>
              {" "}
              <li className="awards__item">
                <img className="awards__img" src="/images/white2024.svg" width="80" alt="" />
              </li>
            </ul>
            {" "}
            <a className="awards__btn btn btn--danger" href="#contacts">
              <span className="btn__text">
                Связаться с нами
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
