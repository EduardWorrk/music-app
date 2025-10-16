import { createSlice } from "@reduxjs/toolkit";
import { TTrack } from "@declarations/tracks";

interface WaveState {
  tracks: TTrack[];
  isLoading: boolean;
  lastGenerated: number | null;
  isGenerating: boolean;
}

const initialState: WaveState = {
  tracks: [],
  isLoading: false,
  lastGenerated: null,
  isGenerating: false,
};

const waveSlice = createSlice({
  name: "wave",
  initialState,
  reducers: {
    setWaveTracks: (state, action) => {
      state.tracks = action.payload;
      state.lastGenerated = Date.now();
    },
    setWaveLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setWaveGenerating: (state, action) => {
      state.isGenerating = action.payload;
    },
    clearWave: (state) => {
      state.tracks = [];
      state.lastGenerated = null;
      state.isGenerating = false;
    },
  },
});

export const { setWaveTracks, setWaveGenerating } = waveSlice.actions;
export const waveSliceReducer = waveSlice.reducer;

