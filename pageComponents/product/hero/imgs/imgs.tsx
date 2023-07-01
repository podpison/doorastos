import Image from 'next/image';
import { FC, useState } from 'react';
import Item from './item';

type Props = {
  items: string[]
}

const Imgs: FC<Props> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(items[0]);

  let OtherItems = items
    .filter(i => i !== activeItem)
    .slice(0, 4)
    .map((i, index) => <Item src={i} id={index} setActiveItem={setActiveItem} key={index} />);

  return <div className='flex gap-x-5 max-sm:py-5 max-sm:border-y max-sm:justify-center max-sm:border-line'>
    <div className='w-[54%] max-w-[275px] max-h-[540px] md:w-[62%] smlg:w-full'>
      <Image
        className='h-full object-contain'
        src={items.find(i => i === activeItem) || items[0]}
        alt='Door'
        width={275} height={540} priority
      />
    </div>
    <div className='flex flex-col gap-y-2.5'>
      {OtherItems}
    </div>
  </div>
};

export default Imgs;