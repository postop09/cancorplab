import styled from "styled-components";

export const InfoWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(25%, auto));
  max-width: 100%;
  width: 1100px;
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    grid-template-columns: 1fr;
    max-width: 320px;
    margin-bottom: 120px;
    text-align: center;
  }
`;

export const Card = styled.li`
  border: 1px solid rgba(200, 200, 200, 0);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  background: rgba(100, 100, 100, 0);
  transition: background 200ms, border 200ms;

  &:hover {
    border: 1px solid rgba(200, 200, 200, 0.15);
    background: rgba(100, 100, 100, 0.1);
  }

  &:hover span {
    transform: translateX(4px);
  }

  span {
    display: inline-block;
    transition: transform 0.2s;
  }

  h2 {
    font-weight: 600;
    margin-bottom: 0.7rem;
  }

  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 30ch;
    word-break: keep-all;
  }

  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    padding: 1rem 2.5rem;
    h2 {
      margin-bottom: 0.5rem;
    }
  }
`;
