import React from "react";
import Logo from "@/components/common/Logo";
import * as S from "./Title.style";

const Title = () => {
  return (
    <S.TitleWrapper>
      <Logo />
      <S.SubTxt>Version 1.0.0</S.SubTxt>
    </S.TitleWrapper>
  );
};

export default Title;
