import Card from '../Card/Card';
import { offers } from '../../data/offers';
import { classNames } from '../../utils/class-names';
import './Offers.scss';

const BLOCK_NAME = 'offers';

function Offers() {
  return (
    <section className={BLOCK_NAME} id="offers">
      <div className={`${BLOCK_NAME}__container container`}>
        <h2 className={`${BLOCK_NAME}__title`}>Offers</h2>
        <ul className={`${BLOCK_NAME}__list`}>
          {offers.map((offer) => (
            <li className={classNames(`${BLOCK_NAME}__item`, offer.isWide && `${BLOCK_NAME}__item--wide`)} key={offer.id}>
              <Card {...offer} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Offers;
