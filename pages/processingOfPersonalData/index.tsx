import { addAPI, itemsAPI } from '@/firebase';
import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';

const breadcrumbsItems = [
  {
    name: 'Processing of personal data',
  },
] as BreadcrumbsItemType[];

type ItemType = {
  text: string
}

const ProcessingOfPersonalDataPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ items = [] }) => {
  let Items = items.map((i, index) => <p className='text-esm' key={index}>{i.text}</p>);

  return <>
    <Head>
      <title>Processing of personal data | Doorastos</title>
      <meta name="description" content="Processing of personal data" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <div className='flex flex-col gap-y-5 leading-[30px]'>
        {Items}
      </div>
    </main>
  </>
};

export default ProcessingOfPersonalDataPage;

export const getStaticProps: GetStaticProps<{ items: ItemType[] }> = async () => {
  let items = await itemsAPI.get('processingOfPersonalData') as ItemType[];

  return {
    props: {
      items
    }
  };
};