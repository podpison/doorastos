import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';
import Items from './items';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'Guarantees'
  }
];

const PaymentOrder: FC = () => {
  return <>
    <Head>
      <title>Guarantees | Doorastos</title>
      <meta name="description" content="Doorastos - guarantees page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <section>
        <div className='flex flex-col gap-y-2.5'>
          <h2 className='text18-24 max-w-[35em]'>The most important condition for the validity of the guarantee for metal doors manufactured by Expert is their installation by specially trained teams of craftsmen.</h2>
          <p className='text-small text-grey2 max-w-[30em]'>In this case, the door will serve for a long time and provide reliable protection for you and your loved ones.</p>
        </div>
        <Items />
      </section>
    </main>
  </>
};

export default PaymentOrder;