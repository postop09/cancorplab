import React from "react";
import useGetPercentage from "@/hooks/common/useGetPercentage";
import useToLocale from "@/hooks/common/useToLocale";
import * as S from "./ProgressBar.style";

type Props = {
  label?: string;
  numerator: number;
  denominator: number;
};

const ProgressBar = ({ label, numerator, denominator }: Props) => {
  const dealt = useGetPercentage(numerator, denominator);

  return (
    <S.Wrapper>
      <S.ProgressWrapper>
        <S.Title>{label}</S.Title>
        <S.Progress>
          <S.Dealt dealt={dealt} />
        </S.Progress>
        <S.DealtTxt>
          <span>{dealt}%</span>
          <span>({useToLocale(numerator)})</span>
        </S.DealtTxt>
      </S.ProgressWrapper>
    </S.Wrapper>
  );
};

export default ProgressBar;
