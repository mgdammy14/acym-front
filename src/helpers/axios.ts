import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import config from "../config";

const UrlApi = `${config.BASE_URL}/api`;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: UrlApi,
});

export const axiosConnect = (instance: AxiosInstance = axiosInstance) => {
  return {
    get: async (
      path: string,
      params?: AxiosRequestConfig<any> | undefined
    ): Promise<AxiosResponse<any, any>> => {
      return await instance.get(path, { params });
    },
    
    post: async (
      path: string,
      data?: any,
      config?: AxiosRequestConfig<any> | undefined
    ) => {
      return await instance.post(path, data, { ...config });
    },

    put: async (
      path: string,
      data: any,
      config?: AxiosRequestConfig<any> | undefined
    ) => {
      return await instance.put(path, data, { ...config });
    },

    patch: async (
      path: string,
      data: any,
      config?: AxiosRequestConfig<any> | undefined
    ) => {
      return await instance.patch(path, data, { ...config });
    },

    delete: (path: string) => {
      return instance.delete(path);
    },
  };
};
