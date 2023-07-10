import React from "react";
import Head from "next/head";
import useGetMastery from "@/hooks/useGetMastery";
import SummonerInfo from "@/components/mastery/SummonerInfo";
import AnalysisResult from "@/components/lbti/AnalysisResult";
import useAnalyticsPage from "@/hooks/common/useAnalyticsPage";
import { EVENT_LBTI } from "@/const/EVENT_NAMES";

const Index = () => {
  const { masteryList } = useGetMastery();
  useAnalyticsPage(EVENT_LBTI.page);

  return (
    <>
      <Head>
        <title>LBTI | CANLab</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6130554803659144"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <SummonerInfo
        data={masteryList}
        pathName={"/mastery"}
        title={"내 통계 보러가기"}
        contents={"통계 보기"}
      />
      <AnalysisResult masteryList={masteryList} />
    </>
  );
};

export default Index;
