import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  width: 100%;
  padding: 4rem 0;
`;

export const SearchWrapper = styled.form`
  position: relative;
  display: flex;
  box-shadow: 0 3px 5px 1px black;
  border-radius: 30px;
  width: 100%;
  height: 60px;
`;

export const Input = styled.input`
  border: none;
  border-radius: 0;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  font-family: "Pretendard", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 3px;
  z-index: 10;
  background-color: ${({ theme }) => theme.COLOR.borderContents};
  &:focus {
    transition: all 0.5s;
    outline-color: ${({ theme }) => theme.COLOR.borderOrigin};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${({ theme }) => theme.ROUND.lg};
  border-bottom-right-radius: ${({ theme }) => theme.ROUND.lg};
  width: 70px;
  height: 100%;
  padding-right: 5px;
  color: black;
  //background: #3b3b3b;
  background-color: ${({ theme }) => theme.COLOR.borderContents};
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    transition: all 0.5s;
    outline-color: ${({ theme }) => theme.COLOR.borderOrigin};
  }
`;
