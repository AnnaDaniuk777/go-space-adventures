import { classNames } from '../../utils/class-names';
import './Overlay.scss';

const BLOCK_NAME = 'overlay';

function Overlay({ menuState, onClick }) {
  return (
    <div
      className={classNames(
        BLOCK_NAME,
        menuState === 'opened' && `${BLOCK_NAME}--visible`,
        menuState === 'closing' && `${BLOCK_NAME}--closing`,
      )}
      onClick={onClick}
    />
  );
}

export default Overlay;
