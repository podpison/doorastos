import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Item, { ProductType } from "./item";
import NothingFound from "./nothingFound";
import getPriceWithDiscount from "@/helpers/getPriceWithDiscount";
import Pagination from "@/ui/pagination";
import { PriceFromType } from "@/pages/catalog";
import { ActiveCategoryItemsType } from "../settings/filter/categories/item";
import textToURL from "@/helpers/textToURL";

type Props = {
  itemsPerPage?: number;
  allItems: ProductType[];
  activeSecurityItem: string | null;
  startPriceFromItem: PriceFromType;
  whereItem: string | string[] | undefined;
  activeCategoryItems: ActiveCategoryItemsType;
  isPaginationReset: boolean;
  setIsPaginationReset: Dispatch<SetStateAction<boolean>>;
};

const Products: FC<Props> = ({
  itemsPerPage = 3,
  allItems = [],
  activeSecurityItem,
  startPriceFromItem,
  whereItem,
  activeCategoryItems,
  isPaginationReset,
  setIsPaginationReset,
}) => {
  const [items, setItems] = useState<ProductType[]>(allItems); //filtred items
  const [itemsPortion, setItemsPortion] = useState<ProductType[]>(items); //portion of filtred items
  let Items = itemsPortion.map((i) => <Item {...i} key={i.id} />);

  useEffect(() => {
    let itemsCopy = [...allItems];
    let filtredBySecurity =
      activeSecurityItem !== null
        ? itemsCopy.filter((i) => textToURL(i.security) === activeSecurityItem)
        : itemsCopy;

    let filtredByPrice =
      startPriceFromItem !== null
        ? filtredBySecurity.sort((a, b) => {
            let aPriceWithDiscount = getPriceWithDiscount(
              a.price,
              a?.discount?.value
            );
            let bPriceWithDiscount = getPriceWithDiscount(
              b.price,
              b?.discount?.value
            );

            return startPriceFromItem === "ascending"
              ? aPriceWithDiscount - bPriceWithDiscount
              : bPriceWithDiscount - aPriceWithDiscount;
          })
        : filtredBySecurity;

    let filtredByWhere =
      typeof whereItem === "string"
        ? filtredByPrice.filter((i) => i.where === whereItem)
        : filtredByPrice;

    const allCategoryItems = activeCategoryItems["price"]
      .concat(activeCategoryItems["finishing"])
      .concat(activeCategoryItems["color"]);
    let filtredByCategoryItems =
      allCategoryItems.length !== 0
        ? filtredByWhere.filter((item) => {
            const allCategories: {
              category: "price" | "color" | "finishing";
              items: string[];
            }[] = [
              {
                category: "price",
                items: activeCategoryItems["price"],
              },
              {
                category: "finishing",
                items: activeCategoryItems["finishing"],
              },
              {
                category: "color",
                items: activeCategoryItems["color"],
              },
            ]; //convert to format that the code below supports (cause: code refactor)

            let filtredCategoryItems = allCategories.filter((c) =>
              c.items.some((ci) => {
                if (c.category === "price") {
                  let priceRange = ci.includes("—")
                    ? ci
                        .split("—")
                        .map((p) => p.replace("₽", ""))
                        .map((p) => Number(p)) //for a range
                    : Number(ci.replace("₽AndMore", "").replace(" ", "")); //for one price

                  if (typeof priceRange === "number") {
                    return priceRange < item.price;
                  }

                  return (
                    priceRange[0] <= item.price && item.price <= priceRange[1]
                  );
                }

                return ci === textToURL(item[c.category]);
              })
            );

            return (
              filtredCategoryItems.length ===
              allCategories.filter((c) => c.items.length !== 0).length
            ); //check if a product has all the selected settings
          })
        : filtredByWhere;

    setItems(filtredByCategoryItems);
  }, [
    allItems,
    activeSecurityItem,
    startPriceFromItem,
    whereItem,
    activeCategoryItems,
  ]);

  useEffect(() => {
    if (isPaginationReset) {
      setItemsPortion(items.slice(0, itemsPerPage));
    }
  }, [items, itemsPerPage, isPaginationReset]);

  if (items.length === 0) {
    return <NothingFound />;
  }

  return (
    <div>
      <div
        className="grid gap-y-5 mt-10 esm:grid-cols-2 esm:gap-x-5 md:gap-x-10 smlg:grid-cols-3 smlg:gap-x-4 lg:gap-x-10"
        aria-label="Products"
      >
        {Items}
      </div>
      <Pagination
        items={items}
        setItems={(items) => setItemsPortion(items as ProductType[])}
        itemsPerPage={itemsPerPage}
        isReset={isPaginationReset}
        setIsReset={setIsPaginationReset}
      />
    </div>
  );
};

export default Products;
