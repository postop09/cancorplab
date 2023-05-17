import React, { useState } from "react";
import { MasteryFullData } from "@/type/masteryData";
import * as S from "@/components/Mastery/List.style";
import Image from "next/image";

const List = ({ masteryList }: { masteryList: MasteryFullData[] }) => {
  const [isShow, setIsShow] = useState(false);

  const showList = () => {
    setIsShow((prev) => !prev);
  };

  const ChampionList = () => {
    return (
      <S.ListWrapper>
        {masteryList.map((mastery: MasteryFullData) => {
          return (
            <S.ItemWrapper key={mastery.championId}>
              <Image
                src={`/assets/img/${mastery.image.full}`}
                alt=""
                width={40}
                height={40}
              />
              <strong>{mastery.name}</strong>
              <small>{mastery.championPoints}</small>
            </S.ItemWrapper>
          );
        })}
      </S.ListWrapper>
    );
  };

  return (
    <S.Wrapper>
      <S.BtnShowList onClick={() => showList()}>
        {isShow ? "닫기" : "더보기"}
      </S.BtnShowList>
      {isShow ? ChampionList() : ""}
    </S.Wrapper>
  );
};

export default List;
