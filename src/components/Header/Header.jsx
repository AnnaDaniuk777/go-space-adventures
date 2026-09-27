import logo from '../../img/logo.svg';
import { classNames } from '../../utils/class-names';
import './Header.scss';

const BLOCK_NAME = 'header';

const NAV_LINKS = [
  { label: 'Home', href: '#', isCurrent: true },
  { label: 'Products', href: '#offers' },
];

function Header({ menuState, onBurgerClick, onLinkClick, onMenuAnimationEnd }) {
  const isOpened = menuState === 'opened';

  return (
    <header
      className={classNames(
        BLOCK_NAME,
        isOpened && `${BLOCK_NAME}--menu-opened`,
        menuState === 'closing' && `${BLOCK_NAME}--menu-closing`,
      )}
    >
      <div className={`${BLOCK_NAME}__container container`}>
        <a className={`${BLOCK_NAME}__logo`} href="#" aria-label="GO, home page">
          <img className={`${BLOCK_NAME}__logo-img`} src={logo} width="71" height="24" alt="GO space adventures logo" />
        </a>
        <button
          className={`${BLOCK_NAME}__burger`}
          type="button"
          aria-label={isOpened ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpened}
          aria-controls="header-nav"
          onClick={onBurgerClick}
        >
          <span className={`${BLOCK_NAME}__burger-icon`} />
        </button>
        <nav className={`${BLOCK_NAME}__nav`} id="header-nav" aria-label="Main navigation" onAnimationEnd={onMenuAnimationEnd}>
          <ul className={`${BLOCK_NAME}__list`}>
            {NAV_LINKS.map(({ label, href, isCurrent }) => (
              <li className={`${BLOCK_NAME}__item`} key={label}>
                <a className={`${BLOCK_NAME}__link`} href={href} aria-current={isCurrent ? 'page' : undefined} onClick={onLinkClick}>
                  {label}
                </a>
              </li>
            ))}
            <li className={`${BLOCK_NAME}__item`}>
              <a className={`${BLOCK_NAME}__link ${BLOCK_NAME}__cart`} href="#" onClick={onLinkClick}>
                <span className={`${BLOCK_NAME}__cart-text`}>Cart</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
