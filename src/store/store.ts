import { configureStore } from "@reduxjs/toolkit";
import { playerSlice } from "@store/slices/player";
import { albumSlice } from "@store/slices/album";
import { searchSlice } from "@store/slices/search";
import { playlistSlice } from "@store/slices/playlists";
import { userSlice } from "@store/slices/user";

const store = configureStore({
  reducer: {
    player: playerSlice,
    album: albumSlice,
    search: searchSlice,
    playlists: playlistSlice,
    user: userSlice,
    // Другие слайсы могут быть добавлены здесь
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
