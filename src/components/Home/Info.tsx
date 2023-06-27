import React from "react";
import * as S from "./Info.style";

const Info = () => {
  return (
    <S.InfoWrapper>
      <S.Card>
        <h2>성향분석</h2>
        <p>
          자신이 플레이한 챔피언 역할군의 숙련도 비율을 파악하고 플레이 성향에 대해 확인할
          수 있습니다.
        </p>
      </S.Card>
      <S.Card>
        <h2>차트</h2>
        <p>자신이 플레이한 챔피언의 숙련도 현황을 이미지와 함께 차트로 볼 수 있습니다!</p>
      </S.Card>
      <S.Card>
        <h2>문의하기</h2>
        <p>오류 혹은 요구사항이 있다면 이메일로 문의해주세요. postop09@naver.com</p>
      </S.Card>
      <S.Card>
        <h2>주의사항</h2>
        <p>결과에 대해서는 재미로 생각해주세요.</p>
      </S.Card>
    </S.InfoWrapper>
  );
};

export default Info;
