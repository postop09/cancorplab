import React, { FormEvent, useContext } from "react";
import * as S from "./Search.style";
import useGetSummoner from "@/hooks/useGetSummoner";
import { useRouter } from "next/router";
import { MasteryContext } from "@/context/masteryContext";

const Search = () => {
  const { getSummoner, userName, setUserName } = useGetSummoner();
  const { setMasteryList } = useContext(MasteryContext);
  const router = useRouter();

  // 두글자 이하일 경우 검색 불가능
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const summoner = await getSummoner();
      if (summoner) {
        await router.push({
          pathname: "/mastery",
          query: { summoner: summoner.id },
        });
      }
    } catch (err) {
      alert("일치하는 소환사가 없습니다.");
    }
  };

  return (
    <S.Wrapper>
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
