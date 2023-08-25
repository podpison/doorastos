import React, { Component, FC, useEffect, useRef } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import Arrow from "./arrow";
import useResize from "@/hooks/useResize";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import catalogQueryHelper from "@/helpers/catalogQueryHelper";

type Props = {
  items: object[];
  setItems: (items: object[]) => void;
  itemsPerPage: number;
  forcePage?: number | undefined;
  setForcePage?: (page: number | undefined) => void;
};

const Pagination: FC<Props> = ({
  items,
  setItems,
  itemsPerPage,
  forcePage,
  setForcePage,
}) => {
  const paginationRef = useRef<Component<ReactPaginateProps, any, any>>(null);
  const windowWidth = useResize();
  const router = useRouter();
  const searchParams = useSearchParams();

  const itemOffset = Number(searchParams.get("offset")) || 0;
  const pageCount = Math.ceil(items?.length / itemsPerPage);
  const urlCurrnetPage = itemOffset / itemsPerPage;

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
  }, [itemOffset, items]);

  useEffect(() => {
    if (!paginationRef.current || !setForcePage) return;

    let currentPage = paginationRef.current.state.selected;

    if (pageCount <= urlCurrnetPage) {
      setForcePage(0);
      return;
    }

    if (currentPage !== urlCurrnetPage) {
      setForcePage(urlCurrnetPage);
    }
  }, [paginationRef, urlCurrnetPage, pageCount]);

  useEffect(() => {
    //cleanup
    if (forcePage === undefined || !setForcePage) return;

    setForcePage(undefined);
  }, [forcePage, setForcePage]);

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
      ref={paginationRef}
    />
  );
};

export default Pagination;
