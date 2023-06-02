import { TAGS } from "@/const/TAGS";

export type AnalysisDataType = {
  championId: number;
  championPoints: number;
  name: string;
  tags: string[];
};

export type TagsEnum = TAGS;
