import Breadcrumbs from '@/ui/breadcrumbs';
import Hero from '@/pageComponents/deliveryAndInstallation/hero';
import ShippingPricing from '@/pageComponents/deliveryAndInstallation/shippingPricing';
import Head from 'next/head';
import { FC } from 'react';

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
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <Hero />
      <ShippingPricing />
    </main>
  </>
};

export default DeliveryAndInstallation;