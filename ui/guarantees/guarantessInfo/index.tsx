import { FC } from 'react';
import Items from './item';
import cn from 'classnames';

type Props = {
  className?: string
}

const Info: FC<Props> = ({ className }) => {

  return <section className={cn('', className)}>
    <div className='flex flex-col gap-y-2.5'>
      <h2 className='text18-24 max-w-[35em]'>The most important condition for the validity of the guarantee for metal doors manufactured by Expert is their installation by specially trained teams of craftsmen.</h2>
      <p className='text-small text-grey2 max-w-[30em]'>In this case, the door will serve for a long time and provide reliable protection for you and your loved ones.</p>
    </div>
    <Items />
  </section>
};

export default Info;