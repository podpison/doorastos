import { FC, useState } from 'react';
import { HeaderLinkType } from '..';
import Link from './link';
import { motion } from 'framer-motion';
import cn from 'classnames';

type Props = {
  onClick?: () => void
} & HeaderLinkType

const PopUpLink: FC<Props> = ({ name, sublinks, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenStatus = () => setIsOpen(prev => !prev);

  let Sublinks = sublinks?.map((s, index) => <Link className={cn('ml-5', isOpen && 'mt-4')} onClick={onClick} {...s} key={index} />);

  return <div className='mt-4'>
    <div className='group cursor-pointer' onClick={handleOpenStatus}>
      <p className='flex items-center gap-x-1.5 text-grey1 sm:text-[18px] md:text-[20px]'>
        {name}
        <svg className='mt-1' width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5 6L0.468911 0.75L6.53109 0.75L3.5 6Z" fill="#222222" />
        </svg>
      </p>
      {!isOpen && <span className='block h-px w-full bg-line transition-colors mt-4 group-hover:bg-blue1' />}
    </div>
    <motion.div
      className={cn('', !isOpen && 'invisible [&>a]:mt-0')}
      animate={{
        height: isOpen ? 'auto' : 0,
        opacity: !isOpen ? 0 : undefined
      }}
    >
      {Sublinks}
    </motion.div>
  </div>
};

export default PopUpLink;