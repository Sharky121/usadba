import flatpickr from 'flatpickr';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import IMask from 'imask';
import {Fancybox} from "@fancyapps/ui";
import {Russian} from 'flatpickr/dist/l10n/ru';
import Menu from './menu/menu';
import {closeMenuHandler, menuToggleHandler} from './menu-toggle-handler';
import { createRoot } from 'react-dom/client';

flatpickr.localize(Russian);

const desktopMediaQuery = window.matchMedia('(min-width: 1280px)')
const menuElement = document.querySelector('#menu');
const headerElement = document.querySelector('#page-header-main');
const questionForm = document.querySelector('#question-form');
const newYearForm = document.querySelector('#new-year-form');
const callbackElement = document.querySelector('#callback');
const callbackAwardsElement = document.querySelector('#callback-2');
const conditions = document.querySelector('#conditions');
const bookingForms = document.querySelectorAll('.booking-form');
const phoneInputs = document.querySelectorAll('[type="tel"]');
const startDate = document.querySelectorAll('[name="start-date"]');
const endDate = document.querySelectorAll('[name="end-date"]');
const hamburgerMenuElement = document.querySelector('#hamburger-menu');
const closeMenuElement = document.querySelector('#close-mobile-nav');
const menuLinksElements = document.querySelectorAll('[data-scroll]');
const contactsElement = document.querySelectorAll('#contacts');
const actionElement = document.querySelectorAll('#action');

Fancybox.bind(actionElement, "[data-fancybox]", {});
Fancybox.bind("[data-fancybox]", {height: '100%'});

let offsetHeader = 60;

if (desktopMediaQuery.matches) {
  offsetHeader = 90;
}

const root = createRoot(menuElement);
root.render(<Menu />);


const flatpickrSettings = {
  dateFormat: 'Y-m-d',
  altFormat: "d.m.Y",
  altInput: true,
  disableMobile: true,
  minDate: "2023-09-29",
};

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

const getPriceForm = (subject) => {
  return (
    `<form class="booking__form price-form form" enctype="multipart/form-data" id="price-form">
        <input type="hidden" name="subject" value="${subject}">
        <ul class="price-form__list form__list">
          <li class="form__item form__item--3 form-field">
            <label class="form-field__label visually-hidden" for="name">Имя</label>
            <input class="form-field__input" id="name" name="name" type="text" placeholder="Имя">
          </li>
          <li class="form__item form__item--3 form-field">
            <label class="form-field__label visually-hidden" for="email">Email</label>
            <input class="form-field__input" id="email" name="email" type="email" placeholder="Email" required>
          </li>
          <li class="form__item form__item--3 form-field">
            <label class="form-field__label visually-hidden" for="phone">Телефон</label>
            <input class="form-field__input" id="phone" name="phone" type="tel" placeholder="Телефон" required>
          </li>
        </ul>
        <button class="price-form__btn btn btn--danger">
          <span class="btn__text">Отправить</span>
        </button>
     </form>`
  );
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

startDate.forEach((item) => {
  flatpickr(item, flatpickrSettings);
});

endDate.forEach((item) => {
  flatpickr(item, flatpickrSettings);
});


if (phoneInputs) {
  phoneInputs.forEach((element) => {
    const phoneMask = IMask(element, {
      mask: '+{7} (000) 000-00-00',
    });
  });
}

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

if (bookingForms) {
  bookingForms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
  
      const form = evt.target;
      const formData = new FormData(form);
  
      fetch(
        'send.php',
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
            title: `Произошла ошибка!`,
            showConfirmButton: false,
            confirmButtonText: 'Закрыть',
            confirmButtonColor: '#86abbb',
            timer: 11500
          });
        });
    });
  });
  
}

if (contactsElement) {
  ymaps.ready(init);
}

window.addEventListener('scroll', onScroll);

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

const callbackSubmitHandler = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  return fetch(
    'callback.php',
    {
      method: 'POST',
      body: formData,
    },
  ).then(() => {
    Swal.fire({
      title: 'Спасибо',
      text: 'Менеджер свяжется с вами в ближайшее время',
      icon: 'success',
      customClass: {
        confirmButton: 'price-form__btn btn btn--danger',
      },
      buttonsStyling: false,
      confirmButtonText: 'Закрыть',
      confirmButtonColor: '#86abbb',
      timer: 1500
    });
  }).catch((error) => {
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
};

const popupFormHandler = (title, subject) => {

  Swal.fire({
    title: title,
    html: getPriceForm(subject),
    width: '42em',
    showConfirmButton: false,
    showCloseButton: true,
    focusConfirm: true,
    didRender: () => {
      const form = Swal.getHtmlContainer().querySelector('form');

      if (form) {
        const phone = form.querySelector('[name="phone"]');

        const phoneMask = IMask(phone, {
          mask: '+{7} (000) 000-00-00',
        });
  
        form.addEventListener('submit', callbackSubmitHandler);
      }
    },
    didOpen: () => {
      const inputEls = Swal.getFocusableElements();
      console.log(inputEls);
      if (inputEls.length) {
        inputEls.forEach((el) => el.blur()); // Снимаем фокус с input
      }
    },
    didClose: () => {
      const form = Swal.getHtmlContainer().querySelector('form');

      if (form) {
        form.removeEventListener('submit', callbackSubmitHandler);
      }
    },
  });
};

if (callbackElement) {
  callbackElement.addEventListener('click', (evt) => {
    evt.preventDefault();
  
    popupFormHandler(`Мы перезвоним </br> в течение 15 минут!`, 'Обратный звонок с сайта');
  });
}

if(callbackAwardsElement) {
  callbackAwardsElement.addEventListener('click', (evt) => {
    evt.preventDefault();
  
    popupFormHandler(`Мы перезвоним </br> в течение 15 минут!`, 'Обратный звонок с сайта');
  });
}

if (conditions) {
  conditions.addEventListener('click', (evt) => {
    evt.preventDefault();
  
    popupFormHandler('Получить условия', 'Получить условия для проведения мероприятий');
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
      // console.log(document.documentElement.scrollTop);
      // console.log(scroll);
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

if (newYearForm) {
  newYearForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    const form = evt.target;
    const button = form.querySelector('button');
    
    const formData = new FormData(form);
    button.disabled = true;
  
    fetch(
      'newYear.php',
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
      })
      .finally(() => {
        button.disabled = false;
      });
  });
}
