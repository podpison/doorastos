import { FC } from "react";
import Item, { BreadcrumbsItemType } from "./item";
import textToURL from "@/helpers/textToURL";

type Props = {
  items: BreadcrumbsItemType[];
};

const Breadcrumbs: FC<Props> = ({ items }) => {
  let formattedItems = items.map((i, index, arr) => {
    return {
      ...i,
      href: i.href
        ? "/" +
          arr
            .slice(0, index + 1)
            .map((i) => i.href || textToURL(i.name))
            .join("/")
        : undefined,
    };
  }); //add previous items to each item

  let Items = formattedItems.map((i, index, arr) => (
    <Item {...i} isLast={arr.length === index + 1} id={index + 1} key={index} />
  ));

  return (
    <section className="mb-7">
      <nav
        className="flex items-center flex-wrap gap-x-2 gap-y-1"
        aria-label="Breadcrumbs"
      >
        <Item name="Expert" href="/" id={0} />
        {Items}
      </nav>
    </section>
  );
};

export default Breadcrumbs;
