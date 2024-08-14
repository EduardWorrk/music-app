import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { ListTracks } from "@components/list-tracks";
import { Box, Typography, Snackbar } from "@mui/material";
import { clearAlbum } from "@store/slices/album";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@mui/material/styles/createTheme";
import { addPlaylist } from "@store/slices/playlists";
import CloseIcon from "@mui/icons-material/Close";
import { TTrack } from "@declarations/tracks";

const boxStyles = {
  overflow: "auto",
  background: "#1E1E1E",
  height: "100%",
  padding: 1,
};

const buttonGroupStyles = {
  display: "flex",
  justifyContent: "space-between",
};

const typographyStyles = {
  sx: { color: (theme: Theme) => theme.palette.grey[600], fontSize: 14 },
};

const initialMessage = {
  open: false,
  message: "Альбом добавлен в плейлист",
};

export const PlayerDataAlbum: FC = () => {
  const dispatch = useDispatch();
  const { album } = useSelector((state: RootState) => state.album);
  const { listPlaylist } = useSelector((state: RootState) => state.playlists);

  const [snackbar, setSnackbar] = useState(initialMessage);

  const onClearAlbum = () => dispatch(clearAlbum());

  const addAlbumToPlaylists = () => {
    if (album) {
      const { id, name, tracks } = album;
      const isPlaylistLocal = listPlaylist.find(
        (playlist) => playlist?.id === id
      );

      if (isPlaylistLocal) {
        setSnackbar({ open: true, message: "Такой плейлист уже существует" });
      }

      const albumTracks: TTrack[] = tracks.map(({ name, id, duration }) => ({
        id,
        name,
        duration,
      }));

      dispatch(addPlaylist({ id, name, tracks: albumTracks, active: false }));
      setSnackbar((prev) => ({ ...prev, open: true }));
    }
  };

  const onCloseSnackbar = () => {
    setSnackbar(initialMessage);
  };

  return (
    <Box sx={boxStyles}>
      <Box {...buttonGroupStyles}>
        <IconButton size="small">
          <AddIcon {...typographyStyles} />
          &nbsp;
          <Typography onClick={addAlbumToPlaylists} {...typographyStyles}>
            Добавить альбом в плейлист
          </Typography>
        </IconButton>

        <IconButton onClick={onClearAlbum} size="small">
          <CloseIcon sx={{ color: (theme) => theme.palette.grey[700] }} />
        </IconButton>
      </Box>

      {album?.tracks && (
        <ListTracks title={album?.name ?? ""} tracks={album.tracks} />
      )}

      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={onCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        message={snackbar.message}
      />
    </Box>
  );
};
