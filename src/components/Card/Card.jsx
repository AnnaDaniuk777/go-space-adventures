import { classNames } from '../../utils/class-names';

function Card({ id, title, text, isWide }) {
  return (
    <article className={classNames('card', isWide && 'card--wide', `card--${id}`)}>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{text}</p>
      <a className="card__button button button--outline" href="#">Learn more</a>
    </article>
  );
}

export default Card;
