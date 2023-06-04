import { FC, useEffect, useState } from 'react';
import { selectStockItems } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import Item from './item';
import HelpChooseDialog from '@/components/dialogs/helpChooseDialog';
import Pagination from '@/components/pagination';
import { StockItemType } from '@/redux/reducers/static';

const itemsPerPage = 3;

const Items: FC = () => {
  const [activeItemType, setActiveItemType] = useState<string | null>(null);
  let data = useSelector(selectStockItems);
  const [items, setItems] = useState<StockItemType[]>(data.slice(0, 3));

  let Items = items.map(i => <Item activeItemType={activeItemType} setActiveItemType={setActiveItemType} {...i} key={i.id} />)

  const handleActiveItemType = (isOpen: boolean) => {
    !isOpen && setActiveItemType(null);
  };

  useEffect(() => {
    setItems(data.slice(0, itemsPerPage))
  }, [data]);

  return <section className=''>
    <div className='flex flex-col divide-y divide-line'>
      {Items}
    </div>
    <Pagination items={data} itemsPerPage={itemsPerPage} setItems={items => setItems(items as StockItemType[])} />

    <HelpChooseDialog open={activeItemType !== null} type={activeItemType || ''} onOpenChange={handleActiveItemType} thirdStageHeading='Your personal stock' initialStage={3} />
  </section>
};

export default Items;