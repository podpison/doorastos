import { FC } from 'react';
import cn from 'classnames';

type Props = {
  id: number
  text: string
}

const Item: FC<Props> = ({ text, id }) => {
  return <div className={cn(
    'flex flex-col gap-y-5 border-grey4 max-md:border-t max-md:pt-7 md:border-r md:pl-2.5',
    'last:max-md:py-7 last:max-md:border-b last:md:border-r-0',
    'first:md:pl-0 first:md:pr-2.5'
  )}>
    <span className='text-[16px] font-bold text-blue1'>0{id}</span>
    <p className='text-esm text-justify'>{text}</p>
  </div>
};

export default Item;