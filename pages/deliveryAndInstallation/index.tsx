import Breadcrumbs from '@/components/breadcrumbs';
import Head from 'next/head';
import { FC } from 'react';
import Hero from './hero';
import ShippingPricing from './shippingPricing';

const breadcrumbsItems = [
  {
    name: 'Delivery and installation'
  }
];

const DeliveryAndInstallation: FC = () => {
  return <>
    <Head>
      <title>Delivery and installation | Doorastos</title>
      <meta name="description" content="Doorastos - delivery and installation page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <Hero />
      <ShippingPricing />
    </main>
  </>
};

export default DeliveryAndInstallation;