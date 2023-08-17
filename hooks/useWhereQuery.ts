import { ProductType } from "@/pageComponents/catalog/products/item";
import { BreadcrumbsItemType } from "@/ui/breadcrumbs/item";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";

type SetBreadcrumbsItemsType = Dispatch<SetStateAction<BreadcrumbsItemType[]>>;
type defaultItemType = {
  name: string;
};

export type WhereType = ProductType["where"] | undefined;

//the purpose of this hook is to help with handling breadcrumbs with the 'where' query
const useWhereQuery = (
  defaultItems: defaultItemType | defaultItemType[],
  setBreadcrumbsItems: SetBreadcrumbsItemsType,
  initialItem?: defaultItemType
) => {
  const router = useRouter();

  useEffect(() => {
    let whereQuery = router.query?.where;
    let dynamicItems = new Map(); //'where' query
    let items = Array.isArray(defaultItems)
      ? [...defaultItems]
      : [defaultItems];

    if (typeof whereQuery === 'string') {

      dynamicItems.set("where", {
        name:
          whereQuery === "house"
            ? "Doors to the house"
            : "Doors to the apartment",
        query: {
          ...router.query,
          where: whereQuery
        }
      });
      items.push(dynamicItems.get("where"));
    } else {
      initialItem && items.push(initialItem);
    }

    setBreadcrumbsItems(items);
  }, [router.query]);

  return {
    query: router.query?.where,
  };
};

export default useWhereQuery;
