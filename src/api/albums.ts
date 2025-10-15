import { TAlbum, TAlbumWidthTracks } from "@declarations/albums";
import { Response } from "@declarations/index";

import { AlbumSortOptions } from "@enums/album-sort-options";
import { axiosInstance } from "./instances";

export type TParamAlbums = {
  id?: number;
  limit?: number | string;
  namesearch?: string;
  fullcount?: boolean;
  order?: AlbumSortOptions;
  offset?: number;
};

const URL = "albums";

export const albumsApi = {
  async getAlbums(params: TParamAlbums) {
    const response = await axiosInstance.get<Response<TAlbum[]>>(URL, {
      params,
    });

    return response.data.results;
  },

  async getAlbumsTrack(params: TParamAlbums) {
    const response = await axiosInstance.get<Response<TAlbumWidthTracks[]>>(
      `${URL}/tracks`,
      {
        params,
      }
    );

    return response.data.results;
  },
};
