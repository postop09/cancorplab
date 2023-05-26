import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import useGetAnalysisData from "@/hooks/useGetAnalysisData";
import { TAGS } from "@/const/TAGS";
import useSumMasteryPoint from "@/hooks/useSumMasteryPoint";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);
  const { sumByTags } = useGetAnalysisData(masteryList);

  const ALL = useSumMasteryPoint(masteryList);
  const FIGHTER = sumByTags(TAGS.FIGHTER);
  const MAGE = sumByTags(TAGS.MAGE);
  const TANK = sumByTags(TAGS.TANK);
  const ASSASSIN = sumByTags(TAGS.ASSASSIN);
  const SUPPORT = sumByTags(TAGS.SUPPORT);
  const MARKSMAN = sumByTags(TAGS.MARKSMAN);

  console.log("ALL", useSumMasteryPoint(masteryList));
  console.log("FIGHTER", sumByTags(TAGS.FIGHTER));
  console.log("MAGE", sumByTags(TAGS.MAGE));
  console.log("TANK", sumByTags(TAGS.TANK));
  console.log("ASSASSIN", sumByTags(TAGS.ASSASSIN));
  console.log("SUPPORT", sumByTags(TAGS.SUPPORT));
  console.log("MARKSMAN", sumByTags(TAGS.MARKSMAN));

  return (
    <>
      <Head>
        <title>LBTI | CANLab</title>
      </Head>
      <h2>성향 분석</h2>
      <ul>
        <li>ALL : {useSumMasteryPoint(masteryList)}</li>
        <li>
          FIGHTER : {sumByTags(TAGS.FIGHTER)} ({((FIGHTER / ALL) * 100).toFixed(1)}%)
        </li>
        <li>
          MAGE : {sumByTags(TAGS.MAGE)} ({((MAGE / ALL) * 100).toFixed(1)}%)
        </li>
        <li>
          TANK : {sumByTags(TAGS.TANK)} ({((TANK / ALL) * 100).toFixed(1)}%)
        </li>
        <li>
          ASSASSIN : {sumByTags(TAGS.ASSASSIN)} ({((ASSASSIN / ALL) * 100).toFixed(1)}%)
        </li>
        <li>
          SUPPORT : {sumByTags(TAGS.SUPPORT)} ({((SUPPORT / ALL) * 100).toFixed(1)}%)
        </li>
        <li>
          MARKSMAN : {sumByTags(TAGS.MARKSMAN)} ({((MARKSMAN / ALL) * 100).toFixed(1)}%)
        </li>
      </ul>
    </>
  );
};

export default Index;
