"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Album } from "../../../lib/data";
import {
  StyledItem,
  ItemWrapper,
  ItemTitle,
  ItemSubtitle,
  ExternalLink,
} from "./Item.styles";

type AlbumProps = {
  album: Album;
};

const Item = ({ album }: AlbumProps) => {
  return (
    <StyledItem key={album.id} role="listitem">
      <Link href={`/album/${album.id}`}>
        <Image
          src={album.imageUrl}
          alt={album.title}
          width={170}
          height={170}
        />
      </Link>
      <ItemWrapper>
        <ItemTitle>{album.title}</ItemTitle>
        <ItemSubtitle>{album.artist}</ItemSubtitle>
        <ExternalLink
          href={album.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View "${album.title}" on iTunes`}
        >
          View on iTunes
        </ExternalLink>
      </ItemWrapper>
    </StyledItem>
  );
};

export default Item;
