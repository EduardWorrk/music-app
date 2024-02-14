import { FC, useEffect, useRef } from "react";
import { Box, Stack } from "@mui/material";

import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { Control } from "@components/player/control";
import { Header } from "@components/player/header";
import { SPlayer } from "./styles";
import { ProgressBar } from "./controls/progress-bar";

export const Player: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { options: track, prevTrackId } = useSelector(
    (state: RootState) => state.player
  );

  useEffect(() => {
    track.play && prevTrackId === track.id
      ? audioRef.current && audioRef.current.play()
      : audioRef.current && audioRef.current.pause();
  }, [track.id, track.play, prevTrackId]);

  return (
    <SPlayer>
      <Stack direction="column" spacing={1}>
        <ProgressBar audioRef={audioRef} />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={3}>
            <Header name={track.name} artist_name={track.artist_name} />
            <Control audioRef={audioRef} />
          </Stack>
        </Box>
      </Stack>
    </SPlayer>
  );
};
