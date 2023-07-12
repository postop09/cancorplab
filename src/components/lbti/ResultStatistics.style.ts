import styled from "styled-components";

export const ResultWrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  min-width: 308px;
  height: 560px;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mobile}) {
    min-width: 270px;
    height: 504px;
  }
`;

export const DetailWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.COLOR.borderContents};
  border-radius: ${({ theme }) => theme.ROUND.md};
  background-color: ${({ theme }) => theme.COLOR.contents};
  //background-color: white;
  width: 100%;
  height: 560px;
  padding: 2rem 1rem;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    height: 350px;
    padding: 1rem 0.5rem;
  }
`;

export const ResultWordWrapper = styled.div`
  display: block;
  margin-bottom: 1rem;
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
