import customAxios from "@/lib/customAxios";
import { useEffect, useState } from "react";
import CHAMPION from "../data/champion.json";
import { CustomChampion } from "@/type/championData.type";
import { MasteryFullData } from "@/type/masteryData.type";
import useFilterObject from "@/hooks/common/useFilterObject";

const useGetMastery = (id: string) => {
  const [masteryList, setMasteryList] = useState<MasteryFullData[]>([]);

  useEffect(() => {
    if (id) {
      combineChampionAndMasteryList();
    }
  }, [id]);

  const combineChampionAndMasteryList = async () => {
    let result: MasteryFullData[] = [];
    const masteryList = await getMasteryList();
    const championList = getChampionList();

    if (masteryList) {
      for (let mastery of masteryList) {
        const championInfo = championList.find((champion) => {
          return +mastery.championId === +champion.key;
        });
        result.push(Object.assign(mastery, championInfo));
      }
    }
    setMasteryList(result);
  };

  const getMasteryList = async () => {
    const res = await customAxios(
      "get",
      `/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
    );

    return res && res.data;
  };

  const getChampionList = (): CustomChampion[] => {
    const necessaryKeys = ["id", "image", "key", "name", "tags"];
    return useFilterObject(CHAMPION.data, necessaryKeys);
  };

  return { masteryList };
};

export default useGetMastery;
