import { createSlice } from "@reduxjs/toolkit";
import { TAlbumWidthTracks } from "@declarations/albums";
import { Nullable } from "@declarations/index";

type TInitialState = {
  album: Nullable<TAlbumWidthTracks>;
};

const initialState: TInitialState = {
  album: null,
};

const album = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbum: (state, action) => {
      state.album = action.payload;
    },

    clearAlbum: (state) => {
      state.album = null;
    },
  },
});

export const { setAlbum, clearAlbum } = album.actions;
export const albumSlice = album.reducer;
