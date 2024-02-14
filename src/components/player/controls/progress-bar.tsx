import {
  FC,
  RefObject,
  useCallback,
  useEffect,
  useState,
  MouseEvent,
  useRef,
} from "react";
import { getMinutes } from "@utils/index";
import { Stack } from "@mui/material";
import {
  CurrentTime,
  DurationTime,
  SProgressBar,
  SWrapProgressBar,
} from "@components/player/styles";

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

export const ProgressBar: FC<Props> = ({ audioRef }) => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [visibleTime, setVisibleTime] = useState(false);

  const elementWidth = progressBarRef.current?.offsetWidth;

  const progress = Math.floor((currentTime / duration) * Number(elementWidth));

  const handleSeek = (e: MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && audioRef.current.duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickProgress = (clickX / rect.width) * 100;
      audioRef.current.currentTime =
        (clickProgress / 100) * audioRef.current.duration;
    }
  };

  const updateTime = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(Math.floor(audioRef.current.currentTime));
      setDuration(Math.floor(audioRef.current.duration));
    }
  }, [audioRef]);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateTime);

      return () => {
        audioElement.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [audioRef, updateTime]);

  return (
    <Stack
      onMouseOver={() => setVisibleTime(true)}
      onMouseOut={() => setVisibleTime(false)}
      spacing={2}
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {visibleTime && <CurrentTime>{getMinutes(currentTime)}</CurrentTime>}

      <SWrapProgressBar ref={progressBarRef} onClick={handleSeek}>
        <SProgressBar progress={progress} />
      </SWrapProgressBar>

      {visibleTime && <DurationTime>{getMinutes(duration)}</DurationTime>}
    </Stack>
  );
};
