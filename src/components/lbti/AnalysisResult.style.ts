import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1100px;
  margin: auto;
`;

export const ResultWrapper = styled.div`
  display: flex;
`;

export const DetailWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.COLOR.borderContents};
  border-radius: ${({ theme }) => theme.ROUND.md};
  background-color: ${({ theme }) => theme.COLOR.contents};
  width: 100%;
  height: 560px;
  padding: 2rem 1rem;
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

  li {
    //margin-top: 1.2rem;
  }
`;
