import React from "react";
import Logo from "@/components/common/Logo";
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <Logo />
      </S.Container>
    </S.Header>
  );
};

export default Header;
