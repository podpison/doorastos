import { FC } from 'react';
import Item from './item';

const items = [
  'Delivery and installation is carried out after a partial prepayment (10-30% depending on the category and cost of the product, detailed information can be obtained from the manager)',
  'After delivery, the rest of the cost of door sets, fittings and other materials is repaid.',
  'Installation of doors is paid upon receipt of work.'
];

const Steps: FC = () => {
  let Items = items.map((i, index) => <Item text={i} id={index + 1} key={index} />);

  return <div className='mt30-50 grid gap-y-7 md:grid-cols-3'>
    {Items}
  </div>
};

export default Steps;