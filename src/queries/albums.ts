import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
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

export const useGetAlbumsInfinite = (queryKey: string, param: TParamAlbums) => {
  const key = [queryKey];

  return useInfiniteQuery({
    queryKey: key,
    queryFn: ({ pageParam = 0 }) =>
      albumsApi.getAlbums({ ...param, offset: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const limit = Number(param.limit ?? 50);
      // Если последняя страница содержит меньше элементов чем limit, значит это последняя страница
      if (lastPage.length < limit) {
        return undefined;
      }
      // Возвращаем offset для следующей страницы
      return allPages.length * limit;
    },
    refetchOnMount: "always",
    select: (data) => ({
      pages: data.pages.map((page) =>
        page.map((album) => ({ ...album, date: album.releasedate }))
      ),
      pageParams: data.pageParams,
    }),
  });
};
