import { FC } from 'react';
import cn from 'classnames';

export type SectionHeadingType = {
  name: string
}

type Props = {
  isActive: boolean
  onClick: () => void
} & SectionHeadingType

const Item: FC<Props> = ({ name, isActive, onClick }) => {
  return <button
    className={cn(
      'border-black border-b transition-colors py-2.5 md:border-r',
      'odd:border-r',
      'md:first:border-l',
      'max-md:last:border-b-0',
      isActive ? 'bg-black' : 'hover:bg-black/10',
    )}
    onClick={onClick}
  >
    <p className={cn('text-esm text-center transition-colors', isActive ? 'text-white' : 'text-black')}>{name}</p>
  </button>
};

export default Item;