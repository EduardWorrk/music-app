import { useQuery } from "@tanstack/react-query";
import { tracksApi, TTrackParams } from "@api/track";

export const useGetTracks = (params: TTrackParams, key?: string) => {
  return useQuery({
    queryKey: [params.boost] || key,
    queryFn: async () => await tracksApi.getTracks(params),
    enabled: !params.id,
    refetchOnMount: "always",
  });
};

export const useGetSimilarTracks = (params: TTrackParams) => {
  return useQuery({
    queryKey: [params.boost],
    queryFn: async () => await tracksApi.getSimilarTracks(params),
    enabled: !!params.id,
    refetchOnMount: "always",
  });
};
