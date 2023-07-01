import { FC } from 'react';
import Item from './item';
import { AdditionalProductOptionType } from '@/redux/reducers/static';
import { useSelector } from 'react-redux';
import { selectAdditionalProductOptions } from '@/redux/selectors';

type Props = {
  activeItems: AdditionalProductOptionType[]
  setActiveItems: (items: AdditionalProductOptionType) => void
}

const Options: FC<Props> = ({ activeItems, setActiveItems }) => {
  let items = useSelector(selectAdditionalProductOptions);

  let Items = items.map((i, index) => <Item
    isActive={activeItems.find(ai => ai.name === i.name) !== undefined}
    onClick={() => setActiveItems(i)}
    {...i}
    key={index}
  />);

  return <div className='mt50-150'>
    <h5 className='text18-24'>You may also want this:</h5>
    <div className='grid mt-7 max-md:divide-y max-md:divide-line md:grid-cols-2 md:gap-x-20'>
      <div className='flex flex-col divide-y divide-line max-md:pb-2.5'>
        {Items.slice(0, items.length / 2)}
      </div>
      <div className='flex flex-col divide-y divide-line max-md:pt-4'>
        {Items.slice(items.length / 2)}
      </div>
    </div>
  </div>
};

export default Options;