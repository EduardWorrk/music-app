import { axiosInstance } from "@api/instances";
import { Response } from "@declarations/index";
import { Artist, ArtistAlbums } from "@declarations/artists";

export enum ArtistSortOptions {
  Name = "name",
  Id = "id",
  JoinDate = "joindate",
  PopularityTotal = "popularity_total",
  PopularityMonth = "popularity_month",
  PopularityWeek = "popularity_week",
}

export type TArtists = {
  order?: ArtistSortOptions;
  limit?: number | string;
  namesearch?: string;
  fullcount?: boolean;
};

const URL = "artists";

export const artistsApi = {
  async getArtists(params: TArtists) {
    const response = await axiosInstance.get<Response<Artist[]>>(URL, {
      params,
    });

    return response.data.results;
  },

  async getArtistAlbums(params: { id: number }) {
    const response = await axiosInstance.get<Response<ArtistAlbums[]>>(
      `${URL}/albums`,
      {
        params,
      }
    );

    return response.data.results;
  },
};
