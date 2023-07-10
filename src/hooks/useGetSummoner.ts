import { useState } from "react";
import customAxios from "@/lib/customAxios";
import { SummonerInfo } from "@/type/summonerInfo.type";

const useGetSummoner = () => {
  const [userName, setUserName] = useState("");

  const getSummoner = async (userName: string): Promise<SummonerInfo> => {
    const res = await customAxios("get", `/summoner/v4/summoners/by-name/${userName}`);

    return res && res.data;
  };

  return { getSummoner, userName, setUserName };
};

export default useGetSummoner;
