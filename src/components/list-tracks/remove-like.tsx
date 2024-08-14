import React, { FC } from "react";
import { iconStyle } from "@components/list-tracks/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { useDispatch } from "react-redux";
import { removeTrack } from "@store/slices/playlists";

type Props = {
  id: string;
};

export const RemoveLike: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  const removeLike = () => {
    dispatch(removeTrack({ id }));
  };
  return <ThumbUpAltIcon onClick={removeLike} {...iconStyle} />;
};
