import React from "react";
import Pagination from "../../UI/Pagination/Pagination";
import { style } from "./PaginationComponent.style";

const PaginationComponent = ({ children, ...pageProps }) => {
  const { totalResults, totalPages } = pageProps;
  return (
    <div className="pagination-wrapper">
      {/* <Pagination {...pageProps} /> */}
      {children}
      {totalResults > 0 && totalPages > 1 && <Pagination {...pageProps} />}
      <style jsx>{style}</style>
    </div>
  );
};

export default PaginationComponent;
