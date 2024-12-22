'use client';

import React, { useState } from 'react';
import { SearchContainer, SearchInput } from './Search.styles';

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(e.target.value);

    // add a Debounce here
    onSearch(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search Albums..."
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          width: '300px',
        }}
      />
    </SearchContainer>
  );
};

export default Search;
