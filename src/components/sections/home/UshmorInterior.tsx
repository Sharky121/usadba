/* eslint-disable */
/** ИНТЕРЬЕР УШМОР */
export default function UshmorInterior() {
  return (
    <section className="page__section page-section pra-interior" id="ushmor-interior">
      <div className="page-section__container container">
        <div className="page-section__header">
          <h2 className="page-section__title">
            Обзор интерьера
          </h2>
        </div>
        <ul className="pra-territory__list">
          <li className="pra-territory__item pra-territory-item pra-interior-item--terrace">
            <h3 className="pra-territory-item__title">
              Большой зимний сад (до 30 гостей)
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-territory-item pra-interior-item--furnace">
            <h3 className="pra-territory-item__title">
              Каминный зал
              <br />
              с выходом к озеру
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-territory-item pra-interior-item--dinner-table">
            <h3 className="pra-territory-item__title">
              Торжественная столовая
              <br />
              (до 12 гостей)
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-territory-item pra-interior-item--bed">
            <h3 className="pra-territory-item__title">
              3 больших спальни (до 5 гостей)
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-territory-item pra-interior-item--library">
            <h3 className="pra-territory-item__title">
              Большая библиотека
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-territory-item pra-interior-item--billiard">
            <h3 className="pra-territory-item__title">
              Бильярдная комната
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
