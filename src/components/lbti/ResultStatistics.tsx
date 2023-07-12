import React, { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./ResultStatistics.style";
import { SumByTagsData } from "@/type/result.type";
import useAnalysisCharacter from "@/hooks/useAnalysisCharacter";
import RadarChart from "@/components/lbti/RadarChart";
import useGetSummoner from "@/hooks/useGetSummoner";
import useGetMastery from "@/hooks/useGetMastery";
import useGetStatisticsData from "@/hooks/useGetStatisticsData";

type Props = {
  data: SumByTagsData[];
  totalPoints: number;
};

const ResultStatistics = ({ data, totalPoints }: Props) => {
  const [dataList, setDataList] = useState<SumByTagsData[][]>([]);
  const [label, setLabel] = useState<string[]>([]);
  const { character } = useAnalysisCharacter(data);
  const { getSummoner, userName, setUserName } = useGetSummoner();
  const { combineChampionAndMasteryList } = useGetMastery("noUseEffect");
  // const { SUM_BY_TAGS } = useGetStatisticsData(masteryList);

  // console.log(masteryList);

  useEffect(() => {
    setDataList([data]);
  }, [data]);

  useEffect(() => {
    const summonerName = window.sessionStorage.getItem("summonerName");
    if (summonerName) {
      setLabel([summonerName]);
    }
  }, []);

  // TODO - 비교대상 검색 후 Radar 그래프 추가
  //  data 를 dataList: SumByTagsData[][] 의 형태로 가공한다. (state)
  //  비교대상 검색 후 dataList 에 검색결과 data 를 추가한다. (setState)
  //  Radar chart 내부에서 dataList 을 돌면서 datasets 을 생성한다. (map)

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
    } catch (err) {
      alert("일치하는 소환사가 없습니다.");
    }
  };

  // console.log(SUM_BY_TAGS);

  return (
    <S.ResultWrapper>
      <S.ImgWrapper>
        <Image
          src={`/assets/img/champion/loading/${character?.image}`}
          alt={""}
          // width={308}
          // height={560}
          fill
        />
      </S.ImgWrapper>
      <S.DetailWrapper>
        <form onSubmit={handleSearch}>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
          <button type="submit">검색</button>
        </form>
        {/*<S.ResultWordWrapper>*/}
        {/*  <S.ResultWord>{character?.title}</S.ResultWord>*/}
        {/*  <S.ResultContents>"{character?.subtitle}"</S.ResultContents>*/}
        {/*</S.ResultWordWrapper>*/}
        {/*<S.Ul>*/}
        {/*  {data.map((item, index) => {*/}
        {/*    return (*/}
        {/*      <li key={index}>*/}
        {/*        <ProgressBar*/}
        {/*          label={item.label}*/}
        {/*          numerator={item.value}*/}
        {/*          denominator={totalPoints}*/}
        {/*        />*/}
        {/*      </li>*/}
        {/*    );*/}
        {/*  })}*/}
        {/*</S.Ul>*/}
        <RadarChart data={dataList} label={label} />
      </S.DetailWrapper>
    </S.ResultWrapper>
  );
};

export default ResultStatistics;
