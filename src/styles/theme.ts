const TEXT = {
  hide: `
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  `,
};

const COLOR = {
  original: "goldenrod",
  contents: "#14172a",
  white: "#FFFFFF",
  secondWhite: "#AEAEAE",
  txtInfo: "#5E5E5E",
};

const SIZE = {
  max: "2.4rem",
  xxl: "2rem",
  xl: "1.6rem",
  lg: "1.2rem",
  sm: "0.8rem",
  xs: "0.6rem",
};

const ROUND = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "50%",
  xl: "100%",
};

const theme = {
  TEXT,
  COLOR,
  SIZE,
  ROUND,
};

export default theme;
