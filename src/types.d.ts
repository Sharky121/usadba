declare module 'sweetalert2/dist/sweetalert2.js' { import Swal from 'sweetalert2'; export default Swal; }
declare module 'owl.carousel';
declare module '*.css';
declare module '*.scss';
declare module '@fancyapps/ui';
declare module 'jquery';

// pay.html содержит <lineargradient> вне <svg> (невидимые неизвестные элементы) — сохраняем как есть
declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      lineargradient: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, unknown>;
    }
  }
}
