import './Hero.scss';

const BLOCK_NAME = 'hero';

function Hero() {
  return (
    <section className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__container container`}>
        <h1 className={`${BLOCK_NAME}__title`}>
          Discover the vast expanses of <span className={`${BLOCK_NAME}__accent ${BLOCK_NAME}__accent--pink`}>space</span>
        </h1>
        <p className={`${BLOCK_NAME}__subtitle`}>
          Where the possibilities are <span className={`${BLOCK_NAME}__accent ${BLOCK_NAME}__accent--light-green`}>endless!</span>
        </p>
        <a className={`${BLOCK_NAME}__button button button--filled`} href="#">Learn more</a>
        <div className={`${BLOCK_NAME}__illustration`} aria-hidden="true">
          <div className={`${BLOCK_NAME}__orbit`} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
