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
  txtStrong: "#770f09",
  contents: "#14172a",
  background: "#14172a",
  backgroundGrey: "#AEAEAE",
  borderContents: "#1d213a",
  borderOrigin: "#daa520",
  borderBright: "#ffd700",
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

const WIDTH = {
  pc: "1100px",
  mid: "800px",
  mobile: "480px",
};

const theme = {
  TEXT,
  COLOR,
  SIZE,
  ROUND,
  WIDTH,
};

export default theme;
