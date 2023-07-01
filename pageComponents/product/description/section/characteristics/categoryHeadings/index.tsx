import { Dispatch, FC, SetStateAction } from 'react';
import Item from './item';

const items = [
  'General characteristics',
  'Protection against breaking and opening',
  'Decorative trim',
  'Accessories',
  'Heat and sound insulation',
  'Tightness',
  'Ease of use'
];

type Props = {
  activeItemId: number
  setActiveItemId: Dispatch<SetStateAction<number>>
}

const CategoryHeadings: FC<Props> = ({ activeItemId, setActiveItemId }) => {
  
  let Items = items.map((i, index) => <Item id={index} isActive={activeItemId === index} setActiveItemId={setActiveItemId} text={i} key={index} />);

  return <div className='relative flex justify-between gap-x-4 overflow-x-auto border-b border-line'>
    {Items}
    <span className='absolute left-0 bottom-0 w-full h-px bg-line -z-10' />
  </div>
};

export default CategoryHeadings;