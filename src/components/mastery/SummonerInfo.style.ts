import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.COLOR.borderContents};
  border-radius: ${({ theme }) => theme.ROUND.md};
  max-width: 1100px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLOR.contents};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserName = styled.strong`
  font-size: ${({ theme }) => theme.SIZE.xl};
  color: ${({ theme }) => theme.COLOR.borderOrigin};
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  dt {
    font-size: ${({ theme }) => theme.SIZE.sm};
    margin-top: 5px;
  }

  dd {
    font-size: ${({ theme }) => theme.SIZE.xxl};
    font-weight: bold;
  }
`;

export const AnalysisBtn = styled.button`
  position: relative;
  border: 2px solid ${({ theme }) => theme.COLOR.borderBright};
  border-radius: ${({ theme }) => theme.ROUND.md};
  padding: 1.8rem;
  background: none;
  overflow: hidden;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLOR.txtStrong};
  }

  span {
    white-space: nowrap;
  }

  .txt_hover {
    position: absolute;
    left: -100%;
    transition: all 0.15s;
  }

  &:hover .txt_hover {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .txt_normal {
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    transition: all 0.15s;
  }

  &:hover .txt_normal {
    right: -100%;
  }

  .txt_opacity {
    opacity: 0;
  }
`;
