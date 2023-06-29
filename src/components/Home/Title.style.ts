import styled from "styled-components";

export const TitleWrapper = styled.section`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  width: 100%;
  font-size: ${({ theme }) => theme.SIZE.sm};
  z-index: 100;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    position: fixed;
    inset: 0 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(108, 108, 108, 0.25);
    border-radius: 0;
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(20, 20, 20, 0.5));
    background-clip: padding-box;
    backdrop-filter: blur(24px);
  }
`;

export const SubTxt = styled.p`
  position: relative;
  border: 1px solid #6969694d;
  border-radius: ${({ theme }) => theme.ROUND.md};
  margin: 0;
  padding: 1rem;
  background-color: #00000066;

  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    border: none;
    border-radius: 0;
    width: 100%;
    font-size: ${({ theme }) => theme.SIZE.sm};
    padding-right: 0;
    text-align: right;
    background: none;
  }
`;
