import { ChangeEvent, FC, useEffect, useRef } from "react";
import { StyleSearch } from "@components/layout-main/search/styles";
import { Box } from "@mui/material";
import { IconSearch } from "@components/icons";
import { debounce, removeSlash } from "@utils/index";
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

export const Search: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement | null>(null);

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

  const handleSearchChange = debounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nameSearch = event.target.value;
      const fullCount = true;
      const limit = 50;

      const data = { nameSearch, fullCount, limit };

      if (nameSearch) {
        searchTrack.mutate(data);
        searchAlbum.mutate(data);
        searchArtist.mutate(data);
        dispatch(setLoading(true));
      }
    },
    1500
  );

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

  return (
    <StyleSearch
      ref={ref}
      onChange={handleSearchChange}
      startAdornment={
        <Box sx={{ pl: 3 }}>
          <IconSearch />
        </Box>
      }
      placeholder="Трек, альбом, исполнитель"
    />
  );
};
