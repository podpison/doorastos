import { Dispatch, FC, SetStateAction } from 'react';
import Item from './item';
import { PriceFromType } from '../..';

type Props = {
  activeItem: PriceFromType
  setActiveItem: Dispatch<SetStateAction<PriceFromType>>
}

const StartPriceFrom: FC<Props> = ({ activeItem, setActiveItem }) => {

  return <div className='flex gap-x-4 mt-10 esm:gap-x-10 esm:mt-16'>
    <Item text='Ascending' checkedItem={activeItem} setCheckedItem={setActiveItem} />
    <Item text='Descending' checkedItem={activeItem} setCheckedItem={setActiveItem} />
  </div>
};

export default StartPriceFrom;