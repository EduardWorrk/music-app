import { FC, RefObject, useEffect, useState } from "react";
import { Box, ClickAwayListener } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import IconButton from "@mui/material/IconButton";
import {
  SModalStyle,
  SOpenVolume,
  SSliderVolume,
} from "@components/player/styles";
import { iconStyle } from "@components/player/utils";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const MAX = 100;
export const Volume: FC<Props> = ({ audioRef }) => {
  const [value, setValue] = useState(100);

  const [open, setOpen] = useState(false);

  const [sound, setSound] = useState(true);

  const onChangeEditVolume = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const enableSound = () => setSound((prev) => !prev);

  const handleClickAway = () => setOpen(false);

  useEffect(() => {
    if (audioRef.current && !sound) {
      audioRef.current.volume = 0;
    }

    if (sound && audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  }, [sound, audioRef, value]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
    }
  }, [value, audioRef]);

  const openEditSound = () => {
    setOpen(true);
  };

  const closeEditSound = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{ position: "relative", width: "40px", height: "40px" }}
        onMouseOut={closeEditSound}
        onMouseOver={openEditSound}
      >
        <IconButton onClick={enableSound}>
          {sound ? (
            <VolumeUpIcon sx={iconStyle} />
          ) : (
            <VolumeOffIcon sx={iconStyle} />
          )}
        </IconButton>

        <SOpenVolume open={open}>
          <SModalStyle>
            <SSliderVolume
              size="small"
              min={0}
              max={MAX}
              value={value}
              onChange={onChangeEditVolume}
              valueLabelDisplay="auto"
            />
          </SModalStyle>
        </SOpenVolume>
      </Box>
    </ClickAwayListener>
  );
};
