import Breadcrumbs from "@/components/breadcrumbs";
import { BreadcrumbsItemType } from "@/components/breadcrumbs/item";
import Head from "next/head";
import { FC, useState } from "react";
import { ProductType } from "@/redux/reducers/static";
import { useSelector } from "react-redux";
import { selectProductItems } from "@/redux/selectors";
import UniqueOffer from "@/components/uniqueOffers";
import useWhereQuery from "@/hooks/useWhereQuery";
import { ActiveCategoryItemType } from "@/ui/catalog/settings/filter/categories/item";
import Settings from "@/ui/catalog/settings";
import StartPriceFrom from "@/ui/catalog/settings/startPriceFrom";
import Products from "@/ui/catalog/products";

export type PriceFromType = ('Ascending' | 'Descending') | null
export type SecurityItemType = ProductType['security'] | null

type Props = {
  itemsPerPage?: number
}

const CatalogPage: FC<Props> = ({ itemsPerPage = 3 }) => {
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
        itemsPerPage={itemsPerPage}
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