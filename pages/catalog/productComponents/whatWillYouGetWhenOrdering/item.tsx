import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

export type whatWillYouGetWhenOrderingItemProps = {
  heading: string
  description: string
  img: {
    src: StaticImageData
    alt: string
  }
}

const Item: FC<whatWillYouGetWhenOrderingItemProps> = ({ heading, description, img }) => {
  return <div className='grid gap-y-5 py-7 first:pt-0 last:pb-0 esm:grid-cols-[1fr_max-content] esm:gap-x-5 md:gap-x-10 md:pb-12'>
    <div className='flex flex-col gap-y-2.5 max-w-[385px]'>
      <h3>{heading}</h3>
      <p className='text-esm'>{description}</p>
    </div>
    <Image className='esm:w-[200px] sm:w-[250px] md:w-[300px] smlg:w-[400px]' {...img} width={400} height={200} priority />
  </div>
};

export default Item;