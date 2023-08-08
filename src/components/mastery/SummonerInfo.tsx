import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { HideTitleH2 } from "@/styles/common";
import { MasteryFullData } from "@/type/masteryData.type";
import convertToLocale from "@/hooks/common/convertToLocale";
import useKakaoShare from "@/hooks/common/useKakaoShare";
import { CharacterContext } from "@/context/CharacterContext";
import useGetSummonerName from "@/hooks/useGetSummonerName";
import { analyticsLogEvent } from "@/lib/firebase.lib";
import { EVENT_COMMON } from "@/const/EVENT_NAMES";
import sumMasteryPoint from "@/hooks/common/sumMasteryPoint";
import * as S from "./SummonerInfo.style";

type Props = {
  data: MasteryFullData[];
  pathName?: string;
  title?: string;
  contents?: string;
};

const SummonerInfo = ({ data, pathName, title, contents }: Props) => {
  const { shareKakao } = useKakaoShare();
  const { character } = useContext(CharacterContext);
  const { summonerName } = useGetSummonerName();

  return (
    <S.Wrapper>
      <HideTitleH2>소환사 정보</HideTitleH2>
      <S.InfoWrapper>
        <S.UserName>{summonerName}</S.UserName>
        <S.ScoreWrapper>
          <dt>챔피언 숙련도 점수</dt>
          <dd>
            {convertToLocale(sumMasteryPoint(data))} <span>pt</span>
          </dd>
        </S.ScoreWrapper>
      </S.InfoWrapper>
      {pathName && (
        <div>
          <S.ShareWrapper>
            <S.AnalysisBtn
              type="button"
              onClick={() => {
                analyticsLogEvent(EVENT_COMMON.share);
                shareKakao(character!.title, character!.contents);
              }}
            >
              <span className="txt_hover">공유하기</span>
              <span className="txt_normal">
                <Image
                  src="/assets/icon/kakaotalk_sharing_btn.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </span>
              <span className="txt_opacity">이동</span>
            </S.AnalysisBtn>
          </S.ShareWrapper>
          <Link href={pathName}>
            <S.AnalysisBtn
              type="button"
              title={title}
              onClick={() =>
                analyticsLogEvent(EVENT_COMMON.move, { path: pathName })
              }
            >
              <span className="txt_hover">{contents}</span>
              <span className="txt_normal">
                <Image
                  src="/assets/icon/caretRight.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </span>
              <span className="txt_opacity">이동</span>
            </S.AnalysisBtn>
          </Link>
        </div>
      )}
    </S.Wrapper>
  );
};

export default SummonerInfo;
