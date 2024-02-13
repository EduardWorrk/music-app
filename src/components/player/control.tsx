import { FC, RefObject } from "react";
import { Box, Stack } from "@mui/material";
import { styleBox } from "@components/player/utils";

import { Volume } from "@components/player/controls/volume";
import { NextPrev } from "@components/player/controls/next-prev";
import { PlayPause } from "@components/player/controls/play-pause";
import { Share } from "@components/player/controls/share";

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

export const Control: FC<Props> = ({ audioRef }) => {
  return (
    <Box sx={styleBox}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio preload="none" ref={audioRef} />

      <Share />

      <Stack direction="row" spacing={1}>
        <NextPrev audioRef={audioRef}>
          <PlayPause audioRef={audioRef} />
        </NextPrev>

        <Volume audioRef={audioRef} />
      </Stack>
    </Box>
  );
};
