import { createSlice } from "@reduxjs/toolkit";
import { Nullable } from "@declarations/index";
import { TAlbumWidthTracks } from "@declarations/albums";
import { TTrack } from "@declarations/tracks";

export type TPlaylist = Nullable<{
  id: string;
  name: string;
  tracks: TTrack[];
  background: string;
}>;

type Playlists = {
  openPlaylist: boolean;
  newPlaylist: boolean;
  list: TAlbumWidthTracks[];
  current: TPlaylist;
};

const initialState: Playlists = {
  list: [],
  current: null,
  newPlaylist: false,
  openPlaylist: false,
};

const playlists = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setOpenPlaylist: (state, action) => {
      state.openPlaylist = action.payload;
    },

    createPlayList: (state, action) => {
      state.newPlaylist = action.payload;
    },

    setPlaylists: (state, action) => {
      state.list = action.payload;
    },

    setCurrentPlayList: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const {
  setOpenPlaylist,
  createPlayList,
  setPlaylists,
  setCurrentPlayList,
} = playlists.actions;
export const playlistSlice = playlists.reducer;
