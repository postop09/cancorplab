import customAxios from "@/lib/customAxios";
import { useEffect, useState } from "react";
import CHAMPION from "../json/champion.json";
import { CustomChampion } from "@/type/championData";
import { MasteryFullData } from "@/type/masteryData";

const useGetMastery = (id: string) => {
  const [masteryList, setMasteryList] = useState<MasteryFullData[]>([]);

  useEffect(() => {
    if (id) {
      setMastery();
    }
  }, [id]);

  const getMasteryList = async () => {
    const res = await customAxios(
      "get",
      `/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
    );

    return res && res.data;
  };

  const getChampionList = (): CustomChampion[] => {
    const necessaryKeys = ["id", "image", "key", "name", "tags"];
    let arr: CustomChampion[] = [];

    Object.entries(CHAMPION.data).forEach(([_, value]: [string, any]) => {
      const customData = necessaryKeys.reduce((result: any, key) => {
        result[key] = value[key];
        return result;
      }, {}) as CustomChampion;
      arr.push(customData);
    });

    return arr;
  };

  const getChampionAndMasteryList = async (): Promise<MasteryFullData[]> => {
    let result: MasteryFullData[] = [];
    const masteryList = await getMasteryList();
    const championList = getChampionList();

    if (masteryList) {
      for (let mastery of masteryList) {
        const championInfo = championList.find((champion) => {
          return +mastery.championId === +champion.key;
        });
        const packedMastery: MasteryFullData = Object.assign(mastery, championInfo);

        result.push(packedMastery);
      }
    }

    return result;
  };

  const setMastery = async () => {
    const ChampionAndMasteryList = await getChampionAndMasteryList();
    if (ChampionAndMasteryList) {
      setMasteryList(ChampionAndMasteryList);
    }
  };

  return { masteryList };
};

export default useGetMastery;
