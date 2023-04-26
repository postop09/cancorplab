import customAxios from "@/lib/customAxios";
import { useEffect, useState } from "react";
import CHAMPION from "../assets/json/champion.json";

const useGetMastery = (id: string) => {
  const [masteryList, setMasteryList] = useState([]);

  useEffect(() => {
    if (id) {
      getMastery();
      packedData();
      console.log(makeJsonToArray());
    }
  }, [id]);

  const getMastery = async () => {
    const res = await customAxios(
      "get",
      `/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
    );
    if (res) {
      setMasteryList(res.data);
      return res.data;
    }
  };

  const makeJsonToArray = (): any[] => {
    const keysToPick = ["id", "image", "key", "name", "tags"];
    let arr: any[] = [];

    Object.entries(CHAMPION.data).forEach(([_, value]: [string, any]) => {
      console.log(value);
      const newValue = Object.keys(value)
        .filter((keyName) => keysToPick.includes(keyName))
        .reduce((result: any, key) => {
          result[key] = value[key];
          return result;
        });
      arr.push(newValue);
    });

    return arr;
  };

  const packedData = async () => {
    const mastery = await getMastery();
    if (mastery) {
      mastery.map((m: any) => {
        console.log(m);
      });
    }
  };

  return { masteryList };
};

export default useGetMastery;
