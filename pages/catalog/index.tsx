import Breadcrumbs from "@/ui/breadcrumbs";
import { BreadcrumbsItemType } from "@/ui/breadcrumbs/item";
import Head from "next/head";
import { FC, useState } from "react";
import UniqueOffer from "@/ui/uniqueOffers";
import useWhereQuery from "@/hooks/useWhereQuery";
import { ActiveCategoryItemsType } from "@/pageComponents/catalog/settings/filter/categories/item";
import Settings from "@/pageComponents/catalog/settings";
import StartPriceFrom from "@/pageComponents/catalog/settings/startPriceFrom";
import Products from "@/pageComponents/catalog/products";
import { itemsAPI } from "@/firebase";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ProductType } from "@/pageComponents/catalog/products/item";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import textToURL from "@/helpers/textToURL";

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
  const [isPaginationReset, setIsPaginationReset] = useState(false);

  const resetSettings = async () => {
    await router.push("/catalog") //redirect MUST be finished first
    setIsPaginationReset(true);
    setBreadcrumbItems((prev) =>
      prev.filter((i) => !i.href?.includes("?where"))
    );
  };

  const setActiveCategoryItem = async (category: string, newItems: string[]) => {
    await router.push({
      query: {
        ...router.query,
        [category]: newItems,
      },
    });
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
        <StartPriceFrom activeItem={startPriceFromItem} resetPagination={setIsPaginationReset} />
        <Products
          itemsPerPage={itemsPerPage}
          allItems={products}
          activeSecurityItem={activeSecurityItem}
          startPriceFromItem={startPriceFromItem}
          whereItem={whereQuery}
          activeCategoryItems={activeCategoryItems}
          isPaginationReset={isPaginationReset}
          setIsPaginationReset={setIsPaginationReset}
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
