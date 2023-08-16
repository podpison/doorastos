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
import { itemsAPI } from '@/firebase';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { AdditionalProductOptionType } from '@/pageComponents/product/additionalOptions/options/item';
import { ProductType } from '@/pageComponents/catalog/products/item';
import textToURL from '@/helpers/textToURL';

const defaultBreadcrumbItem: BreadcrumbsItemType[] = [
  {
    name: 'Catalog'
  },
]

const ProductPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ products, currentProduct, canGoForward, additionalProductOptions }) => {
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
      {(currentProduct?.isUnique === false) && <AdditionalOptions items={additionalProductOptions} activeOptions={additionalOptions} setActiveOption={handleNewAdditionalOption} />}
      <Description currentItem={currentProduct} />
      <PriceComponents />
      <WhatWillYouGetWhenOrdering />
      <HowAreWeWorking />
      <Visualization />
      <section className='mt150-250'>
        <SectionHeading>How to pay for Expert doors?</SectionHeading>
        <Steps />
      </section>
      <YouMayLike data={products} currentItemId={currentProduct?.id} />
      <GoBackOrForward currentItemId={currentProduct?.id} canGoForward={canGoForward} />
    </main>
  </>
};

export default ProductPage;

type GetStaticPropsReturnType = {
  products: ProductType[]
  currentProduct: ProductType | null
  canGoForward: boolean
  additionalProductOptions: AdditionalProductOptionType[]
}

export const getStaticProps: GetStaticProps<GetStaticPropsReturnType> = async ({ params }) => {
  let searchedName = params?.name;

  let products = await itemsAPI.get('products') as ProductType[];
  let additionalProductOptions = await itemsAPI.get('additionalProductOptions') as AdditionalProductOptionType[];

  let currentProduct = products.find(p => typeof searchedName === 'string' && textToURL(p.name) === searchedName);
  let canGoForward = products.find(p => p.id === ((currentProduct?.id || 0) + 1)) !== undefined;

  return {
    props: {
      products,
      currentProduct: currentProduct || null,
      canGoForward,
      additionalProductOptions
    },
    revalidate: 60 * 60 * 24 //revalidate after 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let products = await itemsAPI.get('products') as ProductType[];
  let paths = products.map(p => ({
    params: {
      name: textToURL(p.name)
    }
  }));

  return {
    paths,
    fallback: false,
  };
};