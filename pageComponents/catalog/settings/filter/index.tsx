import SettingsIcon from '@/ui/icons/settingsIcon';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import useResize from '@/hooks/useResize';
import SecurityProperties from './securityProperties';
import Categories from './categories';
import { ActiveCategoryItemsType } from './categories/item';
import { ProductType } from '../../products/item';

type Props = {
  activeSecurityItem: string | null
  activeCategoryItems: ActiveCategoryItemsType
  setActiveCategoryItem: (category: string, newItems: string[]) => void
  allItems: ProductType[]
}

const Filter: FC<Props> = ({ activeSecurityItem, activeCategoryItems, setActiveCategoryItem, allItems }) => {
  let windowWidth = useResize();
  let isPc = windowWidth >= 900;
  const [isExpanded, setIsExpanded] = useState(isPc);

  const handleExpandStatus = () => setIsExpanded(prev => !prev);

  useEffect(() => {
    if (isPc && !isExpanded) {
      setIsExpanded(true);
    }
  }, [windowWidth, isPc, isExpanded]);

  return <div className='w-full'>
    <button
      className={cn('flex w-full bg-blue1 transition-colors py-2.5 px-6 hover:bg-blue2 active:bg-black active:text-white max-md:mt-5', isPc && 'hidden')}
      onClick={handleExpandStatus}
    >
      <span className='text14 text-white ml-auto'>Filter</span>
      <SettingsIcon className='ml-auto' />
    </button>
    <motion.div
      className={cn('flex flex-col gap-y-7 transition-all max-smlg:mt-7', !isExpanded && 'h-0 opacity-0 invisible')}
    >
      <Categories
        activeItems={activeCategoryItems}
        setActiveItem={setActiveCategoryItem}
        allItems={allItems}
      />
      <SecurityProperties activeItem={activeSecurityItem} />
    </motion.div>
  </div>
};

export default Filter;