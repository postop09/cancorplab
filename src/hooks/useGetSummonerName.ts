import { useEffect, useState } from "react";

const useGetSummonerName = () => {
  const [summonerName, setSummonerName] = useState("");

  useEffect(() => {
    const item = window.sessionStorage.getItem("summonerName");
    if (item) {
      setSummonerName(item.toString());
    }
  }, []);

  return { summonerName };
};

export default useGetSummonerName;
