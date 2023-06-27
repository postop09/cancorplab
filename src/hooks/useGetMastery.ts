import customAxios from "@/lib/customAxios";
import { useEffect, useState } from "react";
import CHAMPION from "../data/champion.json";
import { CustomChampion } from "@/type/championData.type";
import { MasteryFullData } from "@/type/masteryData.type";
import useFilterObject from "@/hooks/useFilterObject";

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

  // TODO - object 에서 내가 원하는 key-value 뽑아주는 함수
  //  파라미터로 list, necessaryKeys 받아서 활용도가 더 높고 재사용할 수 있는 함수로 리팩터링
  const getChampionList = (): CustomChampion[] => {
    const necessaryKeys = ["id", "image", "key", "name", "tags"];
    return useFilterObject(CHAMPION.data, necessaryKeys);
  };

  const combineChampionAndMasteryList = async (): Promise<MasteryFullData[]> => {
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
    const ChampionAndMasteryList = await combineChampionAndMasteryList();
    if (ChampionAndMasteryList) {
      setMasteryList(ChampionAndMasteryList);
    }
  };

  return { masteryList };
};

export default useGetMastery;
