import { FC } from 'react';
import keysImg from '@/public/imgs/pages/product/additionalOptions/keys.webp';
import armorPlatesImg from '@/public/imgs/pages/product/additionalOptions/armorPlates.webp';
import doorHandlesImg from '@/public/imgs/pages/product/additionalOptions/doorHandles.webp';
import videoSurveillanceImg from '@/public/imgs/pages/product/additionalOptions/videoSurveillance.webp';
import peepholeImg from '@/public/imgs/pages/product/additionalOptions/peephole.webp';
import Item, { CategoryType } from './item';

const items: CategoryType[] = [
  {
    src: keysImg,
    name: 'Door lock catalog'
  },
  {
    src: armorPlatesImg,
    name: 'Armor plates'
  },
  {
    src: doorHandlesImg,
    name: 'Door handle catalog'
  },
  {
    src: videoSurveillanceImg,
    name: 'Video surveillance'
  },
  {
    src: peepholeImg,
    name: 'Peephole catalog'
  }
];

const Categories: FC = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <div className='mt30-50 flex justify-between gap-x-5 overflow-x-auto'>
    {Items}
  </div>
};

export default Categories;