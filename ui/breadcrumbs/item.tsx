import Link from "next/link";
import { FC } from "react";
import cn from "classnames";
import textToURL from "@/helpers/textToURL";
import { ParsedUrlQuery } from "querystring";

export type BreadcrumbsItemType = {
  name: string;
  href?: string;
  query?: ParsedUrlQuery;
};

type Props = {
  id: number;
  isLast?: boolean;
} & BreadcrumbsItemType;

const Item: FC<Props> = ({ name, href, query, id, isLast }) => {

  return (
    <div className="flex items-center gap-x-2">
      {id !== 0 && <p className="text14 text-grey2">/</p>}
      <Link
        className={cn(
          "text14 transition-colors hover:text-blue1 active:text-blue2",
          isLast ? "text-grey1" : "text-grey2"
        )}
        href={{
          href: href || textToURL(name),
          query: {
            ...query
          }
        }}
      >
        {name}
      </Link>
    </div>
  );
};

export default Item;
