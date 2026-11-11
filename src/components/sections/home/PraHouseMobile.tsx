/* eslint-disable */
/** Усадьба на Пре (мобильная версия) */
export default function PraHouseMobile() {
  return (
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
  );
}
