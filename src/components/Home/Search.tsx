import React, { FormEvent, useState } from "react";
import * as S from "./Search.style";
import styles from "@/styles/Home.module.css";
import { RIOT_API_KEY } from "@/const/API";
import customAxios from "@/lib/customAxios";

const Search = () => {
  const [userName, setUserName] = useState("");

  const req2 = async (id: string) => {
    const { data } = await customAxios.get(
      `/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${RIOT_API_KEY}`,
    );

    console.log(data);
  };

  const req = async () => {
    const { data } = await customAxios.get(
      `/summoner/v4/summoners/by-name/${userName}?api_key=${RIOT_API_KEY}`,
    );
    console.log(data);

    if (data.id) {
      req2(data.id);
    }
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    req();
  };

  return (
    <S.Wrapper className={styles.center}>
      {/*<h1>LOL champ</h1>*/}
      <S.SearchWrapper onSubmit={(e) => handleSearch(e)}>
        <S.Input
          type="search"
          placeholder="소환사 이름을 검색해주세요."
          onChange={(e) => setUserName(e.target.value)}
        />
        {/*<S.Box></S.Box>*/}
        <S.Button type="submit">검색아이콘</S.Button>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
