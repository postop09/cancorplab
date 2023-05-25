import { MasteryFullData } from "@/type/masteryData";

const useSumMasteryPoint = (data: MasteryFullData[]) => {
  const pointList = data.map((mastery) => mastery.championPoints);

  return pointList.reduce((sum, point) => sum + point, 0);
};

export default useSumMasteryPoint;
