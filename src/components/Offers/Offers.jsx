import Card from '../Card/Card';
import { offers } from '../../data/offers';
import { classNames } from '../../utils/class-names';

function Offers() {
  return (
    <section className="offers" id="offers">
      <div className="offers__container container">
        <h2 className="offers__title">Offers</h2>
        <ul className="offers__list">
          {offers.map((offer) => (
            <li className={classNames('offers__item', offer.isWide && 'offers__item--wide')} key={offer.id}>
              <Card {...offer} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Offers;
