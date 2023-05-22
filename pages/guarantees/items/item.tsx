import { FC } from 'react';

type Props = {
  heading: string
  items: string[]
}

const Item: FC<Props> = ({ heading, items }) => {
  let Items = items.map((i, index) => <p className='text-esm text-black py-4 first:pt-0 last:pb-0' key={index}>{i}</p>);

  return <div className='flex flex-col gap-y-5'>
    <h6 className='text14-18 text-blue1'>{heading}</h6>
    <div className='flex flex-col divide-y divide-line'>
      {Items}
    </div>
  </div>
};

export default Item;