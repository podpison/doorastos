import { BreadcrumbsItemType } from "@/components/breadcrumbs/item";
import { ProductType } from "@/redux/reducers/static";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect } from "react";

type SetBreadcrumbsItemsType = Dispatch<SetStateAction<BreadcrumbsItemType[]>>
type defaultItemType = {
  name: string
}

export type WhereType = ProductType['where'] | undefined

//the purpose of this hook is to help with handling breadcrumbs with 'where' query 
const useWhereQuery = (
  defaultItem: defaultItemType,
  breadcrumbsItems: BreadcrumbsItemType[],
  setBreadcrumbsItems: SetBreadcrumbsItemsType,
  initialItem?: defaultItemType
) => {
  const router = useRouter();

  useEffect(() => {
    let whereQuery = router.query?.where;
    let dynamicItems = new Map(); //'where' query 
    let items = [
      defaultItem,
    ];

    if (whereQuery) {
      dynamicItems.set('where', { name: whereQuery === 'house' ? 'Doors to the house' : 'Doors to the apartment', href: `?where=${whereQuery}` });
      items.push(dynamicItems.get('where'));
    } else {
      initialItem && items.push(initialItem);
    }

    setBreadcrumbsItems(items);
  }, [router.query]);

  let whereItem = breadcrumbsItems.find(i => i.href?.includes('where'))?.href?.replace('?where=', '') as WhereType;

  return {
    query: router.query?.where,
    where: whereItem,
  }
};

export default useWhereQuery;