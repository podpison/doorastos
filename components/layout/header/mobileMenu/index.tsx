import { FC } from 'react';
import { HeaderLinkType } from '..';
import cn from 'classnames';
import { motion } from 'framer-motion';
import closeImg from '../../../../public/imgs/close.svg';
import Image from 'next/image';
import Link from './link';
import PopUpLink from './popUpLink';
import ArrowWithCircle from '@/components/arrowWithCircle/arrowWithCircle';

type Props = {
  links: HeaderLinkType[]
  isOpen: boolean
  closeMenu: () => void
  openHelpChooseDialog: () => void
}

const mobileMenu: FC<Props> = ({ links, isOpen, closeMenu, openHelpChooseDialog }) => {
  let Links = links.map((l, index) => l.sublinks ? <PopUpLink onClick={closeMenu} {...l} key={index} /> : <Link className='mt-4' onClick={closeMenu} {...l} key={index} />);

  return <div
    className={cn(
      'flex flex-col fixed right-0 top-0 min-w-[250px] esm:min-w-[300px] md:min-w-[415px] smlg:hidden',
      !isOpen && '-z-50 invisible'
    )}
  >
    <div
      className={cn(
        'fixed top-0 -left-1 w-[calc(100vw_+_4px)] h-screen transition-all bg-black/60',
        !isOpen && 'opacity-0 invisible -z-50'
      )}
      onClick={closeMenu}
    />
    <motion.div
      className='bg-white z-50 h-screen pl-5 pr-2.5 pt-7'
      animate={{
        x: isOpen ? 0 : 450
      }}
      initial={false}
    >
      <Image className='ml-auto' src={closeImg} alt='Close' onClick={closeMenu} role='button' />
      <nav className='mt-7'>
        {Links}
      </nav>
      <ArrowWithCircle className='text-blue1 mt-12' width='full' onClick={openHelpChooseDialog} circleSize={30}>Help choose</ArrowWithCircle>
    </motion.div>
  </div>
};

export default mobileMenu;