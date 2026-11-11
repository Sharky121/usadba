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

Видео лежат в `public/video/` и в git не хранятся — на сервер их нужно положить отдельно в `public/video/`.

## Выкладка

Сайт работает на VPS `ihc-sharky` (`/var/www/ushmor`, PM2 `ushmor`, nginx → 127.0.0.1:3002), домен усадьба-на-пре.рф.

- **Автоматически:** пуш в ветку `nextjs` запускает GitHub Actions (`.github/workflows/deploy.yml`): файлы копируются
  на сервер, сайт собирается и перезапускается. Нужен секрет репозитория `SSH_KEY`. Если сборка упала, сайт остаётся на прежней версии.
- **Вручную:** `npm run deploy` — то же самое с компьютера, плюс заливает видео из `public/video` (в git их нет).

## Оптимизация медиа

```bash
npm run optimize:images   # public/images: до 2000px по длинной стороне, JPEG mozjpeg q78, PNG без потерь
npm run optimize:video    # public/video: H.264 CRF 24 (фоновое wedding.mp4 — CRF 28, без звука), faststart
```

Оба скрипта заменяют файл, только если результат меньше; пути не меняются. Новые фото и видео
прогоняйте через них перед коммитом/выкладкой. Оригиналы видео — вне репозитория.

## Страницы

| Было                   | Стало              | Где код                                   |
|------------------------|--------------------|-------------------------------------------|
| `index.html`           | `/`                | `src/app/(main)`, `src/components/sections/home/*` |
| `new-year1.html`       | `/new-year1`       | `src/app/(newyear)`, `src/components/sections/new-year/*` |
| `pay.html`             | `/pay`             | `src/app/(pay)`, `src/components/sections/pay/*`    |
| `wedding_ushmor.html`  | `/wedding_ushmor`  | `src/app/(wedding)`, `src/components/sections/wedding-ushmor/*` |
| `wedding_pra.html`     | `/wedding_pra`     | `src/app/(wedding)`, `src/components/sections/wedding-pra/*` |
| `form.html`            | `/form`            | `src/app/(form)`, `src/components/sections/form/*`  |
| `video.html`           | `/video`           | `src/app/(video)`, `src/components/HlsPlayer.tsx` |

Старые адреса `*.html` отдают 308-редирект на новые (`next.config.ts`).

Каждая группа маршрутов — свой root layout: у главной/новогодней/оплаты стили `index.css`
(`src/styles/site.ts` → `src/scss/main.scss`), у свадебных — `wedding.css` (`src/styles/wedding.ts` → `src/scss/weddings.scss`).
SCSS перенесены из старого проекта; `url(../images/…)` заменены на `/images/…` (файлы в `public/images`, `public/fonts`).

## Компоненты

```
src/components/
  layout/    SiteHeader (шапка, мессенджер — проп contact), WeddingFooter (футер свадебных страниц)
  sections/  секции страниц: home/, new-year/, pay/, form/, wedding-pra/, wedding-ushmor/
  price/     popup-прайсы (#price-pra, #price-ushmor, свадебные)
  icons/     SVG-спрайты иконок
  common/    GtmNoscript, YookassaTemplate
```

Страница в `src/app/**/page.tsx` только собирает секции по порядку. Цены правятся в `src/components/price/*`.

## Поведение (порт `src/js/common.js`)

`src/components/SiteScripts.tsx` — меню (React, `src/components/Menu.tsx`, данные `src/data/site-menu.ts`),
плавная прокрутка к секциям, фиксированная шапка, Fancybox (галереи, видео, popup-прайсы `#price-pra` / `#price-ushmor`),
Owl Carousel, маски телефонов (IMask), форма «Консультация», Яндекс.Карта, модалка онлайн-оплаты YooKassa (SweetAlert2 + `<template id="yookassa-template">`).
`src/components/WeddingScripts.tsx` — порт `weddind-common.js`.

Счётчики и внешние скрипты (`src/components/HeadScripts.tsx`, `BodyEndScripts.tsx`): Яндекс.Метрика 91549794,
Google Tag Manager GTM-N6PF2LW, YooKassa SimplePay (CSS/JS, `defer`).

## Оптимизация для продакшена

- Картинки ниже первого экрана — `loading="lazy" decoding="async"`.
- Фоновое видео блока свадеб (`data-autoplay`, `preload="none"`) загружается и играет только рядом с экраном.
- API Яндекс.Карт подгружается, когда карта приближается к экрану (`SiteScripts.tsx`).
- Шрифты — `font-display: swap`, основной шрифт предзагружается.
- Кэширование `public/` (`next.config.ts`): шрифты — год, картинки и видео — 30 дней. При замене картинки
  меняйте имя файла (или добавляйте `?v=2`), иначе у посетителей останется старая версия из кэша.
- Убраны неиспользуемые скрипты: Yandex SmartCaptcha (не было ни виджета, ни проверки) и TravelLine
  (на страницах нет контейнеров формы поиска); стили flatpickr.

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
