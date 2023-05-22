import AdditionalSecurity from '@/components/mainPageComponents/additionalSecurity';
import Advantages from '@/components/mainPageComponents/advantages';
import CompanyName from '@/components/mainPageComponents/companyName';
import ForWhat from '@/components/mainPageComponents/forWhat';
import Hero from '@/components/mainPageComponents/hero';
import QualityDifferences from '@/components/mainPageComponents/qualityDifferences';
import Recall from '@/components/recall';
import Reviews from '@/components/reviews';
import UniqueOffer from '@/components/uniqueOffers';
import Head from 'next/head'

const MainPage: React.FC = () => {
  return <>
    <Head>
      <title>Doorastos</title>
      <meta name="description" content="Doorastos - main page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
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