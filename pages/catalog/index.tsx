import Breadcrumbs from "@/ui/breadcrumbs";
import { BreadcrumbsItemType } from "@/ui/breadcrumbs/item";
import Head from "next/head";
import { FC, useState } from "react";
import UniqueOffer from "@/ui/uniqueOffers";
import useWhereQuery from "@/hooks/useWhereQuery";
import Settings from "@/pageComponents/catalog/settings";
import StartPriceFrom from "@/pageComponents/catalog/settings/startPriceFrom";
import Products from "@/pageComponents/catalog/products";
import { itemsAPI } from "@/firebase";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ProductType } from "@/pageComponents/catalog/products/item";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import catalogQueryHelper from "@/helpers/catalogQueryHelper";

export type PriceFromType = string | null; //'Ascending' | 'Descending'
export type SecurityItemType = ProductType["security"] | null;

type Props = {
  itemsPerPage?: number;
} & InferGetStaticPropsType<typeof getStaticProps>;

const CatalogPage: FC<Props> = ({ products = [], itemsPerPage = 3 }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbsItemType[]>(
    []
  );
  const startPriceFromItem = searchParams.get("startPriceFrom");
  const activeSecurityItem = searchParams.get("security");
  const activeCategoryItems = {
    price: searchParams.getAll("price"),
    finishing: searchParams.getAll("finishing"),
    color: searchParams.getAll("color"),
  };

  const { query: whereQuery } = useWhereQuery(
    { name: "Catalog" },
    setBreadcrumbItems
  );
  const [forcePage, setForcePage] = useState<number | undefined>(undefined);

  const resetSettings = async () => {
    setBreadcrumbItems((prev) =>
      prev.filter((i) => !i.href?.includes("?where"))
    );
  };

  const setActiveCategoryItem = async (category: string, newItems: string[]) => {
    await router.push({
      query: catalogQueryHelper(category, newItems, router.query, false, ['offset'])
    });
    setForcePage(0);
  };

  return (
    <>
      <Head>
        <title>Catalog | Doorastos</title>
        <meta name="description" content="Doorastos - catalog page" />
      </Head>
      <main>
        <Breadcrumbs items={breadcrumbItems} />
        <Settings
          resetSettings={resetSettings}
          activeLink={whereQuery}
          activeSecurityItem={activeSecurityItem}
          activeCategoryItems={activeCategoryItems}
          setActiveCategoryItem={setActiveCategoryItem}
          allItems={products}
        />
        <StartPriceFrom activeItem={startPriceFromItem} />
        <Products
          itemsPerPage={itemsPerPage}
          allItems={products}
          activeSecurityItem={activeSecurityItem}
          startPriceFromItem={startPriceFromItem}
          whereItem={whereQuery}
          activeCategoryItems={activeCategoryItems}
          forcePage={forcePage}
          setForcePage={setForcePage}
        />
        <UniqueOffer />
      </main>
    </>
  );
};

export default CatalogPage;

export const getStaticProps: GetStaticProps<{
  products: ProductType[];
}> = async () => {
  let products = (await itemsAPI.get("products")) as ProductType[];

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24, //revalidate after 24 hours
  };
};
