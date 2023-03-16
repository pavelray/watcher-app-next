/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { style } from "./Pagination.style";

const Pagination = ({
  totalPages = 500,
  selectedPage = 1,
  pagesToShow = 4,
  onPageClick,
}) => {
  
  const [pageData, setPageData] = useState([]);
  const pages = Array(totalPages)
    .fill(0)
    .map((_, i) => 1 * i + 1);

  const getPageArray = () => {
    if (selectedPage < pagesToShow && pagesToShow !== totalPages) {
      return [...pages.slice(0, pagesToShow - 1), "..", ...pages.slice(-1)];
    } else if (
      selectedPage >= pagesToShow &&
      selectedPage <= totalPages - pagesToShow
    ) {
      return [
        ...pages.slice(0, 1),
        "..",
        ...pages.slice(
          selectedPage - pagesToShow / 2,
          selectedPage + pagesToShow / 2
        ),
        "..",
        ...pages.slice(-1),
      ];
    } else if (
      selectedPage > totalPages - pagesToShow &&
      pagesToShow !== totalPages
    ) {
      return [
        ...pages.slice(0, 1),
        "..",
        ...pages.slice(totalPages - pagesToShow),
      ];
    } else {
      return pages;
    }
  };

  const goPrev = () => {
    if (selectedPage - 1 >= 1) onPageClick(selectedPage - 1);
  };

  const goNext = () => {
    if (selectedPage + 1 <= totalPages) onPageClick(selectedPage + 1);
  };

  const handleClick = (event) => {
    const { textContent } = event.target;
    const value = isNaN(+textContent) ? textContent : +textContent;

    onPageClick(value);
  };

  useEffect(() => {
    const result = getPageArray();
    setPageData(result);
  }, [totalPages, selectedPage]);

  return (
    <Fragment>
      <div className="pagination">
        <ul>
          <li onClick={goPrev} className="list-item">
            &lt;
          </li>
          {pageData.map((page, index) => {
            let listClassName = "list-item";
            if (page === selectedPage) {
              listClassName += " active";
            }
            if (page === "..") {
              listClassName = "";
            }
            return (
              <li
                onClick={handleClick}
                className={listClassName}
                key={`page_${uuidv4()}`}
              >
                <span onClick={handleClick} value={page}>
                  {page}
                </span>
              </li>
            );
          })}
          <li onClick={goNext} className="list-item">
            &gt;
          </li>
        </ul>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Pagination;
