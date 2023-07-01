import { useEffect, useState } from "react";
import customAxios from "@/lib/customAxios";
import { useRouter } from "next/router";

const useGetSummoner = () => {
  const [userName, setUserName] = useState("");

  const getSummoner = async (userName: string) => {
    const res = await customAxios("get", `/summoner/v4/summoners/by-name/${userName}`);

    return res && res.data;
  };

  return { getSummoner, userName, setUserName };
};

export default useGetSummoner;
