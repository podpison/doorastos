import { FC, useEffect, useRef, useState } from 'react';
import CheckboxItem, { DropdownCheckboxItemType } from './checkboxItem';
import ChevronDown from '../icons/chevronDown';
import { motion } from 'framer-motion';
import cn from 'classnames';

export type DropdownProps = {
  defaultItem: string
  activeItems: string[]
  setActiveItem: (category: string, newItems: string[]) => void
  items: DropdownCheckboxItemType[]
  isExpanded: boolean
  setIsExpanded: (name: string | null) => void
}

const Dropdown: FC<DropdownProps> = ({ defaultItem, activeItems, setActiveItem, items, isExpanded, setIsExpanded }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleExpandedStatus = () => {
    setIsExpanded(isExpanded ? null : defaultItem);
  };
  const handleItemClick = (item: string) => {
    if (activeItems.includes(item)) {
      setActiveItem(defaultItem.toLowerCase(), activeItems.filter(fi => fi !== item));
    } else {
      setActiveItem(defaultItem.toLowerCase(), [...activeItems, item]);
    };
  };
 
  let Items = items.map((i, index) => <CheckboxItem {...i} isActive={activeItems.includes(i.text)} onClick={() => handleItemClick(i.text)} key={index} />);

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      let isClikededInside = dropdownRef?.current?.contains(e.target as Node);
      
      (!isClikededInside && isExpanded) && setIsExpanded(null);
    };

    document.addEventListener('click', callback);
    return () => {
      document.removeEventListener('click', callback);
    };
  }, [dropdownRef.current, isExpanded, setIsExpanded]);

  return <div className={cn('relative border border-grey4 w-full', isExpanded ? 'border-b-0' : 'transition-colors hover:border-grey2')} ref={dropdownRef}>
    <button className='flex justify-between items-center w-full p-2.5' onClick={handleExpandedStatus}>
      <p className='text14 text-grey1'>{defaultItem}</p>
      <ChevronDown className={cn('transition-transform', isExpanded && 'rotate-180')} />
    </button>
    <motion.div
      className={cn(
        'absolute -left-[1px] pt-2.5 flex flex-col gap-y-2.5 w-[calc(100%_+_2px)] transition-all bg-white border border-grey4 border-t-0 z-10 px-2.5 pb-5',
        !isExpanded && 'invisible opacity-0'
      )}
    >
      {Items}
    </motion.div>
  </div>
};

export default Dropdown;