import { FC } from 'react';
import Item, { ItemProps } from './item';

const items: ItemProps[] = [
  {
    heading: 'Name',
    items: 'JSC Expert'
  },
  {
    heading: 'Phones',
    items: [
      {
        text: '+7 (919) 996-38-88',
        href: 'tel:+7 (919) 996-38-88'
      },
      {
        text: '+7 (919) 996-38-88',
        href: 'tel:+7 (919) 996-38-88'
      },
    ]
  },
  {
    heading: 'Mode of Operation',
    items: 'Daily 7 days a week from 8:00 am to 10:00 pm'
  },
  {
    heading: 'Email',
    items: [
      {
        text: 'Expert-dveri@gmail.com',
        href: 'mailto:Expert-dveri@gmail.com'
      },
    ]
  },
  {
    heading: 'Location',
    items: '141601, Moscow region, Klin, Selinskoye village, st. Preobrazhenskaya, 4'
  },
];

const Links: FC = () => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section>
    <div className='flex flex-col'>
      {Items}
    </div>
  </section>
};

export default Links;