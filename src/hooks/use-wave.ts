import { useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { tracksApi } from "@api/track";
import { setWaveTracks, setWaveGenerating } from "@store/slices/wave";
import { TrackSortOptions } from "@enums/track-sort-options";

interface UseWaveReturn {
  generateWave: () => void;
  isGenerating: boolean;
  waveTracks: any[];
  lastGenerated: number | null;
}

export const useWave = (): UseWaveReturn => {
  const dispatch = useDispatch();
  const { tracks: likedTracks } = useSelector(
    (state: RootState) => state.playlists.current || { tracks: [] }
  );
  const {
    tracks: waveTracks,
    isGenerating,
    lastGenerated,
  } = useSelector((state: RootState) => state.wave);

  // Мутация для получения похожих треков
  const getSimilarTracks = useMutation({
    mutationFn: tracksApi.getSimilarTracks,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error("Ошибка получения похожих треков:", error);
      return [];
    },
  });

  // Мутация для получения популярных треков
  const getPopularTracks = useMutation({
    mutationFn: tracksApi.getTracks,
    onSuccess: (data) => {
      return data;
    },
    onError: (error) => {
      console.error("Ошибка получения популярных треков:", error);
      return [];
    },
  });

  // Функция генерации волны
  const generateWave = useCallback(async () => {
    if (isGenerating) {
      return;
    }

    dispatch(setWaveGenerating(true));

    try {
      const allSimilarTracks: any[] = [];
      const likedTrackIds = new Set(likedTracks.map((track) => track.id));

      // Если есть лайкнутые треки, получаем похожие
      if (likedTracks.length > 0) {
        const tracksToProcess = likedTracks.slice(0, 10);

        for (const track of tracksToProcess) {
          try {
            const similarTracks = await getSimilarTracks.mutateAsync({
              id: Number(track.id),
              limit: 10,
            });

            // Фильтруем треки, которые уже лайкнуты
            const filteredSimilar = similarTracks.filter(
              (similarTrack: any) => !likedTrackIds.has(similarTrack.id)
            );

            allSimilarTracks.push(...filteredSimilar);
          } catch (error) {
            console.error(`Ошибка для трека ${track.id}:`, error);
          }
        }
      }

      // Получаем популярные треки для разнообразия
      const popularTracks = await getPopularTracks.mutateAsync({
        boost: TrackSortOptions.PopularityWeek,
        limit: 20,
        lang: ["ru", "en"],
      });

      // Объединяем все треки и убираем дубликаты
      const allTracks = [...allSimilarTracks, ...popularTracks];
      const uniqueTracks = allTracks.filter(
        (track, index, self) =>
          index === self.findIndex((t) => t.id === track.id)
      );

      // Ограничиваем до 50 треков и перемешиваем
      const shuffledTracks = uniqueTracks
        .sort(() => Math.random() - 0.5)
        .slice(0, 50);

      dispatch(setWaveTracks(shuffledTracks));
    } catch (error) {
      console.error("Ошибка генерации волны:", error);
      // если ничего не получилось, создаем волну только из популярных треков
      try {
        const fallbackTracks = await getPopularTracks.mutateAsync({
          boost: TrackSortOptions.PopularityWeek,
          limit: 30,
          lang: ["ru", "en", "fr"],
        });
        dispatch(setWaveTracks(fallbackTracks.slice(0, 30)));
      } catch (fallbackError) {
        console.error("Ошибка fallback генерации:", fallbackError);
        dispatch(setWaveTracks([]));
      }
    } finally {
      dispatch(setWaveGenerating(false));
    }
  }, [dispatch, getPopularTracks, getSimilarTracks, isGenerating, likedTracks]);

  return {
    generateWave,
    isGenerating,
    waveTracks,
    lastGenerated,
  };
};
