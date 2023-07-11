import Search from "@/components/Home/Search";
import Title from "@/components/Home/Title";
import Info from "@/components/Home/Info";
import styled from "styled-components";
import useAnalyticsPage from "@/hooks/common/useAnalyticsPage";
import { EVENT_COMMON } from "@/const/EVENT_NAMES";
import Head from "next/head";

export default function Home() {
  useAnalyticsPage(EVENT_COMMON.page);

  return (
    <>
      <Head>
        <title>롤챔 | CANLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <Title />
        <Search />
        <Info />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.WIDTH.pc};
  min-height: 100vh;
  margin: auto;
  padding: 6rem;

  &::after {
    content: "";
    background: url(/assets/img/champion/centered/Varus_7.jpg) no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    justify-content: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mobile}) {
    padding: 6rem 1rem;
  }
`;
