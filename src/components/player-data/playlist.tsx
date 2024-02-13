import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { ListTracks } from "@components/list-tracks";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { clearAlbum } from "@store/slices/album";
import { setOpenPlaylist } from "@store/slices/playlists";

const boxStyles = {
  overflow: "auto",
  background: "#1E1E1E",
  p: 2,
  height: "100%",
};

const buttonGroupStyles = {
  mt: 2,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

export const PlayerDataPlaylist: FC = () => {
  const dispatch = useDispatch();

  const { current: playlist } = useSelector(
    (state: RootState) => state.playlists
  );

  const closePlaylist = () => {
    dispatch(setOpenPlaylist(false));
    dispatch(clearAlbum());
  };
  return (
    <Box sx={boxStyles}>
      <Box>
        <Box sx={buttonGroupStyles}>
          <Typography display="block" color="white" variant="overline">
            Плейлист
          </Typography>

          <IconButton onClick={closePlaylist} size="small">
            <CloseIcon sx={{ color: (theme) => theme.palette.grey[700] }} />
          </IconButton>
        </Box>

        <Typography color="white" variant="caption">
          {playlist?.name}
        </Typography>
      </Box>

      <ListTracks tracks={playlist?.tracks} />
    </Box>
  );
};
