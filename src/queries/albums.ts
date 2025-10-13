import { useQuery } from "@tanstack/react-query";
import { albumsApi, TParamAlbums } from "@api/albums";

export const useGetAlbums = (queryKey: string, param: TParamAlbums) => {
  const key = [queryKey];

  return useQuery({
    queryKey: key,
    queryFn: () => albumsApi.getAlbums(param),
    refetchOnMount: "always",
    select: (data) =>
      data.map((album) => ({ ...album, date: album.releasedate })),
  });
};
