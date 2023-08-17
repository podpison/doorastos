import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import Arrow from "./arrow";
import useResize from "@/hooks/useResize";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import catalogQueryHelper from "@/helpers/catalogQueryHelper";
import { useIsMount } from "@/hooks/useIsMount";

type Props = {
  items: object[];
  setItems: (items: object[]) => void;
  itemsPerPage: number;
  isReset?: boolean;
  setIsReset?: Dispatch<SetStateAction<boolean>>;
};

const Pagination: FC<Props> = ({
  items,
  setItems,
  itemsPerPage,
  isReset,
  setIsReset,
}) => {
  const windowWidth = useResize();
  const router = useRouter();
  const isMount = useIsMount(); //prevents page offest from being removed while mouning
  const searchParams = useSearchParams();
  const [shouldForcePage, setShouldForcePage] = useState(true);
  const [forcePage, setForcePage] = useState<number | undefined>(undefined);

  const itemOffset = Number(searchParams.get("offset")) || 0;
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  const handlePageClick: ReactPaginateProps["onPageChange"] = async (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    await router.push({
      query: catalogQueryHelper(
        "offset",
        String(newOffset),
        router.query,
        newOffset === 0
      ),
    });
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    setItems(currentItems);
  }, [itemOffset]);

  useEffect(() => {
    if (setIsReset && !isMount) {
      setIsReset(true);
    }
  }, [items.length]);

  useEffect(() => {
    const callback = async () => {
      if (setIsReset && isReset) {
        setIsReset(false);

        await router.push({
          query: catalogQueryHelper("offset", "0", router.query, true),
        });
      }
    };

    callback();
  }, [isReset, setIsReset]);

  useEffect(() => {
    setForcePage(isReset ? 0 : undefined);
  }, [isReset]);

  useEffect(() => {
    if (!shouldForcePage && itemOffset === 0) return;

    setForcePage(itemOffset / itemsPerPage);
    setShouldForcePage(false);
  }, [shouldForcePage, itemOffset]);

  useEffect(() => {
    if (forcePage) {
      setForcePage(undefined);
    }
  }, [forcePage]);

  if (pageCount <= 1) {
    return <></>;
  }

  return (
    <ReactPaginate
      className="flex items-center gap-x-4 w-fit mx-auto mt-20 esm:gap-x-8"
      pageClassName="text-esm text-grey2 transition-colors hover:text-grey1"
      activeClassName="font-bold [&>a]:text-black"
      disabledClassName="opacity-70 pointer-events-none"
      breakLabel={
        <p className="text-grey2 transition-colors hover:text-grey1">...</p>
      }
      nextLabel={<Arrow className="rotate-90" />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={windowWidth > 768 ? 5 : 3}
      marginPagesDisplayed={windowWidth > 768 ? 3 : 1}
      pageCount={pageCount}
      previousLabel={<Arrow className="-rotate-90" />}
      renderOnZeroPageCount={null}
      forcePage={forcePage}
    />
  );
};

export default Pagination;
