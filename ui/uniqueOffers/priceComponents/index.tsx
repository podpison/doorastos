import { FC } from 'react';
import Component from './component';

const components = [
  'Quality locks and handles',
  'Changing the color and pattern of the milling',
  'Measuring the dimensions of the front door',
  'Delivery',
  'Dismantling the old door',
  'Installing a new door',
  'Sealing seams with mounting foam',
  'Garbage collection',
  'Recycling an old door',
];

const PriceComponents: FC = () => {
  let Components = components.map((c, index) => <Component text={c} key={index} />);

  return <div className='grid overflow-x-hidden esm:grid-cols-[1fr_2fr] esm:gap-x-6 md:grid-cols-2'>
    <h2 className='text-black max-w-[8em]'>Door price includes</h2>
    <div className='flex flex-col gap-y-2.5 mt-5 esm:mt-[2.4rem] md:mt-[4.8rem]'>
      {Components}
    </div>
  </div>
};

export default PriceComponents;