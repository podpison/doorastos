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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="2bco0LV7y4a5e4a_swVe81p-di_E3EGC49h3OvMjp0I" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Items />
    </main>
  </>
};

export default Stock;