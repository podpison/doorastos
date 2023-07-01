import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import Items from '@/pageComponents/stock/items';
import Head from 'next/head';
import { FC } from 'react';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'Stock'
  }
];

const Stock: FC = () => {

  return <>
    <Head>
      <title>Stock | Doorastos</title>
      <meta name="description" content="Doorastos - stock page" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Items />
    </main>
  </>
};

export default Stock;