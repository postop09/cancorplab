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
