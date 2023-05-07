import React from "react";
import { MasteryFullData } from "@/type/masteryData";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import Chart from "@/components/Mastery/Chart";
import Image from "next/image";
import Head from "next/head";
import * as S from "./index.style";

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
      {masteryList.map((mastery: MasteryFullData) => {
        return (
          <S.Wrapper key={mastery.championId}>
            <Image
              src={`/assets/img/${mastery.image.full}`}
              alt=""
              width={40}
              height={40}
            />
            <S.TxtWrapper>
              <strong>{mastery.name}</strong>
              <small>{mastery.championPoints}</small>
            </S.TxtWrapper>
          </S.Wrapper>
        );
      })}
    </>
  );
};
export default Index;
