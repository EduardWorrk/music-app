export type Artist = {
  id: string;
  name: string;
  website: string;
  joindate: string;
  image: string;
  shorturl: string;
  shareurl: string;
};

export type ArtistAlbums = Omit<Artist, "shareurl" | "shorturl"> & {
  albums: Pick<Artist, "id" | "name" | "image">[];
  releasedate: string;
};
