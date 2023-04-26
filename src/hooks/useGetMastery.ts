import customAxios from "@/lib/customAxios";
import { useEffect, useState } from "react";
import CHAMPION from "../assets/json/champion.json";
import { Champion, CustomChampion } from "@/type/championData";
import { MasteryInfo } from "@/type/masteryData";

const useGetMastery = (id: string) => {
  const [masteryList, setMasteryList] = useState([]);

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

  // TODO - 챔피언 목록 파일 최신화 필요
  //  마스터리는 153 개 항목
  //  챔피언 목록은 148 개 항목
  //  일치하는 값 돌리면 143 개 항목
  const getChampionList = (): CustomChampion[] => {
    const necessaryKeys = ["id", "image", "key", "name", "tags"];
    let arr = [];

    Object.entries(CHAMPION.data).forEach(([_, value]: [string, Champion]) => {
      const customData: CustomChampion | {} = necessaryKeys.reduce((result, key) => {
        result[key] = value[key];
        return result;
      }, {});
      arr.push(customData);
    });

    return arr;
  };

  // TODO - 효율성을 생각했을 때, 굳이 map 을 돌려야 할까?
  //  for 문으로 continue 혹은 find 함수를 활용해 보는게 더 좋겠다.
  const getChampionAndMasteryList = async () => {
    const masteryList = await getMasteryList();
    const championList = getChampionList();
    let packedMastery = [];

    if (masteryList) {
      masteryList.map((mastery: MasteryInfo) => {
        championList.map((champion) => {
          if (+mastery.championId === +champion.key) {
            const newObj = Object.assign(mastery, champion);
            packedMastery.push(newObj);
          }
        });
      });
    }

    return packedMastery;
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
