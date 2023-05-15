import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.WIDTH.pc};
  min-height: 100vh;
  margin: auto;
  padding: 6rem;

  &::after {
    content: "";
    background: url(/assets/img/champion/centered/Varus_7.jpg) no-repeat center center;
    background-size: cover;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
