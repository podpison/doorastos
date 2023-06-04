import Breadcrumbs from "@/components/breadcrumbs";
import { BreadcrumbsItemType } from "@/components/breadcrumbs/item";
import Head from "next/head";
import { FC, useState } from "react";
import Products from "./catalogComponents/products";
import { ProductType } from "@/redux/reducers/static";
import { useSelector } from "react-redux";
import { selectProductItems } from "@/redux/selectors";
import UniqueOffer from "@/components/uniqueOffers";
import useWhereQuery from "@/hooks/useWhereQuery";
import { ActiveCategoryItemType } from "./catalogComponents/settings/filter/categories/item";
import Settings from "./catalogComponents/settings";
import StartPriceFrom from "./catalogComponents/settings/startPriceFrom";

export type PriceFromType = ('Ascending' | 'Descending') | null
export type SecurityItemType = ProductType['security'] | null

const CatalogPage: FC = () => {
  const products = useSelector(selectProductItems);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbsItemType[]>([]);
  const [startPriceFromItem, setStartPriceFromItem] = useState<PriceFromType>(null);
  const [activeSecurityItem, setActiveSecurityItem] = useState<SecurityItemType>(null);
  const [activeCategoryItems, setActiveCategoryItems] = useState<ActiveCategoryItemType[]>([]);
  const { where } = useWhereQuery({ name: 'Catalog' }, breadcrumbItems, setBreadcrumbItems);
  const [isPaginationReset, setIsPaginationReset] = useState(false);

  const resetSettings = () => {
    setBreadcrumbItems(prev => prev.filter(i => !i.href?.includes('?where')));
    setStartPriceFromItem(null);
    setActiveSecurityItem(null);
    setActiveCategoryItems([]);
    setIsPaginationReset(true);
  };
  const setActiveCategoryItem = (category: ActiveCategoryItemType['category'], newItems: string[]) => {
    let categoryIndex = activeCategoryItems.findIndex(c => c.category === category);

    if (categoryIndex !== -1) {
      setActiveCategoryItems(prev => {
        let copy = [...prev];

        if (newItems.length !== 0) {
          copy[categoryIndex].items = newItems;
        } else {
          copy = copy.filter(i => i.category !== category);
        };

        return copy;
      })
    } else {
      setActiveCategoryItems(prev => [
        ...prev,
        {
          category,
          items: newItems
        }
      ]);
    }
  };

  return <>
    <Head>
      <title>Catalog | Doorastos</title>
      <meta name="description" content="Doorastos - catalog page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="2bco0LV7y4a5e4a_swVe81p-di_E3EGC49h3OvMjp0I" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Breadcrumbs items={breadcrumbItems} />
      <Settings
        resetSettings={resetSettings}
        activeLink={where}
        activeSecurityItem={activeSecurityItem}
        setActiveSecurityItem={setActiveSecurityItem}
        activeCategoryItems={activeCategoryItems}
        setActiveCategoryItem={setActiveCategoryItem}
      />
      <StartPriceFrom
        activeItem={startPriceFromItem}
        setActiveItem={setStartPriceFromItem}
      />
      <Products
        itemsPerPage={3}
        allItems={products}
        activeSecurityItem={activeSecurityItem}
        startPriceFromItem={startPriceFromItem}
        whereItem={where}
        activeCategoryItems={activeCategoryItems}
        isPaginationReset={isPaginationReset}
        setIsPaginationReset={setIsPaginationReset}
      />
      <UniqueOffer />
    </main>
  </>
}

export default CatalogPage;