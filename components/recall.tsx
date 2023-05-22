import { FC } from 'react';
import PhoneForm from './forms/phoneForm';
import cn from 'classnames';

type Props = {
  className?: string
}

const Recall: FC<Props> = ({ className }) => {
  return <div className={cn('flex flex-col gap-y-2.5', className)}>
    <div className='flex flex-col gap-y-2.5'>
      <h5 className='text16-24 max-w-[11em]'>We'll call you back within a short time</h5>
      <p className='text-esm text-grey2 max-w-[17em] sm:max-w-[30em]'>We'll help you choose a door and answer any questions</p>
    </div>
    <PhoneForm className={cn(
      'grid grid-cols-[54%_1fr] items-center gap-x-12 esm:gap-x-[90px] sm:gap-x-10 sm:grid-cols-[1fr_max-content]',
      '[&>div]:col-[1]',
      '[&>button]:col-[2] [&>button]:ml-auto [&>button]:mb-7 [&>button]:-mt-5 [&>button]:esm:mb-2.5 [&>button]:esm:-mt-12 [&>button]:md:mb-5 [&>button]:md:-mt-20',
      '[&>button]:esm:w-[130px] [&>button]:esm:h-[130px] [&>button]:md:w-[150px] [&>button]:md:h-[150px]'
    )} />
  </div>
};

export default Recall;