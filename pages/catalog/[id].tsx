import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import useWhereQuery from '@/hooks/useWhereQuery';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import NotFound from '../404';
import useRecentlyViewedWatcher from '@/hooks/useRecentlyViewedWatcher';
import Hero from '@/pageComponents/product/hero';
import PriceComponents from '@/pageComponents/product/priceComponents';
import WhatWillYouGetWhenOrdering from '@/pageComponents/product/whatWillYouGetWhenOrdering';
import Description from '@/pageComponents/product/description';
import AdditionalOptions from '@/pageComponents/product/additionalOptions';
import HowAreWeWorking from '@/pageComponents/product/howAreWeWorking';
import Visualization from '@/pageComponents/product/visualization';
import SectionHeading from '@/ui/sectionHeading';
import Steps from '@/pageComponents/paymentOrder/howToPay/steps';
import YouMayLike from '@/pageComponents/product/youMayLike';
import GoBackOrForward from '@/pageComponents/product/goBackOrForward';
import { AdditionalProductOptionType, ProductType } from '@/redux/reducers/static';
import { itemsAPI } from '@/firebase';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const defaultBreadcrumbItem: BreadcrumbsItemType[] = [
  {
    name: 'Catalog'
  },
]

const ProductPage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ currentProduct, canGoForward }) => {
  const [breadcrumbItems, setBreadcrumbItems] = useState(defaultBreadcrumbItem);
  useWhereQuery(defaultBreadcrumbItem, breadcrumbItems, setBreadcrumbItems);
  const [additionalOptions, setAdditionalOptions] = useState<AdditionalProductOptionType[]>([]);

  let currentProductId = currentProduct?.id;
  useRecentlyViewedWatcher(currentProductId);

  useEffect(() => {
    if (!currentProduct) return;

    setBreadcrumbItems(prev => {
      return !currentProduct ? [...prev] : [...prev, { name: currentProduct.name, href: currentProduct.id.toString() }];
    });
  }, [currentProduct]);

  let pageTitle = `${currentProduct?.name || 'Product'} | Doorastos`;

  if (!currentProduct) {
    return <NotFound />
  };

  const handleNewAdditionalOption = (newOption: AdditionalProductOptionType) => {
    let isExist = additionalOptions.find(i => i.name === newOption.name);

    if (isExist) {
      let itemsWithoutNewOption = additionalOptions.filter(i => i.name !== newOption.name);

      setAdditionalOptions(itemsWithoutNewOption);
    } else {
      setAdditionalOptions([...additionalOptions, newOption]);
    };
  };

  return <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={`Doorastos - the description of the ${currentProduct?.name} product`} />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Hero item={currentProduct} additionalOptions={additionalOptions} />
      {currentProduct?.isUnique && <AdditionalOptions activeOptions={additionalOptions} setActiveOption={handleNewAdditionalOption} />}
      <Description currentItem={currentProduct} />
      <PriceComponents />
      <WhatWillYouGetWhenOrdering />
      <HowAreWeWorking />
      <Visualization />
      <section className='mt150-250'>
        <SectionHeading>How to pay for Expert doors?</SectionHeading>
        <Steps />
      </section>
      <YouMayLike currentItemId={currentProduct?.id} />
      <GoBackOrForward currentItemId={currentProduct?.id} canGoForward={canGoForward} />
    </main>
  </>
};

export default ProductPage;

type GetStaticPropsReturnType = {
  currentProduct: ProductType | undefined
  canGoForward: boolean
}

export const getServerSideProps: GetServerSideProps<GetStaticPropsReturnType> = async ({ params }) => {
  let id = typeof params?.id === 'string' ? params?.id : undefined

  let currentProduct = await itemsAPI.getByParam<ProductType>('products', id);
  let nextProduct = await itemsAPI.getByParam<ProductType>('products', String(Number(id) + 1));

  if (!currentProduct) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      currentProduct,
      canGoForward: nextProduct !== undefined,
    }
  };
};