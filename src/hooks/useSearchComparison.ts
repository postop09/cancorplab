import { FormEvent, useEffect, useState } from "react";
import { SumByTagsData } from "@/type/result.type";
import useGetStatisticsData from "@/hooks/useGetStatisticsData";
import useGetSummoner from "@/hooks/useGetSummoner";
import useGetMastery from "@/hooks/useGetMastery";

const useSearchComparison = (data: SumByTagsData[]) => {
  const [dataList, setDataList] = useState<SumByTagsData[][]>([]);
  const [label, setLabel] = useState<string[]>([]);
  const { getSummoner, userName, setUserName } = useGetSummoner();
  const { combineChampionAndMasteryList } = useGetMastery("noUseEffect");

  useEffect(() => {
    setDataList([data]);
  }, [data]);

  useEffect(() => {
    const summonerName = window.sessionStorage.getItem("summonerName");
    if (summonerName) {
      setLabel([summonerName]);
    }
  }, []);

  const handleSearch = async (e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (userName.length < 2) return alert("2글자 이상 검색해주세요.");
    if (label.includes(userName)) return alert("이미 존재하는 소환사 입니다.");
    try {
      const summoner = await getSummoner(userName);
      const masteryList = await combineChampionAndMasteryList(summoner.id);
      const { SUM_BY_TAGS } = useGetStatisticsData(masteryList);
      setLabel((prev) => [...prev, userName]);
      setDataList((prev) => [...prev, SUM_BY_TAGS]);
      setUserName("");
    } catch (err) {
      alert("일치하는 소환사가 없습니다.");
    }
  };

  const handleReset = () => {
    setDataList([data]);
    setLabel((prev) => [prev[0]]);
  };

  return { dataList, label, userName, setUserName, handleSearch, handleReset };
};

export default useSearchComparison;
