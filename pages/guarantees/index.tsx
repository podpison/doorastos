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
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Info />
    </main>
  </>
};

export default Guarantees;