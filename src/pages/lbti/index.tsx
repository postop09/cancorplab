import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import SummonerInfo from "@/components/mastery/SummonerInfo";
import AnalysisResult from "@/components/lbti/AnalysisResult";
import useKakaoShare from "@/hooks/common/useKakaoShare";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);
  const { shareKakao } = useKakaoShare();

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
      <a id="kakaotalk-sharing-btn" onClick={shareKakao}>
        zz
      </a>
    </>
  );
};

export default Index;
