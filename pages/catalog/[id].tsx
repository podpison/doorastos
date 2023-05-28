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

  return <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={`Doorastos - the description of the ${currentItem?.name} product`} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Hero item={currentItem} />
      <PriceComponents />
      <WhatWillYouGetWhenOrdering />
      <HowAreWeWorking />
    </main>
  </>
};

export default Product;