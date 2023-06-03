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

  &::before,
  &::after {
    content: "";
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
  }

  &::before {
    background: linear-gradient(
      to bottom right,
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0),
      rgba(1, 65, 255, 0.3)
    );
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
  }

  &::after {
    background: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
    width: 240px;
    height: 180px;
    z-index: -1;
  }
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
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  font-family: "Pretendard", sans-serif;
  font-size: 1.2rem;
  letter-spacing: 3px;
  z-index: 10;

  &:focus {
    transition: all 0.5s;
    outline-color: ${({ theme }) => theme.COLOR.borderOrigin};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-left: 1px solid black;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  min-width: 60px;
  padding-right: 5px;
  color: black;
  background: ${({ theme }) => theme.COLOR.borderBright};
  cursor: pointer;

  &:focus {
    transition: all 0.5s;
    outline-color: ${({ theme }) => theme.COLOR.borderOrigin};
  }
`;
