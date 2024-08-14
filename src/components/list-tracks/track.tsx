import React, { FC, useMemo, useState } from "react";
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
}) => {
  const playerState = useSelector((state: RootState) => state.player);

  const { current } = useSelector((state: RootState) => state.playlists);

  const [showControls, setShowControls] = useState(false);

  const play = playerState.options.id === id && playerState.options.play;

  const showAnimation = play && !showControls;

  const showIndex = !play && !showControls;

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
    <STrack
      onMouseOver={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <Stack alignItems="center" direction="row" spacing={1}>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
          sx={{ width: "20px" }}
          justifyContent="center"
        >
          {showAnimation && <Box fontSize={12} className="play-track" />}

          {showIndex && (
            <Typography
              variant="subtitle2"
              component="span"
              sx={{ fontSize: "12px" }}
              color={(theme) => theme.palette.grey[700]}
            >
              {index}
            </Typography>
          )}

          <Box style={{ display: `${showControls ? "block" : "none"}` }}>
            {play ? (
              <SPlay onClick={onPause}>
                <PauseIcon {...iconStyle} />
              </SPlay>
            ) : (
              <SPlay onClick={handlePlay}>
                <PlayArrowIcon {...iconStyle} />
              </SPlay>
            )}
          </Box>
        </Stack>

        <Stack spacing={1} direction="row" alignItems="center">
          {name && (
            <STitleTrack to={`/track/${id}`} sx={textColor}>
              {trimText(name, 60)}
            </STitleTrack>
          )}

          {artist_id && (
            <STextAuthor to={`/artist/${artist_id}`}>{artist_name}</STextAuthor>
          )}
        </Stack>
      </Stack>

      <Stack direction="row" spacing={1}>
        {isLike?.id === id ? (
          <RemoveLike id={currentTrack.id} />
        ) : (
          <AddLike track={currentTrack} />
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
