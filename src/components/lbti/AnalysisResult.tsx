import React from "react";
import { MasteryFullData } from "@/type/masteryData.type";
import useGetAnalysisData from "@/hooks/useGetAnalysisData";
import useSumMasteryPoint from "@/hooks/useSumMasteryPoint";
import { TAGS } from "@/const/TAGS";
import * as S from "./AnalysisResult.style";
import { HideTitleH2 } from "@/styles/common";
import ResultSummary from "@/components/lbti/ResultSummary";
import ResultStatistics from "@/components/lbti/ResultStatistics";

type Props = {
  masteryList: MasteryFullData[];
};

const AnalysisResult = ({ masteryList }: Props) => {
  const { sumByTags } = useGetAnalysisData(masteryList);
  const SUM_OF_ALL_TAGS = useSumMasteryPoint(masteryList);
  const SUM_BY_TAGS = [
    {
      label: "결투가",
      value: sumByTags(TAGS.FIGHTER),
    },
    {
      label: "마법사",
      value: sumByTags(TAGS.MAGE),
    },
    {
      label: "탱커",
      value: sumByTags(TAGS.TANK),
    },
    {
      label: "암살자",
      value: sumByTags(TAGS.ASSASSIN),
    },
    {
      label: "서포터",
      value: sumByTags(TAGS.SUPPORT),
    },
    {
      label: "명사수",
      value: sumByTags(TAGS.MARKSMAN),
    },
  ];

  // TODO - 성향분석 결과 출력 조건
  //  1. 숙련도 점수가 가장 높은 태그를 기준 (Master: M)
  //  2. 두번째로 숙련도 점수가 높은 태그를 선택 (Second: S)
  //  3. M-S 조합 별 성향분석 결과 출력
  //  예시) M: 결투가, S: [마법사, 탱커, 암살자, 서포터, 명사수] 중 하나
  //    M-S 경우의 수: 5 가지
  //    전체 경우의 수: 6 * 5 = 30 가지
  //  풀이) value 제일 높은값, 두번째로 높은값 추출
  //  [{1st...},{2nd...}]
  //  label 의 조합 분석

  return (
    <S.Wrapper>
      <HideTitleH2>성향 분석 결과</HideTitleH2>
      <ResultStatistics data={SUM_BY_TAGS} totalPoints={SUM_OF_ALL_TAGS} />
      <ResultSummary data={SUM_BY_TAGS} totalPoints={SUM_OF_ALL_TAGS} />
    </S.Wrapper>
  );
};

export default AnalysisResult;
