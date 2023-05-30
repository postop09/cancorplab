import React from "react";
import * as S from "./ProgressBar.style";

type Props = {
  title?: string;
  numerator: number;
  denominator: number;
};

const ProgressBar = ({ title, numerator, denominator }: Props) => {
  const dealt: number = +((numerator / denominator) * 100).toFixed(1);

  return (
    <S.Wrapper>
      <S.ProgressWrapper>
        <S.Title>{title}</S.Title>
        <S.Progress>
          <S.Dealt dealt={dealt}></S.Dealt>
        </S.Progress>
        <S.DealtTxt>
          <span>{dealt}%</span>
          <span>({numerator})</span>
        </S.DealtTxt>
      </S.ProgressWrapper>
    </S.Wrapper>
  );
};

export default ProgressBar;
