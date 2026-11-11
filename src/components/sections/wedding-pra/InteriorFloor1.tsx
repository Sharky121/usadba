/* eslint-disable */
export default function InteriorFloor1() {
  return (
    <section className="pra-interior">
      <div className="pra-interior__container">
        <h2>
          Интерьеры основного дома «Усадьбы на Пре»
          <br />
          (1 этаж)
        </h2>
        <div className="section__features features">
          <ul className="features__list">
            <li className="features__item features__item--library">
              Просторная библиотека
            </li>
            {" "}
            <li className="features__item features__item--terrace">
              Гостиная зона-холл с выходом на террасу, рояль, мягкая мебель (70 кв. м)
            </li>
            {" "}
            <li className="features__item features__item--dinner">
              Кухня
            </li>
            {" "}
            <li className="features__item features__item--guest">
              Гостевая ванная комната (душ)
            </li>
            {" "}
            <li className="features__item features__item--cutlery">
              Столовая
            </li>
          </ul>
        </div>
        <p>
          Для обслуживания предусмотрен дополнительный вход, комната отдыха с собственной ванной комнатой
        </p>
        <div className="pra-interior__gallery gallery">
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_6.jpg" alt="Интерьеры основного дома «Усадьбы на Пре»" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_7.jpg" alt="Интерьеры основного дома «Усадьбы на Пре»" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_8.jpg" alt="Интерьеры основного дома «Усадьбы на Пре»" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_9.jpg" alt="Интерьеры основного дома «Усадьбы на Пре»" />
          </div>
          <div className="pra-interior__gallery-item gallery__item">
            <img loading="lazy" decoding="async" className="background-image gallery__image" src="/images/pra-interior_10.jpg" alt="Интерьеры основного дома «Усадьбы на Пре»" />
          </div>
        </div>
      </div>
    </section>
  );
}
