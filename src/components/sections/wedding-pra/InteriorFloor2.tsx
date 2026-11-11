/* eslint-disable */
export default function InteriorFloor2() {
  return (
    <section className="pra-interior">
      <div className="pra-interior__container">
        <h2>
          Интерьеры основного дома «Усадьбы на Пре»
          <br />
          (2 этаж)
        </h2>
        <div className="section__features features">
          <ul className="features__list">
            <li className="features__item features__item--billiard">
              Бильярдная комната
            </li>
            {" "}
            <li className="features__item features__item--balcony">
              Два видовых просторных балкона
            </li>
          </ul>
        </div>
        <div className="pra-interior__gallery pra-interior__gallery--three gallery">
          <div className="pra-interior__gallery-item gallery__item">
            <img className="background-image gallery__image" src="/images/pra-interior_11.jpg" alt="Логотип усадьба на Пре" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img className="background-image gallery__image" src="/images/pra-interior_12.jpg" alt="Логотип усадьба на Пре" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img className="background-image gallery__image" src="/images/pra-interior_13.jpg" alt="Логотип усадьба на Пре" />
          </div>
        </div>
      </div>
    </section>
  );
}
