import Head from "next/head";
import { fetchTopAlbums, Album } from "../lib/data";
import Title from "./_components/Title/Title";
import List from "./_components/List/List";

export default async function Home() {
  const albums: Album[] = await fetchTopAlbums();
  const title = "iTunes Top Albums";

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="List of iTunes Top Albums" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ backgroundColor: "#000", minHeight: '100vh' }}>
        <Title title={title} />
        <List data={albums} />      
      </main>
    </div>
  );
}
