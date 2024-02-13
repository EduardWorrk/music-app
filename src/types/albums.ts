export type TAlbumTrack = {
  audio: string;
  audiodownload: string;
  audiodownload_allowed: boolean;
  duration: string;
  id: string;
  license_ccurl: string;
  name: string;
  position: string;
};

export type TAlbum = {
  artist_id: string;
  artist_name: string;
  id: string;
  image: string;
  name: string;
  releasedate: string;
  zip: string;
  zip_allowed: string;
  background?: string;
};

export type TAlbumWidthTracks = TAlbum & { tracks: TAlbumTrack[] };
