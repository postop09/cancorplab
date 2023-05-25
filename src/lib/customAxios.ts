import axios, { AxiosInstance, Method } from "axios";
import * as process from "process";

const settingAxios: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RIOT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const customAxios = (method: Method, url: string, data?: any) => {
  return settingAxios({
    method,
    url: url + `?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    data,
  }).catch((reason) => {
    throw new Error(reason);
  });
};

export default customAxios;
