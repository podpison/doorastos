import Recall from '@/ui/recall';
import Reviews from '@/ui/reviews';
import UniqueOffer from '@/ui/uniqueOffers';
import AdditionalSecurity from '@/pageComponents/main/additionalSecurity';
import Advantages from '@/pageComponents/main/advantages';
import CompanyName from '@/pageComponents/main/companyName';
import ForWhat from '@/pageComponents/main/forWhat';
import Hero from '@/pageComponents/main/hero';
import QualityDifferences from '@/pageComponents/main/qualityDifferences';
import Head from 'next/head'
import { FC } from 'react';

const MainPage: FC = () => {

  return <>
    <Head>
      <title>Doorastos</title>
      <meta name="description" content="Doorastos - main page" />
    </Head>
    <main className='mt-0'>
      <Hero />
      <UniqueOffer />
      <Advantages />
      <CompanyName />
      <ForWhat />
      <QualityDifferences />
      <AdditionalSecurity />
      <Reviews />
      <Recall className='mt130-300 max-w-[710px] ml-auto' />
    </main>
  </>
}
export default MainPage;