import { FC } from 'react';

export type ItemType = {
  startPoint: number
  endPoint: number | null
}

type Props = {
  onClick: () => void
} & ItemType

const Item: FC<Props> = ({ startPoint, endPoint, onClick }) => {
  return <button
    className='text-esm flex items-center justify-center gap-x-1 font-normal text-black border-b border-grey4 transition-colors pb-1.5 px-1.5 hover:border-blue1 active:border-black'
    onClick={onClick}
  >
    <span>{startPoint ? `${startPoint}₽` : 'less'}</span>
    <span>—</span>
    <span>{endPoint ? `${endPoint}₽` : 'more'}</span>
  </button>
};

export default Item;