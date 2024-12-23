import Head from "next/head";
import { fetchTopAlbums, Album } from "../lib/data";
import Title from "./components/Title/Title";
import BrowseAlbums from "./components/BrowseAlbums/BrowseAlbums";

export default async function Home() {
  const albums: Album[] = await fetchTopAlbums();
  const title = "iTunes Top Albums";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Browse iTunes Top Albums" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: "#000", minHeight: '100vh' }}>
        <Title title={title} />
        <BrowseAlbums data={albums} />      
      </main>
    </div>
  );
}
