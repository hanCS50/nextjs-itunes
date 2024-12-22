export type Album = {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  url: string;
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
