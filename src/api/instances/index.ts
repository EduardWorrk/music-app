import axios from "axios";
import qs from "query-string";
import { API_URL } from "@constants/config";

export const axiosInstance = axios.create({
  baseURL: "https://api.jamendo.com/v3.0",
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "none" }),
});

export const axiosAuthInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("Authorization");

    config.params = {
      client_id: "94607ffa",
      format: "json",
      ...config.params, // Дополнительные параметры из конфигурации
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
