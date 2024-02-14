import { useQuery, useQueryClient } from "@tanstack/react-query";
import { artistsApi, TArtists } from "@api/artists";

export const useGetArtists = (key: string, params: TArtists) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => artistsApi.getArtists(params),
  });
};

export const useGetArtistAlbum = (id: number) => {
  const key = "artist_album";

  const queryClient = useQueryClient();
  queryClient.invalidateQueries([key]);

  return useQuery({
    queryKey: [key],
    queryFn: () => artistsApi.getArtistAlbums({ id }),
    enabled: !!id,
    retry: false,
  });
};
