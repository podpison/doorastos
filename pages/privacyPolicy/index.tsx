import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import Item, { PrivacyPolicyItemType } from '@/pageComponents/privacyPolicy/item';
import Head from 'next/head';
import { FC } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { itemsAPI } from '@/firebase';

const breadcrumbsItems = [
  {
    name: 'Privacy policy',
  },
] as BreadcrumbsItemType[];

const PrivacyPolicy: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ items = [] }) => {
  let Items = items.map((i, index) => <Item {...i} id={index + 1} key={index} />);

  return <>
    <Head>
      <title>Privacy policy | Doorastos</title>
      <meta name="description" content="Privacy policy" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <div>
        <div className='flex flex-col gap-y-2.5'>
          <h6 className='text-light text-grey1 font-semibold'>Privacy policy</h6>
          <p className='text-esm leading-[30px]'>This Personal Data Privacy Policy(hereinafter referred to as the Privacy Policy) applies to all information that the site argus196.ru - ARGUS Entrance Door Store, (hereinafter referred to as the ARGUS Entrance Door Store) located on the domain name argus196.ru(as well as its subdomains), can get about the User while using the site argus196.ru(as well as its subdomains), its programs and its products.</p>
        </div>
        <div className='flex flex-col gap-y-10 leading-[30px] mt-10'>
          {Items}
        </div>
        <div className='flex flex-col gap-y-1 mt-2.5'>
          <p className='text-esm'>Updated: 15 August 2018</p>
          <p className='text-esm'>Ekaterinburg, OGRNIP 316965800157317</p>
        </div>
      </div>
    </main>
  </>
};

export default PrivacyPolicy;

export const getStaticProps: GetStaticProps<{ items: PrivacyPolicyItemType[] }> = async () => {
  let items = await itemsAPI.get('privacyPolicy') as PrivacyPolicyItemType[];

  return {
    props: {
      items
    }
  };
};