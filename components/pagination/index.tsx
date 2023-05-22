import React, { Component, Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import Arrow from './arrow';
import useResize from '@/hooks/useResize';

type Props = {
  items: object[]
  setItems: (items: object[]) => void
  itemsPerPage: number
  isReset?: boolean
  setIsReset?: Dispatch<SetStateAction<boolean>>
}

const Pagination: FC<Props> = ({ items, setItems, itemsPerPage, isReset, setIsReset }) => {
  let windowWidth = useResize();
  const [itemOffset, setItemOffset] = useState(0);

  const pageCount = Math.ceil(items?.length / itemsPerPage);

  const handlePageClick: ReactPaginateProps['onPageChange'] = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    setItems(currentItems);
  }, [itemOffset]);

  useEffect(() => {
    setIsReset && setIsReset(false);
  }, [isReset, setIsReset]);

  return <ReactPaginate
    className='flex items-center gap-x-4 w-fit mx-auto mt-20 esm:gap-x-8'
    pageClassName='text-esm text-grey2 transition-colors hover:text-grey1'
    activeClassName='font-bold [&>a]:text-black'
    disabledClassName='opacity-70 pointer-events-none'
    breakLabel={<p className='text-grey2 transition-colors hover:text-grey1'>...</p>}
    nextLabel={<Arrow className='rotate-90' />}
    onPageChange={handlePageClick}
    pageRangeDisplayed={windowWidth > 768 ? 5 : 3}
    marginPagesDisplayed={windowWidth > 768 ? 3 : 1}
    pageCount={pageCount}
    previousLabel={<Arrow className='-rotate-90' />}
    renderOnZeroPageCount={null}
    forcePage={isReset ? 0 : undefined}
  />
};

export default Pagination;