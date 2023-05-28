import { FC } from 'react';
import cn from 'classnames';

export type HowAreWeWorkingItemProps = {
  id: number
  heading: string
  description: string
}

const Item: FC<HowAreWeWorkingItemProps> = ({ id, heading, description }) => {
  return <div
    className={cn(
      'flex flex-col gap-y-2.5 max-lg:py-5 md:px-5',
      'max-md:first:pt-0 md:first:border-l md:first:border-line lg:first:pl-0 lg:first:border-none',
      'max-lg:last:pb-0 lg:last:pr-0'
    )}
  >
    <span className='text-esm text-blue1'>0{id}</span>
    <h6 className='text14-18'>{heading}</h6>
    <p className='text-esm'>{description}</p>
  </div>
};

export default Item;