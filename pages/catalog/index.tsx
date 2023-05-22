import Breadcrumbs from "@/components/breadcrumbs";
import { BreadcrumbsItemType } from "@/components/breadcrumbs/item";
import Head from "next/head";
import { FC, useState } from "react";
import Settings from "./settings";
import StartPriceFrom from "./settings/startPriceFrom";
import { ActiveCategoryItemType } from "./settings/filter/categories/item";
import Products from "./products";
import { ProductType } from "@/redux/reducers/static";
import { useSelector } from "react-redux";
import { selectProductItems } from "@/redux/selectors";
import UniqueOffer from "@/components/uniqueOffers";
import useWhereQuery from "@/hooks/useWhereQuery";

export type PriceFromType = ('Ascending' | 'Descending') | null
export type SecurityItemType = ProductType['security'] | null

const CatalogPage: FC = () => {
  const products = useSelector(selectProductItems);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbsItemType[]>([]);
  const [startPriceFromItem, setStartPriceFromItem] = useState<PriceFromType>(null);
  const [activeSecurityItem, setActiveSecurityItem] = useState<SecurityItemType>(null);
  const [activeCategoryItems, setActiveCategoryItems] = useState<ActiveCategoryItemType[]>([]);
  const { where } = useWhereQuery({ name: 'Catalog' }, breadcrumbItems, setBreadcrumbItems);

  const resetSettings = () => {
    setBreadcrumbItems(prev => prev.filter(i => !i.href?.includes('?where')));
    setStartPriceFromItem(null);
    setActiveSecurityItem(null);
    setActiveCategoryItems([]);
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
      />
      <UniqueOffer />
    </main>
  </>
}

export default CatalogPage;