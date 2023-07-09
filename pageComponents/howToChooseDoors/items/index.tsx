import { FC } from 'react';
import TextItem, { HowToChooseDoorsTextItemProps } from './textItem';
import ImgItem, { HowToChooseDoorsImgItemProps } from './imgItem';
import ButtonsGroup, { ButtonsGroupItemType } from '@/ui/buttonsGroup/buttonsGroup';
import { WhereType } from '@/hooks/useWhereQuery';

export type HowToChooseDoorsItemsType = (HowToChooseDoorsTextItemProps | HowToChooseDoorsImgItemProps)[]

export type HowToChooseDoorsType = {
  category: 'apartment' | 'house'
  items: HowToChooseDoorsItemsType
}

const isTextItemType = (item: HowToChooseDoorsTextItemProps | HowToChooseDoorsImgItemProps): item is HowToChooseDoorsTextItemProps => {
  return (item as HowToChooseDoorsTextItemProps).heading !== undefined;
};

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

type Props = {
  categories: HowToChooseDoorsType[]
  where: WhereType
}

const Items: FC<Props> = ({ categories = [], where }) => {
  let currentCategory = categories.find(c => c.category === where) || categories[0];
  let Items = currentCategory.items.map((d, index) => isTextItemType(d) ? <TextItem {...d} key={index} /> : <ImgItem {...d} key={index} />);

  return <div>
    <ButtonsGroup className='grid grid-cols-[max(160px,_50%)_1fr] esm:grid-cols-2 md:max-w-[400px]' items={buttonsGroupItems} activeLink={where} />
    <div className='mt30-50 relative flex flex-col gap-y-12 md:gap-y-[70px]'>
      {Items}
    </div>
  </div>
};

export default Items;