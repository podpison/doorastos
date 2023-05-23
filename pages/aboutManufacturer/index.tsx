import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';
import Slogan from './slogan';
import OurGoal from './ourGoal';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'About manufacturer',
  }
];

const AboutManufacturer: FC = () => {
  return <>
    <Head>
      <title>About manufacturer | Doorastos</title>
      <meta name="description" content="Doorastos - about manufacturer page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Slogan />
      <OurGoal />
    </main>
  </>
};

export default AboutManufacturer;