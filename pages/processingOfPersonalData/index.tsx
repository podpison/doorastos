import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import Head from 'next/head';
import { FC } from 'react';

const items = [
  'By providing his personal data, the Buyer agrees to the processing, storage and use of his personal data on the basis of Federal Law No. 152-FZ "On Personal Data" dated July 27, 2006 for the following purposes: User registration on the site Implementation of customer support Receipt by the User of information about marketing events Fulfillment by the Seller of obligations to the Buyer Conducting audits and other internal studies in order to improve the quality of services provided. Personal data means any personal information that allows you to identify the Buyer, such as: Full Name, Date of Birth, contact, number, e-mail, address, mailing address, Buyers\' personal data is stored exclusively on electronic media and processed using automated systems, except when non-automated processing of personal data is necessary in connection with the fulfillment of legal requirements. The seller undertakes not to transfer the received personal data to third parties, except for the following cases:',
  'At the request of the authorized state authorities of the Russian Federation only on the grounds and in the manner established by the legislation of the Russian Federation',
  'Strategic partners who work with the Seller to provide products and services, or those who help the Seller sell products and services to consumers. We provide third parties with the minimum amount of personal data necessary only to provide the required service or complete the necessary transaction.',
  'The Seller reserves the right to make changes unilaterally to these rules, provided that the changes do not contradict the current legislation of the Russian Federation. Changes to the terms of these rules come into force after they are published on the Site.',
];

const breadcrumbsItems = [
  {
    name: 'Processing of personal data',
  },
] as BreadcrumbsItemType[];

const ProcessingOfPersonalDataPage: FC = () => {
  let Items = items.map((i, index) => <p className='text-esm' key={index}>{i}</p>);

  return <>
    <Head>
      <title>Processing of personal data | Doorastos</title>
      <meta name="description" content="Processing of personal data" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbsItems} />
      <div className='flex flex-col gap-y-5 leading-[30px]'>
        {Items}
      </div>
    </main>
  </>
};

export default ProcessingOfPersonalDataPage;