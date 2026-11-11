/* eslint-disable */
/** Содержимое страницы /form. */
export default function FormContent() {
  return (
    <main className="page-main">
      <div className="container">
        <form className="booking__form booking-form booking-form-1 form" id="booking-example" action="send-form.php" encType="multipart/form-data">
          <ul className="booking-form__list form__list">
            <li className="form__item form__item--booking form-field">
              <label className="form-field__label visually-hidden" htmlFor="start-date">
                Дата заезда
              </label>
              {" "}
              <input className="form-field__input" id="start-date" name="start-date" type="text" placeholder="Заезд" required />
            </li>
            {" "}
            <li className="form__item form__item--booking form-field">
              <label className="form-field__label visually-hidden" htmlFor="end-date">
                Дата выезда
              </label>
              {" "}
              <input className="form-field__input" id="end-date" name="end-date" type="text" placeholder="Выезд" />
            </li>
            {" "}
            <li className="form__item form__item--booking form-field">
              <label className="form-field__label visually-hidden" htmlFor="phone-1">
                Телефон
              </label>
              {" "}
              <input className="form-field__input" id="phone-1" name="phone" type="tel" placeholder="Телефон" required />
            </li>
            {" "}
            <li className="form__item form__item--booking form-field">
              <label className="form-field__label visually-hidden" htmlFor="email-1">
                E-mail
              </label>
              {" "}
              <input className="form-field__input" id="email-1" name="email" type="text" placeholder="Email" required />
            </li>
            {" "}
            <li className="form__item form__item--booking form-field">
              <label className="form-field__label visually-hidden" htmlFor="house-name">
                Дата выезда
              </label>
              {" "}
              <select className="form-field__select" name="house-name" id="house-name" required>
                <option>
                  Выбрать усадьбу
                </option>
                <option value="pra">
                  Усадьба на Пре
                </option>
                <option value="ushmor">
                  Усадьба Ушмор
                </option>
              </select>
            </li>
          </ul>
          {" "}
          <button className="booking-form__btn btn btn--danger" type="submit">
            <span className="btn__text">
              Забронировать
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}
