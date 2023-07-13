import styled from "styled-components";
import * as Search from "@/components/Home/Search.style";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.COLOR.borderContents};
  border-radius: ${({ theme }) => theme.ROUND.md};
  background-color: ${({ theme }) => theme.COLOR.contents};
  width: 100%;
  height: 560px;
  padding: 1rem;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    max-height: 400px;
    padding: 0.5rem;
  }
`;

export const SearchWrapper = styled(Search.SearchWrapper)`
  border: 2px solid ${({ theme }) => theme.COLOR.borderOrigin};
  max-width: 400px;
  height: 40px;
  margin: auto;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    max-width: 300px;
    height: 35px;
  }
`;

export const SearchInput = styled(Search.Input)`
  font-size: ${({ theme }) => theme.SIZE.sm};
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  background-color: ${({ theme }) => theme.COLOR.borderContents};
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    transition: all 0.5s;
    outline-color: ${({ theme }) => theme.COLOR.borderOrigin};
  }
`;

export const ResetButton = styled(Search.Button)`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 40px;
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
`;
