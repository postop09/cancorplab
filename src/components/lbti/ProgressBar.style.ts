import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 1rem;
`;

export const Title = styled.strong`
  min-width: 100px;
  font-size: ${({ theme }) => theme.SIZE.lg};
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    min-width: 70px;
  }
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Progress = styled.div`
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.COLOR.backgroundGrey};
  @media screen and (max-width: ${({ theme }) => theme.WIDTH.mid}) {
    height: 18px;
  }
`;

export const Dealt = styled.div<{ dealt: number }>`
  border-top-left-radius: ${({ theme }) => theme.ROUND.xs};
  border-bottom-left-radius: ${({ theme }) => theme.ROUND.xs};
  background-color: ${({ theme }) => theme.COLOR.txtStrong};
  width: ${(props) => props.dealt + "%"};
  height: 100%;
`;

export const DealtTxt = styled.p`
  min-width: 100px;
  text-align: center;

  span {
    display: block;
  }
`;
