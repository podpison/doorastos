import { FC } from 'react';
import { MainPageAdvantageType } from '.';
import Image from 'next/image';
import cn from 'classnames';

type Props = {
  className?: string
} & MainPageAdvantageType

const Advantage: FC<Props> = ({ heading, description, img, className }) => {
  return <div className={cn('grid gap-7 esm:grid-cols-[max-content_1fr] esm:gap-5 md:gap-7 smlg:gap-12', className)}>
    <div className='flex flex-col gap-y-2.5 esm:max-w-[14em] md:max-w-[22em] smlg:max-w-[25em]'>
      <h4 className='text18-24 text-black'>{heading}</h4>
      <p className='text-[12px] text-grey1 md:text-[16px]'>{description}</p>
    </div>
    <Image className='object-cover esm:min-h-[300px] max-md:h-[200px] md:min-h-[400px] smlg:min-h-[500px]' src={img} alt='Advantage' width={700} height={500} />
  </div>
};

export default Advantage;