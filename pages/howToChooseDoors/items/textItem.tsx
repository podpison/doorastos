import Texts from '@/components/texts';
import { TextsItemType } from '@/components/texts/item';
import { FC } from 'react';

export type HowToChooseDoorsTextItemProps = {
  heading: string
  texts: TextsItemType[]
}

const TextItem: FC<HowToChooseDoorsTextItemProps> = ({ heading, texts }) => {
  return <div className='flex flex-col gap-y-5 max-w-[820px]'>
    <h3>{heading}</h3>
    <Texts itemClassName='text12-16' items={texts} />
  </div>
};

export default TextItem;