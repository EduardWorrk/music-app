import { FC, useCallback } from "react";
import { useGetAlbumsInfinite } from "@queries/albums";
import { useMutation } from "@tanstack/react-query";
import { albumsApi } from "@api/albums";
import { useDispatch } from "react-redux";
import { setAlbum } from "@store/slices/album";
import { Loading } from "@components/loading";
import { AlbumSortOptions } from "@enums/album-sort-options";
import { List } from "@components/list";
import { InfiniteScrollTrigger } from "@components/infinite-scroll-trigger";

export const AlbumsPage: FC = () => {
  const dispatch = useDispatch();

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useGetAlbumsInfinite("albumsList", {
      limit: 50,
      order: AlbumSortOptions.Popular_total,
    });

  // Объединяем все страницы в один массив
  const albums = data?.pages.flat() || [];

  const fetchAlbums = useMutation({
    mutationFn: albumsApi.getAlbumsTrack,
    onSuccess: (data) => {
      dispatch(setAlbum(data[0]));
    },
  });

  const onCallBackIdAlbums = useCallback(
    (id: number) => {
      fetchAlbums.mutate({ id });
    },
    [fetchAlbums]
  );

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      {isLoading ? (
        <Loading verticalSize={30} />
      ) : (
        <>
          <List
            data={albums}
            title="Список альбомов"
            onCallBack={onCallBackIdAlbums}
          />
          <InfiniteScrollTrigger
            onIntersect={handleLoadMore}
            isLoading={isFetchingNextPage}
          />
        </>
      )}
    </>
  );
};
