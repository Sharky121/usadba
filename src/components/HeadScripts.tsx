import { GTM_SNIPPET, METRIKA_SNIPPET, TRAVELLINE_SNIPPET } from "@/lib/head-snippets";

type Props = {
  /** Стили формы YooKassa (на главной, новогодней и странице оплаты). */
  yookassaCss?: boolean;
  /** Скрипт формы YooKassa в <head> (так было только на pay.html). */
  yookassaJsInHead?: boolean;
};

/**
 * Содержимое <head>, общее для всех страниц сайта:
 * Яндекс SmartCaptcha, Яндекс.Метрика (91549794), Google Tag Manager, TravelLine.
 * Скрипты вставляются как есть — так же, как в исходных HTML-файлах.
 */
export default function HeadScripts({ yookassaCss, yookassaJsInHead }: Props) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      {yookassaCss && (
        <link rel="stylesheet" href="https://yookassa.ru/integration/simplepay/css/yookassa_construct_form.css" />
      )}
      {yookassaJsInHead && <script src="https://yookassa.ru/integration/simplepay/js/yookassa_construct_form.js" />}

      {/* Yandex captcha */}
      <script src="https://smartcaptcha.yandexcloud.net/captcha.js?render=onload&onload=onloadFunction" defer />

      {/* Yandex.Metrika counter */}
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: METRIKA_SNIPPET }} />
      <noscript
        dangerouslySetInnerHTML={{
          __html:
            '<div><img src="https://mc.yandex.ru/watch/91549794" style="position:absolute; left:-9999px;" alt="" /></div>',
        }}
      />
      {/* /Yandex.Metrika counter */}

      {/* Google Tag Manager */}
      <script dangerouslySetInnerHTML={{ __html: GTM_SNIPPET }} />

      {/* TravelLine */}
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: TRAVELLINE_SNIPPET }} />
    </>
  );
}
