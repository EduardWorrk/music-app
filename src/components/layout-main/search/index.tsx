import { ChangeEvent, FC, useEffect, useState } from "react";
import { removeSlash } from "@utils/index";
import { useMutation } from "@tanstack/react-query";
import { tracksApi } from "@api/track";
import { albumsApi } from "@api/albums";
import { artistsApi } from "@api/artists";
import { useDispatch } from "react-redux";
import {
  setAlbums,
  setArtist,
  setTracks,
  setLoading,
} from "@store/slices/search";
import { useLocation, useNavigate } from "react-router";
import { routes } from "@constants/routes";
import { useDebounce } from "@hooks/debounce";
import { InputSearch } from "@components/ui/input-search";

export const Search: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1500);

  const searchTrack = useMutation({
    mutationFn: tracksApi.getTracks,
    onSuccess: (data) => {
      dispatch(setTracks(data));
    },
  });

  const searchAlbum = useMutation({
    mutationFn: albumsApi.getAlbums,
    onSuccess: (data) => {
      dispatch(setAlbums(data));
    },
  });

  const searchArtist = useMutation({
    mutationFn: artistsApi.getArtists,
    onSuccess: (data) => {
      dispatch(setArtist(data));
    },
  });

  const { isLoading: loadingArtist } = searchArtist;
  const { isLoading: loadingAlbum } = searchAlbum;
  const { isLoading: loadingTrack } = searchTrack;

  const loadingAll = loadingAlbum && loadingTrack && loadingArtist;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setValue(searchValue);
  };

  useEffect(() => {
    const fullCount = true;
    const limit = 50;

    const data = { name: value, fullCount, limit };

    if (!value) {
      return;
    }
    searchTrack.mutate(data);
    searchAlbum.mutate(data);
    searchArtist.mutate(data);

    dispatch(setLoading(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    if (removeSlash(pathname) !== `${routes.search}`) {
      dispatch(setTracks([]));
      dispatch(setAlbums([]));
      dispatch(setArtist([]));
    }
  }, [dispatch, navigate, pathname]);

  useEffect(() => {
    if (loadingAll) {
      navigate("/search");
      dispatch(setLoading(false));
    }
  }, [dispatch, loadingAll, navigate]);

  const handleClearValue = () => {
    setValue("");
  };

  return (
    <InputSearch
      value={value}
      onClear={handleClearValue}
      onChange={handleChange}
    />
  );
};
