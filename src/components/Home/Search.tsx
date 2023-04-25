import React, { FormEvent, useState } from "react";
import * as S from "./Search.style";
import styles from "@/styles/Home.module.css";
import useGetSummoner from "@/hooks/useGetSummoner";
import useGetMastery from "@/hooks/useGetMastery";
import { useRouter } from "next/router";

const Search = () => {
  const { getSummoner, userName, setUserName } = useGetSummoner();
  const { getMastery } = useGetMastery();
  const [masteryList, setMasteryList] = useState([]);
  const router = useRouter();

  // 두글자 이하일 경우 검색 불가능
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const summoner = await getSummoner();
      const mastery = await getMastery(summoner.id);
      if (mastery) {
        setMasteryList(mastery);
        await router.push("/mastery");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrapper className={styles.center}>
      {/*<h1>LOL champ</h1>*/}
      <S.SearchWrapper onSubmit={(e) => handleSearch(e)}>
        <S.Input
          type="search"
          placeholder="소환사 이름을 검색해주세요."
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <S.Button type="submit">검색아이콘</S.Button>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
