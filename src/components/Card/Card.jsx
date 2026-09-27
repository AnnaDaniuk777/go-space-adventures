import { classNames } from '../../utils/class-names';
import './Card.scss';

const BLOCK_NAME = 'card';

function Card({ id, title, text, isWide }) {
  return (
    <article className={classNames(BLOCK_NAME, isWide && `${BLOCK_NAME}--wide`, `${BLOCK_NAME}--${id}`)}>
      <h3 className={`${BLOCK_NAME}__title`}>{title}</h3>
      <p className={`${BLOCK_NAME}__text`}>{text}</p>
      <a className={`${BLOCK_NAME}__button button button--outline`} href="#">Learn more</a>
    </article>
  );
}

export default Card;
