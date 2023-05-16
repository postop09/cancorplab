import axios, { AxiosInstance, Method } from "axios";
import { RIOT_API_KEY, RIOT_API_URL } from "@/const/API";

const settingAxios: AxiosInstance = axios.create({
  baseURL: RIOT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const customAxios = (method: Method, url: string, data?: any) => {
  return settingAxios({
    method,
    url: url + `?api_key=${RIOT_API_KEY}`,
    data,
  }).catch((reason) => {
    throw new Error(reason);
  });
};

export default customAxios;
