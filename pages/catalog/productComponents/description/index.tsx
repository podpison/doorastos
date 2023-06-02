import { FC, useState } from 'react';
import SectionHeadings from './sectionHeadings/index';
import { ProductType } from '@/redux/reducers/static';
import Characteristics from './sections/characteristics';
import GuaranteesInfo from '../../../guarantees/guarantessInfo/index';
import DAIHero from '@/pages/deliveryAndInstallation/hero'; //DAI - delivery and installation
import DAIShippingPricing from '@/pages/deliveryAndInstallation/shippingPricing';
import ReturnConditions from './sections/returnConditions';
import Reviews from './sections/reviews';

type Props = {
  currentItem: ProductType | undefined
}

const Description: FC<Props> = ({ currentItem }) => {
  const [activeSectionId, setActiveSectionId] = useState(0);

  const Sections = [
    <Characteristics currentItem={currentItem} key={0} />,
    <GuaranteesInfo key={1} />,
    <div key={2}>
      <DAIHero />,
      <DAIShippingPricing />
    </div>,
    <Reviews data={currentItem?.reviews} key={3} />,
    <ReturnConditions key={4} />
  ];

  return <section className='mt150-250'>
    <SectionHeadings activeItemId={activeSectionId} setActiveSectionId={setActiveSectionId} />
    {Sections[activeSectionId] || Sections[0]}
  </section>
};

export default Description;