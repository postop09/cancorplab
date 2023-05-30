import React from "react";
import * as S from "./SummonerInfo.style";
import { HideTitleH2 } from "@/styles/common";
import { useRouter } from "next/router";
import { MasteryFullData } from "@/type/masteryData.type";
import useSumMasteryPoint from "@/hooks/useSumMasteryPoint";
import Link from "next/link";

type props = {
  data: MasteryFullData[];
  pathName?: string;
  title?: string;
  contents?: string;
};

const SummonerInfo = ({ data, pathName, title, contents }: props) => {
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
      {pathName && (
        <div>
          <Link
            href={{
              pathname: pathName,
              query: {
                summoner: query.summoner,
                summonerName: query.summonerName,
              },
            }}
          >
            <S.AnalysisBtn type="button" title={title}>
              <span className="txt_hover">{contents}</span>
              <span className="txt_normal">아이콘</span>
              <span className="txt_opacity">이동</span>
            </S.AnalysisBtn>
          </Link>
        </div>
      )}
    </S.Wrapper>
  );
};

export default SummonerInfo;
