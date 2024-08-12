import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { ListTracks } from "@components/list-tracks";
import { Box, Typography, Snackbar } from "@mui/material";
import { clearAlbum } from "@store/slices/album";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Theme } from "@mui/material/styles/createTheme";
import { setPlaylists, TPlaylist } from "@store/slices/playlists";
import CloseIcon from "@mui/icons-material/Close";

const boxStyles = {
  overflow: "auto",
  background: "#1E1E1E",
  height: "100%",
};

const buttonGroupStyles = {
  display: "flex",
  justifyContent: "space-between",
};

const typographyStyles = {
  sx: { color: (theme: Theme) => theme.palette.grey[600], fontSize: 14 },
};

export const PlayerDataAlbum: FC = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.album);
  const { listPlaylist } = useSelector((state: RootState) => state.playlists);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onClearAlbum = () => dispatch(clearAlbum());

  const addAlbumToPlaylists = () => {
    dispatch(setPlaylists([data, ...listPlaylist] as TPlaylist[]));
    setOpenSnackbar(true);
  };

  const onCloseSnackbar = () => {
    setOpenSnackbar(false);
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

      {data?.tracks && (
        <ListTracks
          visibleIndex
          title={data?.name ?? ""}
          tracks={data.tracks}
        />
      )}

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={onCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        message="Альбом добавлен в плейлист"
      />
    </Box>
  );
};
