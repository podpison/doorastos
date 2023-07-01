import { FC } from 'react';
import Item, { ReturnConditionsItemType } from './item';

const items: ReturnConditionsItemType[] = [
  {
    heading: 'You can return an Expert door in the following cases:',
    items: [
      'The door is of inadequate quality and has irreparable defects',
      'Possible return of funds spent on the purchase or replacement of the door with a new one.',
      'You can also get a refund or replace the door with one that meets all the parameters specified in the contract.',
      'It is possible to return a door of inadequate quality or completeness within the warranty period, which is indicated in the “User\'s Manual”.',
      'A good quality door must be returned within 14 days of purchase',
      'It is only possible to return a door of proper quality if the door has not been used and is not installed in the opening.',
      'Implementation of the return is made in accordance with the Law of the Russian Federation of 07.02.1992. No. 2300-I "On consumer protection".',
    ],
  },
  {
    heading: 'How do I return an Expert front door?',
    items: [
      'Leave a request on the site and our managers will consult you in detail.',
      'For more information, please call the hotline 8 (800) 600-60-60.',
    ],
  },
];

const ReturnConditions: FC = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <div className='flex flex-col gap-y-7 md:gap-y-12'>
    {Items}
  </div>
};

export default ReturnConditions;