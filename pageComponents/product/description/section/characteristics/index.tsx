import { FC, useState } from 'react';
import CategoryHeadings from './categoryHeadings';
import General from './sections/general';
import ProtectionAgainstBreaking from './sections/protectionAgainstBreaking';
import DecorativeTrim from './sections/decorativeTrim';
import Accessories from './sections/accessories';
import HeatAndSoundInsulation from './sections/HeatAndSoundInsulation';
import Tightness from './sections/tightness';
import EaseOfUse from './sections/easeOfUse';
import { ProductType } from '@/pageComponents/catalog/products/item';

type Props = {
  currentItem: ProductType | undefined
}

const Characteristics: FC<Props> = ({ currentItem }) => {
  const [activeSectionId, setActiveSectionId] = useState(0);

  if (!currentItem) {
    return <></>
  };

  let characteristics = currentItem.characteristics;
  const Sections = [
    <General data={characteristics.general} key={0} />,
    <ProtectionAgainstBreaking data={characteristics.protectionAgainstBreaking} key={1} />,
    <DecorativeTrim data={characteristics.decorativeTrim} key={2} />,
    <Accessories data={characteristics.accessories} key={3} />,
    <HeatAndSoundInsulation data={characteristics.heatAndSoundInsulation} key={4} />,
    <Tightness data={characteristics.tightness} key={5} />,
    <EaseOfUse data={characteristics.easeOfUse} key={6} />,
  ];

  return <div className=''>
    <CategoryHeadings activeItemId={activeSectionId} setActiveItemId={setActiveSectionId} />
    {Sections[activeSectionId] || Sections[0]}
  </div>
};

export default Characteristics;