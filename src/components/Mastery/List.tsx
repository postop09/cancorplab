import React from "react";
import { MasteryFullData } from "@/type/masteryData";
import * as S from "@/components/Mastery/List.style";
import Image from "next/image";

const List = ({ masteryList }: { masteryList: MasteryFullData[] }) => {
  return (
    <S.wrapper>
      {masteryList.map((mastery: MasteryFullData) => {
        return (
          <S.ItemWrapper key={mastery.championId}>
            <Image
              src={`/assets/img/${mastery.image.full}`}
              alt=""
              width={40}
              height={40}
            />
            <S.TxtWrapper>
              <strong>{mastery.name}</strong>
              <small>{mastery.championPoints}</small>
            </S.TxtWrapper>
          </S.ItemWrapper>
        );
      })}
    </S.wrapper>
  );
};

export default List;
