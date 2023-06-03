import React from "react";
import * as S from "./ResultSummary.style";
import { useRouter } from "next/router";
import { HideTitleH3 } from "@/styles/common";
import useToLocale from "@/hooks/common/useToLocale";
import useGetPercentage from "@/hooks/common/useGetPercentage";

type StatisticsData = {
  label: string;
  value: number;
};

type Props = {
  data: StatisticsData[];
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

  // TODO - 챔피언 점수 비율 로직 작성
  //  상황별 예외처리 조건부 로직 작성 (Hook or Function)

  return (
    <S.Wrapper>
      <HideTitleH3>분석 내용 요약</HideTitleH3>
      <p>
        <S.SummonerName>{query.summonerName}</S.SummonerName> 소환사님 의 플레이 성향 분석
        결과, 가장 많이 플레이 한 챔피언 유형은 <S.Strong>{maxValueTag.label}</S.Strong>{" "}
        입니다.
      </p>
      <p>
        소환사님의 전체 숙련도 <S.Strong>{useToLocale(totalPoints)}</S.Strong> 중{" "}
        <S.Strong>
          {useToLocale(maxValueTag.value)} (
          {useGetPercentage(maxValueTag.value, totalPoints)}%)
        </S.Strong>{" "}
        를 차지하고 있습니다.
      </p>
      <p>
        가장 적게 플레이 한 챔피언 유형은 <S.Strong>{minValueTag.label}</S.Strong> 이며,{" "}
        <S.Strong>
          {useToLocale(minValueTag.value)} (
          {useGetPercentage(minValueTag.value, totalPoints)}%)
        </S.Strong>{" "}
        를 차지하고 있습니다.
      </p>
    </S.Wrapper>
  );
};

export default ResultSummary;
