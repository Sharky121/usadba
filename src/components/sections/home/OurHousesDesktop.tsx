/* eslint-disable */
/** НАШИ УСАДЬБЫ (DESKTOP) */
export default function OurHousesDesktop() {
  return (
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
  );
}
