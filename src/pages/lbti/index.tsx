import React from "react";
import Head from "next/head";
import useGetMastery from "@/hooks/useGetMastery";
import useAnalyticsPage from "@/hooks/common/useAnalyticsPage";
import { EVENT_LBTI } from "@/const/EVENT_NAMES";
import dynamic from "next/dynamic";

const AnalysisResult = dynamic(() => import("@/components/lbti/AnalysisResult"), {
  ssr: false,
});
const SummonerInfo = dynamic(() => import("@/components/mastery/SummonerInfo"), {
  ssr: false,
});

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
        pathName="/mastery"
        title="내 통계 보러가기"
        contents="통계 보기"
      />
      <AnalysisResult masteryList={masteryList} />
    </>
  );
};

export default Index;
