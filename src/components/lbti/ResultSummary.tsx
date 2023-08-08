import React from "react";
import { useRouter } from "next/router";
import { HideTitleH3 } from "@/styles/common";
import convertToLocale from "@/hooks/common/convertToLocale";
import getPercentage from "@/hooks/common/getPercentage";
import { SumByTagsData } from "@/type/result.type";
import useAnalysisCharacter from "@/hooks/useAnalysisCharacter";
import * as S from "./ResultSummary.style";

type Props = {
  data: SumByTagsData[];
  totalPoints: number;
};

const ResultSummary = ({ data, totalPoints }: Props) => {
  const router = useRouter();
  const { query } = router;
  const maxValueTag = data.reduce((prev, current) => {
    return current.value > prev.value ? current : prev;
  });
  const minValueTag = data.reduce((prev, current) => {
    return current.value < prev.value ? current : prev;
  });
  const { character } = useAnalysisCharacter(data);

  return (
    <S.Wrapper>
      <HideTitleH3>분석 내용 요약</HideTitleH3>
      <S.ResultWrapper>
        <S.SummonerName>{query.summonerName}</S.SummonerName> 소환사님 의 플레이
        성향 분석 결과, 가장 많이 플레이 한 챔피언 유형은{" "}
        <S.Strong>{maxValueTag.label}</S.Strong> 입니다. 소환사님의 전체 숙련도{" "}
        <S.Strong>{convertToLocale(totalPoints)}</S.Strong> 중{" "}
        <S.Strong>
          {convertToLocale(maxValueTag.value)} (
          {getPercentage(maxValueTag.value, totalPoints)}%)
        </S.Strong>{" "}
        를 차지하고 있습니다.
        <br />
        가장 적게 플레이 한 챔피언 유형은{" "}
        <S.Strong>{minValueTag.label}</S.Strong> 이며,{" "}
        <S.Strong>
          {convertToLocale(minValueTag.value)} (
          {getPercentage(minValueTag.value, totalPoints)}%)
        </S.Strong>{" "}
        를 차지하고 있습니다.
      </S.ResultWrapper>
      <S.ResultWrapper>
        소환사님은 협곡의 <S.SummonerName>{character?.title}</S.SummonerName>{" "}
        입니다.
        <br />
        {character?.contents}
      </S.ResultWrapper>
    </S.Wrapper>
  );
};

export default ResultSummary;
