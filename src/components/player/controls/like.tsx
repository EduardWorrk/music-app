import { FC, useMemo } from "react";
import IconButton from "@mui/material/IconButton";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Box } from "@mui/material";
import { removeLikeTrack } from "@utils/track";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { iconStyle, styleBox } from "@components/player/utils";

export const Like: FC = () => {
  const dispatch = useDispatch();

  const { options } = useSelector((state: RootState) => state.player);

  const { current, listPlaylist } = useSelector((state: RootState) => state.playlists);

  const addTrack = () => {};

  const removeTrack = () =>
    removeLikeTrack(listPlaylist, current, options.id, dispatch);

  const isLike = useMemo(() => {
    return current?.tracks.find((track) => track.id === options.id);
  }, [options.id, current?.tracks]);

  return (
    <Box sx={styleBox}>
      <IconButton>
        {isLike ? (
          <ThumbUpAltIcon onClick={removeTrack} sx={iconStyle} />
        ) : (
          <ThumbUpOffAltIcon onClick={addTrack} sx={iconStyle} />
        )}
      </IconButton>
    </Box>
  );
};
