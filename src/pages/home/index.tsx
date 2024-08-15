import React, { useCallback } from "react";

import { ListTracks } from "@components/list-tracks";
import { Stack } from "@mui/material";
import { Slider } from "@components/slider";
import { useGetTracks } from "@queries/tracks";
import { useGetAlbums } from "@queries/albums";
import { useGetArtists } from "@queries/artists";
import { ArtistSortOptions } from "@api/artists";
import { TrackSortOptions } from "@enums/track-sort-options";
import { useMutation } from "@tanstack/react-query";
import { albumsApi } from "@api/albums";
import { useDispatch } from "react-redux";
import { setAlbum } from "@store/slices/album";
import { routes } from "@constants/routes";
import { useNavigate } from "react-router";
import { setOpenPlaylist } from "@store/slices/playlists";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: albums } = useGetAlbums("albumsPopularityMonth", {});

  const { data: artists } = useGetArtists("artists", {
    order: ArtistSortOptions.Name,
  });

  const { data: tracksWeek } = useGetTracks({
    boost: TrackSortOptions.PopularityWeek,
    limit: 10,
    lang: ["ru", "en"],
  });
  const { data: tracksMonth } = useGetTracks({
    boost: TrackSortOptions.PopularityTotal,
    limit: 10,
  });

  const fetchAlbumTracks = useMutation({
    mutationFn: albumsApi.getAlbumsTrack,
    onSuccess: (data) => {
      dispatch(setAlbum(data[0]));
    },
  });

  const getPopularAlbums = useCallback(
    (id: number) => {
      fetchAlbumTracks.mutate({ id });
      dispatch(setOpenPlaylist(false));
    },
    [dispatch, fetchAlbumTracks]
  );

  const onCallBackLinkArtist = useCallback(
    (id: number) => navigate(`/artist/${id}`),
    [navigate]
  );

  return (
    <Stack spacing={8} sx={{ mt: 4 }}>
      <Slider
        data={albums}
        category={routes.albums}
        onCallBack={getPopularAlbums}
        title="Популярные альбомы за неделю"
      />

      <Slider
        data={artists}
        category={routes.artists}
        title="Список артистов"
        onCallBack={onCallBackLinkArtist}
      />

      <Stack direction="row" spacing={2}>
        <ListTracks
          tracks={tracksWeek}
          title="Популярные треки на этой неделе"
        />
        <ListTracks
          tracks={tracksMonth}
          title="Популярные треки в этом месяце"
        />
      </Stack>
    </Stack>
  );
};
