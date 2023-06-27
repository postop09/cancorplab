import { CustomChampion } from "@/type/championData.type";

export type MasteryInfo = {
  championId: number;
  championLevel: number;
  championPoints: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  chestGranted: boolean;
  lastPlayTime: number;
  summonerId: string;
  tokensEarned: number;
};

export type MasteryFullData = MasteryInfo & CustomChampion;
