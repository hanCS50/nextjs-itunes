"use client"

import React from 'react';
import Image from "next/image";
import { Album } from "../../../lib/data";
import { StyledItem, ItemWrapper, ItemTitle, ItemSubtitle } from "./Item.styles";

type AlbumProps = {
    album: Album;
}

const Item = ({ album }: AlbumProps) => {
  return (
    <StyledItem key={album.id}>
      <Image
        src={album.imageUrl}
        alt={album.title}
        width={170}
        height={170}
      />
      <ItemWrapper>
        <ItemTitle>{album.title}</ItemTitle>
        <ItemSubtitle>{album.artist}</ItemSubtitle>
        <a href={album.url} target="_blank" rel="noopener noreferrer">
          View on iTunes
        </a>
      </ItemWrapper>
    </StyledItem>
  );
};

export default Item;
