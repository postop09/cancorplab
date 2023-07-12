import customAxios from "@/lib/customAxios";
import { useEffect, useState } from "react";
import CHAMPION from "../data/champion.json";
import { CustomChampion } from "@/type/championData.type";
import { MasteryFullData } from "@/type/masteryData.type";
import useFilterObject from "@/hooks/common/useFilterObject";

const useGetMastery = (isEffect?: "noUseEffect") => {
  const [masteryList, setMasteryList] = useState<MasteryFullData[]>([]);

  useEffect(() => {
    if (!isEffect) {
      const summonerId = window.sessionStorage.getItem("summonerId");
      if (summonerId) {
        combineChampionAndMasteryList(summonerId);
      }
    }
  }, []);

  const combineChampionAndMasteryList = async (id: string) => {
    let result: MasteryFullData[] = [];
    const championList = getChampionList();
    const { data: masteryList } = await customAxios(
      "get",
      `/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
    );

    if (masteryList) {
      for (let mastery of masteryList) {
        const championInfo = championList.find((champion) => {
          return +mastery.championId === +champion.key;
        });
        result.push(Object.assign(mastery, championInfo));
      }
    }
    setMasteryList(result);
    return result;
  };

  const getChampionList = (): CustomChampion[] => {
    const necessaryKeys = ["id", "image", "key", "name", "tags"];
    return useFilterObject(CHAMPION.data, necessaryKeys);
  };

  return { masteryList, combineChampionAndMasteryList };
};

export default useGetMastery;
