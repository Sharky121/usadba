/* eslint-disable */
/** Усадьба на Пре (desktop) */
export default function PraAbout() {
  return (
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
  );
}
