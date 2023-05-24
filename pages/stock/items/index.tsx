import { FC, useState } from 'react';
import { selectStockItems } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import Item from './item';
import HelpChooseDialog from '@/components/dialogs/helpChooseDialog';

const Items: FC = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  let items = useSelector(selectStockItems);
  let Items = items.map(i => <Item activeItemId={activeItemId} onClick={() => setActiveItemId(i.id)} {...i} key={i.id} />)

  const handleActiveItemId = (isOpen: boolean) => {
    !isOpen && setActiveItemId(null);
  };

  return <section className=''>
    <div className='flex flex-col divide-y divide-line'>
      {Items}
    </div>
    <HelpChooseDialog open={activeItemId !== null} onOpenChange={handleActiveItemId} thirdStageHeading='Your personal stock' initialStage={3} />
  </section>
};

export default Items;