import { FC, useCallback } from "react";
import { useGetAlbums } from "@queries/albums";
import { useMutation } from "@tanstack/react-query";
import { albumsApi } from "@api/albums";
import { useDispatch } from "react-redux";
import { setAlbum } from "@store/slices/album";
import { Loading } from "@components/loading";
import { AlbumSortOptions } from "@enums/album-sort-options";
import { List } from "@components/list";

export const AlbumsPage: FC = () => {
  const dispatch = useDispatch();

  const { data: albums, isLoading } = useGetAlbums("albumsList", {
    limit: 50,
    order: AlbumSortOptions.Popular_total,
  });

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

  return (
    <>
      {isLoading ? (
        <Loading verticalSize={30} />
      ) : (
        <List
          data={albums}
          title="Список альбомов"
          onCallBack={onCallBackIdAlbums}
        />
      )}
    </>
  );
};
