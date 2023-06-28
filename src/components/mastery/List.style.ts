import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 0.5rem;
  text-align: center;
`;

export const ListWrapper = styled.ul`
  border: 2px solid gold;
  border-radius: ${({ theme }) => theme.ROUND.md};
  max-width: 1100px;
  margin: 0.5rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLOR.contents};
`;

export const BtnShowList = styled.button`
  border: 2px solid gold;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: white;
  background: ${({ theme }) => theme.COLOR.contents};
`;

export const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  padding: 0.5rem;

  &:hover {
    background-color: #222747;
  }

  strong {
    margin-left: 1rem;
    font-size: 1.5rem;
  }

  small {
    margin-left: auto;
    font-size: 1.2rem;
  }
`;
