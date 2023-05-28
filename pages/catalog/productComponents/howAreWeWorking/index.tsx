import SectionHeading from '@/components/sectionHeading';
import { FC } from 'react';
import Item, { HowAreWeWorkingItemProps } from './item';

const items: Omit<HowAreWeWorkingItemProps, 'id'>[] = [
  {
    heading: 'You are applying online or by phone',
    description: 'Select models in the catalog or consult with the operator'
  },
  {
    heading: 'Measuring and concluding a contract',
    description: 'Taking measurements, reading printed catalogs, choosing finishes. Conclude a contract with a technical specialist and make an advance payment.'
  },
  {
    heading: 'Making the front door',
    description: 'Production time depends on the complexity of the work being done. On average, this is up to 5 days. Our experts will notify you when ready.'
  },
  {
    heading: 'Delivery and installation',
    description: 'Delivery, removal of the old door and installation of a new one - free of charge'
  },
];

const HowAreWeWorking: FC = () => {
  let Items = items.map((i, index) => <Item {...i} id={index + 1} key={index} />);

  return <section className='mt100-150'>
    <SectionHeading>How are we workinging</SectionHeading>
    <div className='mt30-50 grid divide-line max-md:divide-y md:grid-cols-2 md:gap-y-5 md:divide-x lg:grid-cols-4'>
      {Items}
    </div>
  </section>
};

export default HowAreWeWorking;