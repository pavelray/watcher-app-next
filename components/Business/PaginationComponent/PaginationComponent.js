import React from "react";
import Pagination from "../../UI/Pagination/Pagination";
import { style } from "./PaginationComponent.style";

const PaginationComponent = ({ children, ...pageProps }) => {
  console.log(pageProps);
  return (
    <div className="pagination-wrapper">
      {/* <Pagination {...pageProps} /> */}
      {children}
      <Pagination {...pageProps} />
      <style jsx>{style}</style>
    </div>
  );
};

export default PaginationComponent;
