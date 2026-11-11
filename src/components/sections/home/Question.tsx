/* eslint-disable */
/** ОСТАЛИСЬ ВОПРОСЫ */
export default function Question() {
  return (
    <section className="page__section page-section page-section--brand-ushmor question">
      <div className="question__container container">
        <h2 className="visually-hidden">
          Консультация
        </h2>
        <h4 className="question__title">
          Если у вас остались вопросы, оставьте свои контакты и мы вас проконсультируем.
        </h4>
        <form className="question__form question-form form" action="question.php" id="question-form" encType="multipart/form-data">
          <ul className="question-form__list form__list">
            <li className="form__item form-field form__item--3">
              <label className="form-field__label visually-hidden" htmlFor="name">
                Имя
              </label>
              {" "}
              <input className="form-field__input" id="name" name="name" type="text" placeholder="Имя" minLength={2} maxLength={20} required />
            </li>
            {" "}
            <li className="form__item form-field form__item--3">
              <label className="form-field__label visually-hidden" htmlFor="phone">
                Телефон
              </label>
              {" "}
              <input className="form-field__input" id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
            </li>
            {" "}
            <li className="form__item form-field form__item--3">
              <label className="form-field__label visually-hidden" htmlFor="email-4">
                Email
              </label>
              {" "}
              <input className="form-field__input" id="email-4" name="email" type="email" placeholder="Email" required />
            </li>
          </ul>
          {" "}
          <button className="question-form__btn btn btn--danger" id="btn-question-form" type="submit">
            <span className="btn__text">
              Отправить
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
