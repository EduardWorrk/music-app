import {
  setCurrentPlayList,
  setPlaylists,
  TPlaylist,
} from "@store/slices/playlists";
import { getRandomNumber } from "@utils/index";
import store from "@store/store";
import { TTrack } from "@declarations/tracks";

export const URL_LIKE_IMG =
  "https://sc04.alicdn.com/kf/Ha80fe5a08b6743e28427294a264a2b41K.jpg";

export const removeLikeTrack = (
  listPlaylist: TPlaylist[],
  currentPlaylist: TPlaylist,
  currentTrackId: string,
  dispatch: typeof store.dispatch
) => {
  if (currentPlaylist) {
    const newTracks = currentPlaylist.tracks.filter(
      (track) => track.id !== currentTrackId
    );

    const editPlaylists = listPlaylist.map((playlist) => {
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
  background?: string,
  active?: boolean
) {
  return {
    id: getRandomNumber(),
    name,
    image,
    tracks: tracks || [],
    background,
    active,
  };
}
