import Breadcrumbs from '@/ui/breadcrumbs';
import { BreadcrumbsItemType } from '@/ui/breadcrumbs/item';
import useWhereQuery from '@/hooks/useWhereQuery';
import { selectProductItems } from '@/redux/selectors';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
import { AdditionalProductOptionType } from '@/redux/reducers/static';

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
  const [additionalOptions, setAdditionalOptions] = useState<AdditionalProductOptionType[]>([]);

  let id = router.query.id;
  let currentItem = products.find(i => i.id === (typeof id === 'string' && Number(id)));

  useRecentlyViewedWatcher(currentItem?.id);

  useEffect(() => {
    if (!currentItem) return;

    setBreadcrumbItems(prev => {
      return !currentItem ? [...prev] : [...prev, { name: currentItem.name, href: currentItem.id.toString() }];
    });
  }, [currentItem]);

  let pageTitle = `${currentItem?.name || 'Product'} | Doorastos`;

  if (!currentItem && products.length !== 0) {
    return <NotFound />
  };

  let canGoForward = products.find(p => p.id === ((currentItem?.id || 0) + 1)) !== undefined;

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
      <meta name="description" content={`Doorastos - the description of the ${currentItem?.name} product`} />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Hero item={currentItem} additionalOptions={additionalOptions} />
      <PriceComponents />
      <WhatWillYouGetWhenOrdering />
      <Description currentItem={currentItem} />
      {currentItem?.isUnique && <AdditionalOptions activeOptions={additionalOptions} setActiveOption={handleNewAdditionalOption} />}
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