import { FC } from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import ProductsSlider from './productsSlider';
import CloseIcon from '@/ui/icons/CloseIcon';

type Props = {
  isOpen: boolean
  viewedProductIds: number[] | undefined
  handleOpenStatus: () => void
}

const Menu: FC<Props> = ({ isOpen, viewedProductIds, handleOpenStatus }) => {
  return <div
    className={cn(
      'flex flex-col fixed right-0 top-0 z-40 max-esm:w-full',
      isOpen ? 'disable-scroll' : '-z-50 invisible'
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
      className='bg-white z-50 h-screen overflow-y-auto px-2.5 py-7'
      animate={{
        x: isOpen ? 0 : 450
      }}
      initial={false}
    >
      <div className='flex justify-between items-center gap-x-5'>
        <h5 className='text-light font-normal'>You've recently viewed these products:</h5>
        <button onClick={handleOpenStatus} aria-label='Close menu'>
          <CloseIcon />
        </button>
      </div>
      <ProductsSlider viewedProductsIds={viewedProductIds} />
    </motion.div>
  </div>
};

export default Menu;