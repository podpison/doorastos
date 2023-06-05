import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';
import Links from './links';
import Recall from '@/components/recall';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'Contacts',
  }
];

const Contacts: FC = () => {
  return <>
    <Head>
      <title>Contacts | Doorastos</title>
      <meta name="description" content="Doorastos - Contacts page" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Links />
      <Recall className='mt130-200 max-w-[708px] ml-auto' />
    </main>
  </>
};

export default Contacts;