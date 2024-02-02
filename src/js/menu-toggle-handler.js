const menu = document.querySelector('[data-menu="site-menu"]');

export const closeMenuHandler = () => {
  const overlayElement = document.querySelector('.body-overlay');

  menu.classList.remove('site-menu--isOpen');

  if (overlayElement) {
    overlayElement.remove();
  }

}

export const menuToggleHandler = () => {
  const menu = document.querySelector('[data-menu="site-menu"]');
  const newElement = document.createElement('div');

  menu.classList.toggle('site-menu--isOpen');
  newElement.innerHTML = '<div class="body-overlay"></div>';

  const overlayElement = newElement.firstElementChild;

  menu.classList.contains('site-menu--isOpen')
    ? document.body.append(overlayElement)
    : document.querySelector('.body-overlay').remove();
}
