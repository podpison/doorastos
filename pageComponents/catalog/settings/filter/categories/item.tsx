import Dropdown from "@/ui/dropdown";
import { DropdownCheckboxItemType } from "@/ui/dropdown/checkboxItem";
import { Dispatch, FC, SetStateAction } from "react";

export type ActiveCategoryItemsType = {
  price: string[];
  finishing: string[];
  color: string[];
};

type Props = {
  defaultItem: string;
  expandedItem: string | null;
  setExpandedItem: Dispatch<SetStateAction<string | null>>;
  items: DropdownCheckboxItemType[];
  activeItems: ActiveCategoryItemsType;
  setActiveItem: (category: string, newItems: string[]) => void;
};

const Item: FC<Props> = ({
  defaultItem,
  expandedItem,
  setExpandedItem,
  items,
  activeItems,
  setActiveItem,
}) => {
  return (
    <Dropdown
      defaultItem={defaultItem}
      isExpanded={expandedItem === defaultItem}
      setIsExpanded={setExpandedItem}
      items={items}
      activeItems={
        activeItems[
          defaultItem.toLowerCase() as keyof ActiveCategoryItemsType
        ] || []
      }
      setActiveItem={
        setActiveItem as (category: string, newItems: string[]) => void
      } // it's unnecessary to be strict here
    />
  );
};

export default Item;
