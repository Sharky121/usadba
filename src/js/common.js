import Swal from 'sweetalert2/dist/sweetalert2.js';
import IMask from 'imask';
import {Fancybox} from "@fancyapps/ui";
import Menu from './menu/menu';
import {closeMenuHandler, menuToggleHandler} from './menu-toggle-handler';
import { createRoot } from 'react-dom/client';

const desktopMediaQuery = window.matchMedia('(min-width: 1280px)')
const menuElement = document.querySelector('#menu');
const headerElement = document.querySelector('#page-header-main');
const questionForm = document.querySelector('#question-form');
const callbackElement = document.querySelector('#callback');
const phoneInputs = document.querySelectorAll('[type="tel"]');
const hamburgerMenuElement = document.querySelector('#hamburger-menu');
const closeMenuElement = document.querySelector('#close-mobile-nav');
const menuLinksElements = document.querySelectorAll('[data-scroll]');
const contactsElement = document.querySelectorAll('#contacts');
const actionElement = document.querySelectorAll('#action');
const yookassaBtn = document.querySelectorAll('.btn-pay');

Fancybox.bind(actionElement, "[data-fancybox]", {});
Fancybox.bind("[data-fancybox]", {height: '100%'});

let offsetHeader = 60;

if (desktopMediaQuery.matches) {
  offsetHeader = 90;
}

const root = createRoot(menuElement);
root.render(<Menu />);

const owlCarouselConfig = {
  dots: false,
  nav: true,
  loop: true,
  lazyLoad: true,
  autoHeight: false,
  navText: [
    `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
        <use xlink:href="#ico-left-arrow" x="0" y="0"></use>
       </svg>
      `,
    `<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
        <use xlink:href="#ico-right-arrow" x="0" y="0"></use>
       </svg>
      `
  ]
}

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 40) {
    if (headerElement) {
      headerElement.classList.add('page-header--fixed-top');
      document.querySelector('main').style.paddingTop = '60px';
    }
  } else {
    if (headerElement) {
      headerElement.classList.remove('page-header--fixed-top');
      document.querySelector('main').style.paddingTop = '0px';
    }
  }
}

window.addEventListener('scroll', onScroll);

if (contactsElement) {
  ymaps.ready(init);
}

function init () {
  const PRA_COORDS = [55.146111, 40.048516];
  const USHMOR_COORDS = [55.178604, 40.104163];
  const CENTER_COORDS = [55.139267, 40.137438];

  const ryazanMap = new ymaps.Map("map", {
    center: CENTER_COORDS,
    zoom: 11
  });

  const officePlacemark = new ymaps.Placemark(PRA_COORDS, {
    balloonContent: '«Усадьба на Пре»'
  }, {
    iconLayout: 'default#image',
    iconImageHref: `public/images/pin-pra.svg`,
    iconImageSize: [27, 39],
    iconImageOffset: [-13.5, -39]
  });

  const warehousePlacemark = new ymaps.Placemark(USHMOR_COORDS, {
    balloonContent: '«Усадьба Ушмор»'
  }, {
    iconLayout: 'default#image',
    iconImageHref: `public/images/pin-ushmor.svg`,
    iconImageSize: [27, 39],
    iconImageOffset: [-13.5, -39]
  });

  ryazanMap.geoObjects.add(officePlacemark);
  ryazanMap.geoObjects.add(warehousePlacemark);
}

if (phoneInputs) {
  phoneInputs.forEach((element) => {
    const phoneMask = IMask(element, {
      mask: '+{7} (000) 000-00-00',
    });
  });
}

