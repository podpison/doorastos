import Image from 'next/image';
import { FC } from 'react';

type Props = {
  src: string
  id: number
  setActiveItem: (src: string) => void
}

const Item: FC<Props> = ({ src, id, setActiveItem }) => {
  return <button
    className='flex w-[70px] h-[70px] bg-grey3 transition-colors py-2.5 hover:bg-grey4 md:w-[100px] md:h-[100px]'
    onClick={() => setActiveItem(src)}
  >
    <Image
      className='h-full object-contain m-auto'
      src={src}
      alt={`Angle №${id}`}
      width={45} height={75}
    />
  </button>
};

export default Item;