import { FC } from 'react';
import PriceComponents from './priceComponents';
import SectionHeading from '@/components/sectionHeading';

const UniqueOffer: FC = () => {
  return <section className='mt130-200'>
    <SectionHeading>Unique offers</SectionHeading>
    <PriceComponents />
  </section>
};

export default UniqueOffer;