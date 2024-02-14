import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import {
  StylesButton,
  StylesCreatePlaylist,
} from "@components/create-playlist/styles";
import { useDispatch } from "react-redux";
import { createPlayList } from "@store/slices/playlists";
import { useNavigate } from "react-router";

export const CreatePlaylist: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createNewPlaylist = () => {
    navigate(`/my-music`);
    dispatch(createPlayList(true));
  };

  return (
    <StylesCreatePlaylist>
      <Stack spacing={1}>
        <Typography
          color={(theme) => theme.palette.grey[500]}
          variant="subtitle1"
          fontSize={14}
        >
          Создай свой плейлист
        </Typography>
        <StylesButton onClick={createNewPlaylist}>Создать</StylesButton>
      </Stack>
    </StylesCreatePlaylist>
  );
};
