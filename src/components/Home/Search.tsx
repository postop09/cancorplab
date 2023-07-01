import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./Search.style";
import useGetSummoner from "@/hooks/useGetSummoner";
import { useRouter } from "next/router";
import Image from "next/image";

const Search = () => {
  const { getSummoner, userName, setUserName } = useGetSummoner();
  const router = useRouter();

  useEffect(() => {
    if (router.query.summonerName) {
      const querySummonerName = router.query.summonerName.toString();
      handleSearch(querySummonerName);
    }
  }, [router.query]);

  // TODO - 두글자 이하일 경우 검색 불가능
  const handleSearch = async (summonerName: string, e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    try {
      const summoner = await getSummoner(summonerName);
      if (summoner) {
        await router.push({
          pathname: "/lbti",
          query: {
            summoner: summoner.id,
            summonerName,
          },
        });
      }
    } catch (err) {
      alert("일치하는 소환사가 없습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.SearchWrapper onSubmit={(e) => handleSearch(userName, e)}>
        <S.Input
          type="search"
          placeholder="소환사 이름을 검색해주세요."
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <S.Button type="submit">
          <Image
            src="/assets/icon/search.png"
            alt="검색"
            width={30}
            height={30}
            priority={true}
          />
        </S.Button>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
