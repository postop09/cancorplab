import Head from "next/head";
import Search from "@/components/Home/Search";
import Title from "@/components/Home/Title";
import Info from "@/components/Home/Info";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>롤챔 | CANLab</title>
        <meta
          name="description"
          content="CANLab 은 리그오브레전드 플레이 정보와 관련된 통계 그래프, 재미로 보는 성향분석까지 lol과 관련된 재미있는 정보를 얻을 수 있는 공간입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/assets/img/seo/ogImage.png" />
        <link rel="icon" href="" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6130554803659144"
          crossOrigin="anonymous"
        ></script>
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

  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mobile}) {
    padding: 6rem 1rem;
  }
`;
