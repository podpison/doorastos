import { FC } from 'react';
import Image from 'next/image';
import ChevronRounded from '../chevronRounded';
import SliderPagination from '../sliderPagination';

type Props = {
  img: string
  personName: string
  review: string
  setNewPage: (operation: 'next' | 'prev') => void
  windowWidth: number
  currentPortion: number
  portionsCount: number
}

const Item: FC<Props> = ({ img, personName, review, setNewPage, windowWidth, currentPortion, portionsCount }) => {

  return <div className='grid grid-cols-2 md:grid-cols-[50%_1fr_1fr] md:grid-rows-[1fr_max-content] md:gap-x-7 smlg:gap-x-12 lg:grid-cols-[max-content_1fr_1fr]'>
    <Image className='md:row-[1/3]' src={img} alt='Door' width={500} height={600} />
    <div className='flex gap-x-5 mt-auto ml-auto md:col-[3]'>
      <ChevronRounded className='w-14 h-14' disabled={currentPortion === 0} chevronClassName='rotate-180' onClick={() => setNewPage('prev')} height={18} />
      <ChevronRounded className='w-14 h-14' disabled={currentPortion === portionsCount - 1} onClick={() => setNewPage('next')} height={18} />
    </div>
    <SliderPagination className='col-[1] row-[2] max-md:mt-2.5 md:col-[2] md:max-w-[190px]' windowWidth={windowWidth} currentPortion={currentPortion} portionsCount={portionsCount} />
    <div className='col-[1/3] max-md:mt-5 md:col-[2/4] md:row-[1]'>
      <h6 className='text16-24'>{personName}</h6>
      <p className='mt10-20 text-esm text-grey2'>{review}</p>
    </div>
  </div>
};

export default Item;
