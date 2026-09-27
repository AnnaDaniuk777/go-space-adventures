const TABLET_QUERY = '(min-width: 768px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function initMenu() {
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('.page-body');

  if (!header || !burger || !nav || !overlay) {
    return;
  }

  function isMenuOpened() {
    return header.classList.contains('header--menu-opened');
  }

  function openMenu() {
    header.classList.remove('header--menu-closing');
    header.classList.add('header--menu-opened');
    overlay.classList.remove('overlay--closing');
    overlay.classList.add('overlay--visible');
    body.classList.add('page-body--no-scroll');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Close menu');
  }

  function hideMenu() {
    header.classList.remove('header--menu-opened', 'header--menu-closing');
    overlay.classList.remove('overlay--visible', 'overlay--closing');
    body.classList.remove('page-body--no-scroll');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
  }

  function closeMenu() {
    if (!isMenuOpened()) {
      return;
    }

    hideMenu();

    if (!window.matchMedia(REDUCED_MOTION_QUERY).matches) {
      header.classList.add('header--menu-closing');
      overlay.classList.add('overlay--closing');
      body.classList.add('page-body--no-scroll');
    }
  }

  function toggleMenu() {
    if (isMenuOpened()) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function handleNavAnimationEnd(evt) {
    if (evt.animationName === 'menu-slide-out') {
      hideMenu();
    }
  }

  function handleNavClick(evt) {
    if (evt.target.closest('a')) {
      closeMenu();
    }
  }

  function handleEscapeKey(evt) {
    if (evt.key === 'Escape') {
      closeMenu();
    }
  }

  function handleBreakpointChange(evt) {
    if (evt.matches) {
      hideMenu();
    }
  }

  burger.addEventListener('click', toggleMenu);
  nav.addEventListener('click', handleNavClick);
  nav.addEventListener('animationend', handleNavAnimationEnd);
  overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', handleEscapeKey);
  window.matchMedia(TABLET_QUERY).addEventListener('change', handleBreakpointChange);
}
