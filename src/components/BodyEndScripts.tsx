/** Скрипты в конце <body>, как в исходных index.html / new-year1.html: API Яндекс.Карт и форма YooKassa. */
export default function BodyEndScripts() {
  return (
    <>
      <script
        src="https://api-maps.yandex.ru/2.1/?apikey=63206c9d-b428-415d-985a-17b4af8c9595&lang=ru_RU"
        type="text/javascript"
      />
      <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js" />
    </>
  );
}
