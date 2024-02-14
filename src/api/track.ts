import { TrackSortOptions } from "enums/track-sort-options";
import { Response } from "@declarations/index";
import { TTrack } from "@declarations/tracks";
import { axiosInstance } from "./instances";

export type TTrackParams = {
  id?: number;
  boost?: TrackSortOptions;
  limit?: number | string;
  search?: string;
  fullcount?: boolean;
  lang?: string | string[];
};

export const tracksApi = {
  async getTracks(data: TTrackParams) {
    const response = await axiosInstance.get<Response<TTrack[]>>(`tracks`, {
      params: data,
    });
    return response.data.results;
  },

  async getSimilarTracks(data: TTrackParams) {
    const response = await axiosInstance.get(`tracks/similar`, {
      params: data,
    });

    return response.data.results;
  },
};
