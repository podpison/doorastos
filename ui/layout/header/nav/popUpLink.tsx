import { FC } from 'react';
import { HeaderLinkType } from '..';
import Link from './link';
import { motion } from 'framer-motion';
import cn from 'classnames';

type Props = {

} & HeaderLinkType

const PopUpLink: FC<Props> = ({ name, sublinks }) => {
  let Sublinks = sublinks?.map((s, index) => <Link {...s} key={index} />);

  return <div className='relative group'>
    <div className='group cursor-pointer'>
      <p className='flex items-center gap-x-1.5 text-grey1 transition-colors group-hover:text-grey2'>
        {name}
        <svg className='fill-grey1 transition-colors mt-1 group-hover:fill-grey2' width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 6L0.468911 0.75L6.53109 0.75L3.5 6Z" />
        </svg>
      </p>
    </div>
    <div className={cn('flex flex-col gap-y-2 w-fit whitespace-nowrap absolute top-10 left-0 bg-white transition-all opacity-0 invisible p-2 pt-0 group-hover:opacity-100 group-hover:visible')}>
      <span className='absolute -top-5 w-full h-5' />
      {Sublinks}
    </div>
  </div>
};

export default PopUpLink;