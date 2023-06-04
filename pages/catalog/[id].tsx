import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';
import useWhereQuery from '@/hooks/useWhereQuery';
import { selectProductItems } from '@/redux/selectors';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NotFound from '../404';
import Hero from './productComponents/hero';
import PriceComponents from './productComponents/priceComponents';
import WhatWillYouGetWhenOrdering from './productComponents/whatWillYouGetWhenOrdering';
import HowAreWeWorking from './productComponents/howAreWeWorking';
import Description from './productComponents/description';
import Steps from '../paymentOrder/howToPay/steps';
import SectionHeading from '@/components/sectionHeading';
import Visualization from './productComponents/visualization';
import YouMayLike from './productComponents/youMayLike';
import GoBackOrForward from './productComponents/goBackOrForward';

const defaultBreadcrumbItem: BreadcrumbsItemType[] = [
  {
    name: 'Catalog'
  },
]

const Product: FC = () => {
  const router = useRouter();
  let products = useSelector(selectProductItems);
  const [breadcrumbItems, setBreadcrumbItems] = useState(defaultBreadcrumbItem);
  useWhereQuery(defaultBreadcrumbItem, breadcrumbItems, setBreadcrumbItems);

  let id = router.query.id;
  let currentItem = products.find(i => i.id === (typeof id === 'string' && Number(id)));

  useEffect(() => {
    if (!currentItem) return;

    setBreadcrumbItems(prev => {
      return !currentItem ? [...prev] : [...prev, { name: currentItem.name, href: currentItem.id.toString() }];
    });
  }, [currentItem]);

  let pageTitle = `${currentItem?.name || 'Product'} | Doorastos`;
  
  if (!currentItem && products.length !== 0) {
    return <NotFound />
  }
  
  let canGoForward = products.find(p => p.id === ((currentItem?.id || 0) + 1)) !== undefined;
  
  return <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={`Doorastos - the description of the ${currentItem?.name} product`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="2bco0LV7y4a5e4a_swVe81p-di_E3EGC49h3OvMjp0I" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Hero item={currentItem} />
      <PriceComponents />
      <WhatWillYouGetWhenOrdering />
      <Description currentItem={currentItem} />
      <HowAreWeWorking />
      <Visualization />
      <section className='mt150-250'>
        <SectionHeading>How to pay for Expert doors?</SectionHeading>
        <Steps />
      </section>
      <YouMayLike currentItemId={currentItem?.id} />
      <GoBackOrForward currentItemId={currentItem?.id} canGoForward={canGoForward} />
    </main>
  </>
};

export default Product;