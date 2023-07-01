import { Dispatch, FC, SetStateAction } from 'react';
import Item, { SectionHeadingType } from './item';

const items: SectionHeadingType[] = [
  {
    name: 'Characteristics'
  },
  {
    name: 'Guarantees '
  },
  {
    name: 'Delivery and Installation'
  },
  {
    name: 'Reviews'
  },
  {
    name: 'Return Conditions'
  },
];

type Props = {
  activeItemId: number
  setActiveSectionId: Dispatch<SetStateAction<number>>
}

const SectionHeadings: FC<Props> = ({ activeItemId, setActiveSectionId }) => {
  let Items = items.map((i, index) => <Item
    isActive={activeItemId === index}
    onClick={() => setActiveSectionId(index)}
    {...i} key={index}
  />);

  return <div className='grid grid-cols-2 mb-9 md:grid-cols-5 md:mb-12'>
    {Items}
  </div>
};

export default SectionHeadings;