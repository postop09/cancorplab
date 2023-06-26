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
      title: "F",
      label: "결투가",
      value: sumByTags(TAGS.FIGHTER),
    },
    {
      title: "MG",
      label: "마법사",
      value: sumByTags(TAGS.MAGE),
    },
    {
      title: "T",
      label: "탱커",
      value: sumByTags(TAGS.TANK),
    },
    {
      title: "A",
      label: "암살자",
      value: sumByTags(TAGS.ASSASSIN),
    },
    {
      title: "S",
      label: "서포터",
      value: sumByTags(TAGS.SUPPORT),
    },
    {
      title: "MM",
      label: "명사수",
      value: sumByTags(TAGS.MARKSMAN),
    },
  ];

  return (
    <S.Wrapper>
      <HideTitleH2>성향 분석 결과</HideTitleH2>
      <ResultStatistics data={SUM_BY_TAGS} totalPoints={SUM_OF_ALL_TAGS} />
      <ResultSummary data={SUM_BY_TAGS} totalPoints={SUM_OF_ALL_TAGS} />
    </S.Wrapper>
  );
};

export default AnalysisResult;
