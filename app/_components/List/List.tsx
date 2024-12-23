"use client";

import React, { useState, useEffect } from "react";
import { Album } from "@/lib/data";
import Item from "../Item/Item";
import Search from "../Search/Search";
import NoMatch from "../NoMatchFound/NoMatchFound";
import Pagination from "../Pagination/Pagination";
import { StyledList } from "./List.styles";

type ListProps = {
  data: Album[];
};

const ITEMS_PER_PAGE = 8;

const List = ({ data }: ListProps) => {
  const [initialAlbums, setInitialAlbums] = useState<Album[]>(data);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>(initialAlbums);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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
      setCurrentPage(1);
    };

    if (searchQuery === "") {
      // reset to original list when search query is empty
      setFilteredAlbums(initialAlbums);
    } else {
      fetchFilteredAlbums();
    }
  }, [searchQuery, initialAlbums]);

  // Paginate filtered albums
  const paginateAlbums = (albums: Album[], page: number) => {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    return albums.slice(offset, offset + ITEMS_PER_PAGE);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate total pages based on filtered albums
  const totalPages = Math.ceil(filteredAlbums.length / ITEMS_PER_PAGE);
  const paginatedAlbums = paginateAlbums(filteredAlbums, currentPage);

  return (
    <>
      <Search onSearch={setSearchQuery} />
      {filteredAlbums.length === 0 && <NoMatch message={"No match found."} />}

      {filteredAlbums.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      )}

      {filteredAlbums.length > 0 && (
        <StyledList role="list">
          {paginatedAlbums.map((album) => (
            <Item key={album.id} album={album} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default List;
