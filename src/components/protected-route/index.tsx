import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "@constants/routes";
import { HomePage } from "@pages/home";
import { NotFound } from "@pages/not-found";
import { Login } from "@pages/auth/login";
import { Registration } from "@pages/auth/registration";
import { RecoveryPassword } from "@pages/auth/recovery-password";
import { AlbumsPage } from "@pages/albums";
import { ArtistsPage } from "@pages/artists";
import { MyMusicPage } from "@pages/my-music";
import { ArtistPage } from "@pages/artists/artist";
import { SearchPage } from "@pages/search";
import { LayoutMain } from "@components/layout-main";
import { TrackPage } from "@pages/track";

export const ProtectedRoute = () => {
  const routesList = useMemo(() => {
    return [
      { path: "/", element: <HomePage /> },
      { path: routes.albums, element: <AlbumsPage /> },
      { path: routes.artist, element: <ArtistPage /> },
      { path: routes.artists, element: <ArtistsPage /> },
      { path: routes.myMusic, element: <MyMusicPage /> },
      { path: routes.track, element: <TrackPage /> },
      { path: routes.search, element: <SearchPage /> },
      { path: routes.login, element: <Login /> },
      { path: routes.registration, element: <Registration /> },
      { path: routes.recoveryPassword, element: <RecoveryPassword /> },
      { path: "*", element: <NotFound /> },
    ];
  }, []);

  return (
    <Routes>
      {routesList.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.path === routes.login ||
            route.path === routes.registration ||
            route.path === routes.recoveryPassword ? (
              route.element
            ) : (
              <LayoutMain>{route.element}</LayoutMain>
            )
          }
        />
      ))}
    </Routes>
  );
};
