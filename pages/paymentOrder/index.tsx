import Head from 'next/head';
import { FC } from 'react';
import HowToPay from './howToPay';

const PaymentOrder: FC = () => {
  return <>
    <Head>
      <title>Payment order | Doorastos</title>
      <meta name="description" content="Doorastos - Payment order page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="2bco0LV7y4a5e4a_swVe81p-di_E3EGC49h3OvMjp0I" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HowToPay />
    </main>
  </>
};

export default PaymentOrder;