import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';
import Recall from '@/ui/recall';
import Links from '@/pageComponents/contacts/links';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ContactType } from '@/pageComponents/contacts/links/item';
import { itemsAPI } from '@/firebase';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'Contacts',
  }
];

const Contacts: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ items = [] }) => {
  return <>
    <Head>
      <title>Contacts | Doorastos</title>
      <meta name="description" content="Doorastos - Contacts page" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Links items={items} />
      <Recall className='mt130-200 max-w-[708px] ml-auto' />
    </main>
  </>
};

export default Contacts;

export const getStaticProps: GetStaticProps<{ items: ContactType[] }> = async () => {
  let items = await itemsAPI.get('contacts') as ContactType[];

  return {
    props: {
      items
    }
  };
};