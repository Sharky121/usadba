/* eslint-disable */
export default function InteriorOverview() {
  return (
    <section className="wedding-page__section section pra-interior ">
      <div className="pra-interior__container">
        <h2>
          Интерьеры основного дома «Усадьбы на Пре»
          <br />
          (1 этаж)
        </h2>
        <p>
          5 комфортабельных номеров с собственными ванными комнатами (ванная/душ)
        </p>
        <div className="section__features features">
          <ul className="features__list">
            <li className="features__item">
              двуспальная кровать king-size, ванная
            </li>
            {" "}
            <li className="features__item">
              две раздельные кровати, душ
            </li>
            {" "}
            <li className="features__item">
              двуспальная кровать king-size, ванная
            </li>
            {" "}
            <li className="features__item">
              две раздельные кровати, душ
            </li>
            {" "}
            <li className="features__item">
              двуспальная кровать, душ
            </li>
          </ul>
        </div>
        <div className="pra-interior__gallery gallery">
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_3.jpg" alt="Логотип усадьба на Пре" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_2.jpg" alt="Логотип усадьба на Пре" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_5.jpg" alt="Логотип усадьба на Пре" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_4.jpg" alt="Логотип усадьба на Пре" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_14.jpg" alt="Логотип усадьба на Пре" />
          </div>
        </div>
      </div>
    </section>
  );
}
