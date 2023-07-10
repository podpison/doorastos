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

export type ProductType = {
  name: string
  imgs: string[]
  price: number
  material: string
  id: number
  security: 'With thermal break' | 'Tamperproof' | 'Armored'
  where: 'apartment' | 'house'
  finishing: string
  color: string
  isUnique: boolean
  discount?: {
    value: number
    expiryDate: string
  }
  characteristics: {
    general: {
      manufacturer: string
      productName: string
      openingDirection: string
      openingSide: string
      leafThickness: string
      frameType: string
      soundInsulationIndex: string
      height: string
      width: string
      weight: string
    }
    protectionAgainstBreaking: {
      numberOfMetalSheets: string
      metalThickness: string
      numberOfStiffeners: string
      numberOfAntiRemovableClips: string
      numberOfLocks: string
      lockBrand: string
      lockClass: string
      armorPlate: boolean
      armorPackage: boolean
      nightValve: boolean
    },
    decorativeTrim: {
      coatingOfCanvasAndBox: string
      coatingColor: string
      finishingOutside: boolean
      finishingFromTheInside: boolean
      decorativeThreshold: boolean
    },
    accessories: {
      hardwareColor: string
      pen: string
      closer: boolean
      threshold: boolean
      hingeDecor: boolean
    },
    heatAndSoundInsulation: {
      doorLeafFiller: string
      fillerLayerThickness: string
      flammabilityClassOfTheFiller: string
      applicationTemperatureOfTheFiller: string
      doorFrameInsulation: boolean
    },
    tightness: {
      numberOfSealCircuits: string
      sealMaterial: string
    },
    easeOfUse: {
      doorHingeType: string
      numberOfDoorHinges: string
      openingAngle: string
      removableCornersToReplaceTheInnerPanel: string
      functionalValve: boolean
      castleOfInvisibility: boolean
      electronicLockWithFingerprintScanner: boolean
      latchAdjuster: string
      closer: boolean
      peepholeHeight: string
      viewingAngleOfThePeephole: string
    },
  }
  reviews: {
    grade: number
    userName: string
    date: string
    city: string
    advantages: string
    disadvantages: string
    comment: string
  }[]
}

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
  let searchedId = params?.id;

  let products = await itemsAPI.get('products') as ProductType[];
  let additionalProductOptions = await itemsAPI.get('additionalProductOptions') as AdditionalProductOptionType[];

  let currentProduct = products.find(p => typeof searchedId === 'string' && p.id === Number(searchedId));
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
      id: p.id.toString()
    }
  }));

  return {
    paths,
    fallback: false,
  };
};