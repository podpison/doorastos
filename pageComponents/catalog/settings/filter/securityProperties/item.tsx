import Checkbox from "@/ui/checkbox";
import AdditionalInfoDialog, {
  AdditionalInfoType,
} from "@/ui/dialogs/additionalInfoDialog";
import { FC, useState } from "react";
import cn from "classnames";
import { ProductType } from "@/pageComponents/catalog/products/item";
import Link from "next/link";
import textToURL from "@/helpers/textToURL";
import { ParsedUrlQuery } from "querystring";
import catalogQueryHelper from "@/helpers/catalogQueryHelper";

type Props = {
  text: ProductType["security"];
  info: AdditionalInfoType;
  activeItem: string | null;
  allQueries: ParsedUrlQuery;
};

const Item: FC<Props> = ({
  text,
  info,
  activeItem,
  allQueries,
}) => {
  const [isAIDOpen, setIsAIDOpen] = useState(false); //AID - additional item dialog

  let isActive = activeItem === textToURL(text);

  const handleAIDStatus = () => setIsAIDOpen((prev) => !prev);

  return (
    <div
      className={cn(
        "group flex items-center justify-between w-full border-y transition-colors pr-1 hover:border-grey2 active:border-grey2",
        isActive ? "border-grey2" : "border-line"
      )}
    >
      <Link
        className="flex items-center gap-x-2 w-full cursor-pointer"
        href={{
          query: catalogQueryHelper("security", text, allQueries, isActive, [
            "offset",
          ]),
        }}
        aria-label={`set ${text} security property`}
        scroll={false}
      >
        <Checkbox checked={isActive} variant="single" id={text} />
        <label
          className="transition-colors text-grey1 text-[14px] w-full cursor-pointer py-2.5 group-hover:text-black"
          htmlFor={text}
        >
          {text}
        </label>
      </Link>
      <AdditionalInfoDialog
        open={isAIDOpen}
        onOpenChange={(status) => setIsAIDOpen(status)}
        openDialog={handleAIDStatus}
        heading={text}
        {...info}
      />
    </div>
  );
};

export default Item;
