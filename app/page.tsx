"use client";
import Head from "next/head";
import Image from "next/image";
import {
  Container,
  Main,
  Title,
  List,
  Item,
  ItemWrapper,
  ItemTitle,
  ItemSubtitle,
} from "./_components/sharedstyles";
import { fetchTopAlbums } from "../lib/data";

export default async function Home() {
  const albums = await fetchTopAlbums();

  return (
    <Container>
      <Head>
        <title>iTunes Top Albums</title>
        <meta name="description" content="List of iTunes Top Albums" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Title>iTunes Top Albums</Title>

        <>
          <List>
            {albums.map((album) => (
              <Item key={album.id}>
                <Image
                  src={album.imageUrl}
                  alt={album.title}
                  width={200}
                  height={200}
                />
                <ItemWrapper>
                  <ItemTitle>{album.title}</ItemTitle>
                  <ItemSubtitle>{album.artist}</ItemSubtitle>
                  <a href={album.url} target="_blank" rel="noopener noreferrer">
                    View on iTunes
                  </a>
                </ItemWrapper>
              </Item>
            ))}
          </List>
        </>
      </Main>
    </Container>
  );
}
