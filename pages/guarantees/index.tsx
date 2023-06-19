import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Info from '@/ui/guarantees/guarantessInfo';
import Head from 'next/head';
import { FC } from 'react';

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