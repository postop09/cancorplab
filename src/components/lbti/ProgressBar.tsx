import React from "react";
import * as S from "./ProgressBar.style";

type Props = {
  title?: string;
  numerator: number;
  denominator: number;
};

const ProgressBar = ({ title, numerator, denominator }: Props) => {
  const dealt = Math.floor((numerator / denominator) * 100);

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ProgressWrapper>
        <S.Progress>
          <S.Dealt dealt={dealt}></S.Dealt>
        </S.Progress>
        <div>
          {dealt}% ({numerator})
        </div>
      </S.ProgressWrapper>
    </S.Wrapper>
  );
};

export default ProgressBar;
