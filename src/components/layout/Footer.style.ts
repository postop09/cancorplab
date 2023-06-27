import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  border-top: 2px solid ${({ theme }) => theme.COLOR.borderOrigin};
  width: 100%;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.COLOR.contents};
`;

export const InfoWrapper = styled.div`
  padding: 2rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
`;

export const Ul = styled.ul`
  margin-top: 1rem;

  li {
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.SIZE.sm};
    opacity: 0.4;
  }
`;
