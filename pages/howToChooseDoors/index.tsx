import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import Head from 'next/head';
import { FC, useState } from 'react';
import useWhereQuery from '@/hooks/useWhereQuery';
import Items, { HowToChooseDoorsType } from '@/pageComponents/howToChooseDoors/items';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { itemsAPI } from '@/firebase';

const initialBreadcumbItems = {
  name: "Doors to the apartment",
  href: "?where=apartment"
};

const HowToChooseDoors: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ categories }) => {
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbsItemType[]>([]);
  const {query: whereQuery} = useWhereQuery({ name: 'How to choose doors' }, setBreadcrumbItems, initialBreadcumbItems);

  return <>
    <Head>
      <title>How to choose doors | Doorastos</title>
      <meta name="description" content="Doorastos - How to choose doors page" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Items categories={categories} where={whereQuery} />
    </main>
  </>
};

export default HowToChooseDoors;

export const getStaticProps: GetStaticProps<{ categories: HowToChooseDoorsType[] }> = async () => {
  let categories = await itemsAPI.get('howToChooseDoors') as HowToChooseDoorsType[];

  return {
    props: {
      categories
    }
  };
};