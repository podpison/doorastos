import { FC, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import CloseIcon from '@/components/icons/CloseIcon';
import cn from 'classnames';
import ProductsSlider from './productsSlider';

const RecentlyWatchedProducts: FC = () => {
  const [cookies] = useCookies(['viewedProducts']);
  const [isOpen, setIsOpen] = useState(false);

  let viewedProductIds = cookies.viewedProducts as (number[] | undefined);
  const handleOpenStatus = () => setIsOpen(prev => !prev);
  const showRWP = () => {
    handleOpenStatus();
    toast.dismiss();
  }

  useEffect(() => {
    let token = setTimeout(() => {
      if (viewedProductIds && viewedProductIds.length >= 4) {
        toast(
          <div className='grid grid-cols-[1fr_max-content] items-center gap-x-5'>
            <p className='text-[14px]'>We saved your last watched products</p>
            <button className='text-[14px] bg-grey2/40 transition-colors p-2.5 hover:bg-grey2' onClick={showRWP}>Take a look</button>
          </div>,
          {
            position: "top-right",
            autoClose: 25000,
            closeOnClick: false,
          }
        );
      }
    }, 5000);

    return () => {
      clearTimeout(token);
    };
  }, []);

  return <div
    className={cn(
      'flex flex-col fixed right-0 top-0 z-40 max-esm:w-full',
      !isOpen && '-z-50 invisible'
    )}
  >
    <div
      className={cn(
        'fixed top-0 -left-1 w-[calc(100vw_+_4px)] h-screen transition-all bg-black/60',
        !isOpen && 'opacity-0 invisible -z-50'
      )}
      onClick={handleOpenStatus}
    />
    <motion.div
      className='bg-white z-50 h-screen px-2.5 pt-7'
      animate={{
        x: isOpen ? 0 : 450
      }}
      initial={false}
    >
      <div className='flex justify-between items-center gap-x-5'>
        <h5 className='text-light font-normal'>You've recently viewed these products:</h5>
        <button onClick={handleOpenStatus} aria-label='Close menu'>
          <CloseIcon aria-hidden='true' focusable="false" />
        </button>
      </div>
      <ProductsSlider viewedProductsIds={viewedProductIds} />
    </motion.div>
  </div>
};

export default RecentlyWatchedProducts;