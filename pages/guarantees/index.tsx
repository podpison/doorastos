import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';
import Info from './guarantessInfo';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'Guarantees'
  }
];

const Guarantees: FC = () => {
  return <>
    <Head>
      <title>Guarantees | Doorastos</title>
      <meta name="description" content="Doorastos - guarantees page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Info />
    </main>
  </>
};

export default Guarantees;