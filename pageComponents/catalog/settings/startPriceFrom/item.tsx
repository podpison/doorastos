import Checkbox from '@/ui/checkbox';
import { PriceFromType } from '@/pages/catalog';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  text: PriceFromType
  checkedItem: PriceFromType
  setCheckedItem: Dispatch<SetStateAction<PriceFromType>>
}

const Item: FC<Props> = ({ text, checkedItem, setCheckedItem }) => {
  const handleClick = () => {
    setCheckedItem(checkedItem === text ? null : text);
  };

  return <div className='group flex items-center gap-x-2 cursor-pointer' >
    <Checkbox
      checked={text === checkedItem}
      onClick={handleClick}
      onKeyDown={e => e.key === 'Enter' && handleClick()}
      variant='single'
      id={text || ''}
    />
    <label
      className='text-tiny text-grey1 transition-colors cursor-pointer group-hover:text-black'
      htmlFor={text || ''}
    >
      Price {text?.toLowerCase()}
    </label>
  </div>
};

export default Item;