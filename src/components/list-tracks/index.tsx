import { FC, useCallback } from "react";
import { Typography } from "@mui/material";
import { SListTrack } from "@components/list-tracks/styles";
import { Track, TListTrack } from "@components/list-tracks/track";
import { useDispatch } from "react-redux";
import { setTrack, setPrevTrackId, setListTrack } from "@store/slices/player";
import { Loading } from "@components/loading";

type Props = {
  title?: string;
  index?: boolean;
  tracks?: TListTrack[];
};

export type TTogglePlay = { play?: boolean } & Pick<
  TListTrack,
  "id" | "name" | "audio" | "artist_name"
>;

export const ListTracks: FC<Props> = ({ title, tracks, index }) => {
  const dispatch = useDispatch();

  const playTrack = useCallback(
    (track: TTogglePlay) => {
      dispatch(setPrevTrackId(track.id));
      dispatch(setTrack(track));
      dispatch(setListTrack(tracks));
    },
    [dispatch, tracks]
  );

  return (
    <SListTrack>
      {tracks ? (
        <>
          {title && (
            <Typography variant="h3" color="white" sx={{ padding: 2 }}>
              {title}
            </Typography>
          )}
          {tracks?.map((track, i) => (
            <Track
              {...track}
              index={i + 1}
              key={track.id}
              onTogglePlay={playTrack}
              positionTrack={Number(i)}
            />
          ))}
        </>
      ) : (
        <Loading verticalSize={8} />
      )}
    </SListTrack>
  );
};
