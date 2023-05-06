export type BubbleChartOption = {
  width?: number; // outer width, in pixels
  height?: number; // outer height, in pixels
  padding?: number; // padding between circles
  margin?: number; // default margins
  marginTop?: number; // top margin, in pixels
  marginRight?: number; // right margin, in pixels
  marginBottom?: number; // bottom margin, in pixels
  marginLeft?: number; // left margin, in pixels
  fillOpacity?: number; // the fill opacity of the bubbles
  stroke?: string; // a static stroke around the bubbles
  strokeWidth?: number; // the stroke width around the bubbles, if any
  strokeOpacity?: number; // the stroke opacity around the bubbles, if any
};
