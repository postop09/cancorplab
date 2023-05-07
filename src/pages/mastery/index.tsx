import React from "react";
import { MasteryFullData } from "@/type/masteryData";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import styled from "styled-components";
import Chart from "@/components/Mastery/Chart";
import Image from "next/image";
import Head from "next/head";

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
          <Wrapper key={mastery.championId}>
            <Image
              src={`/assets/img/${mastery.image.full}`}
              alt=""
              width={40}
              height={40}
            />
            <TxtWrapper>
              <strong>{mastery.name}</strong>
              <small>{mastery.championPoints}</small>
            </TxtWrapper>
          </Wrapper>
        );
      })}
    </>
  );
};
export default Index;

const Wrapper = styled.div`
  display: flex;
`;

const TxtWrapper = styled.p`
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-bottom: 1rem;

  strong {
    font-size: 1.5rem;
    margin-right: 1rem;
  }

  small {
    font-size: 1.2rem;
  }
`;
