import Recall from '@/components/recall';
import Reviews from '@/components/reviews';
import UniqueOffer from '@/components/uniqueOffers';
import AdditionalSecurity from '@/ui/main/additionalSecurity';
import Advantages from '@/ui/main/advantages';
import CompanyName from '@/ui/main/companyName';
import ForWhat from '@/ui/main/forWhat';
import Hero from '@/ui/main/hero';
import QualityDifferences from '@/ui/main/qualityDifferences';
import Head from 'next/head'

const MainPage: React.FC = () => {
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