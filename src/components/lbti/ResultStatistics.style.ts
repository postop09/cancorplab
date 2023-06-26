import styled from "styled-components";
import { MEDIA_RESULT_STATISTICS } from "@/const/SCREEN";

export const ResultWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${MEDIA_RESULT_STATISTICS}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const DetailWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.COLOR.borderContents};
  border-radius: ${({ theme }) => theme.ROUND.md};
  background-color: ${({ theme }) => theme.COLOR.contents};
  width: 100%;
  height: 560px;
  padding: 2rem 1rem;
  @media screen and (max-width: ${MEDIA_RESULT_STATISTICS}) {
    height: 430px;
    padding: 1rem 0.5rem;
  }
`;

export const ResultWordWrapper = styled.div`
  display: block;
  height: 80px;
  padding: 0 1rem;
`;

export const ResultWord = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.SIZE.xxl};
  color: ${({ theme }) => theme.COLOR.borderOrigin};
`;

export const ResultContents = styled.p`
  font-size: ${({ theme }) => theme.SIZE.lg};
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 80px);
`;
