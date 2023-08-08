import React from "react";
import getPercentage from "@/hooks/common/getPercentage";
import convertToLocale from "@/hooks/common/convertToLocale";
import * as S from "./ProgressBar.style";

type Props = {
  label?: string;
  numerator: number;
  denominator: number;
};

const ProgressBar = ({ label, numerator, denominator }: Props) => {
  const dealt = getPercentage(numerator, denominator);

  return (
    <S.Wrapper>
      <S.ProgressWrapper>
        <S.Title>{label}</S.Title>
        <S.Progress>
          <S.Dealt dealt={dealt} />
        </S.Progress>
        <S.DealtTxt>
          <span>{dealt}%</span>
          <span>({convertToLocale(numerator)})</span>
        </S.DealtTxt>
      </S.ProgressWrapper>
    </S.Wrapper>
  );
};

export default ProgressBar;
