import logo from '../../img/logo.svg';
import { classNames } from '../../utils/class-names';

const NAV_LINKS = [
  { label: 'Home', href: '#', isCurrent: true },
  { label: 'Products', href: '#offers' },
];

function Header({ menuState, onBurgerClick, onLinkClick, onMenuAnimationEnd }) {
  const isOpened = menuState === 'opened';

  return (
    <header
      className={classNames(
        'header',
        isOpened && 'header--menu-opened',
        menuState === 'closing' && 'header--menu-closing',
      )}
    >
      <div className="header__container container">
        <a className="header__logo" href="#" aria-label="GO, home page">
          <img className="header__logo-img" src={logo} width="71" height="24" alt="GO space adventures logo" />
        </a>
        <button
          className="header__burger"
          type="button"
          aria-label={isOpened ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpened}
          aria-controls="header-nav"
          onClick={onBurgerClick}
        >
          <span className="header__burger-icon" />
        </button>
        <nav className="header__nav" id="header-nav" aria-label="Main navigation" onAnimationEnd={onMenuAnimationEnd}>
          <ul className="header__list">
            {NAV_LINKS.map(({ label, href, isCurrent }) => (
              <li className="header__item" key={label}>
                <a className="header__link" href={href} aria-current={isCurrent ? 'page' : undefined} onClick={onLinkClick}>
                  {label}
                </a>
              </li>
            ))}
            <li className="header__item">
              <a className="header__link header__cart" href="#" onClick={onLinkClick}>
                <span className="header__cart-text">Cart</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
