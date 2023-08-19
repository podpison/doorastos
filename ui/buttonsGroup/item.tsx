import Link from "next/link";
import { FC } from "react";
import cn from "classnames";
import { ParsedUrlQuery } from "querystring";
import catalogQueryHelper from "@/helpers/catalogQueryHelper";

type Props = {
  text: string;
  where: string;
  activeLink: string | string[] | undefined;
  allQueries: ParsedUrlQuery;
  onClick?: () => void;
  scroll?: boolean;
};

const Item: FC<Props> = ({
  text,
  where,
  activeLink,
  allQueries,
  onClick,
  scroll,
}) => {
  let isActive = activeLink === where;

  return (
    <Link
      className={cn(
        "text-esm w-full text-center transition-colors p-2.5 active:bg-blue2 active:text-white",
        isActive ? "bg-blue1 text-white" : "bg-line text-black hover:bg-grey4"
      )}
      href={{
        query: catalogQueryHelper("where", where, allQueries, isActive, [
          "offset",
        ]),
      }}
      onClick={onClick}
      scroll={scroll}
    >
      {text}
    </Link>
  );
};

export default Item;
