import styled from "styled-components";

export const SvgWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  margin: auto;
  text-align: center;
`;

export const CountWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  span {
    display: block;
  }
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mobile}) {
    top: 1rem;
    left: 1rem;
  }
`;

export const Count = styled.span`
  font-size: ${({ theme }) => theme.SIZE.max};
  font-weight: bold;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mobile}) {
    font-size: ${({ theme }) => theme.SIZE.xl};
  }
`;

export const CountTxt = styled.span`
  font-size: ${({ theme }) => theme.SIZE.sm};
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mobile}) {
    font-size: ${({ theme }) => theme.SIZE.xs};
  }
`;

export const Dl = styled.dl`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid ${({ theme }) => theme.COLOR.borderBright};
  border-radius: ${({ theme }) => theme.ROUND.md};
  background: ${({ theme }) => theme.COLOR.contents};
  max-width: 1100px;
  margin: auto;
  padding: 1rem;
  text-align: center;
  div {
    flex: 1;
    &:last-child {
      flex: 2;
    }
  }
  dt {
    font-size: ${({ theme }) => theme.SIZE.sm};
  }
  dd {
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.SIZE.xl};
    font-weight: bold;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mobile}) {
    dd {
      font-size: inherit;
    }
  }
`;
