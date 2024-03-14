import React, { FC, useMemo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { getMinutes, trimText } from "@utils/index";
import { Theme } from "@mui/material/styles/createTheme";
import {
  SPlay,
  STextAuthor,
  STitleTrack,
  STrack,
} from "@components/list-tracks/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { TTogglePlay } from "@components/list-tracks/index";
import { TTrack } from "@declarations/tracks";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { addTrackToPlaylist, removeLikeTrack } from "@utils/track";

export type TListTrack = Pick<TTrack, "id" | "name" | "audio" | "duration"> & {
  index?: number;
  artist_name?: TTrack["artist_name"];
  artist_id?: TTrack["artist_id"];
  positionTrack?: number;
  onTogglePlay?: (track: TTogglePlay) => void;
};

const textColor = {
  color: (theme: Theme) => theme.palette.grey[400],
  fontSize: "14px",
  display: "block",
};

const iconStyle = {
  sx: { color: "#9f9f9f", width: 20, height: 20, cursor: "pointer" },
};

export const Track: FC<TListTrack> = ({
  id,
  name,
  duration,
  audio,
  artist_name,
  onTogglePlay,
  positionTrack,
  artist_id,
  index,
}) => {
  const dispatch = useDispatch();
  const playerState = useSelector((state: RootState) => state.player);
  const { current, list } = useSelector((state: RootState) => state.playlists);

  const obj = { id, name, audio, artist_name, positionTrack, duration };

  const handlePlay = () => {
    if (onTogglePlay) {
      onTogglePlay({ ...obj, play: true });
    }
  };

  const onPause = () => {
    onTogglePlay && onTogglePlay({ ...obj, play: false });
  };

  const isLike = useMemo(() => {
    return current?.tracks?.find((track) => track.id === id);
  }, [id, current?.tracks]);

  const addTrack = () => addTrackToPlaylist(list, current, obj, dispatch);
  const removeTrack = () => removeLikeTrack(list, current, obj.id, dispatch);

  return (
    <STrack>
      <Box alignItems="center" sx={{ display: "flex" }}>
        {index && (
          <Box fontSize={12} color="white" sx={{ pr: 1 }}>
            {index}
          </Box>
        )}
        {playerState.options.id === id && playerState.options.play ? (
          <SPlay onClick={onPause}>
            <PauseIcon {...iconStyle} />
          </SPlay>
        ) : (
          <SPlay onClick={handlePlay}>
            <PlayArrowIcon sx={{ color: "white", width: 17, height: 17 }} />
          </SPlay>
        )}

        <Stack spacing={1}>
          {name && (
            <STitleTrack to={`/track/${id}`} sx={textColor}>
              {trimText(name, 60)}
            </STitleTrack>
          )}

          {artist_id && (
            <STextAuthor to={`/artist/${artist_id}`}>{artist_name}</STextAuthor>
          )}
        </Stack>
      </Box>

      <Stack direction="row" spacing={1}>
        {isLike?.id === id ? (
          <ThumbUpAltIcon onClick={removeTrack} {...iconStyle} />
        ) : (
          <ThumbUpOffAltIcon onClick={addTrack} {...iconStyle} />
        )}

        {duration && (
          <Typography sx={textColor}>
            {getMinutes(duration.toString())}
          </Typography>
        )}
      </Stack>
    </STrack>
  );
};
