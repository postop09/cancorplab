import { useEffect, useState } from "react";
import customAxios from "@/lib/customAxios";
import { CustomChampion } from "@/type/championData.type";
import { MasteryFullData } from "@/type/masteryData.type";
import filterObject from "@/hooks/common/filterObject";
import CHAMPION from "../data/champion.json";

const useGetMastery = (isEffect?: "noUseEffect") => {
  const [masteryList, setMasteryList] = useState<MasteryFullData[]>([]);

  const getChampionList = (): CustomChampion[] => {
    const necessaryKeys = ["id", "image", "key", "name", "tags"];
    return filterObject(CHAMPION.data, necessaryKeys);
  };

  const combineChampionAndMasteryList = async (id: string) => {
    const result: MasteryFullData[] = [];
    const championList = getChampionList();
    const { data: masteryList } = await customAxios(
      "get",
      `/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
    );

    if (masteryList) {
      for (const mastery of masteryList) {
        const championInfo = championList.find((champion) => {
          return +mastery.championId === +champion.key;
        });
        result.push(Object.assign(mastery, championInfo));
      }
    }
    setMasteryList(result);
    return result;
  };

  useEffect(() => {
    if (!isEffect) {
      const summonerId = window.sessionStorage.getItem("summonerId");
      if (summonerId) {
        combineChampionAndMasteryList(summonerId);
      }
    }
  }, []);

  return { masteryList, combineChampionAndMasteryList };
};

export default useGetMastery;
