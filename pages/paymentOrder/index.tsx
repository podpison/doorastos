import Head from 'next/head';
import { FC } from 'react';
import HowToPay from './howToPay';

const PaymentOrder: FC = () => {
  return <>
    <Head>
      <title>Payment order | Doorastos</title>
      <meta name="description" content="Doorastos - Payment order page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <HowToPay />
    </main>
  </>
};

export default PaymentOrder;