import { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { TrendTrackCard } from "@components/trend-track-card";
import { TTrack } from "@declarations/tracks";
import { useDispatch } from "react-redux";
import { setTrack, setPrevTrackId, setListTrack } from "@store/slices/player";
import { setAlbum } from "@store/slices/album";

type Props = {
  title?: string;
  tracks?: TTrack[];
};

export const TrendTracksGrid: FC<Props> = ({ title, tracks }) => {
  const dispatch = useDispatch();

  const handlePlayTrack = (trackId: number) => {
    const track = tracks?.find((t) => t.id === trackId.toString());
    if (track && tracks) {
      const trendsAlbum = {
        id: "trends",
        name: "🔥 Тренды недели",
        artist_name: "Различные артисты",
        image: track.album_image || "/default-album.png",
        releasedate: new Date().toISOString(),
        tracks,
      };

      dispatch(setAlbum(trendsAlbum));
      dispatch(setListTrack(tracks));
      dispatch(setPrevTrackId(Number(track.id)));

      const trackToPlay = {
        ...track,
        play: true,
        positionTrack: tracks.findIndex((t) => t.id === trackId.toString()),
      };
      dispatch(setTrack(trackToPlay));
    }
  };

  if (!tracks) {
    return <div>Loading trends...</div>;
  }

  return (
    <Box>
      {title && (
        <Typography variant="h3" color="white" sx={{ mb: 3 }}>
          {title}
        </Typography>
      )}

      <Grid container spacing={2}>
        {tracks.slice(0, 10).map((track) => (
          <Grid item xs={6} sm={4} md={2.4} key={track.id}>
            <TrendTrackCard
              id={track.id.toString()}
              image={track.album_image || "/default-album.png"}
              name={track.name || ""}
              artistName={track.artist_name || "Unknown Artist"}
              onClick={handlePlayTrack}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
