import { FC, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { CommonList } from "@components/common-list";
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

export const MyMusicPage: FC = () => {
  const dispatch = useDispatch();
  const { list, newPlaylist: playlistStore } = useSelector(
    (state: RootState) => state.playlists
  );

  const createNewPlaylist = useCallback(() => {
    const isActivePlaylist = list.some((elem) => elem?.active);
    const playlist = getPlaylist(
      `Новый плейлист № ${list.length + 1}`,
      [],
      undefined,
      generatePastelColor(),
      list.length === 0 ? true : !isActivePlaylist
    );

    dispatch(setPlaylists([playlist, ...list]));

    dispatch(setCurrentPlayList(playlist));
    dispatch(createPlayList(false));
  }, [dispatch, list]);

  const selectPlaylist = (id: number) => {
    const selectedPlaylist = list.find(
      (playlist) => Number(playlist?.id) === id
    );

    const playlists = list.map((playlist: TPlaylist) => {
      if (playlist?.id === selectedPlaylist?.id) {
        return { ...playlist, active: true };
      }
      return { ...playlist, active: false };
    });

    dispatch(setPlaylists(playlists));

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

      <CommonList
        newList
        title=""
        data={list}
        onCallBack={selectPlaylist}
        onCallBackCreate={createNewPlaylist}
      />
    </Box>
  );
};
