import { FC } from "react";
import Item from "./item";
import cn from "classnames";
import { useRouter } from "next/router";

export type ButtonsGroupItemType = {
  text: string;
  where: string;
};

type Props = {
  activeLink: string | string[] | undefined;
  items: ButtonsGroupItemType[];
  className?: string;
  onItemClick?: () => void;
  itemScroll?: boolean;
};

const ButtonsGroup: FC<Props> = ({
  activeLink,
  items,
  className,
  onItemClick,
  itemScroll,
}) => {
  const router = useRouter();

  let Items = items.map((i, index) => (
    <Item
      activeLink={activeLink}
      allQueries={router.query}
      onClick={onItemClick}
      scroll={itemScroll}
      {...i}
      key={index}
    />
  ));

  return (
    <div className={cn("flex w-full md:h-fit max-md:mt-5", className)}>
      {Items}
    </div>
  );
};

export default ButtonsGroup;
