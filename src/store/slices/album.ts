import { createSlice } from "@reduxjs/toolkit";
import { TAlbumWidthTracks } from "@declarations/albums";
import { Nullable } from "@declarations/index";

type TInitialState = {
  data: Nullable<TAlbumWidthTracks>;
};

const initialState: TInitialState = {
  data: null,
};

const album = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbum: (state, action) => {
      state.data = action.payload;
    },

    clearAlbum: (state) => {
      state.data = null;
    },
  },
});

export const { setAlbum, clearAlbum } = album.actions;
export const albumSlice = album.reducer;
