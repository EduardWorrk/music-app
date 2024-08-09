import { FC, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { Typography } from "@mui/material";
import {
  createPlayList,
  setCurrentPlayList,
  setOpenPlaylist,
  setPlaylists,
  TPlaylist,
} from "@store/slices/playlists";
import { clearAlbum } from "@store/slices/album";
import { getPlaylist } from "@utils/track";
import { generatePastelColor } from "@utils/index";
import { PlaylistList } from "@components/list/playlist-list";

export const MyMusicPage: FC = () => {
  const dispatch = useDispatch();
  const { listPlaylist, newPlaylist: playlistStore } = useSelector(
    (state: RootState) => state.playlists
  );

  const createNewPlaylist = useCallback(() => {
    const isActivePlaylist = listPlaylist.some((elem) => elem?.active);

    const playlist = getPlaylist(
      `${listPlaylist.length + 1}`,
      `Новый плейлист № ${listPlaylist.length + 1}`,
      [],
      "",
      generatePastelColor(),
      Boolean(listPlaylist.length === 0 ? true : !isActivePlaylist)
    );

    dispatch(setPlaylists([playlist, ...listPlaylist]));

    dispatch(setCurrentPlayList(playlist));
    dispatch(createPlayList(false));
  }, [dispatch, listPlaylist]);

  const selectPlaylist = (id: number) => {
    const selectedPlaylist = listPlaylist.find(
      (playlist) => Number(playlist?.id) === id
    );

    const playlists = listPlaylist.map((playlist) => {
      if (playlist?.id === selectedPlaylist?.id) {
        return { ...playlist, active: true };
      }
      return { ...playlist, active: false };
    });

    dispatch(setPlaylists(playlists as TPlaylist[]));

    dispatch(setCurrentPlayList({ active: true, ...selectedPlaylist }));
    dispatch(clearAlbum());
    dispatch(setOpenPlaylist(true));
  };

  useEffect(() => {
    playlistStore && createNewPlaylist();
  }, [createNewPlaylist, playlistStore]);

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 2 }} color="white">
        Плейлисты
      </Typography>

      <PlaylistList
        playlists={listPlaylist}
        onCallBack={selectPlaylist}
        onCallBackCreate={createNewPlaylist}
      />
    </Box>
  );
};
