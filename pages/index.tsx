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
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { ReviewItemType } from '@/ui/reviews/Item';
import { itemsAPI } from '@/firebase';

const MainPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ reviews }) => {

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
      <Reviews items={reviews} />
      <Recall className='mt130-300 max-w-[710px] ml-auto' />
    </main>
  </>
}
export default MainPage;

export const getStaticProps: GetStaticProps<{ reviews: ReviewItemType[] }> = async () => {
  let reviews = await itemsAPI.get('reviews') as ReviewItemType[];

  return {
    props: {
      reviews,
    },
    revalidate: 60 * 60 * 24 //revalidate after 24 hours
  };
};