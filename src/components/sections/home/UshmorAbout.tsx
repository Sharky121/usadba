/* eslint-disable */
/** Усадьба Ушмор (desktop) */
export default function UshmorAbout() {
  return (
    <section className="page__section page-section page-section--brand-ushmor page-section--desktop" id="ushmor">
      <div className="page-section__container container">
        <div className="page-section__col page-section-col owl-carousel owl-theme">
          <div className="house-carousel__item">
            <a href="/images/ushmor_common_1.jpg">
              <img className="house-carousel__img" src="/images/ushmor_common_1.jpg" alt="" loading="lazy" />
            </a>
          </div>
          <div className="house-carousel__item">
            <a href="/images/territory_ushmor_7.jpg">
              <img className="house-carousel__img" src="/images/territory_ushmor_7.jpg" alt="" loading="lazy" />
            </a>
          </div>
          <div>
            <a href="/images/ushmor_4.jpg">
              <img loading="lazy" decoding="async" src="/images/ushmor_4.jpg" alt="" />
            </a>
          </div>
          <div>
            <a href="/images/ushmor_5.jpg">
              <img loading="lazy" decoding="async" src="/images/ushmor_5.jpg" alt="Фотография Усадьба Ушмор" />
            </a>
          </div>
          <div>
            <a href="/images/ushmor_6.jpg">
              <img loading="lazy" decoding="async" src="/images/ushmor_6.jpg" alt="Фотография Усадьба Ушмор" />
            </a>
          </div>
          <div>
            <a href="/images/ushmor_7.jpg">
              <img loading="lazy" decoding="async" src="/images/ushmor_7.jpg" alt="Фотография Усадьба Ушмор" />
            </a>
          </div>
          <div>
            <a href="/images/ushmor_8.jpg">
              <img loading="lazy" decoding="async" src="/images/ushmor_8.jpg" alt="Фотография Усадьба Ушмор" />
            </a>
          </div>
          <div>
            <a href="/images/ushmor_9.jpg">
              <img loading="lazy" decoding="async" src="/images/ushmor_9.jpg" alt="Фотография Усадьба Ушмор" />
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
  );
}
