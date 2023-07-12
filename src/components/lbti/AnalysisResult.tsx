import React from "react";
import { MasteryFullData } from "@/type/masteryData.type";
import * as S from "./AnalysisResult.style";
import { HideTitleH2 } from "@/styles/common";
import ResultSummary from "@/components/lbti/ResultSummary";
import ResultStatistics from "@/components/lbti/ResultStatistics";
import useGetStatisticsData from "@/hooks/useGetStatisticsData";

type Props = {
  masteryList: MasteryFullData[];
};

const AnalysisResult = ({ masteryList }: Props) => {
  const { SUM_OF_ALL_TAGS, SUM_BY_TAGS } = useGetStatisticsData(masteryList);

  return (
    <S.Wrapper>
      <HideTitleH2>성향 분석 결과</HideTitleH2>
      <ResultStatistics data={SUM_BY_TAGS} totalPoints={SUM_OF_ALL_TAGS} />
      <ResultSummary data={SUM_BY_TAGS} totalPoints={SUM_OF_ALL_TAGS} />
    </S.Wrapper>
  );
};

export default AnalysisResult;
