import React from "react";
import Image from "next/image";
import * as S from "./ResultStatistics.style";
import ProgressBar from "@/components/lbti/ProgressBar";
import { StatisticsData } from "@/type/result.type";

type Props = {
  data: StatisticsData[];
  totalPoints: number;
};

const ResultStatistics = ({ data, totalPoints }: Props) => {
  // TODO - ResultWordWrapper 삭제
  //  현재 컴포넌트에서는 통계 결과를 보여준다.
  //  결과 텍스트는 ResultDetail 에서 보여준다.

  return (
    <S.ResultWrapper>
      <Image
        src={"/assets/img/champion/loading/Olaf_1.jpg"}
        alt={""}
        width={308}
        height={560}
      />
      <S.DetailWrapper>
        <S.ResultWordWrapper>
          <S.ResultWord>탑 왕</S.ResultWord>
          <S.ResultContents>최선의 방어는 공격</S.ResultContents>
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
