import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import Items from '@/pageComponents/stock/items';
import Head from 'next/head';
import { FC } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { StockItemType } from '@/pageComponents/stock/items/item';
import { itemsAPI } from '@/firebase';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'Stock'
  }
];

const Stock: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ stockItems }) => {

  return <>
    <Head>
      <title>Stock | Doorastos</title>
      <meta name="description" content="Doorastos - stock page" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Items data={stockItems} />
    </main>
  </>
};

export default Stock;

export const getStaticProps: GetStaticProps<{ stockItems: StockItemType[] }> = async () => {
  let stockItems = await itemsAPI.get('stock') as StockItemType[];

  return {
    props: {
      stockItems,
    },
    revalidate: 60 * 60 * 24 //revalidate after 24 hours
  };
};