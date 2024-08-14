import React, { FC, useMemo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { getMinutes, trimText } from "@utils/index";

import {
  iconStyle,
  SPlay,
  STextAuthor,
  STitleTrack,
  STrack,
  textColor,
} from "@components/list-tracks/styles";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { TTogglePlay } from "@components/list-tracks/index";
import { TTrack } from "@declarations/tracks";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { AddLike } from "@components/list-tracks/add-like";
import { RemoveLike } from "@components/list-tracks/remove-like";

export type TListTrack = Pick<TTrack, "id" | "name" | "audio" | "duration"> & {
  index?: number;
  artist_name?: TTrack["artist_name"];
  artist_id?: TTrack["artist_id"];
  positionTrack?: number;
  visibleIndex?: boolean;
  onTogglePlay?: (track: TTogglePlay) => void;
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
  visibleIndex,
}) => {
  const playerState = useSelector((state: RootState) => state.player);
  const { current } = useSelector((state: RootState) => state.playlists);

  const currentTrack: TTrack = {
    id,
    name,
    audio,
    artist_name,
    positionTrack,
    duration,
  };

  const handlePlay = () => {
    if (onTogglePlay) {
      onTogglePlay({ ...currentTrack, play: true });
    }
  };

  const onPause = () => {
    onTogglePlay && onTogglePlay({ ...currentTrack, play: false });
  };

  const isLike = useMemo(() => {
    return current?.tracks?.find((track) => track.id === id);
  }, [id, current?.tracks]);

  return (
    <STrack>
      <Box alignItems="center" sx={{ display: "flex" }}>
        {visibleIndex && (
          <Box fontSize={12} color="white" sx={{ pr: 2 }}>
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
        {isLike?.id === id ? <RemoveLike id={currentTrack.id} /> : <AddLike track={currentTrack} />}

        {duration && (
          <Typography sx={textColor}>
            {getMinutes(duration.toString())}
          </Typography>
        )}
      </Stack>
    </STrack>
  );
};
