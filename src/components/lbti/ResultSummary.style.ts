import styled from "styled-components";

export const Wrapper = styled.section`
  border: 1px solid ${({ theme }) => theme.COLOR.borderContents};
  border-radius: ${({ theme }) => theme.ROUND.md};
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLOR.background};

  p {
    margin-bottom: 1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const SummonerName = styled.strong`
  font-size: ${({ theme }) => theme.SIZE.lg};
  font-weight: normal;
  color: ${({ theme }) => theme.COLOR.borderOrigin};
`;

export const Strong = styled.strong`
  font-size: ${({ theme }) => theme.SIZE.md};
  font-weight: normal;
  color: ${({ theme }) => theme.COLOR.borderBright};
`;

export const ResultWrapper = styled.p`
  max-width: 700px;
  word-break: keep-all;
  line-height: 2rem;
`;
