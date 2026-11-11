/** Скрипт в конце <body>: форма YooKassa. API Яндекс.Карт подгружается лениво в SiteScripts. */
export default function BodyEndScripts() {
  return <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js" defer />;
}
