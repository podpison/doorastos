import { FC } from 'react';
import cn from 'classnames';

export type TextsListItemType = {
  heading: string
  items: string[]
}

type Props = {
  className?: string
} & TextsListItemType

const ListSubitem: FC<Props> = ({ heading, items, className }) => {
  let Items = items.map((i, index) => <p className={cn('text-grey1 border-t border-line py-2.5 last:border-b', className)} key={index}>{i}</p>);

  return <div className='flex flex-col gap-y-2.5'>
    <p className={cn('text-grey1', className)}>{heading}</p>
    <div className='flex flex-col'>
      {Items}
    </div>
  </div>
};

export default ListSubitem;