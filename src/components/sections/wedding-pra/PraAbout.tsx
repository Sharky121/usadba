/* eslint-disable */
export default function PraAbout() {
  return (
    <section className="pra-about">
      <div className="pra-about__container">
        <div className="pra-about__image">
          <img loading="lazy" decoding="async" className="background-image background-image--no-radius" src="/images/pra-wedding-about_2.jpg" alt="Логотип усадьба на Пре" />
        </div>
        <div className="pra-about__content">
          <h2 className="pra-about__title">
            Об усадьбе
          </h2>
          <p className="pra-about__text">
            Прекрасный усадебный комплекс, гармонично вписанный в мещерскую природу. Прекрасный усадебный комплекс, гармонично вписанный в мещерскую природу.
          </p>
          <p className="pra-about__text">
            Большая территория (6 ГА) со своим нетронутым лесом, внутренним прудом и выходом к реке (100м). Главный дом (площадью 500 кв.м) из лафета в стиле уютного русского загородного имения.
          </p>
          <p className="pra-about__text">
            Варианты проведения банкета:
          </p>
          <ul>
            <li>
              <b>
                до 30 человек
              </b>
              {" "}в гостиной усадьбы
            </li>
            {" "}
            <li>
              <b>
                До 60 человек
              </b>
              {" "}на открытом воздухе
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
