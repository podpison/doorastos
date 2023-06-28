import { FC } from 'react';

export type OptionType = {
  name: string
  price: number
}

type Props = {

} & OptionType

const Item: FC<Props> = ({ name, price }) => {

  return <div className='flex items-center justify-between pt-4 pb-2.5 first:pt-0 last:pb-0'>
    <p className='text10-14 text-grey1'>{name}</p>
    <p className='text10-14 text-grey1'>{price} ₽</p>
  </div>
};

export default Item;