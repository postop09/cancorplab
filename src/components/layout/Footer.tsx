import React from "react";
import { HideTitleH2 } from "@/styles/common";
import Logo from "@/components/common/Logo";
import * as S from "./Footer.style";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <HideTitleH2>캔랩 정보</HideTitleH2>
      <S.InfoWrapper>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.Ul>
          <li>Make fun, fun contents</li>
          <li>Riot API</li>
          <li>canlab09@naver.com</li>
        </S.Ul>
      </S.InfoWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
