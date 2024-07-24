import { createSlice } from "@reduxjs/toolkit";
import { Nullable } from "@declarations/index";
import { TTrack } from "@declarations/tracks";
import { getPlaylist, URL_LIKE_IMG } from "@utils/track";
import { generatePastelColor } from "@utils/index";

export type TPlaylist = Nullable<{
  id?: string;
  name?: string;
  active?: boolean;
  tracks: TTrack[];
  background?: string;
}>;

type Playlists = {
  openPlaylist: boolean;
  newPlaylist: boolean;
  list: TPlaylist[];
  current: Nullable<TPlaylist>;
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

    deletePlaylist: (state, action) => {
      state.list = state.list.filter(
        (playlist) => playlist?.id !== action.payload
      );

      if (state.current && state.current.id === action.payload) {
        state.current = null;
      }
    },

    addTrack: (state, action) => {
      const tracks = state.current ? state.current.tracks : action.payload;

      if (state.current) {
        state.list = state.list.map((playlist) => {
          if (playlist?.id === state.current?.id) {
            return {
              ...playlist,
              tracks: [action.payload, ...tracks],
            };
          }
          return playlist;
        });
        state.current = {
          ...state.current,
          tracks: [action.payload, ...state.current.tracks],
        };
      } else {
        const newPlaylist = getPlaylist(
          "Мне нравится",
          [action.payload],
          URL_LIKE_IMG,
          generatePastelColor(),
          true
        );

        state.current = newPlaylist;
        state.list = [newPlaylist, ...state.list];
      }
    },
  },
});

export const {
  setOpenPlaylist,
  createPlayList,
  setPlaylists,
  setCurrentPlayList,
  deletePlaylist,
  addTrack,
} = playlists.actions;
export const playlistSlice = playlists.reducer;
