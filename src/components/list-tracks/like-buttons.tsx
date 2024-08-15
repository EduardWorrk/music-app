import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
import { RemoveLike } from "@components/list-tracks/remove-like";
import { AddLike } from "@components/list-tracks/add-like";
import { TTrack } from "@declarations/tracks";

type Props = {
  track: TTrack;
};
export const LikeButtons: FC<Props> = ({ track }) => {
  const { current } = useSelector((state: RootState) => state.playlists);

  const isLike = useMemo(() => {
    return current?.tracks?.find((elem) => elem.id === track.id);
  }, [current?.tracks, track.id]);

  return isLike?.id === track.id ? (
    <RemoveLike id={track.id} />
  ) : (
    <AddLike track={track} />
  );
};
