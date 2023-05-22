import { FC } from 'react';
import Item from './item';

const items = [
  {
    heading: 'Expert warranty periods:',
    items: [
      'For the product itself (the main structure of the door: the metal blank of the leaf and the hinges of the box) - a guarantee of 1 year from the date of manufacture.',
      'The warranty period for locking devices other than the cylinder mechanism in a cylinder lock, subject to the instructions for use and care, is 7 years from the date of manufacture.',
      'For the cylinder mechanism and accessories (eyes, handles, latches, seals, covers for locks and handles) - 1 year or in accordance with the manufacturer\'s warranty of the component parts.',
    ]
  },
  {
    heading: 'When does the warranty not apply?',
    items: [
      'Non-original parts or fittings from the customer were used.',
      'The door has been damaged by third parties or by misuse.',
      'Any malfunctions and defects in the door were not corrected in a timely manner after they were discovered.',
      'There is natural wear and tear on materials and coatings.',
    ]
  },
];

const Items: FC = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <div className='flex flex-col gap-y-12 max-w-[520px] mt-12'>
    {Items}
  </div>
};

export default Items;