import React from "react";
import useGetMastery from "@/hooks/useGetMastery";
import Chart from "@/components/mastery/Chart";
import Head from "next/head";
import List from "@/components/mastery/List";
import SummonerInfo from "@/components/mastery/SummonerInfo";
import useAnalyticsPage from "@/hooks/common/useAnalyticsPage";
import { EVENT_MASTERY } from "@/const/EVENT_NAMES";

const Index = () => {
  const { masteryList } = useGetMastery();
  useAnalyticsPage(EVENT_MASTERY.page);
  // TODO - button 이벤트로 챔피언 플레이 리스트 show ON/OFF
  //  내 성향 분석하기? 태그별 차트 보여주기?
  return (
    <>
      <Head>
        <title>롤챔 | CANLab</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6130554803659144"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <SummonerInfo
        data={masteryList}
        pathName={"/lbti"}
        title={"내 성향 분석하러 가기"}
        contents={"성향 분석"}
      />
      <Chart data={masteryList} />
      <List masteryList={masteryList} />
    </>
  );
};
export default Index;
