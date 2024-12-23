"use client";

import React from "react";
import { PaginationContainer, PageButton, PageInfo } from "./Pagination.styles";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </PageButton>
      <PageInfo>
        Page {currentPage} of {totalPages}
      </PageInfo>
      <PageButton
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
