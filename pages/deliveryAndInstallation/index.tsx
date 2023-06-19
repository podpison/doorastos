import Breadcrumbs from '@/components/breadcrumbs';
import Head from 'next/head';
import { FC } from 'react';
import Hero from '../../ui/deliveryAndInstallation/hero';
import ShippingPricing from '../../ui/deliveryAndInstallation/shippingPricing';

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