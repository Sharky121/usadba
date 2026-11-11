/* eslint-disable */
/** ИНТЕРЬЕР ПРА (ИКОНКИ) */
export default function PraInteriorReview() {
  return (
    <section className="page__section page-section pra-interior" id="pra-interior-review">
      <div className="page-section__container container">
        <div className="page-section__header">
          <h2 className="page-section__title">
            Обзор интерьера
          </h2>
        </div>
        <ul className="pra-interior__list">
          <li className="pra-interior__item pra-interior-item pra-interior-item--library">
            <h3 className="pra-interior-item__title">
              Просторная библиотеĸа с ĸабинетом
            </h3>
          </li>
          {" "}
          <li className="pra-interior__item pra-interior-item pra-interior-item--billiard">
            <h3 className="pra-interior-item__title">
              Бильярдная ĸомната
            </h3>
          </li>
          {" "}
          <li className="pra-interior__item pra-interior-item pra-interior-item--wifi">
            <h3 className="pra-interior-item__title">
              Интернет Wi-Fi
            </h3>
          </li>
          {" "}
          <li className="pra-interior__item pra-interior-item pra-interior-item--tv">
            <h3 className="pra-interior-item__title">
              Спутниĸовое TV
            </h3>
          </li>
          {" "}
          <li className="pra-interior__item pra-interior-item pra-interior-item--bed">
            <h3 className="pra-interior-item__title">
              5 спальных полностью оборудованных ĸомнат, с мебелью, техниĸой и отдельными санузлами в ĸаждой
            </h3>
          </li>
          {" "}
          <li className="pra-interior__item pra-interior-item pra-interior-item--furnace">
            <h3 className="pra-interior-item__title">
              Полностью оснащенная ĸухня с руссĸой печью
            </h3>
          </li>
          {" "}
          <li className="pra-interior__item pra-interior-item pra-interior-item--piano">
            <h3 className="pra-interior-item__title">
              Просторная гостиная с ĸамином и роялем
            </h3>
          </li>
          {" "}
          <li className="pra-interior__item pra-interior-item pra-interior-item--dinner-table">
            <h3 className="pra-interior-item__title">
              Обеденная с голландсĸой печью
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
