import React, { FC } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { iconStyle } from "@components/list-tracks/styles";
import { useDispatch } from "react-redux";
import { addTrack } from "@store/slices/playlists";
import { TTrack } from "@declarations/tracks";

type Props = {
  track: TTrack;
};
export const AddLike: FC<Props> = ({ track }) => {
  const dispatch = useDispatch();

  const addNewTrack = () => {
    dispatch(addTrack(track));
  };
  return <ThumbUpOffAltIcon onClick={addNewTrack} {...iconStyle} />;
};
