import React, { FormEvent, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import useGetSummoner from "@/hooks/useGetSummoner";
import { analyticsLogEvent } from "@/lib/firebase.lib";
import { EVENT_COMMON } from "@/const/EVENT_NAMES";
import * as S from "./Search.style";

const Search = () => {
  const { getSummoner, userName, setUserName } = useGetSummoner();
  const router = useRouter();

  const handleSearch = async (
    summonerName: string,
    e?: FormEvent<HTMLFormElement>,
  ) => {
    if (e) e.preventDefault();
    if (summonerName.length < 2) return alert("2글자 이상 검색해주세요.");
    analyticsLogEvent(EVENT_COMMON.search);
    try {
      const summoner = await getSummoner(summonerName);
      if (summoner) {
        await router.push("/lbti");
        window.sessionStorage.setItem("summonerId", summoner.id);
        window.sessionStorage.setItem("summonerName", summoner.name);
      }
    } catch (err) {
      alert("일치하는 소환사가 없습니다.");
    }
  };

  useEffect(() => {
    if (router.query.summonerName) {
      const querySummonerName = router.query.summonerName.toString();
      handleSearch(querySummonerName);
    }
  }, [router.query]);

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
            priority
          />
        </S.Button>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
