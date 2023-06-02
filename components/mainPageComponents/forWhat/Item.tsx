import { FC } from 'react';
import { MainPageForWhatItemType } from '.';
import Image from 'next/image';
import ArrowWithCircle from '@/components/arrowWithCircle/arrowWithCircle';
import cn from 'classnames';
import Link from 'next/link';

type Props = {

} & MainPageForWhatItemType

const Item: FC<Props> = ({ heading, description, img, className }) => {
  return <div className={cn('flex flex-col gap-y-7', className)}>
    <div className='esm:mb-auto'>
      <h5 className='text20-30'>{heading}</h5>
      <p className='text-esm text-grey1 mt-2.5'>{description}</p>
      <Link className='block w-fit mt-5' href='/catalog'>
        <ArrowWithCircle className='text-blue1' circleSize={30}>Go to catalog</ArrowWithCircle>
      </Link>
    </div>
    <Image className='h-auto object-cover object-right w-full max-esm:h-[200px] esm:h-full esm:object-right-bottom' src={img.src} alt={img.alt} priority />
  </div>
};

export default Item;