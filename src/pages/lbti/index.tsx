import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import SummonerInfo from "@/components/mastery/SummonerInfo";
import AnalysisResult from "@/components/lbti/AnalysisResult";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);

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
