import React from "react";
import * as S from "./SummonerInfo.style";
import { HideTitleH2 } from "@/styles/common";
import { useRouter } from "next/router";
import { MasteryFullData } from "@/type/masteryData";
import useSumMasteryPoint from "@/hooks/useSumMasteryPoint";
import Link from "next/link";

const SummonerInfo = ({ data }: { data: MasteryFullData[] }) => {
  const router = useRouter();
  const { query } = router;

  return (
    <S.Wrapper>
      <HideTitleH2>소환사 정보</HideTitleH2>
      <S.InfoWrapper>
        <S.UserName>{query.summonerName}</S.UserName>
        <S.ScoreWrapper>
          <dt>챔피언 숙련도 점수</dt>
          <dd>
            {useSumMasteryPoint(data).toLocaleString()} <span>pt</span>
          </dd>
        </S.ScoreWrapper>
      </S.InfoWrapper>
      <div>
        {/*<S.AnalysisTxt>성향 분석하러 가기</S.AnalysisTxt>*/}
        <Link
          href={{
            pathname: "/lbti",
            query: {
              summoner: query.summoner,
              summonerName: query.summonerName,
            },
          }}
        >
          <S.AnalysisBtn type="button" title="내 성향 분석하러 가기">
            <span className="txt_hover">성향 분석</span>
            <span className="txt_normal">아이콘</span>
            <span className="txt_opacity">이동</span>
          </S.AnalysisBtn>
        </Link>
      </div>
    </S.Wrapper>
  );
};

export default SummonerInfo;
