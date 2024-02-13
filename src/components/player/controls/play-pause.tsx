import { FC, RefObject, useCallback, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import PauseIcon from "@mui/icons-material/Pause";
import { iconStyle } from "@components/player/utils";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { setTrack } from "@store/slices/player";

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};
export const PlayPause: FC<Props> = ({ audioRef }) => {
  const dispatch = useDispatch();

  const { options } = useSelector((state: RootState) => state.player);

  useEffect(() => {
    if (audioRef && audioRef.current && options.audio) {
      audioRef.current.src = options.audio;
    }
  }, [audioRef, options.audio]);

  const onPlay = useCallback(() => {
    dispatch(setTrack({ ...options, play: true }));
    audioRef.current && audioRef.current?.play();
  }, [audioRef, dispatch, options]);

  const onPause = useCallback(() => {
    dispatch(setTrack({ ...options, play: false }));
    audioRef.current && audioRef.current?.pause();
  }, [audioRef, dispatch, options]);

  return options.play ? (
    <IconButton onClick={onPause}>
      <PauseIcon sx={iconStyle} />
    </IconButton>
  ) : (
    <IconButton onClick={onPlay}>
      <PlayArrowIcon sx={iconStyle} />
    </IconButton>
  );
};
