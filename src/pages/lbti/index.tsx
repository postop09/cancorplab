import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);

  console.log(masteryList);

  return (
    <>
      <Head>
        <title>CANLab-LBTI</title>
      </Head>
      <h2>성향 분석</h2>
    </>
  );
};

export default Index;
