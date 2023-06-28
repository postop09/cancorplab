import styled from "styled-components";

export const BgWrapper = styled.div`
  background-color: black;
`;

export const HideTitleH2 = styled.h2`
  ${({ theme }) => theme.TEXT.hide}
`;

export const HideTitleH3 = styled.h3`
  ${({ theme }) => theme.TEXT.hide}
`;
