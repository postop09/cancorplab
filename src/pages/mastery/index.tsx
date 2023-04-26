import React from "react";
import { MasteryInfo } from "@/type/riotAPI";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);

  return (
    <div>
      <h1>차트를 보여줄 거에요</h1>
      <div>내가 플레이 한 챔피언 수 : {masteryList.length}</div>
      {masteryList.map((mastery: MasteryInfo) => {
        return (
          <p key={mastery.championId}>
            <strong>{mastery.championId}</strong>
            <small>{mastery.championPoints}</small>
          </p>
        );
      })}
    </div>
  );
};

export default Index;
