import { FC, useState } from 'react';
import Item from './item';
import Pagination from '@/ui/pagination';
import { ProductType } from '@/pages/catalog/[id]';

type Props = {
  data: ProductType['reviews'] | undefined
}

const Reviews: FC<Props> = ({ data = [] }) => {
  let [items, setItems] = useState<ProductType['reviews']>([]);

  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <div>
    <div className=''>
      {Items}
    </div>
    <Pagination items={data} itemsPerPage={3} setItems={items => setItems(items as ProductType['reviews'])}  />
  </div>
};

export default Reviews;