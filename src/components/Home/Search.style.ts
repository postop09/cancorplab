import styled, { keyframes } from "styled-components";

const borderRole = keyframes`
  0% {
    top: 0;
    left: 0;
  }
  40% {
    top: 0;
    left: calc(100% - 30px);
  }
  50% {
    top: calc(100% - 30px);
    left: calc(100% - 30px);
  }
  90% {
    top: calc(100% - 30px);
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
`;

export const Box = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background: goldenrod;
  z-index: 90;
  animation: ${borderRole} 5s 1s infinite linear;
`;

export const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  box-shadow: 0 3px 5px 1px black;
  border-radius: 30px;
  width: 100%;
  height: 60px;
  // animation style
  //overflow: hidden;
`;

export const Input = styled.input`
  // animation style
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  border: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  font-family: "Pretendard", sans-serif;
  font-size: 1.2rem;
  z-index: 10;

  &:focus {
    transition: all 0.5s;
    outline-color: goldenrod;
  }
`;

export const Button = styled.button`
  border: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  width: 70px;
`;
