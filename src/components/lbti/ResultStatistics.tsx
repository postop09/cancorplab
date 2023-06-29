import React from "react";
import Image from "next/image";
import * as S from "./ResultStatistics.style";
import ProgressBar from "@/components/lbti/ProgressBar";
import { SumByTagsData } from "@/type/result.type";
import useAnalysisCharacter from "@/hooks/useAnalysisCharacter";

type Props = {
  data: SumByTagsData[];
  totalPoints: number;
};

const ResultStatistics = ({ data, totalPoints }: Props) => {
  const { character } = useAnalysisCharacter(data);

  return (
    <S.ResultWrapper>
      <S.ImgWrapper>
        <Image
          src={`/assets/img/champion/loading/${character?.image}`}
          alt={""}
          // width={308}
          // height={560}
          fill
        />
      </S.ImgWrapper>
      <S.DetailWrapper>
        <S.ResultWordWrapper>
          <S.ResultWord>{character?.title}</S.ResultWord>
          <S.ResultContents>"{character?.subtitle}"</S.ResultContents>
        </S.ResultWordWrapper>
        <S.Ul>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <ProgressBar
                  label={item.label}
                  numerator={item.value}
                  denominator={totalPoints}
                />
              </li>
            );
          })}
        </S.Ul>
      </S.DetailWrapper>
    </S.ResultWrapper>
  );
};

export default ResultStatistics;
