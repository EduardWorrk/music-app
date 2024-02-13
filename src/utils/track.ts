import {
  setCurrentPlayList,
  setPlaylists,
  TPlaylist,
} from "@store/slices/playlists";
import { generatePastelColor, getRandomNumber } from "@utils/index";
import store from "@store/store";
import { PlayerState } from "@store/slices/player";
import { TAlbumWidthTracks } from "@declarations/albums";
import { TTrack } from "@declarations/tracks";

const URL_LIKE_IMG =
  "https://sc04.alicdn.com/kf/Ha80fe5a08b6743e28427294a264a2b41K.jpg";
export const addTrackToPlaylist = (
  listPlaylist: TAlbumWidthTracks[],
  current: TPlaylist,
  currentTrack: PlayerState["options"],
  dispatch: typeof store.dispatch
) => {
  if (current && listPlaylist) {
    const newTracks = [...current.tracks, currentTrack];

    // текущий плейлист
    const currentPlaylist = current.id;

    // находим текущий плейлист
    const findCurrentPlaylist = listPlaylist.find(
      (album: { id: string }) => album.id === currentPlaylist
    );

    // добавляем трек в начало плейлиста

    const newTrackToPlaylist = findCurrentPlaylist
      ? [currentTrack, ...findCurrentPlaylist.tracks]
      : [currentTrack];

    // изменяем плейлист
    const updatePlaylist = listPlaylist.map((playlist) => {
      if (playlist.id === currentPlaylist) {
        return { ...playlist, tracks: newTrackToPlaylist };
      }
      return playlist;
    });

    dispatch(setPlaylists(updatePlaylist));

    dispatch(
      setCurrentPlayList({
        ...current,
        tracks: newTracks,
      })
    );
  } else {
    const playlist = getPlaylist(
      "Мне нравится",
      [currentTrack],
      URL_LIKE_IMG,
      generatePastelColor()
    );

    dispatch(setPlaylists([playlist, ...listPlaylist]));
    dispatch(setCurrentPlayList(playlist));
  }
};

export const removeLikeTrack = (
  listPlaylist: TAlbumWidthTracks[],
  currentPlaylist: TPlaylist,
  currentTrackId: string,
  dispatch: typeof store.dispatch
) => {
  if (currentPlaylist) {
    const newTracks = currentPlaylist.tracks.filter(
      (track) => track.id !== currentTrackId
    );

    const editPlaylists = listPlaylist.map((playlist) => {
      if (playlist.id === currentPlaylist.id) {
        return { ...playlist, tracks: newTracks };
      }
      return playlist;
    });

    dispatch(setPlaylists(editPlaylists));

    dispatch(
      setCurrentPlayList({
        ...currentPlaylist,
        tracks: newTracks,
      })
    );
  }
};

export function getPlaylist(
  name: string,
  tracks: TTrack[],
  image?: string,
  background?: string
) {
  return {
    id: getRandomNumber(),
    name,
    image,
    tracks: tracks || [],
    background,
  };
}
