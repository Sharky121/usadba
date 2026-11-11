/* eslint-disable */
/** ИНТЕРЬЕР УСАДЕБНОГО ДОМА ПРА */
export default function PraInterior() {
  return (
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
  );
}
