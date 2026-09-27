import { classNames } from '../../utils/class-names';

function Overlay({ menuState, onClick }) {
  return (
    <div
      className={classNames(
        'overlay',
        menuState === 'opened' && 'overlay--visible',
        menuState === 'closing' && 'overlay--closing',
      )}
      onClick={onClick}
    />
  );
}

export default Overlay;
