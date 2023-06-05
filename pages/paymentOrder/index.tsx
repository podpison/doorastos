import Head from 'next/head';
import { FC } from 'react';
import HowToPay from './howToPay';

const PaymentOrder: FC = () => {
  return <>
    <Head>
      <title>Payment order | Doorastos</title>
      <meta name="description" content="Doorastos - Payment order page" />
    </Head>
    <main>
      <HowToPay />
    </main>
  </>
};

export default PaymentOrder;