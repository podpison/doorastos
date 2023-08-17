import Checkbox from "@/ui/checkbox";
import { PriceFromType } from "@/pages/catalog";
import { FC } from "react";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

type Props = {
  text: PriceFromType;
  checkedItem: PriceFromType;
  allQueries: ParsedUrlQuery;
  resetPagination: (isReset: boolean) => void;
};

const Item: FC<Props> = ({
  text,
  checkedItem,
  allQueries,
  resetPagination,
}) => {
  const handleClick = () => {
    resetPagination(true);
  };

  return (
    <Link
      className="group flex items-center gap-x-2 cursor-pointer"
      href={{
        query: {
          ...allQueries,
          startPriceFrom: checkedItem === text ? null : text,
        },
      }}
      onClick={handleClick}
    >
      <Checkbox
        checked={text === checkedItem}
        variant="single"
        id={text || ""}
      />
      <label
        className="text-tiny text-grey1 transition-colors cursor-pointer group-hover:text-black"
        htmlFor={text || ""}
      >
        Price {text?.toLowerCase()}
      </label>
    </Link>
  );
};

export default Item;
