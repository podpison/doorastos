import { ProductType } from '@/redux/reducers/static';
import { FC } from 'react';

type Props = {
  name: string
  value: string | boolean
}

const SectionItem: FC<Props> = ({ name, value }) => {
  let formattedValue = typeof value === 'boolean' ? value ? 'Available' : 'Unavailable' : value;

  return <div className='grid grid-cols-[1fr_max-content] gap-x-3 gap-y-1 px-2.5 py-2 odd:bg-line esm:px-5'>
    <p className='text-esm'>{name}</p>
    <p className='text-esm text-black'>{formattedValue}</p>
  </div>
};

export default SectionItem;