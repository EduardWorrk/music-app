import React, { useCallback, useEffect } from "react";

import { ListTracks } from "@components/list-tracks";
import { Stack, Box } from "@mui/material";
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
import { HomeWaveCard } from "@components/wave-card/home-wave-card";
import { useWave } from "@hooks/use-wave";
import { setTrack, setListTrack, setPrevTrackId } from "@store/slices/player";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { generateWave, isGenerating, waveTracks } = useWave();

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

  // Обработчики для волны
  const handlePlayWave = useCallback(() => {
    if (waveTracks.length > 0) {
      const waveAlbum = {
        id: "wave",
        name: "Моя волна",
        releasedate: new Date().toISOString(),
        artist_name: "Персональная подборка",
        tracks: waveTracks,
      };

      // Получаем первый трек
      const firstTrack = waveTracks[0];

      // 1. Устанавливаем альбом - это откроет PlayerDataAlbum
      dispatch(setAlbum(waveAlbum));

      // 2. Устанавливаем список треков в плеер
      dispatch(setListTrack(waveTracks));

      // 3. Устанавливаем prevTrackId - это нужно для работы плеера
      dispatch(setPrevTrackId(firstTrack.id));

      // 4. Устанавливаем первый трек как текущий и запускаем воспроизведение
      const trackToPlay = {
        ...firstTrack,
        play: true,
        positionTrack: 0,
      };

      dispatch(setTrack(trackToPlay));
    }
  }, [dispatch, waveTracks]);

  const handleGenerateWave = useCallback(() => {
    generateWave();
  }, [generateWave]);

  useEffect(() => {
    if (waveTracks.length === 0 && !isGenerating) {
      generateWave();
    }
  }, [waveTracks.length, isGenerating, generateWave]);

  return (
    <Stack spacing={8} sx={{ mt: 4 }}>
      <Box sx={{ mb: 2 }}>
        <HomeWaveCard
          trackCount={waveTracks.length}
          isGenerating={isGenerating}
          onGenerate={handleGenerateWave}
          onPlay={handlePlayWave}
          hasTracks={waveTracks.length > 0}
        />
      </Box>

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
