"use client";

import React, { useState, useEffect } from "react";
import { Album } from "@/lib/data";
import Item from "../Item/Item";
import Search from "../Search/Search";
import { StyledList } from "./List.styles";

type ListProps = {
  data: Album[];
};

const List = ({ data }: ListProps) => {
  const [initialAlbums, setInitialAlbums] = useState<Album[]>(data);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>(initialAlbums);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // If searchQuery is empty, use the initialAlbums (full album list),
    // otherwise, filter the data
    const fetchFilteredAlbums = async () => {
      const query = searchQuery.trim();
      const filteredData = query
        ? initialAlbums.filter(
            (album) =>
              album.title.toLowerCase().includes(query.toLowerCase()) ||
              album.artist.toLowerCase().includes(query.toLowerCase())
          )
        : initialAlbums;

      setFilteredAlbums(filteredData);
    };

    if (searchQuery === "") {
      // reset to original list when search query is empty
      setFilteredAlbums(initialAlbums);
    } else {
      fetchFilteredAlbums();
    }
  }, [searchQuery, initialAlbums]);

  return (
    <>
      <Search onSearch={setSearchQuery} />
      <StyledList>
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album) => <Item key={album.id} album={album} />)
        ) : (
          <p>No albums found matching the query.</p>
        )}
      </StyledList>
    </>
  );
};

export default List;
