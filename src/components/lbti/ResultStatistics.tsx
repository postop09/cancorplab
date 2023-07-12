import React from "react";
import Image from "next/image";
import * as S from "./ResultStatistics.style";
import { SumByTagsData } from "@/type/result.type";
import useAnalysisCharacter from "@/hooks/useAnalysisCharacter";
import RadarChart from "@/components/lbti/RadarChart";
import useSearchComparison from "@/hooks/useSearchComparison";

type Props = {
  data: SumByTagsData[];
};

const ResultStatistics = ({ data }: Props) => {
  const { character } = useAnalysisCharacter(data);
  const { dataList, label, setUserName, handleSearch } = useSearchComparison(data);

  // TODO - 비교대상 검색 후 Radar 그래프 추가
  //  data 를 dataList: SumByTagsData[][] 의 형태로 가공한다. (state)
  //  비교대상 검색 후 dataList 에 검색결과 data 를 추가한다. (setState)
  //  Radar chart 내부에서 dataList 을 돌면서 datasets 을 생성한다. (map)

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
