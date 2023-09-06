import { MasteryFullData } from "@/type/masteryData.type";
import { AnalysisDataType, TagsEnum } from "@/type/analysisData.type";
import sumMasteryPoint from "@/hooks/common/sumMasteryPoint";
import filterObject from "@/hooks/common/filterObject";

interface Tags {
  tags: string[];
}

const useGetAnalysisData = (masteryList: MasteryFullData[]) => {
  const getListFilteredByTags = (): AnalysisDataType[] => {
    const necessaryKeys = ["championId", "championPoints", "name", "tags"];
    return filterObject(masteryList, necessaryKeys);
  };

  const filterTags = <T extends Tags>(list: T[], tagName: TagsEnum) => {
    return list.filter((item) => item.tags?.includes(tagName));
  };

  const sumByTags = (tagName: TagsEnum) => {
    const tagsData = filterTags(getListFilteredByTags(), tagName);
    return sumMasteryPoint(tagsData);
  };

  return { sumByTags };
};

export default useGetAnalysisData;
