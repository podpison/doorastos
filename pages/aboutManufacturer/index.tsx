import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import OurGoal from '@/pageComponents/aboutManufacturer/ourGoal';
import Slogan from '@/pageComponents/aboutManufacturer/slogan';
import Head from 'next/head';
import { FC } from 'react';

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
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Slogan />
      <OurGoal />
    </main>
  </>
};

export default AboutManufacturer;