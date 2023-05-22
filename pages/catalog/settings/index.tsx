import { Dispatch, FC, SetStateAction } from 'react';
import Filter from './filter';
import { ActiveCategoryItemType } from './filter/categories/item';
import { SecurityItemType } from '..';
import ButtonsGroup, { ButtonsGroupItemType } from '@/components/buttonsGroup/buttonsGroup';

type Props = {
  resetSettings: () => void
  activeLink: string | string[] | undefined
  activeSecurityItem: SecurityItemType
  setActiveSecurityItem: Dispatch<SetStateAction<SecurityItemType>>
  activeCategoryItems: ActiveCategoryItemType[]
  setActiveCategoryItem: (category: ActiveCategoryItemType['category'], newItems: string[]) => void
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

const Settings: FC<Props> = ({ resetSettings, activeLink, activeSecurityItem, setActiveSecurityItem, activeCategoryItems, setActiveCategoryItem }) => {
  return <div className='grid md:grid-cols-[1.3fr_1fr] md:gap-x-10 smlg:grid-cols-[355px_1fr] smlg:gap-x-8 xl:grid-cols-[480px_1fr]'>
    <div className='flex flex-col gap-y-7'>
      <ButtonsGroup items={buttonsGroupItems} activeLink={activeLink} />
      <button className='text-esm w-full bg-blue1 text-white transition-colors py-2.5 hover:text-black hover:bg-line' onClick={resetSettings}>Reset settings</button>
    </div>
    <Filter
      activeSecurityItem={activeSecurityItem}
      setActiveSecurityItem={setActiveSecurityItem}
      activeCategoryItems={activeCategoryItems}
      setActiveCategoryItem={setActiveCategoryItem}
    />
  </div>
};

export default Settings;