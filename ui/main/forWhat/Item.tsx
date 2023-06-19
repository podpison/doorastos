import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import ArrowWithCircle from '@/components/arrowWithCircle/arrowWithCircle';
import cn from 'classnames';
import Link from 'next/link';

export type MainPageForWhatItemType = {
  heading: string
  description: string
  img: {
    src: StaticImageData
    alt: string
  }
  className?: string
  query: 'house' | 'apartment'
}

type Props = {

} & MainPageForWhatItemType

const Item: FC<Props> = ({ heading, description, img, className, query }) => {
  return <div className={cn('flex flex-col gap-y-7', className)}>
    <div className='esm:mb-auto'>
      <h5 className='text20-30'>{heading}</h5>
      <p className='text-esm text-grey1 mt-2.5'>{description}</p>
      <Link className='block w-fit mt-5' href={`/catalog?where=${query}`}>
        <ArrowWithCircle className='text-blue1' text='Go to catalog' circleSize={30} />
      </Link>
    </div>
    <Image
      className='h-auto object-cover object-right w-full max-esm:h-[200px] esm:h-full esm:object-right-bottom'
      src={img.src}
      alt={img.alt}
      priority
    />
  </div>
};

export default Item;