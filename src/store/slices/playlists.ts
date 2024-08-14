import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Nullable } from "@declarations/index";
import { TTrack } from "@declarations/tracks";
import { getPlaylist, URL_LIKE_IMG } from "@utils/track";
import { generatePastelColor } from "@utils/index";

export type TPlaylist = Nullable<{
  id: string;
  name: string;
  active: boolean;
  tracks: TTrack[];
  background?: string;
}>;

type Playlists = {
  openPlaylist: boolean;
  newPlaylist: boolean;
  listPlaylist: TPlaylist[] | [];
  current: Nullable<TPlaylist>;
};

const initialState: Playlists = {
  listPlaylist: [],
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

    setPlaylists: (state, action: PayloadAction<TPlaylist[]>) => {
      state.listPlaylist = action.payload;
    },

    addPlaylist: (state, action: PayloadAction<TPlaylist>) => {
      const currentIdPlaylist = action.payload?.id;

      const isPlaylistLocal = state.listPlaylist.find(
        (playlist) => playlist?.id === currentIdPlaylist
      );

      if (isPlaylistLocal) {
        return;
      }

      state.listPlaylist = [...state.listPlaylist, action.payload];
    },

    setCurrentPlayList: (state, action) => {
      state.current = action.payload;
    },

    deletePlaylist: (state, action) => {
      state.listPlaylist = state.listPlaylist.filter(
        (playlist) => playlist?.id !== action.payload
      );

      if (state.current && state.current.id === action.payload) {
        state.current = null;
      }
    },

    addTrack: (state, action) => {
      const tracks = state.current ? state.current.tracks : action.payload;

      if (state.current) {
        // @ts-ignore
        state.listPlaylist = state.listPlaylist.map((playlist) => {
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
          `${state.listPlaylist.length + 1 || 1}`,
          "Мне нравится",
          [action.payload],
          URL_LIKE_IMG,
          generatePastelColor(),
          true
        );

        state.current = newPlaylist;
        state.listPlaylist = [newPlaylist, ...state.listPlaylist];
      }
    },

    removeTrack: (state, action: PayloadAction<{ id: string }>) => {
      if (state.current && state.current.tracks) {
        state.current.tracks = state.current.tracks.filter(
          (track) => track.id !== action.payload.id
        );
      }
    },
  },
});

export const {
  removeTrack,
  addPlaylist,
  setOpenPlaylist,
  createPlayList,
  setPlaylists,
  setCurrentPlayList,
  deletePlaylist,
  addTrack,
} = playlists.actions;
export const playlistSlice = playlists.reducer;
