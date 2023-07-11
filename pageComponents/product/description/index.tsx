import { FC, useState } from 'react';
import SectionHeadings from './sectionHeadings/index';
import DAIHero from '@/pageComponents/deliveryAndInstallation/hero'; //DAI - delivery and installation
import DAIShippingPricing from '@/pageComponents/deliveryAndInstallation/shippingPricing';
import Characteristics from './section/characteristics';
import ReturnConditions from './section/returnConditions';
import Reviews from './section/reviews';
import GuaranteesInfo from '../../guarantees/guarantessInfo/index';
import { ProductType } from '@/pageComponents/catalog/products/item';

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