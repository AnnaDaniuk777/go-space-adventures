import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Journey from './components/Journey/Journey';
import Footer from './components/Footer/Footer';
import Overlay from './components/Overlay/Overlay';
import { useMenu } from './hooks/useMenu';

function App() {
  const { menuState, toggleMenu, closeMenu, handleMenuAnimationEnd } = useMenu();

  return (
    <>
      <Header
        menuState={menuState}
        onBurgerClick={toggleMenu}
        onLinkClick={closeMenu}
        onMenuAnimationEnd={handleMenuAnimationEnd}
      />
      <main>
        <Hero />
        <Offers />
        <Journey />
      </main>
      <Footer />
      <Overlay menuState={menuState} onClick={closeMenu} />
    </>
  );
}

export default App;
