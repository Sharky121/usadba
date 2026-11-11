/**
 * Декоративные разделители под пункт меню с открытым сабменю (xl).
 *
 * Референс-сетка с десятками мотивов (минимализм, волны, «фасадные» завитки):
 * `public/images/decorative-dividers-catalog.png` — удобно подобрать стиль;
 * отдельные мотивы ниже векторизованы вручную под меню.
 *
 * Исторические SVG: Wikimedia Commons (PD), см. комментарии у вариантов.
 */

export type SubmenuOrnamentId =
  | "book1787"
  | "centralFlare"
  | "rhombeScrolls"
  | "doubleRuleMedallion"
  | "separatorVolutes"
  | "catalogGridDot"
  | "catalogGridDiamond"
  | "catalogWave"
  | "catalogScrollPair";

/** Смените значение, чтобы выбрать орнамент. */
export const SUBMENU_ORNAMENT_ACTIVE: SubmenuOrnamentId = "separatorVolutes";

const ornamentClass =
  "h-6 w-[min(220px,calc(100%-8px))] text-[rgb(87,77,77)]";

/** 1787, книжный разделитель (La Matinée libertine…). Копия: `public/images/menu-separator-1787.svg`. */
function OrnamentBook1787() {
  return (
    <svg
      viewBox="0 0 45.852537 4.0461115"
      className={ornamentClass}
      aria-hidden
    >
      <g transform="translate(-31.491863,-66.994267)">
        <g>
          <rect
            x="35.755207"
            y="67.323387"
            width="37.332806"
            height="0.87665021"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.52"
          />
          <rect
            x="35.786079"
            y="70.114426"
            width="37.386852"
            height="0.57503742"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.42"
          />
          <g>
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.77"
              d="m 34.752333,70.600017 a 1.124114,1.5751542 0 0 1 -1.100348,-0.750879 1.124114,1.5751542 0 0 1 0.04124,-1.713999 1.124114,1.5751542 0 0 1 1.133941,-0.645329"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.77"
              d="m 33.144473,70.641735 a 1.124114,1.5751542 0 0 1 -1.100349,-0.750879 1.124114,1.5751542 0 0 1 0.04124,-1.713999 1.124114,1.5751542 0 0 1 1.133942,-0.645329"
            />
          </g>
          <g transform="matrix(-1,0,0,1,108.83626,-0.08164584)">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.77"
              d="m 34.752333,70.600017 a 1.124114,1.5751542 0 0 1 -1.100348,-0.750879 1.124114,1.5751542 0 0 1 0.04124,-1.713999 1.124114,1.5751542 0 0 1 1.133941,-0.645329"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="0.77"
              d="m 33.144473,70.641735 a 1.124114,1.5751542 0 0 1 -1.100349,-0.750879 1.124114,1.5751542 0 0 1 0.04124,-1.713999 1.124114,1.5751542 0 0 1 1.133942,-0.645329"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

/** «Central flare» — овал + правило по мотиву Decorative_text_divider_-_central_flare (Commons). */
function OrnamentCentralFlare() {
  return (
    <svg viewBox="0 0 300 20" className={ornamentClass} aria-hidden>
      <ellipse
        cx="150"
        cy="10"
        rx="138"
        ry="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <line
        x1="8"
        y1="10"
        x2="292"
        y2="10"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Filet rhombe — симметричные «румбы»-скроллы (Commons: Filet_rhombe.svg). Файл: `menu-border-rhombe.svg`. */
function OrnamentRhombeScrolls() {
  return (
    <svg viewBox="0 0 500 22.834" className={ornamentClass} aria-hidden>
      <g fill="currentColor">
        <path d="M0,9.991c55.467-0.239,108.28-0.714,160.829-4.757C190.552,2.855,220.275,0.237,253.184,0v1.426c-32.909,0.953-62.367,3.093-91.825,5.233C138.27,8.326,115.18,9.276,92.091,9.991l161.093,1.37v11.474c-32.909-0.476-62.632-3.091-92.355-5.232C108.28,13.795,55.467,13.083,0,12.844V9.991z" />
        <path d="M500,12.844c-55.467,0.238-108.278,0.951-160.827,4.758c-29.726,2.142-59.447,4.757-92.355,5.232V11.417l161.092-1.426c-23.09-0.714-46.178-1.665-69.268-3.331c-29.458-2.141-58.916-4.281-91.824-5.233V0c32.909,0.237,62.63,2.855,92.355,5.234C391.722,9.276,444.533,9.751,500,9.991V12.844z" />
      </g>
    </svg>
  );
}

/** Двойная линия + медальон (по мотиву Decorative_text_divider.svg, Commons). */
function OrnamentDoubleRuleMedallion() {
  return (
    <svg viewBox="0 0 400 16" className={ornamentClass} aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M12 5h376M12 11h376"
      />
      <circle
        cx="200"
        cy="8"
        r="5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="200"
        cy="8"
        r="2.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Линия — точка — линия (типичный минималистичный ряд из каталога). */
function OrnamentCatalogGridDot() {
  return (
    <svg viewBox="0 0 300 12" className={ornamentClass} aria-hidden>
      <line
        x1="4"
        y1="6"
        x2="132"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="150" cy="6" r="2.25" fill="currentColor" />
      <line
        x1="168"
        y1="6"
        x2="296"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Линия — ромб — линия. */
function OrnamentCatalogGridDiamond() {
  return (
    <svg viewBox="0 0 300 12" className={ornamentClass} aria-hidden>
      <line
        x1="4"
        y1="6"
        x2="128"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path d="M150 2.5l4.2 3.5-4.2 3.5-4.2-3.5 4.2-3.5z" fill="currentColor" />
      <line
        x1="172"
        y1="6"
        x2="296"
        y2="6"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Тонкие крайние правила + волнистая линия по центру. */
function OrnamentCatalogWave() {
  return (
    <svg viewBox="0 0 300 14" className={ornamentClass} aria-hidden>
      <path
        d="M4 3h292M4 11h292"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.55"
        opacity={0.45}
      />
      <path
        d="M4 7 Q 78 3 150 7 T 296 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Пара симметричных завитков и тонкая связка (калиграфический ряд каталога). */
function OrnamentCatalogScrollPair() {
  return (
    <svg viewBox="0 0 300 16" className={ornamentClass} aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 10c0-6 6-10 14-10 5 0 9 4 9 9 0 4-3 7-7 7-3 0-5-2-4-5 1-4 6-5 9-2"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M296 10c0-6-6-10-14-10-5 0-9 4-9 9 0 4 3 7 7 7 3 0 5-2 4-5-1-4-6-5-9-2"
      />
      <path
        d="M28 8h244"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.65"
        opacity={0.5}
      />
    </svg>
  );
}

/** Симметричные волюты + тонкий фриз (оригинальный мотив для гибкости без тяжёлых ассетов). */
function OrnamentSeparatorVolutes() {
  return (
    <svg viewBox="0 0 160 14" className={ornamentClass} aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 11c0-5 4-9 10-9 4 0 7 3 7 7 0 2-1 4-3 4-2 0-3-2-2-4 1-3 5-4 8-2" />
        <path d="M158 11c0-5-4-9-10-9-4 0-7 3-7 7 0 2 1 4 3 4 2 0 3-2 2-4-1-3-5-4-8-2" />
        <path d="M22 7c20-2 40-2 58 0M80 7c20-2 40-2 58 0" />
        <path d="M76 3l4 6 4-6" />
      </g>
    </svg>
  );
}

export function SubmenuParentOrnamentXL() {
  switch (SUBMENU_ORNAMENT_ACTIVE) {
    case "centralFlare":
      return <OrnamentCentralFlare />;
    case "rhombeScrolls":
      return <OrnamentRhombeScrolls />;
    case "doubleRuleMedallion":
      return <OrnamentDoubleRuleMedallion />;
    case "separatorVolutes":
      return <OrnamentSeparatorVolutes />;
    case "catalogGridDot":
      return <OrnamentCatalogGridDot />;
    case "catalogGridDiamond":
      return <OrnamentCatalogGridDiamond />;
    case "catalogWave":
      return <OrnamentCatalogWave />;
    case "catalogScrollPair":
      return <OrnamentCatalogScrollPair />;
    case "book1787":
    default:
      return <OrnamentBook1787 />;
  }
}
