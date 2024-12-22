import Head from "next/head";
import { fetchTopAlbums } from "../lib/data";
import Title from "./_components/Title/Title";
import List from "./_components/List/List";
import Item from "./_components/Item/Item";

export default async function Home() {
  const albums = await fetchTopAlbums();
  const title = "iTunes Top Albums";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="List of iTunes Top Albums" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: "#000" }}>
        <Title title={title} />
        <List>
          {albums.map((album) => (
            <Item key={album.id} album={album} />
          ))}
        </List>
      </main>
    </div>
  );
}
