/* eslint-disable */
/** ТЕРРИТОРИЯ УШМОР */
export default function UshmorTerritory() {
  return (
    <section className="page__section page-section ushmor-territory" id="ushmor-territory">
      <div className="page-section__container ushmor-territory__container container">
        <div className="page-section__header">
          <h2 className="page-section__title">
            Территория
          </h2>
        </div>
        <ul className="pra-territory__list">
          <li className="pra-territory__item pra-interior-item pra-territory-item--pines">
            <h3 className="pra-interior-item__title">
              Парк
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-interior-item pra-territory-item--garage">
            <h3 className="pra-interior-item__title">
              Охраняемая территория и стоянка
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-interior-item pra-interior-item--tennis">
            <h3 className="pra-interior-item__title">
              Теннисный корт
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-interior-item pra-territory-item--boat">
            <h3 className="pra-interior-item__title">
              Зарыбленный пруд
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-interior-item pra-territory-item--stable">
            <h3 className="pra-interior-item__title">
              Конюшня с крытым манежем
            </h3>
          </li>
          {" "}
          <li className="pra-territory__item pra-interior-item pra-territory-item--lake">
            <h3 className="pra-interior-item__title">
              Выход к озеру
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
}
