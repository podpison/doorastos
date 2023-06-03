import { FC } from 'react';
import Item from './item';
import cn from 'classnames';

const items = [
  'Delivery and installation is carried out after a partial prepayment (10-30% depending on the category and cost of the product, detailed information can be obtained from the manager)',
  'After delivery, the rest of the cost of door sets, fittings and other materials is repaid.',
  'Installation of doors is paid upon receipt of work.'
];

type Props = {
  className?: string
}

const Steps: FC<Props> = ({ className }) => {
  let Items = items.map((i, index) => <Item text={i} id={index + 1} key={index} />);

  return <div
    className={cn(
      'grid gap-y-7 divide-grey4 max-md:border-y max-md:border-grey4 max-md:divide-y md:grid-cols-3 md:divide-x',
      className,
    )}
  >
    {Items}
  </div>
};

export default Steps;