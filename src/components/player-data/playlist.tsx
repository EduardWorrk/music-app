import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { ListTracks } from "@components/list-tracks";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { clearAlbum } from "@store/slices/album";
import { deletePlaylist, setOpenPlaylist } from "@store/slices/playlists";
import DeleteIcon from "@mui/icons-material/Delete";
import { Theme } from "@mui/material/styles/createTheme";
import { DeleteModal } from "@components/delete-modal";

const boxStyles = {
  overflow: "auto",
  background: "#1E1E1E",
  p: 2,
  height: "100%",
};

const buttonGroupStyles = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const iconButtonStyle = {
  color: (theme: Theme) => theme.palette.grey[700],
};

export const PlayerDataPlaylist: FC = () => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const { current: playlist } = useSelector(
    (state: RootState) => state.playlists
  );

  const closePlaylist = () => {
    dispatch(setOpenPlaylist(false));
    dispatch(clearAlbum());
  };

  const onDeletePlaylist = () => {
    dispatch(deletePlaylist(playlist?.id));
    setOpenModal(false);
    closePlaylist();
  };

  return (
    <Box sx={boxStyles}>
      <Box>
        <Box sx={buttonGroupStyles}>
          <Typography display="block" color="white" variant="overline">
            Плейлист
          </Typography>

          <Box>
            <IconButton onClick={() => setOpenModal(true)}>
              <DeleteIcon sx={iconButtonStyle} />
            </IconButton>

            <IconButton onClick={closePlaylist} size="small">
              <CloseIcon sx={iconButtonStyle} />
            </IconButton>
          </Box>
        </Box>

        <Typography color="white" variant="caption">
          {playlist?.name}
        </Typography>
      </Box>

      <ListTracks visibleIndex tracks={playlist?.tracks} />

      <DeleteModal
        open={openModal}
        title="Удаление плейлиста"
        description="Вы действительно хотите удалить плейлист?"
        onDelete={onDeletePlaylist}
        onClose={() => setOpenModal(false)}
      />
    </Box>
  );
};
