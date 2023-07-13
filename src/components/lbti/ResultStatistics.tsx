import React from "react";
import Image from "next/image";
import * as S from "./ResultStatistics.style";
import { SumByTagsData } from "@/type/result.type";
import useAnalysisCharacter from "@/hooks/useAnalysisCharacter";
import RadarChart from "@/components/lbti/RadarChart";
import useSearchComparison from "@/hooks/useSearchComparison";

type Props = {
  data: SumByTagsData[];
};

const ResultStatistics = ({ data }: Props) => {
  const { character } = useAnalysisCharacter(data);
  const { dataList, label, userName, setUserName, handleSearch, handleReset } =
    useSearchComparison(data);

  return (
    <S.ResultWrapper>
      <S.ImgWrapper>
        <Image src={`/assets/img/champion/loading/${character?.image}`} alt={""} fill />
      </S.ImgWrapper>
      <S.DetailWrapper>
        <RadarChart data={dataList} label={label} />
        <S.SearchWrapper onSubmit={handleSearch}>
          <S.SearchInput
            type="search"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder={"비교대상을 검색해주세요."}
          />
          <S.SearchButton type="submit">
            <Image
              src="/assets/icon/search.png"
              alt="검색"
              width={24}
              height={24}
              priority={true}
            />
          </S.SearchButton>
          <S.ResetButton type="reset" onClick={handleReset} title={"초기화"}>
            C
          </S.ResetButton>
        </S.SearchWrapper>
      </S.DetailWrapper>
    </S.ResultWrapper>
  );
};

export default ResultStatistics;
