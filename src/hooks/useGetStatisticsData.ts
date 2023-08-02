import useGetAnalysisData from "@/hooks/useGetAnalysisData";
import { TAGS } from "@/const/TAGS";
import { MasteryFullData } from "@/type/masteryData.type";
import sumMasteryPoint from "@/hooks/common/sumMasteryPoint";

const useGetStatisticsData = (masteryList: MasteryFullData[]) => {
  const { sumByTags } = useGetAnalysisData(masteryList);
  const SUM_OF_ALL_TAGS = sumMasteryPoint(masteryList);
  const SUM_BY_TAGS = [
    {
      title: "F",
      label: "전사",
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

  return { SUM_BY_TAGS, SUM_OF_ALL_TAGS };
};

export default useGetStatisticsData;
