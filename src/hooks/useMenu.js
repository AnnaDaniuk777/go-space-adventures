import { useCallback, useEffect, useState } from 'react';

const TABLET_QUERY = '(min-width: 768px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export function useMenu() {
  const [menuState, setMenuState] = useState('closed');
  const isOpened = menuState === 'opened';

  const openMenu = useCallback(() => {
    setMenuState('opened');
  }, []);

  const hideMenu = useCallback(() => {
    setMenuState('closed');
  }, []);

  const closeMenu = useCallback(() => {
    setMenuState((state) => {
      if (state !== 'opened') {
        return state;
      }

      return window.matchMedia(REDUCED_MOTION_QUERY).matches ? 'closed' : 'closing';
    });
  }, []);

  function toggleMenu() {
    if (isOpened) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function handleMenuAnimationEnd(evt) {
    if (evt.animationName === 'menu-slide-out') {
      hideMenu();
    }
  }

  useEffect(() => {
    document.body.classList.toggle('page-body--no-scroll', menuState !== 'closed');
  }, [menuState]);

  useEffect(() => {
    function handleEscapeKey(evt) {
      if (evt.key === 'Escape') {
        closeMenu();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeMenu]);

  useEffect(() => {
    const tabletQuery = window.matchMedia(TABLET_QUERY);

    function handleBreakpointChange(evt) {
      if (evt.matches) {
        hideMenu();
      }
    }

    tabletQuery.addEventListener('change', handleBreakpointChange);

    return () => {
      tabletQuery.removeEventListener('change', handleBreakpointChange);
    };
  }, [hideMenu]);

  return { menuState, toggleMenu, closeMenu, handleMenuAnimationEnd };
}
