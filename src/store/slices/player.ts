import { createSlice } from "@reduxjs/toolkit";
import { TTrack } from "@declarations/tracks";

export type PlayerState = {
  listTracks: TTrack[];
  prevTrackId: string;
  options: TTrack;
};

const initialState: PlayerState = {
  prevTrackId: "",
  options: {
    id: "",
    audio: "",
    name: "",
    artist_name: "",
    artist_idstr: "",
    play: false,
    positionTrack: 0,
  },
  listTracks: [],
};

const player = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.options = action.payload;
    },

    setPrevTrackId: (state, action) => {
      state.prevTrackId = action.payload;
    },

    setListTrack: (state, action) => {
      state.listTracks = action.payload;
    },
  },
});

export const { setTrack, setPrevTrackId, setListTrack } = player.actions;
export const playerSlice = player.reducer;
