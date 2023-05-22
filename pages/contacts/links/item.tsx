import Link from 'next/link';
import { FC } from 'react';

export type ItemProps = {
  heading: string
  items: {
    text: string
    href?: string
  }[] | string
}

const Item: FC<ItemProps> = ({ heading, items }) => {
  let Texts = typeof items === 'string'
    ? items
    : items.map((i, index) => {
      return i.href
        ? <Link className='text10-18 text-blue1 w-fit transition-all border-b border-transparent hover:border-blue1' href={i.href} key={index}>{i.text}</Link>
        : <p className='text10-18 w-fit' key={index}>{i.text}</p>
    });

  return <div className='grid grid-cols-2 justify-between items-baseline border-b border-line py-5 first:pt-0 esm:py-6'>
    <h6 className='text12-20 text-grey2'>{heading}</h6>
    <div className='flex flex-col gap-y-2.5'>{Texts}</div>
  </div>
};

export default Item;