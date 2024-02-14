import { FC } from "react";
import { useParams } from "react-router";
import { useGetTracks } from "@queries/tracks";
import { ListTracks } from "@components/list-tracks";
import { TTrack } from "@declarations/tracks";
import { Avatar, Stack } from "@mui/material";

export const TrackPage: FC = () => {
  const { id } = useParams();

  const { data } = useGetTracks({
    id: Number(id),
    limit: 1,
  });

  const track = data && (data[0] as TTrack);

  return (
    <Stack spacing={3}>
      <Avatar
        alt={track?.album_name}
        src={track?.album_image}
        sx={{ width: 56, height: 56 }}
      />
      {track && <ListTracks tracks={[track] || []} />}
    </Stack>
  );
};
