import { ProductType } from '@/redux/reducers/static';
import { selectProductItems } from '@/redux/selectors';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SectionHeading from '@/ui/sectionHeading';
import Item from '@/pageComponents/catalog/products/item';

type Props = {
  currentItemId: number | undefined
}

const YouMayLike: FC<Props> = ({ currentItemId }) => {
  let data = useSelector(selectProductItems);
  const [items, setItems] = useState<ProductType[]>([]);

  useEffect(() => {
    if (currentItemId === undefined) return;

    let dataWithoutCI = data.filter(i => i.id !== currentItemId); //CI = current item
    let newItems = dataWithoutCI.sort(() => Math.random() - Math.random()).slice(0, 3);

    setItems(newItems);
  }, [data, currentItemId]);

  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section className='mt150-250'>
    <SectionHeading>You may like:</SectionHeading>
    <div className='grid gap-5 esm:grid-cols-2 md:grid-cols-3'>
      {Items}
    </div>
  </section>
};

export default YouMayLike;