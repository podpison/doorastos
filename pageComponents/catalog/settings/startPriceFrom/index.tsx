import { FC } from "react";
import Item from "./item";
import { PriceFromType } from "@/pages/catalog";
import { useRouter } from "next/router";

type Props = {
  activeItem: PriceFromType;
  resetPagination: (isReset: boolean) => void;
};

const items = ["Ascending", "Descending"];

const StartPriceFrom: FC<Props> = ({ activeItem, resetPagination }) => {
  const router = useRouter();

  let Items = items.map((i) => (
    <Item
      text={i}
      checkedItem={activeItem}
      allQueries={router.query}
      resetPagination={resetPagination}
      key={i}
    />
  ));

  return (
    <div className="flex gap-x-4 mt-10 esm:gap-x-10 esm:mt-16">{Items}</div>
  );
};

export default StartPriceFrom;
