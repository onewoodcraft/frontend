'use client';
import { useEffect, useState } from "react";
import { PaginationNext, PaginationPrev } from "@/svg";

const Pagination = ({
  items = [],
  countOfPage = 12,
  paginatedData,
  currPage,
  setCurrPage,
}) => {
  const safeItems = Array.isArray(items) ? items : [];
  const pageStart = (currPage - 1) * countOfPage;
  const totalPage = Math.ceil(safeItems.length / countOfPage);

  function setPage(idx) {
    if (idx <= 0 || idx > totalPage) {
      return;
    }
    setCurrPage(idx);
    window.scrollTo(0, 0);
    paginatedData(safeItems, pageStart, countOfPage);
  }

  useEffect(() => {
    paginatedData(safeItems, pageStart, countOfPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeItems, pageStart, countOfPage]);

  return (
    <nav>
      {totalPage > 1 && (
        <ul>
          <li>
            <button
              onClick={() => setPage(currPage - 1)}
              className={`tp-pagination-prev prev page-numbers ${
                currPage === 1 && "disabled"
              }`}
            >
              <PaginationPrev />
            </button>
          </li>

          {Array.from({ length: totalPage }, (_, i) => i + 1).map((n) => (
            <li key={n} onClick={() => setPage(n)}>
              <span className={`${currPage === n ? "current" : ""}`}>{n}</span>
            </li>
          ))}

          <li>
            <button
              onClick={() => setPage(currPage + 1)}
              className={`next page-numbers ${
                currPage === totalPage ? "disabled" : ""
              }`}
            >
              <PaginationNext />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
