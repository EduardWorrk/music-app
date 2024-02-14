import { createSlice } from "@reduxjs/toolkit";
import { TAlbumWidthTracks } from "@declarations/albums";
import { TTrack } from "@declarations/tracks";
import { Artist } from "@declarations/artists";

type TInitialState = {
  loading: boolean;
  tracks: TTrack[];
  albums: TAlbumWidthTracks[];
  artists: Artist[];
};

const initialState: TInitialState = {
  loading: false,
  tracks: [],
  albums: [],
  artists: [],
};

const search = createSlice({
  name: "search",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setTracks: (state, action) => {
      state.tracks = action.payload;
    },

    setAlbums: (state, action) => {
      state.albums = action.payload;
    },

    setArtist: (state, action) => {
      state.artists = action.payload;
    },
  },
});

export const { setLoading, setTracks, setArtist, setAlbums } = search.actions;
export const searchSlice = search.reducer;
