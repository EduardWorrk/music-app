import { FC, useCallback } from "react";
import { useParams } from "react-router";
import { useGetArtistAlbum } from "@queries/artists";
import { Author } from "@pages/artists/artist/author";
import { Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { albumsApi } from "@api/albums";
import { setAlbum } from "@store/slices/album";
import { useDispatch } from "react-redux";
import { Loading } from "@components/loading";
import { ArtistAlbums } from "@declarations/artists";
import { List } from "@components/list";

export const ArtistPage: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data: artists, isLoading } = useGetArtistAlbum(Number(id));

  const fetchAlbums = useMutation({
    mutationFn: albumsApi.getAlbumsTrack,
    onSuccess: (data) => {
      dispatch(setAlbum(data[0]));
    },
  });

  const data = artists && (artists[0] as ArtistAlbums);

  const onCallBackIdAlbums = useCallback(
    (id: number) => {
      fetchAlbums.mutate({ id });
    },
    [fetchAlbums]
  );

  return (
    <Stack spacing={5}>
      {data && (
        <Author loading={isLoading} img={data?.image} name={data.name} />
      )}

      {isLoading ? (
        <Loading verticalSize={30} />
      ) : (
        <List
          title="Список альбомов"
          data={data?.albums || []}
          onCallBack={onCallBackIdAlbums}
        />
      )}
    </Stack>
  );
};
