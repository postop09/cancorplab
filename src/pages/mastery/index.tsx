import React from "react";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import Chart from "@/components/Mastery/Chart";
import Head from "next/head";
import List from "@/components/Mastery/List";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);

  return (
    <>
      <Head>
        <title>CANLab</title>
      </Head>
      <Chart data={masteryList} />
      <List masteryList={masteryList} />
    </>
  );
};
export default Index;
