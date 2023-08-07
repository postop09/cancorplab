import { useState } from "react";
import customAxios from "@/lib/customAxios";
import { SummonerInfo } from "@/type/summonerInfo.type";

const useGetSummoner = () => {
  const [userName, setUserName] = useState("");

  const getSummoner = async (summonerName: string): Promise<SummonerInfo> => {
    const res = await customAxios(
      "get",
      `/summoner/v4/summoners/by-name/${summonerName}`,
    );

    return res && res.data;
  };

  return { getSummoner, userName, setUserName };
};

export default useGetSummoner;
