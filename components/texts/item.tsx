import { FC } from 'react';
import cn from 'classnames';
import ListSubitem, { TextsListItemType } from './listSubitem';

export type TextsItemType = {
  description: string | string[] | TextsListItemType
  heading?: string
}

type Props = {
  className?: string
  itemClassName?: string
} & TextsItemType

const Item: FC<Props> = ({ description, heading, className, itemClassName }) => {
  let texts = Array.isArray(description) ? description : [description];
  let Texts = texts.map((t, index) => {
    if (typeof t === 'object') {
      return <ListSubitem className={cn('', !itemClassName && 'text-esm', itemClassName)} key={index} {...t} />
    };

    return <p className={cn('text-grey1', !itemClassName && 'text-esm', itemClassName)} key={index}>{t}</p>
  });

  return <div className={cn('flex flex-col gap-y-2.5', className)}>
    {heading && <h6 className='text-[14px] md:text-[18px]'>{heading}</h6>}
    <div className='flex flex-col gap-y-2.5'>
      {Texts}
    </div>
  </div>
};

export default Item;