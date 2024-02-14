import { FC, ReactNode, RefObject, useCallback, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import { setPrevTrackId, setTrack } from "@store/slices/player";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { iconStyle } from "@components/player/utils";

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
  children: ReactNode;
};

export const NextPrev: FC<Props> = ({ audioRef, children }) => {
  const dispatch = useDispatch();

  const { options, listTracks } = useSelector(
    (state: RootState) => state.player
  );

  const onClickNextTrack = useCallback(() => {
    const countTracks = listTracks.length;

    const nextTrack =
      options && options.positionTrack ? options.positionTrack + 1 : 1;

    if (nextTrack < countTracks) {
      dispatch(
        setTrack({
          ...listTracks[nextTrack],
          play: true,
          positionTrack: nextTrack,
        })
      );
      dispatch(setPrevTrackId(listTracks[nextTrack].id));
      audioRef.current && audioRef.current?.play();
    }
  }, [audioRef, dispatch, listTracks, options]);

  const onClickPrevTrack = useCallback(() => {
    if (options && options.positionTrack) {
      const prevTrack = options.positionTrack - 1;

      if (options.positionTrack) {
        dispatch(
          setTrack({
            ...listTracks[prevTrack],
            play: true,
            positionTrack: prevTrack,
          })
        );
        dispatch(setPrevTrackId(listTracks[prevTrack].id));
        audioRef.current && audioRef.current?.play();
      }
    }
  }, [audioRef, dispatch, listTracks, options]);

  useEffect(() => {
    if (audioRef.current?.currentTime === audioRef.current?.duration) {
      onClickNextTrack();
    }
  }, [audioRef, onClickNextTrack]);

  return (
    <>
      <IconButton onClick={onClickPrevTrack}>
        <FastRewindIcon sx={iconStyle} />
      </IconButton>

      {children}

      <IconButton onClick={onClickNextTrack}>
        <FastForwardIcon sx={iconStyle} />
      </IconButton>
    </>
  );
};
