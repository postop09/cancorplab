import React from "react";
import styles from "@/styles/Home.module.css";
import Logo from "@/components/common/Logo";
import * as S from "./Title.style";

const Title = () => {
  return (
    <S.TitleWrapper className={styles.description}>
      <Logo />
      <S.SubTxt>Get started by 롤챔 1.0.0</S.SubTxt>
    </S.TitleWrapper>
  );
};

export default Title;
