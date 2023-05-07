import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.COLOR.original};
  background: ${({ theme }) => theme.COLOR.contents};
  z-index: 100;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 2rem;
`;
