import React from "react";
import Head from "next/head";
import useGetMastery from "@/hooks/useGetMastery";
import useAnalyticsPage from "@/hooks/common/useAnalyticsPage";
import { EVENT_MASTERY } from "@/const/EVENT_NAMES";
import dynamic from "next/dynamic";

const SummonerInfo = dynamic(() => import("@/components/mastery/SummonerInfo"), {
  ssr: false,
});
const Chart = dynamic(() => import("@/components/mastery/Chart"), {
  ssr: false,
});
const List = dynamic(() => import("@/components/mastery/List"), {
  ssr: false,
});

const Index = () => {
  const { masteryList } = useGetMastery();
  useAnalyticsPage(EVENT_MASTERY.page);
  // TODO - button 이벤트로 챔피언 플레이 리스트 show ON/OFF
  //  내 성향 분석하기? 태그별 차트 보여주기?
  return (
    <>
      <Head>
        <title>롤챔 | CANLab</title>
      </Head>
      <SummonerInfo
        data={masteryList}
        pathName="/lbti"
        title="내 성향 분석하러 가기"
        contents="성향 분석"
      />
      <Chart data={masteryList} />
      <List masteryList={masteryList} />
    </>
  );
};
export default Index;
