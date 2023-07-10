import Checkbox from '@/ui/checkbox';
import { FC } from 'react';
import cn from 'classnames';

export type AdditionalProductOptionType = {
  name: string
  price: number
}

type Props = {
  isActive: boolean
  onClick: () => void
} & AdditionalProductOptionType

const Item: FC<Props> = ({ name, price, isActive, onClick }) => {

  return <div className='group grid grid-cols-[max-content_1fr] justify-between gap-x-5'>
    <Checkbox
      className='mt-4 group-first:mt-0'
      checked={isActive}
      onClick={onClick}
      id={name}
    />
    <label
      className={cn(
        'grid grid-cols-[1fr_max-content] gap-x-3 items-center justify-between',
        'text10-14 text-grey1 cursor-pointer transition-colors hover:text-grey2',
        'pt-4 pb-2.5 group-first:pt-0 group-last:pb-0'
      )}
      htmlFor={name}
    >
      <span>{name}</span>
      <span>{price} ₽</span>
    </label>
  </div>
};

export default Item;