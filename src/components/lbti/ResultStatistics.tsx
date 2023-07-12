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

  return (
    <S.ResultWrapper>
      <S.ImgWrapper>
        <Image src={`/assets/img/champion/loading/${character?.image}`} alt={""} fill />
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
