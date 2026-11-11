# Усадьба Ушмор / Усадьба на Пре — Next.js

Сайт перенесён со статических HTML-страниц (`index.html`, `new-year1.html`, `wedding_*.html`,
`pay.html`, `form.html`, `video.html`) на Next.js 16 (App Router). Вёрстка, стили, тексты и цены
не менялись: страницы сверены с оригиналом поэлементно (координаты, стили и текст каждого элемента) на 1366px и 375px.

## Запуск

```bash
npm install
npm run dev      # разработка, http://localhost:3000
npm run build    # production-сборка
npm run start    # запуск production-сборки
```

Видео лежат в `public/video/` и в git не хранятся (~1.5 ГБ) — на сервер их нужно положить отдельно в `public/video/`.

## Страницы

| Было                   | Стало              | Где код                                   |
|------------------------|--------------------|-------------------------------------------|
| `index.html`           | `/`                | `src/app/(main)`, разметка `src/content/home.tsx` |
| `new-year1.html`       | `/new-year1`       | `src/app/(newyear)`, `src/content/new-year.tsx` |
| `pay.html`             | `/pay`             | `src/app/(pay)`, `src/content/pay.tsx`    |
| `wedding_ushmor.html`  | `/wedding_ushmor`  | `src/app/(wedding)`, `src/content/wedding-ushmor.tsx` |
| `wedding_pra.html`     | `/wedding_pra`     | `src/app/(wedding)`, `src/content/wedding-pra.tsx` |
| `form.html`            | `/form`            | `src/app/(form)`, `src/content/form.tsx`  |
| `video.html`           | `/video`           | `src/app/(video)`, `src/components/HlsPlayer.tsx` |

Старые адреса `*.html` отдают 308-редирект на новые (`next.config.ts`).

Каждая группа маршрутов — свой root layout: у главной/новогодней/оплаты стили `index.css`
(`src/styles/site.ts` → `src/scss/main.scss`), у свадебных — `wedding.css` (`src/styles/wedding.ts` → `src/scss/weddings.scss`).
SCSS перенесены из старого проекта; `url(../images/…)` заменены на `/images/…` (файлы в `public/images`, `public/fonts`).

## Поведение (порт `src/js/common.js`)

`src/components/SiteScripts.tsx` — меню (React, `src/components/Menu.tsx`, данные `src/data/site-menu.ts`),
плавная прокрутка к секциям, фиксированная шапка, Fancybox (галереи, видео, popup-прайсы `#price-pra` / `#price-ushmor`),
Owl Carousel, маски телефонов (IMask), форма «Консультация», Яндекс.Карта, модалка онлайн-оплаты YooKassa (SweetAlert2 + `<template id="yookassa-template">`).
`src/components/WeddingScripts.tsx` — порт `weddind-common.js`.

Счётчики и внешние скрипты (`src/components/HeadScripts.tsx`, `BodyEndScripts.tsx`) подключены как в исходных HTML:
Яндекс.Метрика 91549794, Google Tag Manager GTM-N6PF2LW, TravelLine, Yandex SmartCaptcha (`captcha.js`),
YooKassa SimplePay (CSS/JS), API Яндекс.Карт.

## Формы: PHP → API routes

| PHP              | API route         | Получатели / тема — как в PHP |
|------------------|-------------------|-------------------------------|
| `question.php`   | `POST /api/question`  | основной список, «Вопрос с сайта» |
| `callback.php`   | `POST /api/callback`  | основной список, тема из поля `subject` или «Обратная связь с сайта» |
| `price.php`      | `POST /api/price`     | основной список, «Запрос стоимости» |
| `send.php`       | `POST /api/send`      | основной список, «Бронирование с сайта» |
| `send-form.php`  | `POST /api/send-form` | Sharky121@mail.ru, Samorukova_k@inbox.ru, «Бронирование с сайта» |

Старые адреса `/*.php` переписываются на эти маршруты (rewrites), так что `action="question.php"` и т.п. продолжают работать.
Поля и валидация те же (имя кириллицей, хотя бы одно поле). Отличие: при ошибке валидации теперь отвечаем `400`
(PHP отвечал `200` с текстом ошибки, и сайт показывал «Спасибо», хотя письмо не уходило). Значения в письме экранируются.

Почта отправляется через nodemailer. Переменные окружения (`.env.local`):

```
# SMTP (если SMTP_HOST не задан — используется локальный sendmail, как PHP mail())
SMTP_HOST=smtp.example.ru
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=...
SMTP_PASS=...
MAIL_FROM="usadba-na-pre.ru <noreply@usadba-na-pre.ru>"
SENDMAIL_PATH=/usr/sbin/sendmail
```

Хостинг должен уметь запускать Node.js (`next start`): API routes не работают в статическом экспорте.
Старые PHP-обработчики удалены из репозитория (есть в истории git, ветка `master`).
