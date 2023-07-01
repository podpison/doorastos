import { FC } from 'react';
import Item, { ContactType } from './item';
import { itemsAPI } from '@/firebase';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

type Props = {
  items: ContactType[]
}

const Links: FC<Props> = ({ items = [] }) => {
  let Items = items.map((i, index) => <Item {...i} key={index} />);

  return <section>
    <div className='flex flex-col'>
      {Items}
    </div>
  </section>
};

export default Links;