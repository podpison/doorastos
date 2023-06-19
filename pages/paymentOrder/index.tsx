import HowToPay from '@/ui/paymentOrder/howToPay';
import Head from 'next/head';
import { FC } from 'react';

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