import { FC } from 'react';
import Nav from './nav';
import Link from 'next/link';
import cn from 'classnames';

const Footer: FC = () => {
  let currentYear = new Date().getFullYear();

  return <footer className='mt130-200 relative grid justify-start pt-7 pb-5 esm:grid-cols-2 esm:grid-rows-[repeat(4,max-content)] esm:pt-14 esm:pb-10 smlg:grid-cols-[max-content_1fr_max-content] smlg:grid-rows-[repeat(2,max-content)] smlg:items-center smlg:gap-y-12 smlg:pt-[75px]'>
    <div className='leftContainer absolute top-0 w-screen h-full max-w-[100vw] bg-black -z-20' />
    <h6 className='text14-20 text-grey2 font-bold tracking-widest font-robodron'>Expert</h6>
    <div className='flex flex-col gap-y-1 max-esm:mt-5 esm:gap-y-2.5 esm:ml-auto smlg:col-[3]'>
      <a className='text14-18 font-light text-white' href='tel:8 800 666 666 66'>8 800 666 666 66</a>
      <p className='text-grey2 text-[12px] esm:text-[14px]'>The call is free</p>
    </div>
    <Nav />
    <div
      className={cn(
        'flex gap-y-2.5 mt-7 max-smlg:flex-col smlg:col-[2] smlg:row-[2] smlg:gap-x-5 smlg:mx-auto smlg:mt-0',
        'text-[12px] esm:text-[14px] text-grey2'
      )}
    >
      <Link className='w-fit' href='/processingOfPersonalData'>Processing of personal data</Link>
      <Link className='w-fit' href='/privacyPolicy'>Privacy policy</Link>
    </div>
    <a className='flex items-center gap-x-2.5 w-fit mt-8 esm:col-[2] esm:row-[4] esm:ml-auto esm:mt-12 smlg:col-[3] smlg:row-[2] smlg:mt-0' href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
      <span className='text-[#F64646] font-light text-[14px]'>Instagtam</span>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 0.999999C7.5 0.723857 7.27614 0.5 7 0.499999L2.5 0.5C2.22386 0.5 2 0.723857 2 1C2 1.27614 2.22386 1.5 2.5 1.5L6.5 1.5L6.5 5.5C6.5 5.77614 6.72386 6 7 6C7.27614 6 7.5 5.77614 7.5 5.5L7.5 0.999999ZM1.35355 7.35355L7.35355 1.35355L6.64645 0.646446L0.646447 6.64645L1.35355 7.35355Z" fill="#F64646" />
      </svg>
    </a>
    <small className='text-[10px] text-grey2 max-esm:mt-6 esm:col-[1] esm:mt-auto esm:mb-[2px]'>© Expert {currentYear} all rights reserved</small>
  </footer>
};

export default Footer;