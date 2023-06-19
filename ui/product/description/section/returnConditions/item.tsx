import { FC } from 'react';
import cn from 'classnames';

export type ReturnConditionsItemType = {
  heading: string
  items: string[]
}

type Props = {

} & ReturnConditionsItemType

const Item: FC<Props> = ({ heading = '', items = [] }) => {
  let Subitems = items.map((i, index) => <p className='text-esm text-black py-2.5 first:pt-0 last:pb-0' key={index}>{i}</p>);

  return <div className='grid md:grid-cols-2 md:gap-x-7'>
    <h6 className='text14-18 text-blue1'>{heading}</h6>
    <div className={cn('divide-y divide-line max-md:mt-2.5')}>
      {Subitems}
    </div>
  </div>
};

export default Item;