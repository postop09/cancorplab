import axios, { AxiosInstance } from "axios";
import { RIOT_API_URL } from "@/const/API";

const customAxios: AxiosInstance = axios.create({
  baseURL: RIOT_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default customAxios;
