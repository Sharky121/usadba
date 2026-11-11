/* eslint-disable */
export default function PackageOffer() {
  return (
    <section className="wedding-page__section section">
      <div className="section__container">
        <div className="section__content">
          <h2 className="section__title">
            Пакетное предложение - 250 тыс. руб.
          </h2>
          <ul className="section__list">
            <li className="section__item">
              <b>
                Аренда всей территории Усадьбы для проведения мероприятия 05:00-00:00
              </b>
              {" "}
              <ul className="section__sublist">
                <li className="section__subitem">
                  6га территория
                </li>
                {" "}
                <li className="section__subitem">
                  выход к реке
                </li>
                {" "}
                <li className="section__subitem">
                  поместье 500 кв.м
                </li>
                {" "}
                <li className="section__subitem">
                  охрана
                </li>
              </ul>
            </li>
            {" "}
            <li className="section__item">
              <b>
                Проживание гостей (максимум 12 человек) до 18:00 следующего дня
              </b>
              {" "}
              <ul className="section__sublist">
                <li className="section__subitem">
                  возможно дополнительное размещение до 10 гостей в Усадьбе Ушмор (20 минут езды на автомобиле) – от 75 000 рублей, питание не включено
                </li>
                {" "}
                <li className="section__subitem">
                  возможно размещение молодоженов в спальне Графского дома Усадьбы Ушмор (20 минут езды на автомобиле) – 60 000 рублей, включен роскошный завтрак в интерьерах дома
                </li>
              </ul>
            </li>
            {" "}
            <li className="section__item">
              <b>
                Мебель, посуда
              </b>
            </li>
            {" "}
            <li className="section__item">
              <b>
                Сопровождение администратора в день мероприятия
              </b>
            </li>
          </ul>
        </div>
        <div className="section__image">
          <img className="background-image background-image--no-radius" src="/images/pra-package.jpg" loading="lazy" alt="Камерная свадьба" />
        </div>
      </div>
    </section>
  );
}
