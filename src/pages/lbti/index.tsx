import React from "react";
import Head from "next/head";
import useGetMastery from "@/hooks/useGetMastery";
import SummonerInfo from "@/components/mastery/SummonerInfo";
import AnalysisResult from "@/components/lbti/AnalysisResult";
import { CharacterProvider } from "@/context/CharacterContext";

const Index = () => {
  const { masteryList } = useGetMastery();

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
      <CharacterProvider>
        <SummonerInfo
          data={masteryList}
          pathName={"/mastery"}
          title={"내 통계 보러가기"}
          contents={"통계 보기"}
        />
        <AnalysisResult masteryList={masteryList} />
      </CharacterProvider>
    </>
  );
};

export default Index;
