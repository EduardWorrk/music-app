import React, { FC } from "react";
import { iconStyle } from "@components/list-tracks/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

export const RemoveLike: FC = () => {
  const removeTrack = () => {};
  return <ThumbUpAltIcon onClick={removeTrack} {...iconStyle} />;
};
