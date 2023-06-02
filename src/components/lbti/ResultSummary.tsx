import React from "react";
import * as S from "./ResultSummary.style";
import { useRouter } from "next/router";
import { HideTitleH3 } from "@/styles/common";

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

  // TODO - 챔피언 점수 비율 로직 작성
  //  상황별 예외처리 조건부 로직 작성 (Hook or Function)

  return (
    <S.Wrapper>
      <HideTitleH3>분석 내용 요약</HideTitleH3>
      <p>
        <S.SummonerName>{query.summonerName}</S.SummonerName> 소환사님 의 플레이 성향 분석
        결과, 가장 많이 플레이 한 챔피언 유형은 <S.Strong>암살자</S.Strong> 입니다.
      </p>
      <p>
        소환사님의 전체 숙련도 점수 중 <S.Strong>7234 (40%)</S.Strong> 를 차지하고
        있습니다.
      </p>
      <p>
        가장 적게 플레이 한 챔피언 유형은 <S.Strong>서포터</S.Strong> 이며,{" "}
        <S.Strong>123 (16%)</S.Strong> 를 차지하고 있습니다.
      </p>
    </S.Wrapper>
  );
};

export default ResultSummary;
