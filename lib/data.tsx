export type Album = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  url: string;
};

export type AlbumDetails = {  
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  url: string;
  releaseDate: string;
  genre: string;
  price: string;
  description: string;
};

export async function fetchTopAlbums(): Promise<Album[]> {
  const res = await fetch(
    "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
  );
  const data = await res.json();

  const albums = data.feed.entry.map((entry: any) => ({
    id: entry.id.attributes["im:id"],
    title: entry["im:name"].label,
    artist: entry["im:artist"].label,
    imageUrl: entry["im:image"][2].label,
    url: entry.link.attributes.href,
  }));

  return albums;
}

export async function fetchAlbumDetails(id: string): Promise<AlbumDetails> {
  const res = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=album`
  );
  const data = await res.json();
  const album = data.results[0];

  return {
    id: album.collectionId,
    title: album.collectionName,
    artist: album.artistName,
    imageUrl: album.artworkUrl100,
    url: album.collectionViewUrl,
    releaseDate: album.releaseDate,
    genre: album.primaryGenreName,
    price: album.collectionPrice,
    description: album.longDescription,
  };
}