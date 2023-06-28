import { FC } from 'react';
import Item, { OptionType } from './item';

const items: OptionType[] = [
  {
    name: 'Additional insulation',
    price: 1000
  },
  {
    name: 'Additional loops',
    price: 1000
  },
  {
    name: 'Increased metal thickness',
    price: 1000
  },
  {
    name: 'Hidden loops',
    price: 1000
  },
  {
    name: '"Bark" hinges',
    price: 1000
  },
  {
    name: 'Video Call',
    price: 1000
  },
  {
    name: 'Biometric lock',
    price: 1000
  },
  {
    name: 'Stainless Steel Fender',
    price: 1000
  },
  {
    name: 'Anti-corrosion treatment',
    price: 1000
  },
  {
    name: 'Water Repellent Coating',
    price: 1000
  },
  {
    name: 'Outdoor panel',
    price: 1000
  },
  {
    name: 'Night shutter',
    price: 1000
  },
  {
    name: 'Closer',
    price: 1000
  },
  {
    name: 'Drainer',
    price: 1000
  },
  {
    name: 'Threshold',
    price: 1000
  },
  {
    name: 'Illuminated Threshold',
    price: 1000
  },
  {
    name: 'Latch Controller',
    price: 1000
  },
  {
    name: 'Transom',
    price: 1000
  },
  {
    name: 'Knocker (beater ring)',
    price: 1000
  },
  {
    name: 'Customer hardware installation',
    price: 1000
  },
];

const Options: FC = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <div className='mt50-150'>
    <h5 className='text18-24'>You may also want this:</h5>
    <div className='grid mt-7 max-md:divide-y max-md:divide-line md:grid-cols-2 md:gap-x-20'>
      <div className='flex flex-col divide-y divide-line max-md:pb-2.5'>
        {Items.slice(0, items.length / 2)}
      </div>
      <div className='flex flex-col divide-y divide-line max-md:pt-4'>
        {Items.slice(items.length / 2)}
      </div>
    </div>
  </div>
};

export default Options;