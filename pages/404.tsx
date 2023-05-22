import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
  return <>
    <Head>
      <title>Not found | Doorastos</title>
      <meta name="description" content="Doorastos - not found page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='flex'>
      <section className='flex flex-col items-center justify-center w-fit mx-auto'>
        <h6 className='font-robodron text-[50px] font-medium tracking-widest esm:text-[70px] md:text-[113px]'>404</h6>
        <div className='flex flex-col items-center gap-y-2.5'>
          <h3 className='text18-24 mt-5'>Page is not found</h3>
          <p className='text-esm text-grey2 text-center max-w-[18em]'>You are here because the requested page does not exist or has been moved to a different address</p>
        </div>
        <Link className='group border border-x-transparent border-blue1 w-fit transition-colors py-2.5 px-5 mt-12 mx-auto hover:border-x-blue2 hover:border-y-transparent' href='/'>
          <span className='text-blue1 text-[18px] text-light transition-colors group-hover:text-blue2'>Back to home</span>
        </Link>
      </section>
    </main>
  </>
};

export default NotFound;