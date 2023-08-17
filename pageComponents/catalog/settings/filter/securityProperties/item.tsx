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

const Item: FC<Props> = ({ text, info, activeItem, allQueries }) => {
  const [isAIDOpen, setIsAIDOpen] = useState(false); //AID - additional item dialog

  let isActive = activeItem === textToURL(text);

  const handleAIDStatus = () => setIsAIDOpen((prev) => !prev);

  return (
    <Link
      className={cn(
        "group flex items-center justify-between gap-x-2 w-full border-y cursor-pointer transition-colors hover:border-grey2 active:border-grey2 lg:gap-x-2",
        isActive ? "border-grey2" : "border-line"
      )}
      href={{
        query: catalogQueryHelper('security', text, allQueries, isActive)
      }}
    >
      <div
        className="flex items-center gap-x-2 w-full"
        aria-label={`set ${text} security property`}
      >
        <Checkbox checked={isActive} variant="single" id={text} />
        <label
          className="transition-colors text-grey1 text-[14px] w-full cursor-pointer py-2.5 group-hover:text-black"
          htmlFor={text}
        >
          {text}
        </label>
      </div>
      <AdditionalInfoDialog
        open={isAIDOpen}
        onOpenChange={(status) => setIsAIDOpen(status)}
        openDialog={handleAIDStatus}
        heading={text}
        {...info}
      />
    </Link>
  );
};

export default Item;
