import { ProductType } from '@/redux/reducers/static';
import { FC } from 'react';

type Props = {

} & ProductType['reviews'][0]

const Item: FC<Props> = ({ grade, userName, date, city, advantages, disadvantages, comment }) => {
  return <div className='grid border-b border-line py-7 max-md:last:border-t md:grid-cols-2 md:first:pt-0 smlg:grid-cols-[1fr_2fr]'>
    <div>
      <p>
        <span className='text-blue1 text-[20px] leading-[1.2] md:text-[30px] smlg:text-[36px]'>{grade}</span>
        <span className='text14-20 text-grey4'> of 5</span>
      </p>
      <div className='flex flex-col gap-y-2.5 mt-5'>
        <h6 className='text-light'>{userName}</h6>
        <p className='text-esm text-grey2'>{date}, {city}</p>
      </div>
    </div>
    <div className='flex flex-col gap-y-5 max-md:mt-7'>
      <div>
        <h6 className='text14'>Advantages</h6>
        <p className='text14 text-grey2 mt-1'>{advantages}</p>
      </div>
      <div>
        <h6 className='text14'>Disadvantages</h6>
        <p className='text14 text-grey2 mt-1'>{disadvantages}</p>
      </div>
      <div>
        <h6 className='text14'>Comment</h6>
        <p className='text14 text-grey2 mt-1'>{comment}</p>
      </div>
    </div>
  </div>
};

export default Item;