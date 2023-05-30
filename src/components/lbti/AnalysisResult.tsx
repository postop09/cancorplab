import React from "react";
import ProgressBar from "@/components/lbti/ProgressBar";
import { MasteryFullData } from "@/type/masteryData.type";
import useGetAnalysisData from "@/hooks/useGetAnalysisData";
import useSumMasteryPoint from "@/hooks/useSumMasteryPoint";
import { TAGS } from "@/const/TAGS";
import * as S from "./AnalysisResult.style";
import { HideTitleH2 } from "@/styles/common";
import Image from "next/image";

const AnalysisResult = ({ masteryList }: { masteryList: MasteryFullData[] }) => {
  const { sumByTags } = useGetAnalysisData(masteryList);
  const ALL = useSumMasteryPoint(masteryList);
  const FIGHTER = sumByTags(TAGS.FIGHTER);
  const MAGE = sumByTags(TAGS.MAGE);
  const TANK = sumByTags(TAGS.TANK);
  const ASSASSIN = sumByTags(TAGS.ASSASSIN);
  const SUPPORT = sumByTags(TAGS.SUPPORT);
  const MARKSMAN = sumByTags(TAGS.MARKSMAN);

  return (
    <S.Wrapper>
      <HideTitleH2>성향 분석 결과</HideTitleH2>
      <S.ResultWrapper>
        <Image
          src={"/assets/img/champion/loading/Talon_0.jpg"}
          alt={""}
          width={308}
          height={560}
        />
        <S.DetailWrapper>
          <S.ResultWordWrapper>
            <S.ResultWord>누 칼 협 ?</S.ResultWord>
            <S.ResultContents>
              대체...얼마나 많은 생명을 빼앗아 갔습니까...
            </S.ResultContents>
          </S.ResultWordWrapper>
          <S.Ul>
            <li>
              <ProgressBar title={"결투가"} numerator={FIGHTER} denominator={ALL} />
            </li>
            <li>
              <ProgressBar title={"마법사"} numerator={MAGE} denominator={ALL} />
            </li>
            <li>
              <ProgressBar title={"탱커"} numerator={TANK} denominator={ALL} />
            </li>
            <li>
              <ProgressBar title={"암살자"} numerator={ASSASSIN} denominator={ALL} />
            </li>
            <li>
              <ProgressBar title={"서포터"} numerator={SUPPORT} denominator={ALL} />
            </li>
            <li>
              <ProgressBar title={"명사수"} numerator={MARKSMAN} denominator={ALL} />
            </li>
          </S.Ul>
        </S.DetailWrapper>
      </S.ResultWrapper>
    </S.Wrapper>
  );
};

export default AnalysisResult;
