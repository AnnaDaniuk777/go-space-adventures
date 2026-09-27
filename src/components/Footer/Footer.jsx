import './Footer.scss';

const BLOCK_NAME = 'footer';

function Footer() {
  return (
    <footer className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__container container`}>
        <p className={`${BLOCK_NAME}__text`}>Exciting space adventure!</p>
      </div>
    </footer>
  );
}

export default Footer;
