import { MasteryFullData } from "@/type/masteryData.type";
import { AnalysisDataType, TagsEnum } from "@/type/analysisData.type";
import useSumMasteryPoint from "@/hooks/useSumMasteryPoint";
import useFilterObject from "@/hooks/useFilterObject";

interface Tags {
  tags: string[];
}

const useGetAnalysisData = (masteryList: MasteryFullData[]) => {
  const getListFilteredByTags = (): AnalysisDataType[] => {
    const necessaryKeys = ["championId", "championPoints", "name", "tags"];
    return useFilterObject(masteryList, necessaryKeys);
  };

  const filterTags = <T extends Tags>(list: T[], tagName: TagsEnum) => {
    return list.filter((item) => item.tags.includes(tagName));
  };

  const sumByTags = (tagName: TagsEnum) => {
    const tagsData = filterTags(getListFilteredByTags(), tagName);
    return useSumMasteryPoint(tagsData);
  };

  return { sumByTags };
};

export default useGetAnalysisData;
