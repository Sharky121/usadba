// Сгенерировано из index.html (скрипт конвертации HTML→JSX), далее правится вручную.
/* eslint-disable */
import Menu from "@/components/Menu";

export default function HomeBody() {
  return (
    <>
    {/* Google Tag Manager (noscript) */}
    <noscript dangerouslySetInnerHTML={{ __html: "<iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-N6PF2LW\" height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>" }} />
    {/* End Google Tag Manager (noscript) */}
    {/* HEADER */}
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
              <div id="menu">
                <Menu />
              </div>
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
                    <a className="social-link social-link--telegram" href="https://t.me/+79155969524" target="_blank">
                      <svg className="social-link__ico" viewBox="0 0 24 24" width="37" height="37" aria-hidden="true" focusable="false">
                        <use xlinkHref="#ico-wa" x="0" y="0"></use>
                      </svg>
                      {" "}
                      <span className="social-link__text">
                        <b>
                          Telegram
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
                  <a className="social-link social-link--telegram" href="https://t.me/+79155969524" target="_blank">
                    <svg className="social-link__ico" viewBox="0 0 24 24" width="37" height="37" aria-hidden="true" focusable="false">
                      <use xlinkHref="#ico-wa" x="0" y="0"></use>
                    </svg>
                    {" "}
                    <span className="social-link__text visually-hidden">
                      Telegram
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* MAIN */}
    <main className="page__main page-main">
      {/* ГЛАВНАЯ СЕКЦИЯ */}
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
      {/* СВАДЬБЫ */}
      <section className="page__section page-section wedding-screen" id="wedding">
        <div className="wedding-screen__container container">
          <div className="wedding-screen__header">
            {/* <h2 class="wedding-screen__title">Cвадьба вашей мечты</h2> */}
            {/* <ul class="wedding-screen__list">
                             <li class="wedding-screen__item">
                               <a href="wedding_ushmor.html" class="btn" target="_blank">
                                 <span class="btn__text">Свадьба в Усадьбе Ушмор</span>
                               </a>
                             </li>
                             <li class="wedding-screen__item">
                               <a href="wedding_pra.html" class="btn" target="_blank">
                                 <span class="btn__text">Свадьба в Усадьбе на Пре</span>
                               </a>
                             </li>
                           </ul> */}
          </div>
        </div>
        <video className="wedding-screen__video" playsInline autoPlay muted loop id="wedding-video">
          <source src="/video/wedding.mp4" type="video/mp4" />
        </video>
      </section>
      {/* НАШИ УСАДЬБЫ (DESKTOP) */}
      <section className="page__section page-section our-houses our-houses--desktop">
        <div className="page-section__header">
          <h2 className="page-section__title">
            Наши Усадьбы
          </h2>
          <p className="page-section__subtitle">
            Вдохновленные потрясающей красотой Мещеры, мы постарались создать для наших гостей уникальные условия для отдыха, в которых пребывание в самом центре заповедника сочетается с комфортом первоклассного отеля.
          </p>
        </div>
        <div className="our-houses__wrapper">
          <div className="our-houses__container container">
            <div className="our-houses__col house-item house-item--pra">
              <div className="house-item__wrapper">
                <h3 className="house-item__title">
                  Усадьба на Пре{" "}
                  <span>
                    Счастье уединения в своем лесу
                  </span>
                </h3>
                <div className="house-item__carousel house-carousel owl-carousel owl-theme">
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_1.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_1.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_2.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_2.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_3.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_3.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_4.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_4.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                </div>
                <p className="house-item__description">
                  В распоряжении гостей 6га охраняемой территории для прогулок, собственный лес, баня в лучших русских традиция, бильярд и библиотека.
                </p>
                {" "}
                <a className="house-item__btn btn video-pra" id="video-pra" data-fancybox="video-gallery" href="/video/pra.mp4">
                  <span className="btn__text">
                    Смотреть видео
                  </span>
                </a>
              </div>
            </div>
            <div className="our-houses__col house-item house-item--ushmor">
              <div className="house-item__wrapper">
                <h3 className="house-item__title">
                  Усадьба Ушмор{" "}
                  <span>
                    Изысканный отдых среди озер
                  </span>
                </h3>
                <div className="house-item__carousel house-carousel owl-carousel owl-theme">
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_2.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_2.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_4.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_4.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_3.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_3.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_1.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_1.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_5.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_5.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_8.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_8.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_6.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_6.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_9.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_9.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                </div>
                <p className="house-item__description">
                  В распоряжении гостей 10га охраняемой территории. Парк, ореховый сад, большой пруд, видовая беседка, колоннада, водный каскад, большая конюшня с манежем – части архитектурного ансамбля в стиле классицизма.
                </p>
                {" "}
                <a className="house-item__btn btn video-ushmor" id="video-ushmor" data-fancybox="video-gallery" href="/video/ushmor.mp4">
                  <span className="btn__text">
                    Смотреть видео
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ЗАБРОНИРОВАТЬ */}
      {/* <section class="page__section page-section booking"> */}
      {/* <div class="booking__container container">
                   <h2 class="visually-hidden">Бронирование</h2>
         
                   <style>
                     .block-search, .block-search * {
                       box-sizing: border-box;
                     }
         
                     .tl-container {
                       max-width: 1240px;
                       margin: 0 auto;
                       padding: 0 30px;
                     }
                   </style> */}
      {/* start TL Search form script */}
      {/* <div class='block-search'>
                     <div id='tl-search-form' class='tl-container'>
                       <noindex><a href='https://www.travelline.ru/products/tl-hotel/' rel='nofollow' target='_blank'>TravelLine</a></noindex>
                     </div>
                   </div> */}
      {/* end TL Search form script */}
      {/* </div> */}
      {/* </section> */}
      {/* УСАДЬБА НА ПРЕ */}
      <section className="page__section page-section our-houses our-houses--mobile">
        <div className="our-houses__wrapper">
          <div className="our-houses__container container">
            <div className="our-houses__col house-item house-item--pra">
              <div className="house-item__wrapper">
                <h3 className="house-item__title">
                  Усадьба на Пре{" "}
                  <span>
                    Счастье уединения в своем лесу
                  </span>
                </h3>
                <div className="house-item__carousel house-carousel owl-carousel owl-theme">
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_1.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_1.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_2.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_2.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_3.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_3.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_pra_4.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_pra_4.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_1.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_1.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_10.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_10.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_11.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_11.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_12.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_12.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_13.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_13.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_14.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_14.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_15.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_15.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/pra_house_16.jpg" data-fancybox="">
                      <img className="about-screen-carousel__img" src="/images/pra_house_16.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                </div>
                <div className="house-item__description">
                  <p>
                    Прекрасный усадебный комплекс, гармонично вписанный в мещерскую природу. Большая территория (6 ГА) со своим нетронутым лесом, внутренним прудом и, что очень важно для любителей водных прогулок и рыбалки, c возможностью выхода к реке (100м).
                  </p>
                  <p>
                    Главный дом (площадью 500 кв.м) из рубленного лафета в стиле уютного русского загородного имения.
                  </p>
                </div>
                <div className="house-item__buttons">
                  <a className="btn video-pra" id="video-pra" data-fancybox="video-gallery" href="/video/pra.mp4">
                    <span className="btn__text">
                      Смотреть видео
                    </span>
                  </a>
                  {" "}
                  <a className="btn btn--danger btn-price btn-get-price-1" data-fancybox="" data-src="#price-pra">
                    <span className="btn__text">
                      Прайс-лист
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page__section page-section page-section--brand-pra page-section--desktop" id="pra">
        <div className="page-section__container container">
          <div className="page-section__col page-section-col owl-carousel owl-theme">
            <div>
              <a href="/images/pra_house_1.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_1.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/pra_house_10.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_10.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/pra_house_11.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_11.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/pra_house_12.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_12.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/pra_house_13.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_13.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/pra_house_14.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_14.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/pra_house_15.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_15.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/pra_house_16.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/pra_house_16.jpg" alt="" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="page-section__col page-section-col">
            <div className="page-section-col__header">
              <h2 className="page-section-col__title page-section-col__title--brand page-section-col__title--brand-pra">
                Усадьба на Пре
              </h2>
            </div>
            <p className="page-section-col__text">
              Прекрасный усадебный комплекс, гармонично вписанный в мещерскую природу. Большая территория (6 ГА) со своим нетронутым лесом, внутренним прудом и, что очень важно для любителей водных прогулок и рыбалки, c возможностью выхода к реке (100м).
            </p>
            <p className="page-section-col__text">
              Главный дом (площадью 500 кв.м) из рубленного лафета в стиле уютного русского загородного имения.
            </p>
            <div className="page-section-col__price">
              <a className=" btn btn--danger btn-price btn-get-price-1" data-fancybox="" data-src="#price-pra">
                <span className="btn__text">
                  Прайс-лист
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ТЕРРИТОРИЯ ПРА (ИКОНКИ) */}
      <section className="page__section page-section pra-territory" id="pra-territory">
        <div className="page-section__container pra-territory__container container">
          <div className="page-section__header">
            <h2 className="page-section__title">
              Территория
            </h2>
          </div>
          <ul className="pra-territory__list">
            <li className="pra-territory__item pra-territory-item pra-territory-item--pines">
              <h3 className="pra-territory-item__title">
                6 геĸтар огороженной охраняемой территории в лесу на берегу реĸи
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-territory-item--garage">
              <h3 className="pra-territory-item__title">
                Крытая парĸовĸа
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-territory-item--sauna">
              <h3 className="pra-territory-item__title">
                Банный ĸомплеĸс с руссĸой баней и выходом ĸ собственному зарыбленному пруду с небольшим пирсом
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-territory-item--grill">
              <h3 className="pra-territory-item__title">
                Оборудованная площадĸа для гриля
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-territory-item--boat">
              <h3 className="pra-territory-item__title">
                Cвой собственный выход ĸ реĸе Пра
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-territory-item--guns">
              <h3 className="pra-territory-item__title">
                Возможна организация охоты и рыбалĸи (за дополнительную плату)
              </h3>
            </li>
          </ul>
        </div>
      </section>
      {/* ИНТЕРЬЕР УСАДЕБНОГО ДОМА ПРА */}
      <section className="page__section page-section page-section--brand-pra" id="pra-interior">
        <div className="page-section__container container">
          <div className="page-section__header">
            <h2 className="page-section__title">
              Интерьер усадебного дома
            </h2>
          </div>
          <div className="page-section__col page-section-col">
            <ul className="page-section-col__list">
              <li className="page-section-col__item">
                5 спален с отдельными санузлами, рассчитаны на комфортное размещение 10 человек;
              </li>
              {" "}
              <li className="page-section-col__item">
                просторная гостиная с двумя зонами для отдыха с французским камином и роялем;
              </li>
              {" "}
              <li className="page-section-col__item">
                уютная столовая с голландской печью;
              </li>
              {" "}
              <li className="page-section-col__item">
                кабинет - библиотека;
              </li>
              {" "}
              <li className="page-section-col__item">
                бильярдная комната;
              </li>
              {" "}
              <li className="page-section-col__item">
                просторные холлы, оформленные охотничьими трофеями;
              </li>
              {" "}
              <li className="page-section-col__item">
                видовые большие балконы.
              </li>
            </ul>
            <div className="page-section-col__btn">
              <a className="btn video-room-tour" id="video-room-tour" data-fancybox="video-gallery" href="/video/overview_pra.mp4">
                <span className="btn__text">
                  Видео-тур по усадьбе
                </span>
              </a>
            </div>
          </div>
          <div className="page-section__col owl-carousel owl-theme">
            <div>
              <img src="/images/apartments_pra_0.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_1.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_2.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_3.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_4.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_5.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_6.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_7.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_8.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_9.jpg" alt="" loading="lazy" />
            </div>
            <div>
              <img src="/images/apartments_pra_10.jpg" alt="" loading="lazy" />
            </div>
          </div>
          <div className="page-section__btn">
            <a className="btn btn--danger btn-price btn-get-price-1" id="get-price-1" data-fancybox="" data-src="#price-pra">
              <span className="btn__text">
                Прайс-лист
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* ИНТЕРЬЕР ПРА (ИКОНКИ) */}
      <section className="page__section page-section pra-interior" id="pra-interior-review">
        <div className="page-section__container container">
          <div className="page-section__header">
            <h2 className="page-section__title">
              Обзор интерьера
            </h2>
          </div>
          <ul className="pra-interior__list">
            <li className="pra-interior__item pra-interior-item pra-interior-item--library">
              <h3 className="pra-interior-item__title">
                Просторная библиотеĸа с ĸабинетом
              </h3>
            </li>
            {" "}
            <li className="pra-interior__item pra-interior-item pra-interior-item--billiard">
              <h3 className="pra-interior-item__title">
                Бильярдная ĸомната
              </h3>
            </li>
            {" "}
            <li className="pra-interior__item pra-interior-item pra-interior-item--wifi">
              <h3 className="pra-interior-item__title">
                Интернет Wi-Fi
              </h3>
            </li>
            {" "}
            <li className="pra-interior__item pra-interior-item pra-interior-item--tv">
              <h3 className="pra-interior-item__title">
                Спутниĸовое TV
              </h3>
            </li>
            {" "}
            <li className="pra-interior__item pra-interior-item pra-interior-item--bed">
              <h3 className="pra-interior-item__title">
                5 спальных полностью оборудованных ĸомнат, с мебелью, техниĸой и отдельными санузлами в ĸаждой
              </h3>
            </li>
            {" "}
            <li className="pra-interior__item pra-interior-item pra-interior-item--furnace">
              <h3 className="pra-interior-item__title">
                Полностью оснащенная ĸухня с руссĸой печью
              </h3>
            </li>
            {" "}
            <li className="pra-interior__item pra-interior-item pra-interior-item--piano">
              <h3 className="pra-interior-item__title">
                Просторная гостиная с ĸамином и роялем
              </h3>
            </li>
            {" "}
            <li className="pra-interior__item pra-interior-item pra-interior-item--dinner-table">
              <h3 className="pra-interior-item__title">
                Обеденная с голландсĸой печью
              </h3>
            </li>
          </ul>
        </div>
      </section>
      <section className="page__section pra-sauna" id="pra-sauna">
        <div className="pra-sauna__container container">
          <div className="pra-sauna__col">
            <h2>
              Баня
            </h2>
            <p>
              В любое время года поездка за город на природу – это шанс успокоить и душу, и тело.
            </p>
            <blockquote>
              Летом, в самый зной, под пение птиц повсюду цветут кустарники и деревья, и можно чувствовать аромат свежего леса, слушать шум реки.
              <br />
              Осенью, когда природа остывает, сбрасывает зелень и облачается в золото, птицы поют реже, но аромат леса становится сильнее.
              <br />
              Зимой, под покровом белоснежного снега, так хорошо попить чай из самовара, и прогуляться, хрустя валенками, до спящей реки.
              <br />
              Весной, когда природа просыпается от зимнего сна, бегут ручейки и расцветают первоцветы…
            </blockquote>
            <p>
              Так хорошо просто отвлечься от городской суеты, уехав в красивое поместье в сердце Мещерского заповедника!
            </p>
            <p>
              <b>
                И ничего не украсит этот отдых лучше русской бани. Ведь это не просто способ отдохнуть и расслабиться, это настоящий обряд очищения души.
              </b>
            </p>
          </div>
          <div className="pra-sauna__col">
            <p>
              Только представьте…
              <br />
              Пока вы гуляете по окрестностям или пьете чай на веранде, в бане уже горит пламя и слышен робкий треск дров. Воздух наполняется ароматом трав и эфирных масел, в парной греются березовые веники…
            </p>
            <p>
              После бани можно окунуться в прохладную воду пруда или дойти до реки, освежиться и ощутить себя вновь рожденным.
            </p>
            <p>
              Русская баня на природе - это не просто способ провести время, это настоящий исцеляющий ритуал, который помогает встретить новый день с бодростью и радостью.
            </p>
            <p>
              <b>
                И наша баня подходит для этого как ничто лучше!
              </b>
            </p>
          </div>
          <div className="pra-sauna__col owl-carousel owl-theme">
            <div>
              <a href="/images/sauna_6.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_6.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_3.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_3.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_4.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_4.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_5.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_5.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_2.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_2.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_7.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_7.jpg" alt="" loading="lazy" />
              </a>
            </div>
          </div>
          <div className="pra-sauna__col owl-carousel owl-theme">
            <div>
              <a href="/images/sauna_8.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_8.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_9.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_9.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_10.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_10.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_11.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_11.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/sauna_12.jpg" data-fancybox="">
                <img className="about-screen-carousel__img" src="/images/sauna_12.jpg" alt="" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ЗАБРОНИРОВАТЬ */}
      {/* <section class="page__section page-section booking booking--pra">
                 <div class="booking__container container">
                   <h2 class="visually-hidden">Бронирование</h2> */}
      {/* start TL Search form script */}
      {/* <div id='block-search'>
                     <div id='tl-search-form-pre' class='tl-container'>
                       <noindex><a href='https://www.travelline.ru/products/tl-hotel/' rel='nofollow' target='_blank'>TravelLine</a></noindex>
                     </div>
                   </div> */}
      {/* end TL Search form script */}
      {/* </div>
               </section> */}
      {/* УСАДЬБА УШМОР */}
      {/* --------------- */}
      {/* --------------- */}
      <section className="page__section page-section our-houses our-houses--mobile">
        <div className="our-houses__wrapper">
          <div className="our-houses__container container">
            <div className="our-houses__col house-item house-item--ushmor">
              <div className="house-item__wrapper">
                <h3 className="house-item__title">
                  Усадьба Ушмор{" "}
                  <span>
                    Изысканный отдых среди озер
                  </span>
                </h3>
                <div className="house-item__carousel house-carousel owl-carousel owl-theme">
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_2.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_2.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_4.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_4.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_3.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_3.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_1.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_1.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_5.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_5.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_8.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_8.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_6.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_6.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_9.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_9.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/ushmor_common_1.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/ushmor_common_1.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div className="house-carousel__item">
                    <a href="/images/territory_ushmor_7.jpg" data-fancybox="">
                      <img className="house-carousel__img" src="/images/territory_ushmor_7.jpg" alt="" loading="lazy" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/ushmor_4.jpg" data-fancybox="">
                      <img src="/images/ushmor_4.jpg" alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/ushmor_5.jpg" data-fancybox="">
                      <img src="/images/ushmor_5.jpg" alt="Фотография Усадьба Ушмор" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/ushmor_6.jpg" data-fancybox="">
                      <img src="/images/ushmor_6.jpg" alt="Фотография Усадьба Ушмор" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/ushmor_7.jpg" data-fancybox="">
                      <img src="/images/ushmor_7.jpg" alt="Фотография Усадьба Ушмор" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/ushmor_8.jpg" data-fancybox="">
                      <img src="/images/ushmor_8.jpg" alt="Фотография Усадьба Ушмор" />
                    </a>
                  </div>
                  <div>
                    <a href="/images/ushmor_9.jpg" data-fancybox="">
                      <img src="/images/ushmor_9.jpg" alt="Фотография Усадьба Ушмор" />
                    </a>
                  </div>
                </div>
                <div className="house-item__description">
                  <p className="page-section-col__text">
                    Трудно поверить, что чуть больше 20 лет назад на этом месте было зарастающее поле, а сейчас настоящая Усадьба, даже у знатоков вызывающая дискуссии о времени ее постройки. Тенистая аллея ведёт к основному дому, с балкона западной части которого открывается вид на Ивановское озеро, а восточный партер оформлен фонтаном. На основной оси с домом - большая конюшня с манежем. У главного входа вас встречают бронзовые реплики клодтовских коней. Видовая беседка, колоннада, водный каскад - части архитектурного ансамбля в стиле классицизма.
                  </p>
                  <p className="page-section-col__text">
                    Сердце Усадьбы - большой пруд, на котором прекрасно себя чувствуют величавые лебеди, симпатичные утки и даже дикие гуси. Особое очарование имению придаёт парк, неспешно прогуливаясь по которому можно любоваться разнообразием деревьев и кустарников. В парке внимание обязательно привлечёт уникальный и единственный в Центральной части России ореховый сад. В лесной части Усадьбы можно собирать чернику, клюкву и грибы. Все это великолепие венчает небесно-голубой Храм Благовещенья Пресвятой Богородицы, который в любую погоду отражается в парковом пруду.
                  </p>
                </div>
                <div className="house-item__buttons">
                  <a className="btn video-ushmor" id="video-ushmor" data-fancybox="video-gallery" href="/video/ushmor.mp4">
                    <span className="btn__text">
                      Смотреть видео
                    </span>
                  </a>
                  {" "}
                  <a className="btn btn--danger btn-price btn-get-price-1" data-fancybox="" data-src="#price-ushmor">
                    <span className="btn__text">
                      Прайс-лист
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* УСАДЬБА УШМОР */}
      <section className="page__section page-section page-section--brand-ushmor page-section--desktop" id="ushmor">
        <div className="page-section__container container">
          <div className="page-section__col page-section-col owl-carousel owl-theme">
            <div className="house-carousel__item">
              <a href="/images/ushmor_common_1.jpg" data-fancybox="">
                <img className="house-carousel__img" src="/images/ushmor_common_1.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div className="house-carousel__item">
              <a href="/images/territory_ushmor_7.jpg" data-fancybox="">
                <img className="house-carousel__img" src="/images/territory_ushmor_7.jpg" alt="" loading="lazy" />
              </a>
            </div>
            <div>
              <a href="/images/ushmor_4.jpg" data-fancybox="">
                <img src="/images/ushmor_4.jpg" alt="" />
              </a>
            </div>
            <div>
              <a href="/images/ushmor_5.jpg" data-fancybox="">
                <img src="/images/ushmor_5.jpg" alt="Фотография Усадьба Ушмор" />
              </a>
            </div>
            <div>
              <a href="/images/ushmor_6.jpg" data-fancybox="">
                <img src="/images/ushmor_6.jpg" alt="Фотография Усадьба Ушмор" />
              </a>
            </div>
            <div>
              <a href="/images/ushmor_7.jpg" data-fancybox="">
                <img src="/images/ushmor_7.jpg" alt="Фотография Усадьба Ушмор" />
              </a>
            </div>
            <div>
              <a href="/images/ushmor_8.jpg" data-fancybox="">
                <img src="/images/ushmor_8.jpg" alt="Фотография Усадьба Ушмор" />
              </a>
            </div>
            <div>
              <a href="/images/ushmor_9.jpg" data-fancybox="">
                <img src="/images/ushmor_9.jpg" alt="Фотография Усадьба Ушмор" />
              </a>
            </div>
          </div>
          <div className="page-section__col page-section-col">
            <div className="page-section-col__header">
              <h2 className="page-section-col__title page-section-col__title--brand page-section-col__title--ushmor-pra">
                Усадьба Ушмор
              </h2>
              <div className="page-section-col__price">
                <a className=" btn btn--danger btn-price btn-get-price-1" data-fancybox="" data-src="#price-ushmor">
                  <span className="btn__text">
                    Прайс-лист
                  </span>
                </a>
              </div>
            </div>
            <p className="page-section-col__text">
              Трудно поверить, что чуть больше 20 лет назад на этом месте было зарастающее поле, а сейчас настоящая Усадьба, даже у знатоков вызывающая дискуссии о времени ее постройки. Тенистая аллея ведёт к основному дому, с балкона западной части которого открывается вид на Ивановское озеро, а восточный партер оформлен фонтаном. На основной оси с домом - большая конюшня с манежем. У главного входа вас встречают бронзовые реплики клодтовских коней. Видовая беседка, колоннада, водный каскад - части архитектурного ансамбля в стиле классицизма.
            </p>
            <p className="page-section-col__text">
              Сердце Усадьбы - большой пруд, на котором прекрасно себя чувствуют величавые лебеди, симпатичные утки и даже дикие гуси. Особое очарование имению придаёт парк, неспешно прогуливаясь по которому можно любоваться разнообразием деревьев и кустарников. В парке внимание обязательно привлечёт уникальный и единственный в Центральной части России ореховый сад. В лесной части Усадьбы можно собирать чернику, клюкву и грибы. Все это великолепие венчает небесно-голубой Храм Благовещенья Пресвятой Богородицы, который в любую погоду отражается в парковом пруду.
            </p>
          </div>
        </div>
      </section>
      {/* ТЕРРИТОРИЯ УШМОР */}
      <section className="page__section page-section ushmor-territory" id="ushmor-territory">
        <div className="page-section__container ushmor-territory__container container">
          <div className="page-section__header">
            <h2 className="page-section__title">
              Территория
            </h2>
          </div>
          <ul className="pra-territory__list">
            <li className="pra-territory__item pra-interior-item pra-territory-item--pines">
              <h3 className="pra-interior-item__title">
                Парк
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-interior-item pra-territory-item--garage">
              <h3 className="pra-interior-item__title">
                Охраняемая территория и стоянка
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-interior-item pra-interior-item--tennis">
              <h3 className="pra-interior-item__title">
                Теннисный корт
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-interior-item pra-territory-item--boat">
              <h3 className="pra-interior-item__title">
                Зарыбленный пруд
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-interior-item pra-territory-item--stable">
              <h3 className="pra-interior-item__title">
                Конюшня с крытым манежем
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-interior-item pra-territory-item--lake">
              <h3 className="pra-interior-item__title">
                Выход к озеру
              </h3>
            </li>
          </ul>
        </div>
      </section>
      {/* ГРАФСКИЙ ДОМ УСАДЬБЫ УШМОР */}
      <section className="page__section page-section page-section--brand-ushmor" id="earl-house">
        <div className="page-section__container container">
          <div className="page-section__header">
            <h2 className="page-section__title">
              Графский дом Усадьбы Ушмор
            </h2>
          </div>
          <div className="page-section__col page-section-col">
            <p className="page-section-col__text">
              Интерьеры графского дома, воссоздающие усадебный стиль, оформлены изысканной мебелью с элементами антиквариата, бронзовыми скульптурными композициями и коллекцией картин известных художников XIX века.
            </p>
            <p>
              Сердце дома - большой зимний сад (более 100 кв.м.) с двумя видовыми балконами, небольшим прудиком и роялем. Удобен для проведения роскошных камерных мероприятий (до 30 гостей).
            </p>
            <p className="page-section-col__text">
              Торжественную столовую залу украшает мейсоновский фарфор, пейзажная живопись и голландские натюрморты. Стол сервируется посудой Handpainted (до 12 гостей). Каминный зал с выходом к озеру.
            </p>
            <p className="page-section-col__text">
              Неизменный атрибут дворянского быта - большая библиотека. Массивная деревянная лестница ведет к сигарной, бильярдной комнате, кинотеатру и винному погребу.
            </p>
            <p className="page-section-col__text">
              В графской спальне (60 кв.м.) собрана коллекция придворного художника Муравьева. Синяя и золотая спальни (по 40 кв.м.) украшены французскими гобеленами. Графский дом готов принять 6 гостей.
            </p>
          </div>
          <div className="page-section__col owl-carousel owl-theme">
            <div>
              <img src="/images/ushmor-graph_1.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_2.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_3.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_4.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_5.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_6.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_7.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_8.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_9.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-graph_10.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ИНТЕРЬЕР УШМОР */}
      <section className="page__section page-section pra-interior" id="ushmor-interior">
        <div className="page-section__container container">
          <div className="page-section__header">
            <h2 className="page-section__title">
              Обзор интерьера
            </h2>
          </div>
          <ul className="pra-territory__list">
            <li className="pra-territory__item pra-territory-item pra-interior-item--terrace">
              <h3 className="pra-territory-item__title">
                Большой зимний сад (до 30 гостей)
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-interior-item--furnace">
              <h3 className="pra-territory-item__title">
                Каминный зал
                <br />
                с выходом к озеру
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-interior-item--dinner-table">
              <h3 className="pra-territory-item__title">
                Торжественная столовая
                <br />
                (до 12 гостей)
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-interior-item--bed">
              <h3 className="pra-territory-item__title">
                3 больших спальни (до 5 гостей)
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-interior-item--library">
              <h3 className="pra-territory-item__title">
                Большая библиотека
              </h3>
            </li>
            {" "}
            <li className="pra-territory__item pra-territory-item pra-interior-item--billiard">
              <h3 className="pra-territory-item__title">
                Бильярдная комната
              </h3>
            </li>
          </ul>
        </div>
      </section>
      {/* ГОСТЕВОЙ ДОМ УСАДЬБЫ УШМОР */}
      <section className="page__section page-section page-section--brand-ushmor" id="ushmor-guest">
        <div className="page-section__container container">
          <div className="page-section__header">
            <h2 className="page-section__title">
              Гостевой дом Усадьбы Ушмор
            </h2>
          </div>
          <div className="page-section__col page-section-col">
            <p className="page-section-col__text">
              Гостевой дом спроектирован в готическом стиле и отделен от основного пространства живой изгородью, что позволяет гостям с комфортом отдыхать в уютном итальянском дворике. На первом этаже основной части гостевого дома в распоряжении гостей салон и каминный зал, на втором этаже кухня, столовая и 3 блока апартаментов. Каждый из апартаментов включает в себя большой холл, спальню и ванную комнату. Внутреннее пространство оформлено в классическом английском стиле. В оформлении интерьеров использована антикварная мебель, подлинники картин и гравюр на охотничьи темы.
            </p>
            <p className="page-section-col__text">
              Во второй, изолированной части гостевого дома расположена уютная кухня в стиле "Прованс", маленький кабинет-библиотека, две спальни и большой санузел. В гостевом доме с комфортом могут разместиться 10 человек.
            </p>
          </div>
          <div className="page-section__col owl-carousel owl-theme">
            <div>
              <img src="/images/ushmor-apartments_1.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_2.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_3.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_4.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_5.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_6.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_7.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_8.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_9.jpg" alt="" />
            </div>
            <div>
              <img src="/images/ushmor-apartments_15.jpg" alt="" />
            </div>
          </div>
          <div className="page-section__btn">
            <a className="btn btn--danger btn-price btn-get-price-2" id="get-price-2" data-fancybox="" data-src="#price-ushmor">
              <span className="btn__text">
                Прайс-лист
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* ЗАБРОНИРОВАТЬ */}
      {/* <section class="page__section booking booking--ushmor">
                 <div class="booking__container container">
                   <h2 class="visually-hidden">Бронирование</h2> */}
      {/* start TL Search form script */}
      {/* <div class='block-search'>
                     <div id='tl-search-form-ushmor' class='tl-container'>
                       <noindex><a href='https://www.travelline.ru/products/tl-hotel/' rel='nofollow' target='_blank'>TravelLine</a></noindex>
                     </div>
                   </div> */}
      {/* end TL Search form script */}
      {/* </div>
               </section> */}
      {/* ГДЕ НАС НАЙТИ */}
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
      {/* ОСТАЛИСЬ ВОПРОСЫ */}
      <section className="page__section page-section page-section--brand-ushmor question">
        <div className="question__container container">
          <h2 className="visually-hidden">
            Консультация
          </h2>
          <h4 className="question__title">
            Если у вас остались вопросы, оставьте свои контакты и мы вас проконсультируем.
          </h4>
          <form className="question__form question-form form" action="question.php" id="question-form" encType="multipart/form-data">
            <ul className="question-form__list form__list">
              <li className="form__item form-field form__item--3">
                <label className="form-field__label visually-hidden" htmlFor="name">
                  Имя
                </label>
                {" "}
                <input className="form-field__input" id="name" name="name" type="text" placeholder="Имя" minLength={2} maxLength={20} required />
              </li>
              {" "}
              <li className="form__item form-field form__item--3">
                <label className="form-field__label visually-hidden" htmlFor="phone">
                  Телефон
                </label>
                {" "}
                <input className="form-field__input" id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
              </li>
              {" "}
              <li className="form__item form-field form__item--3">
                <label className="form-field__label visually-hidden" htmlFor="email-4">
                  Email
                </label>
                {" "}
                <input className="form-field__input" id="email-4" name="email" type="email" placeholder="Email" required />
              </li>
            </ul>
            {" "}
            <button className="question-form__btn btn btn--danger" id="btn-question-form" type="submit">
              <span className="btn__text">
                Отправить
              </span>
            </button>
          </form>
        </div>
      </section>
    </main>
    <div className="page__icons" style={{ height: "0", width: "0", position: "absolute", visibility: "hidden" }}>
      <svg preserveAspectRatio="xMinYMid">
        <symbol id="ico-check" viewBox="0 0 24 24">
          <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
        </symbol>
        <symbol id="ico-phone" viewBox="0 0 1200 1200">
          <path fill="currentColor" d="M600,0C268.629,0,0,268.629,0,600s268.629,600,600,600 s600-268.629,600-600S931.371,0,600,0z M384.375,238.33c12.362-0.729,23.536,6.66,32.007,19.775l82.031,155.566 c8.637,18.434,3.729,38.172-9.155,51.343l-37.573,37.573c-2.319,3.178-3.845,6.757-3.882,10.693 c14.409,55.775,58.117,107.223,96.681,142.603c38.562,35.38,80.009,83.281,133.812,94.629c6.65,1.855,14.797,2.52,19.556-1.903 l43.652-44.458c15.068-11.421,36.866-16.956,52.954-7.617h0.732l148.021,87.378c21.728,13.619,23.979,39.944,8.423,55.957 L849.683,941.016c-15.056,15.44-35.058,20.631-54.491,20.654c-85.948-2.575-167.158-44.759-233.862-88.11 C451.84,793.907,351.407,695.114,288.355,575.757c-24.182-50.05-52.589-113.91-49.878-169.774 c0.242-21.016,5.928-41.605,20.728-55.151l101.953-101.953C369.1,242.121,376.957,238.768,384.375,238.33z"></path>
        </symbol>
        <symbol id="ico-left-arrow" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
        </symbol>
        <symbol id="ico-right-arrow" viewBox="0 0 24 24">
          <g transform="rotate(180,12,12)">
            <path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
          </g>
        </symbol>
        <symbol id="ico-spruce" viewBox="0 0 46.666668 45.333332">
          <g transform="matrix(.13333 0 0 -.13333 0 45.333)">
            <path fill="currentColor" d="M274.293 23.871a191.03 191.03 0 0 0-11.398 5.527c-20.926 11.059-38.325 25.653-52.594 47.075-3.043 4.562-1.781 10.718 2.812 13.738a10.034 10.034 0 0 0 10.254.457c17.594-8.14 31.449-11.125 45.727-10.879 6.179.106 12.578.817 19.472 1.98-44.136 19.169-63.738 40.786-93.164 76.711a9.865 9.865 0 0 0 1.446 13.938c3.504 2.832 8.359 2.906 11.91.5 15.836-10.797 30.109-15.613 44.109-16.543a80.846 80.846 0 0 1 6.227-.168c-13 6.844-82.899 65.711-71.762 78.934 3.047 3.617 8.133 4.531 12.188 2.476 9.488-4.797 17.437-7.586 25.027-8.594-13.309 8.618-23.422 18.926-31.539 30.297-7.867 11.028-13.715 22.875-18.746 35.059-5.035-12.184-10.883-24.027-18.75-35.059-8.117-11.371-18.235-21.679-31.543-30.3 7.597 1.007 15.551 3.796 25.039 8.605 4.918 2.488 10.933.543 13.437-4.344 6.836-13.347-60.797-70.644-73.02-77.074a80.886 80.886 0 0 1 6.231.168c14 .93 28.274 5.746 44.106 16.547 4.554 3.086 10.765 1.926 13.871-2.598 2.648-3.855 2.187-8.902-.82-12.222-29.329-35.789-48.911-57.247-92.86-76.332 6.899-1.164 13.297-1.875 19.477-1.98 14.422-.25 28.41 2.796 46.258 11.124 4.98 2.309 10.914.172 13.242-4.777 1.523-3.235 1.129-6.875-.719-9.656-14.254-21.43-31.652-36.024-52.582-47.083a188.92 188.92 0 0 0-11.402-5.527Zm-2.023 23.074c18.578-9.812 40.484-16.617 65.964-23.222 4.704-.809 8.286-4.887 8.286-9.79 0-5.488-4.481-9.937-10-9.937H12.004v.031C7.57 4.023 3.52 6.988 2.352 11.45.972 16.742 4.176 22.15 9.5 23.523c25.816 6.664 47.988 13.508 66.754 23.422 7.851 4.149 15.117 8.86 21.828 14.36-13.063-2.09-69.738 1.11-74.21 14.953-1.68 5.207 1.202 10.789 6.444 12.46 43.946 14.055 59.453 30.278 78.676 49.419a95.352 95.352 0 0 0-12.011-1.555c-17.168-1.144-33.864 2.266-51.747 7.742-3.609 1.114-6.43 4.227-6.953 8.196-.71 5.418 3.137 10.394 8.594 11.097 36.555 4.731 55.379 25.031 73.273 45.176-10.449-.422-20.835 1.469-32.953 5.332-3.101.836-5.738 3.145-6.847 6.391-1.77 5.183 1.03 10.82 6.25 12.578 25.433 8.597 41.414 21.961 52.66 37.719 11.597 16.257 18.613 35.605 25.625 55.019a9.904 9.904 0 0 0 6.019 5.977c5.176 1.843 10.879-.836 12.735-5.977 7.011-19.414 14.027-38.762 25.625-55.019 11.25-15.758 27.23-29.122 52.66-37.719 2.887-.989 5.285-3.262 6.289-6.367 1.68-5.207-1.203-10.789-6.445-12.461-12.305-3.953-22.817-5.899-33.387-5.473 17.84-20.09 36.605-40.332 72.957-45.133 3.875-.383 7.336-3.019 8.551-6.949 1.617-5.231-1.34-10.773-6.602-12.387-17.887-5.476-34.578-8.886-51.746-7.742a95.49 95.49 0 0 0-12.012 1.555c19.227-19.141 34.727-35.367 78.676-49.418 3.195-1.028 5.797-3.625 6.641-7.106 4.969-20.437-62.274-22.25-74.399-20.308 6.707-5.5 13.977-10.211 21.825-14.36"></path>
          </g>
        </symbol>
        <symbol id="ico-wa" viewBox="0 0 256 256">
          <g>
            <path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" fill="#40B3E0"></path>
            <path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF"></path>
            <path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1"></path>
            <path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4"></path>
          </g>
        </symbol>
        <symbol id="ico-instagram" viewBox="0 0 333333 333333" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
          <defs>
            <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="250181" y1="308196" x2="83152.4" y2="25137">
              <stop offset="0" stopColor="#f58529"></stop>
              <stop offset=".169" stopColor="#feda77"></stop>
              <stop offset=".478" stopColor="#dd2a7b"></stop>
              <stop offset=".78" stopColor="#8134af"></stop>
              <stop offset="1" stopColor="#515bd4"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#a)" d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-40642 71361h81288c30526 0 55489 24654 55489 54772v81069c0 30125-24963 54771-55488 54771l-81289-1c-30526 0-55492-24646-55492-54771v-81069c0-30117 24966-54771 55492-54771zm40125 43843c29663 0 53734 24072 53734 53735 0 29667-24071 53735-53734 53735-29672 0-53739-24068-53739-53735 0-29663 24068-53735 53739-53735zm0 18150c19643 0 35586 15939 35586 35585 0 19647-15943 35589-35586 35589-19650 0-35590-15943-35590-35589s15940-35585 35590-35585zm51986-25598c4819 0 8726 3907 8726 8721 0 4819-3907 8726-8726 8726-4815 0-8721-3907-8721-8726 0-4815 3907-8721 8721-8721zm-85468-20825h68009c25537 0 46422 20782 46422 46178v68350c0 25395-20885 46174-46422 46174l-68009 1c-25537 0-46426-20778-46426-46174v-68352c0-25395 20889-46177 46426-46177z"></path>
        </symbol>
        <symbol id="ico-tree" viewBox="0 0 64 64">
          <path d="M32 58c-19.75 0-23.7-6.222-23.858-6.486a1 1 0 0 1 .381-1.393 44.723 44.723 0 0 0 12.7-10.529c-5.483-1.52-6.937-3.819-7.1-4.1a1 1 0 0 1 .4-1.376A31.718 31.718 0 0 0 25.291 24.7c-4.335-1.02-5.155-3.122-5.241-3.382a1 1 0 0 1 .473-1.192 21.9 21.9 0 0 0 7.844-7.346c-3.189-.626-4.087-2-4.249-2.306a1 1 0 0 1 .4-1.347A14.778 14.778 0 0 0 31.032.749 1 1 0 0 1 32 0a1 1 0 0 1 .968.746 14.866 14.866 0 0 0 6.514 8.377 1 1 0 0 1 .4 1.348c-.162.3-1.06 1.677-4.249 2.3a21.9 21.9 0 0 0 7.844 7.346 1 1 0 0 1 .473 1.192c-.086.26-.905 2.362-5.24 3.382a31.7 31.7 0 0 0 10.763 9.424 1 1 0 0 1 .4 1.376c-.159.278-1.613 2.577-7.1 4.1a44.723 44.723 0 0 0 12.7 10.529 1 1 0 0 1 .381 1.393C55.7 51.778 51.75 58 32 58zm-21.4-6.754C12.388 52.758 17.865 56 32 56c14.118 0 19.6-3.234 21.4-4.756a47.666 47.666 0 0 1-13.185-11.625 1 1 0 0 1 .572-1.6 15.456 15.456 0 0 0 6.613-2.772 34.112 34.112 0 0 1-11.23-10.688 1 1 0 0 1 .686-1.548 9.025 9.025 0 0 0 4.655-1.711 23.893 23.893 0 0 1-8.386-8.812 1 1 0 0 1 .78-1.48 9.011 9.011 0 0 0 3.4-.879A16.351 16.351 0 0 1 32 3.759a16.35 16.35 0 0 1-5.31 6.367 9.076 9.076 0 0 0 3.4.879 1 1 0 0 1 .78 1.48 23.88 23.88 0 0 1-8.39 8.814 9.072 9.072 0 0 0 4.659 1.712 1 1 0 0 1 .686 1.547A34.1 34.1 0 0 1 16.6 35.248a15.5 15.5 0 0 0 6.611 2.775 1 1 0 0 1 .572 1.6A47.681 47.681 0 0 1 10.6 51.246z" fill="currentColor"></path>
          <path d="M32 58c-19.75 0-23.7-6.222-23.858-6.486a1 1 0 0 1 .381-1.393 44.723 44.723 0 0 0 12.7-10.529c-5.483-1.52-6.937-3.819-7.1-4.1a1 1 0 0 1 .4-1.376A31.718 31.718 0 0 0 25.291 24.7c-4.335-1.02-5.155-3.122-5.241-3.382a1 1 0 0 1 .473-1.192 21.9 21.9 0 0 0 7.844-7.346c-3.189-.626-4.087-2-4.249-2.306a1 1 0 0 1 .4-1.347A14.778 14.778 0 0 0 31.032.749 1 1 0 0 1 32 0a1 1 0 0 1 .968.746 14.866 14.866 0 0 0 6.514 8.377 1 1 0 0 1 .4 1.348c-.162.3-1.06 1.677-4.249 2.3a21.9 21.9 0 0 0 7.844 7.346 1 1 0 0 1 .473 1.192c-.086.26-.905 2.362-5.24 3.382a31.7 31.7 0 0 0 10.763 9.424 1 1 0 0 1 .4 1.376c-.159.278-1.613 2.577-7.1 4.1a44.723 44.723 0 0 0 12.7 10.529 1 1 0 0 1 .381 1.393C55.7 51.778 51.75 58 32 58zm-21.4-6.754C12.388 52.758 17.865 56 32 56c14.118 0 19.6-3.234 21.4-4.756a47.666 47.666 0 0 1-13.185-11.625 1 1 0 0 1 .572-1.6 15.456 15.456 0 0 0 6.613-2.772 34.112 34.112 0 0 1-11.23-10.688 1 1 0 0 1 .686-1.548 9.025 9.025 0 0 0 4.655-1.711 23.893 23.893 0 0 1-8.386-8.812 1 1 0 0 1 .78-1.48 9.011 9.011 0 0 0 3.4-.879A16.351 16.351 0 0 1 32 3.759a16.35 16.35 0 0 1-5.31 6.367 9.076 9.076 0 0 0 3.4.879 1 1 0 0 1 .78 1.48 23.88 23.88 0 0 1-8.39 8.814 9.072 9.072 0 0 0 4.659 1.712 1 1 0 0 1 .686 1.547A34.1 34.1 0 0 1 16.6 35.248a15.5 15.5 0 0 0 6.611 2.775 1 1 0 0 1 .572 1.6A47.681 47.681 0 0 1 10.6 51.246z" fill="currentColor"></path>
          <path d="M32 58c-19.75 0-23.7-6.222-23.858-6.486a1 1 0 0 1 .381-1.393 44.723 44.723 0 0 0 12.7-10.529c-5.483-1.52-6.937-3.819-7.1-4.1a1 1 0 0 1 .4-1.376A31.718 31.718 0 0 0 25.291 24.7c-4.335-1.02-5.155-3.122-5.241-3.382a1 1 0 0 1 .473-1.192 21.9 21.9 0 0 0 7.844-7.346c-3.189-.626-4.087-2-4.249-2.306a1 1 0 0 1 .4-1.347A14.778 14.778 0 0 0 31.032.749 1 1 0 0 1 32 0a1 1 0 0 1 .968.746 14.866 14.866 0 0 0 6.514 8.377 1 1 0 0 1 .4 1.348c-.162.3-1.06 1.677-4.249 2.3a21.9 21.9 0 0 0 7.844 7.346 1 1 0 0 1 .473 1.192c-.086.26-.905 2.362-5.24 3.382a31.7 31.7 0 0 0 10.763 9.424 1 1 0 0 1 .4 1.376c-.159.278-1.613 2.577-7.1 4.1a44.723 44.723 0 0 0 12.7 10.529 1 1 0 0 1 .381 1.393C55.7 51.778 51.75 58 32 58zm-21.4-6.754C12.388 52.758 17.865 56 32 56c14.118 0 19.6-3.234 21.4-4.756a47.666 47.666 0 0 1-13.185-11.625 1 1 0 0 1 .572-1.6 15.456 15.456 0 0 0 6.613-2.772 34.112 34.112 0 0 1-11.23-10.688 1 1 0 0 1 .686-1.548 9.025 9.025 0 0 0 4.655-1.711 23.893 23.893 0 0 1-8.386-8.812 1 1 0 0 1 .78-1.48 9.011 9.011 0 0 0 3.4-.879A16.351 16.351 0 0 1 32 3.759a16.35 16.35 0 0 1-5.31 6.367 9.076 9.076 0 0 0 3.4.879 1 1 0 0 1 .78 1.48 23.88 23.88 0 0 1-8.39 8.814 9.072 9.072 0 0 0 4.659 1.712 1 1 0 0 1 .686 1.547A34.1 34.1 0 0 1 16.6 35.248a15.5 15.5 0 0 0 6.611 2.775 1 1 0 0 1 .572 1.6A47.681 47.681 0 0 1 10.6 51.246z" fill="currentColor"></path>
        </symbol>
        {/* Иконки для дополнительных услуг */}
        <symbol id="ico-camera" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.08.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.61-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"></path>
        </symbol>
        <symbol id="ico-snowmobile" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 1L13 6L18 4L14 8L19 10L14 11L17 16L13 13L12 18L11 13L7 16L10 11L5 10L10 8L6 4L11 6L12 1M12 6L11 11L6 9L10 12L5 14L10 13L7 18L11 15L12 20L13 15L17 18L14 13L19 14L14 12L18 9L13 11L12 6Z"></path>
        </symbol>
        <symbol id="ico-child" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 6.5V7.5C15 8.3 14.3 9 13.5 9S12 8.3 12 7.5V6.5L6 7V9L12 8.5V9.5C12 10.3 12.7 11 13.5 11S15 10.3 15 9.5V8.5L21 9M12 12C10.9 12 10 12.9 10 14S10.9 16 12 16S14 15.1 14 14S13.1 12 12 12M12 18C10.9 18 10 18.9 10 20S10.9 22 12 22S14 21.1 14 20S13.1 18 12 18Z"></path>
        </symbol>
        <symbol id="ico-entertainment" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
        </symbol>
        <symbol id="ico-restaurant" viewBox="0 0 24 24">
          <path fill="currentColor" d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path>
        </symbol>
        <symbol id="ico-snowmobile" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20.34 17.93l-1.37 1.37c-.32.32-.85.32-1.17 0s-.32-.85 0-1.17l1.37-1.37c.32-.32.85-.32 1.17 0s.32.85 0 1.17zM18.5 10.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zM20 8h-3V6h3c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-3v-2h3V8zM4 6h3v2H4v8h3v2H4c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm8 0h3v2h-3v8h3v2h-3V6zm-4 4h2v4H8v-4z"></path>
        </symbol>
      </svg>
    </div>
    {/* Прайс Пра */}
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
    {/* Прайс ушмор */}
    <div className="price price--ushmor" id="price-ushmor">
      <div className="price__wrapper">
        <div className="price__header">
          <img className="price__logo" src="/images/logo_ushmor_white.png" width="100" height="78" alt="Логотип усадьба на Пре" />
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
                Аренда усадьбы Ушмор &mdash; 450&nbsp;000&nbsp;₽
              </strong>
            </li>
            {" "}
            <li className="price-weekdays__item">
              <strong>
                Аренда усадьбы на Пре &mdash; 350&nbsp;000&nbsp;₽
              </strong>
            </li>
            {" "}
            <li className="price-weekdays__item">
              <strong>
                Аренда дома Пра &mdash; 150&nbsp;000&nbsp;₽
              </strong>
            </li>
            {" "}
            <li className="price-weekdays__item">
              <strong>
                Аренда зимнего сада &mdash; от&nbsp;300&nbsp;000&nbsp;₽
              </strong>
            </li>
            {" "}
            <li className="price-weekdays__item">
              <strong>
                Аренда гостевого дома &mdash; 150&nbsp;000&nbsp;₽
              </strong>
            </li>
            {" "}
            <li className="price-weekdays__item">
              <strong>
                Фотосессия &mdash; от&nbsp;25&nbsp;000&nbsp;₽
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
          * усадьба сдаётся только под один заезд.
          <br />
          * без посторонних, под полное закрытие.
        </div>
      </div>
    </div>
    {/* Онлайн оплата */}
    <template id="yookassa-template" dangerouslySetInnerHTML={{ __html: "\n    <swal-title>\n      Онлайн оплата\n    </swal-title>\n    <swal-html>\n      <form class=\"yoomoney-payment-form\" action=\"https://yookassa.ru/integration/simplepay/payment\" method=\"post\" accept-charset=\"utf-8\">\n        <div class=\"ym-customer-info\">\n          <div class=\"ym-block-title\">О покупателе</div>\n          <input name=\"cps_email\" class=\"ym-input\" placeholder=\"Email\" type=\"text\" value>\n          <input name=\"cps_phone\" class=\"ym-input\" placeholder=\"Телефон\" type=\"text\" value>\n          <input name=\"custName\" class=\"ym-input\" placeholder=\"ФИО\" type=\"text\" value>\n          <textarea class=\"ym-textarea\" name=\"orderDetails\" placeholder=\"Комментарий\" value></textarea>\n        </div>\n        <div class=\"ym-hidden-inputs\"></div>\n        <input name=\"customerNumber\" type=\"hidden\" value=\"Проживание\">\n        <div class=\"ym-payment-btn-block ym-before-line ym-align-space-between\">\n          <div class=\"ym-input-icon-rub\">\n            <input name=\"sum\" placeholder=\"0.00\" class=\"ym-input ym-sum-input ym-required-input\" type=\"number\" step=\"any\">\n          </div>\n          <button data-text=\"Оплатить проживание\" class=\"ym-btn-pay ym-result-price\" onclick=\"ym(91549794, 'reachGoal', 'successful_payment'); return true;\"><span class=\"ym-text-crop\">Оплатить\n              проживание</span> <span class=\"ym-price-output\"></span></button><svg class=\"ym-logo\" width=\"114\" height=\"27\" viewBox=\"0 0 114 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" aria-labelledby=\"logoTitle\" role=\"img\">\n            <path d=\"M59.3827 7.348H55.7087L53.0599 11.9619H51.6929V2.05054H48.1897V19.9081H51.6929V15.0379H53.0599L56.4777 19.9081H60.408L55.8796 13.4145L59.3827 7.348Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n            <path d=\"M85.6996 13.2436C85.016 12.7309 84.1616 12.4746 83.3926 12.2183C83.1363 12.1328 82.88 12.0474 82.6236 11.9619C82.5382 11.9619 82.4527 11.8765 82.4527 11.8765C81.9401 11.7056 81.4274 11.5347 81.4274 11.0221C81.4274 10.7657 81.5983 10.5094 81.7692 10.2531C82.0255 10.0822 82.2819 9.99676 82.6236 9.99676C83.3072 9.91132 83.9053 10.1676 84.5034 10.5094L84.5888 10.5949L86.4686 8.45878L86.3831 8.37334C86.1268 8.20245 85.8705 7.94613 85.6141 7.86068C84.9306 7.51891 84.4179 7.34802 84.0762 7.26258C83.7344 7.17714 82.7945 7.00625 81.6838 7.26258C81.1711 7.34802 80.4021 7.51891 79.6331 8.11701C78.7787 8.80055 78.266 9.65498 78.1806 10.5949C78.1806 10.9366 78.0952 12.1328 78.7787 13.0727C79.4622 13.9271 80.573 14.3544 81.342 14.6107C81.4274 14.6107 81.4274 14.6107 81.5129 14.6961C81.5983 14.6961 81.6838 14.7816 81.8546 14.7816C83.1363 15.2088 83.4781 15.3797 83.649 15.7214C83.8198 15.9778 83.8198 16.1487 83.8198 16.1487C83.8198 16.7468 83.0508 17.0031 82.5382 17.174C81.8546 17.3449 81.0857 17.0885 80.4876 16.7468C80.0603 16.405 79.6331 15.9778 79.2913 15.5506C79.1205 15.7214 77.1553 17.6866 77.1553 17.6866L77.2407 17.7721C77.9243 18.6265 79.1205 19.7373 80.9148 20.079C81.1711 20.1645 81.5129 20.1645 81.9401 20.1645C82.0255 20.1645 82.1964 20.1645 82.2819 20.1645C83.1363 20.1645 84.4179 19.9936 85.5287 19.1392C85.8705 18.8828 86.554 18.3702 86.8958 17.3449C87.2376 16.405 87.1521 15.2942 86.554 14.3544C86.4686 13.9271 86.1268 13.5854 85.6996 13.2436Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n            <path d=\"M96.9777 13.2436C96.2941 12.7309 95.4397 12.4746 94.6707 12.2183C94.4144 12.1328 94.158 12.0474 93.9017 11.9619C93.8163 11.9619 93.7308 11.8765 93.7308 11.8765C93.2182 11.7056 92.7055 11.5347 92.7055 11.0221C92.7055 10.7657 92.8764 10.5094 93.0473 10.2531C93.3036 10.0822 93.5599 9.99676 93.9017 9.99676C94.5853 9.91132 95.1834 10.1676 95.7815 10.5094L95.8669 10.5949L97.7466 8.45878L97.6612 8.37334C97.4049 8.20245 97.1485 7.94613 96.8922 7.86068C96.2087 7.51891 95.696 7.34802 95.3542 7.26258C95.0125 7.17714 94.0726 7.00625 92.9618 7.26258C92.4492 7.34802 91.6802 7.51891 90.9112 8.11701C90.0568 8.80055 89.5441 9.65498 89.4587 10.5949C89.4587 10.9366 89.3732 12.1328 90.0568 13.0727C90.7403 13.9271 91.8511 14.3544 92.6201 14.6107C92.7055 14.6107 92.7055 14.6107 92.791 14.6961C92.8764 14.6961 92.9618 14.7816 93.1327 14.7816C94.4144 15.2088 94.7561 15.3797 94.927 15.7214C95.0979 15.9778 95.0979 16.1487 95.0979 16.1487C95.0979 16.7468 94.3289 17.0031 93.8163 17.174C93.1327 17.3449 92.3637 17.0885 91.7656 16.7468C91.3384 16.405 90.9112 15.9778 90.5694 15.5506C90.3985 15.7214 88.4333 17.6866 88.4333 17.6866L88.5188 17.7721C89.2023 18.6265 90.3985 19.7373 92.1929 20.079C92.4492 20.1645 92.791 20.1645 93.2182 20.1645C93.3036 20.1645 93.4745 20.1645 93.5599 20.1645C94.4144 20.1645 95.696 19.9936 96.8068 19.1392C97.1485 18.8828 97.8321 18.3702 98.1739 17.3449C98.5156 16.405 98.4302 15.2942 97.8321 14.3544C97.7466 13.9271 97.4049 13.5854 96.9777 13.2436Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n            <path d=\"M70.8323 7.34811V8.54432H70.6614C69.5507 7.519 68.3544 7.00635 67.0728 7.00635C65.3639 7.00635 63.7405 7.68989 62.6298 8.88609C61.519 10.0823 60.9209 11.7057 60.9209 13.5C60.9209 15.3798 61.519 17.0032 62.6298 18.1994C63.7405 19.3956 65.2785 20.0791 66.9874 20.0791C68.269 20.0791 69.5507 19.5665 70.6614 18.6266H70.8323V19.7374H74.4209V7.17723H70.8323V7.34811ZM71.0032 13.6709C71.0032 14.7817 70.6614 15.7215 70.0633 16.4905C69.4652 17.1741 68.6108 17.5158 67.5855 17.5158C66.6456 17.5158 65.8766 17.1741 65.1931 16.4051C64.5949 15.7215 64.2532 14.7817 64.2532 13.5855C64.2532 12.4747 64.5949 11.6203 65.1931 10.8513C65.7912 10.1677 66.6456 9.74052 67.5855 9.74052C68.6108 9.74052 69.3798 10.0823 70.0633 10.7658C70.6614 11.6203 71.0032 12.5601 71.0032 13.6709Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n            <path d=\"M110.222 7.34811V8.54432H110.051C108.94 7.519 107.744 7.00635 106.462 7.00635C104.753 7.00635 103.13 7.68989 102.019 8.88609C100.908 10.0823 100.31 11.7057 100.31 13.5C100.31 15.3798 100.908 17.0032 102.019 18.1994C103.13 19.3956 104.668 20.0791 106.377 20.0791C107.658 20.0791 108.94 19.5665 110.051 18.6266H110.222V19.7374H113.81V7.17723H110.222V7.34811ZM110.393 13.6709C110.393 14.7817 110.051 15.7215 109.453 16.4905C108.855 17.1741 108 17.5158 106.975 17.5158C106.035 17.5158 105.266 17.1741 104.582 16.4051C103.984 15.7215 103.643 14.7817 103.643 13.5855C103.643 12.4747 103.984 11.6203 104.582 10.8513C105.181 10.1677 106.035 9.74052 106.975 9.74052C108 9.74052 108.769 10.0823 109.453 10.7658C110.051 11.6203 110.393 12.5601 110.393 13.6709Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n            <path d=\"M24.4366 0C16.9176 0 10.9366 6.06646 10.9366 13.5C10.9366 21.019 17.003 27 24.4366 27C31.8701 27 37.9366 20.9335 37.9366 13.5C38.022 6.06646 31.8701 0 24.4366 0ZM24.4366 18.5411C21.7024 18.5411 19.3954 16.2342 19.3954 13.5C19.3954 10.7658 21.7024 8.45886 24.4366 8.45886C27.1708 8.45886 29.4777 10.7658 29.4777 13.5C29.4777 16.2342 27.2562 18.5411 24.4366 18.5411Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n            <path d=\"M10.9367 3.93036V23.5823H6.1519L0 3.93036H10.9367Z\" fill=\"black\" fill-opacity=\"0.4\"/>\n          </svg>\n          <lineargradient id=\"paint0_linear\" x1=\"57.3564\" y1=\"0\" x2=\"57.3564\" y2=\"63\" gradientunits=\"userSpaceOnUse\">\n            <stop stop-color=\"#0160D1\">\n              <stop offset=\"1\" stop-color=\"#00479C\"></stop>\n            </stop>\n          </lineargradient>\n          <lineargradient id=\"paint1_linear\" x1=\"12.8472\" y1=\"9.35889\" x2=\"12.8472\" y2=\"55.2393\" gradientunits=\"userSpaceOnUse\">\n            <stop stop-color=\"#0160D1\">\n              <stop offset=\"1\" stop-color=\"#00479C\"></stop>\n            </stop>\n          </lineargradient>\n        </div>\n        <input name=\"shopId\" type=\"hidden\" value=\"395117\">\n      </form>\n    </swal-html>\n  " }} />
    {/* Новогодний баннер */}
    {/* <div class="new-year-banner-overlay" id="newYearBannerOverlay"></div>
         <div class="new-year-banner" id="newYearBanner">
           <div class="new-year-banner__close">×</div>
           <div class="new-year-banner__content">
             <div class="new-year-banner__text">
               <h3>Новогодний заезд</h3>
               <p>31.12 - 12.01</p>
               <p>Усадьба на Пре и Ушмор</p>
               <a href="new-year.html">Подробнее</a>
             </div>
           </div>
         </div> */}
    </>
  );
}