// Форма Консультация в футере
if (questionForm) {
  questionForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    const form = evt.target;
    const formData = new FormData(form);
  
    fetch(
      'question.php',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: 'Спасибо',
            text: 'Менеджер свяжется с вами в ближайшее время',
            icon: 'success',
            confirmButtonText: 'Закрыть',
            confirmButtonColor: '#86abbb',
            timer: 1500
          });
        } else {
          Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Произошла ошибка!',
            showConfirmButton: false,
            confirmButtonText: 'Закрыть',
            confirmButtonColor: '#86abbb',
            timer: 1500
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: `Произошла ошибка! ${error}`,
          showConfirmButton: false,
          confirmButtonText: 'Закрыть',
          confirmButtonColor: '#86abbb',
          timer: 11500
        });
      });
  });
}

if (hamburgerMenuElement) {
  hamburgerMenuElement.addEventListener('click', menuToggleHandler);
}

if (closeMenuElement) {
  closeMenuElement.addEventListener('click', menuToggleHandler);
}

$(document).ready(function() {
  $('.ushmor-territory__gallery').owlCarousel({
    responsive: {
      0: {
        items: 1,
      },
      768: {
        margin: 20,
        items: 2
      },
      1280: {
        margin: 60,
        items: 3
      }
    },
    ...owlCarouselConfig,
  });

  $('.owl-carousel').owlCarousel({
    items: 1,
    ...owlCarouselConfig
  });
});

if (callbackElement) {
  callbackElement.addEventListener('click', (evt) => {
    evt.preventDefault();
  });
}

const scrollToElement = (coord) => {
  window.scrollBy({
    top: coord - offsetHeader,
    left: 0,
    behavior: 'smooth'
  });
}

if (menuLinksElements) {
  menuLinksElements.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
  
      const scroll = window.scrollY;
      const scrollElementId = evt.currentTarget.dataset.scroll;
      const scrollElement = document.getElementById(`${scrollElementId}`);
      let rectY;

      if (scroll > 40) {
        rectY = scrollElement.getBoundingClientRect().top;
        console.log(rectY);
      } else {
        rectY = scrollElement.getBoundingClientRect().top;
        console.log(rectY);
      }
  
      scrollToElement(rectY);
      closeMenuHandler();
    });
  });
}

Swal.fire({
  customClass: {
    htmlContainer: 'swal-info-container',
    popup: 'swal-info-popup',
    actions: 'swal-info-actions',
  },
  html: `
          <div class="info-popup">
            <h3 class="info-popup__title">Новый год в Усадьбе Ушмор!</h3>  
            <p class="info-popup__subtitle">Стоимость  - &nbsp;2,5&nbsp;млн&nbsp;рублей&nbsp; <br><span> (заезд 30.12 после 14.00, выезд 02.11 до 14.00)</span></p>
            <ul>
              <li>- размещение в графском доме до 6 человек</li>
              <li>- размещение в гостевом доме до 10 человек</li>
              <li>- завтраки, уборка включены в стоимость</li>
              <li>- кейтеринг заказывается отдельно</li>
              <li>- программа обсуждается и заказывается отдельно</li>
            </ul>
            <p>Всю информацию вы можете узнать по телефону:</p>
              <a class="info-popup__phone" href="tel:+79106130022">+7 (910) 613-00-22</a>
            </p>
            <p>Также, вы можете связаться с нами через форму обратной связи на сайте, <a href="whatsapp://send/?phone=+79106130022" target="_blank">Whatsapp</a> или <a href="mailto:info@usadba-na-pre.ru">email: info@usadba-na-pre.ru</a></p>
          </div>
        `,
  confirmButtonText: 'Закрыть',
  confirmButtonColor: '#86abbb',
});

if(yookassaBtn.length) {
  yookassaBtn.forEach((element) => {
    element.addEventListener('click', () => {
      Swal.fire({
        template: "#yookassa-template",
        confirmButtonText: 'Закрыть',
        confirmButtonColor: '#86abbb',
        customClass: {
          htmlContainer: 'pay-container',
        },
        didOpen: () => {
          const titleElement = Swal.getHtmlContainer().querySelector('.ym-block-title');
          
          titleElement.remove();
        }
      });
    });
  });
}
