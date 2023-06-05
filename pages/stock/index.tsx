import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';
import Items from './items';

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