import React from "react";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import Chart from "@/components/Mastery/Chart";
import Head from "next/head";
import List from "@/components/Mastery/List";
import SummonerInfo from "@/components/Mastery/SummonerInfo";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);
  // TODO - button 이벤트로 챔피언 플레이 리스트 show ON/OFF
  //  내 성향 분석하기? 태그별 차트 보여주기?
  return (
    <>
      <Head>
        <title>롤챔 | CANLab</title>
      </Head>
      <SummonerInfo data={masteryList} />
      <Chart data={masteryList} />
      <List masteryList={masteryList} />
    </>
  );
};
export default Index;
