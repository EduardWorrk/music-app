import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/store";
import { CommonList } from "@components/common-list";
import { Stack, Typography } from "@mui/material";
import { ListTracks } from "@components/list-tracks";
import { useMutation } from "@tanstack/react-query";
import { albumsApi } from "@api/albums";
import { setAlbum } from "@store/slices/album";
import { useNavigate } from "react-router";

function hasElements<T extends any[]>(list: T): boolean {
  return !!list.length;
}

export const SearchPage: FC = () => {
  const { loading, albums, tracks, artists } = useSelector(
    (state: RootState) => state.search
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const fetchAlbumTracks = useMutation({
    mutationFn: albumsApi.getAlbumsTrack,
    onSuccess: (data) => {
      dispatch(setAlbum(data[0]));
    },
  });

  const onCallBackLinkAlbum = useCallback(
    (id: number) => {
      fetchAlbumTracks.mutate({ id });
    },
    [fetchAlbumTracks]
  );

  const onCallBackLinkArtist = useCallback(
    (id: number) => {
      return navigate(`/artist/${id}`);
    },
    [navigate]
  );

  const isNonResults =
    !loading && [albums, tracks, artists].every((arr) => arr.length === 0);

  return (
    <>
      {isNonResults ? (
        <Typography variant="h3" color="white">
          Нет совпадений
        </Typography>
      ) : (
        <Stack spacing={8}>
          {hasElements(tracks) && (
            <ListTracks index title="Список найденных треков" tracks={tracks} />
          )}

          {hasElements(albums) && (
            <CommonList
              onCallBack={onCallBackLinkAlbum}
              title="Найденные альбомы"
              data={albums.map((album) => ({
                ...album,
                date: album.releasedate,
              }))}
            />
          )}

          {hasElements(artists) && (
            <CommonList
              onCallBack={onCallBackLinkArtist}
              title="Найденные артисты"
              data={artists}
            />
          )}
        </Stack>
      )}
    </>
  );
};
