import { FC } from "react";
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
      <StylesButton onClick={createNewPlaylist}>
        Создай свой плейлист
      </StylesButton>
    </StylesCreatePlaylist>
  );
};
