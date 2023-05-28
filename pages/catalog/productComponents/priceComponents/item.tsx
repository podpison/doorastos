import { FC } from 'react';

export type PriceComponentProps = {
  text: string
  id: number
}

const Item: FC<PriceComponentProps> = ({ text, id }) => {
  return <div className='flex justify-between items-center gap-x-2 w-full border-b border-line pb-2.5'>
    <span className='text14-18 font-robodron text-blue1'>{id}</span>
    <p className='text-small text-right'>{text}</p>
  </div>
};

export default Item;