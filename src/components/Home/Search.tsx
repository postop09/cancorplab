import React from "react";
import * as S from "./Search.style";
import styles from "@/styles/Home.module.css";

const Search = () => {
  return (
    <S.Wrapper className={styles.center}>
      {/*<h1>LOL champ</h1>*/}
      <S.SearchWrapper>
        <S.Input type="search" placeholder="소환사 이름을 검색해주세요." />
        {/*<S.Box></S.Box>*/}
        <S.Button type="submit">검색아이콘</S.Button>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
