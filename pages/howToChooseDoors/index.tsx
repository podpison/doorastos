import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import Head from 'next/head';
import { FC, useState } from 'react';
import useWhereQuery from '@/hooks/useWhereQuery';
import Items from '@/pageComponents/howToChooseDoors/items';

const initialBreadcumbItems = {
  name: "Doors to the apartment",
  href: "?where=apartment"
};

const HowToChooseDoors: FC = () => {
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbsItemType[]>([]);
  const { where } = useWhereQuery({ name: 'How to choose doors' }, breadcrumbItems, setBreadcrumbItems, initialBreadcumbItems);

  return <>
    <Head>
      <title>How to choose doors | Doorastos</title>
      <meta name="description" content="Doorastos - How to choose doors page" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Items where={where} />
    </main>
  </>
};

export default HowToChooseDoors;