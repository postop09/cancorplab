import React from "react";
import { MasteryFullData } from "@/type/masteryData";
import { useRouter } from "next/router";
import useGetMastery from "@/hooks/useGetMastery";
import styled from "styled-components";
import Chart from "@/components/Mastery/Chart";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const { query } = router;
  const { masteryList } = useGetMastery(query.summoner as string);

  return (
    <>
      <h1>차트를 보여줄 거에요</h1>
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
