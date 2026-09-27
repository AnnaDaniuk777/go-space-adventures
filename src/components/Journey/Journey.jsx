import './Journey.scss';

const BLOCK_NAME = 'journey';

function Journey() {
  return (
    <section className={BLOCK_NAME}>
      <div className={`${BLOCK_NAME}__container container`}>
        <h2 className={`${BLOCK_NAME}__title`}>Embark on a space journey</h2>
        <input className={`${BLOCK_NAME}__toggle visually-hidden`} type="checkbox" id="journey-toggle" />
        <p className={`${BLOCK_NAME}__text`}>
          Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
        </p>
        <div className={`${BLOCK_NAME}__more`}>
          <div className={`${BLOCK_NAME}__more-inner`}>
            <p className={`${BLOCK_NAME}__text ${BLOCK_NAME}__more-text`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <label className={`${BLOCK_NAME}__button`} htmlFor="journey-toggle">
          <span className={`${BLOCK_NAME}__button-text ${BLOCK_NAME}__button-text--more`}>Read more</span>
          <span className={`${BLOCK_NAME}__button-text ${BLOCK_NAME}__button-text--less`}>Read less</span>
        </label>
      </div>
    </section>
  );
}

export default Journey;
