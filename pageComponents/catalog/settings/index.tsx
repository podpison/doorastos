import { FC } from 'react';
import Filter from './filter';
import ButtonsGroup, { ButtonsGroupItemType } from '@/ui/buttonsGroup/buttonsGroup';
import { ActiveCategoryItemsType } from './filter/categories/item';
import { ProductType } from '../products/item';

type Props = {
  resetSettings: () => void
  activeLink: string | string[] | undefined
  activeSecurityItem: string | null
  activeCategoryItems: ActiveCategoryItemsType
  setActiveCategoryItem: (category: string, newItems: string[]) => void
  allItems: ProductType[]
}

const buttonsGroupItems: ButtonsGroupItemType[] = [
  {
    text: 'Doors to an apartment',
    where: 'apartment'
  },
  {
    text: 'Doors to a house',
    where: 'house'
  },
];

const Settings: FC<Props> = ({ resetSettings, activeLink, activeSecurityItem, activeCategoryItems, setActiveCategoryItem, allItems }) => {
  return <div className='grid md:grid-cols-[1.3fr_1fr] md:gap-x-10 smlg:grid-cols-[355px_1fr] smlg:gap-x-8 xl:grid-cols-[480px_1fr]'>
    <div className='flex flex-col gap-y-7'>
      <ButtonsGroup items={buttonsGroupItems} activeLink={activeLink} />
      <button className='text-esm w-full bg-blue1 text-white transition-colors py-2.5 hover:text-black hover:bg-line' onClick={resetSettings}>Reset settings</button>
    </div>
    <Filter
      activeSecurityItem={activeSecurityItem}
      activeCategoryItems={activeCategoryItems}
      setActiveCategoryItem={setActiveCategoryItem}
      allItems={allItems}
    />
  </div>
};

export default Settings;