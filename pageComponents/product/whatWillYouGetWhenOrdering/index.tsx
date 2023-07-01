import { FC } from 'react';
import Item, { whatWillYouGetWhenOrderingItemProps } from './item';
import SectionHeading from '@/ui/sectionHeading';
import maintenanceImg from '../../../public/imgs/pages/catalog/whatWillYouGetWhenOrdering/maintenance.webp';
import discountImg from '../../../public/imgs/pages/catalog/whatWillYouGetWhenOrdering/discount.webp';
import careProductImg from '../../../public/imgs/pages/catalog/whatWillYouGetWhenOrdering/careProduct.webp';

const items: whatWillYouGetWhenOrderingItemProps[] = [
  {
    heading: 'Maintenance',
    description: 'Expert will replace the rubber seals in a year ',
    img: {
      src: maintenanceImg,
      alt: 'Material'
    }
  },
  {
    heading: 'Discount 10%',
    description: 'When ordering doors from Expert, you get a lifetime discount on subsequent doors',
    img: {
      src: discountImg,
      alt: 'Doors'
    }
  },
  {
    heading: 'Care product',
    description: 'Any front door lock can easily fail if left unattended. The best way to avoid repairs and big expenses is a timely preventive maintenance that will prolong the life of your lock.',
    img: {
      src: careProductImg,
      alt: 'Liqui moly spray'
    }
  },
];

const WhatWillYouGetWhenOrdering: FC = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section className='mt150-250 relative py-7 md:pt-12'>
    <div className='leftContainer absolute top-0 w-screen h-full max-w-[100vw] bg-grey3 -z-20' />
    <SectionHeading>When ordering Expert doors you get:</SectionHeading>
    <div className='flex flex-col divide-y divide-grey4'>
      {Items}
    </div>
  </section>
};

export default WhatWillYouGetWhenOrdering;