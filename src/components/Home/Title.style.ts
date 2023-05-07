import styled from "styled-components";

export const TitleWrapper = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.85rem;
  width: 100%;
  z-index: 2;
`;

export const SubTxt = styled.p`
  position: relative;
  margin: 0;
  padding: 1rem;
  background-color: #00000066;
  border: 1px solid #6969694d;
  border-radius: ${({ theme }) => theme.ROUND.md};
`;
