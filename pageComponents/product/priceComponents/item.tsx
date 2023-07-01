import { FC } from 'react';

export type PriceComponentProps = {
  text: string
  id: number
}

const Item: FC<PriceComponentProps> = ({ text, id }) => {
  return <div className='grid grid-cols-[25px_1fr] justify-between items-center gap-x-2 w-full border-b border-line pb-2.5 esm:grid-cols-[32px_1fr]'>
    <span className='text14-18 font-robodron text-center text-blue1'>{id}</span>
    <p className='text-small text-right'>{text}</p>
  </div>
};

export default Item;