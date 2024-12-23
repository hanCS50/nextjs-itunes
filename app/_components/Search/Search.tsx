"use client";

import React, { useState, useCallback } from "react";
import { debounce } from "../../../lib/utils";
import { SearchContainer, SearchInput, Button } from "./Search.styles";

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search by Artist or Album..."
        aria-label="Search Albums"
      />
      <Button aria-label="Start Search">Search!</Button>
    </SearchContainer>
  );
};

export default Search;
