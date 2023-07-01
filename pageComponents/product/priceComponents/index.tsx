import { FC } from 'react';
import Item, { PriceComponentProps } from './item';
import SectionHeading from '@/ui/sectionHeading';

const items: Omit<PriceComponentProps, 'id'>[] = [
  {
    text: 'Quality locks and handles'
  },
  {
    text: 'Change the color and pattern of the milling'
  },
  {
    text: 'Measuring the dimensions of the front door '
  },
  {
    text: 'Delivery'
  },
  {
    text: 'Dismantling the old door'
  },
  {
    text: 'Installing a new door'
  },
  {
    text: 'Sealing the seams with polyurethane foam'
  },
  {
    text: 'Trash removal and disposal of the old door'
  },
];

const PriceComponents: FC = () => {
  let Items = items.map((i, index) => <Item {...i} id={index + 1} key={index} />);

  return <section className='mt100-150'>
    <SectionHeading>This model includes:</SectionHeading>
    <div className='mt30-50 grid gap-y-9 md:grid-cols-2 md:gap-x-10 smlg:gap-x-[60px] lg:gap-x-[130px]'>
      {Items}
    </div>
  </section>
};

export default PriceComponents;