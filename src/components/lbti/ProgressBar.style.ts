import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  padding: 0 1rem;
`;

export const Title = styled.strong`
  font-size: ${({ theme }) => theme.SIZE.lg};
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Progress = styled.div`
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.COLOR.secondWhite};
`;

export const Dealt = styled.div<{ dealt: number }>`
  border-top-left-radius: ${({ theme }) => theme.ROUND.sm};
  border-bottom-left-radius: ${({ theme }) => theme.ROUND.sm};
  background-color: #770f09;
  width: ${(props) => props.dealt + "%"};
  height: 100%;
`;
