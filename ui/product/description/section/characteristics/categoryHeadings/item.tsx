import { Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';

type Props = {
  id: number
  isActive: boolean
  setActiveItemId: Dispatch<SetStateAction<number>>
  text: string
}

const Item: FC<Props> = ({ id, text, isActive, setActiveItemId }) => {
  const handleClick = () => {
    setActiveItemId(id);
  };

  return <button className='group relative' onClick={handleClick}>
    <p
      className={cn(
        'text10-14 block whitespace-nowrap transition-none pb-2.5',
        isActive ? 'text-black' : 'text-grey2 group-hover:text-black',
      )}
    >
      {text}
    </p>
    <span className={cn('absolute bottom-0 left-0 w-full h-px transition-colors', isActive && 'bg-black')} />
  </button>
};

export default Item;