import { create, hierarchy, pack, range, select, zoom } from "d3";
import { BubbleChartOption } from "@/type/bubbleChart.type";

const bubbleChart = <T>(
  data: T[],
  {
    width = 640,
    height = width,
    padding = 3,
    margin = 20,
    marginTop = margin,
    marginRight = margin,
    marginBottom = margin,
    marginLeft = margin,
    fillOpacity = 0.7,
    stroke,
    strokeWidth,
    strokeOpacity,
    backgroundColor,
  }: BubbleChartOption | {} = {},
) => {
  const V = data.map((item) => item.championPoints);
  const I = range(V.length).filter((i) => V[i] > 0);
  const V_SUM = V.reduce((total, item) => total + item);

  const root = pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(hierarchy({ children: I }).sum((i) => V[i]));

  const createSvg = () => {
    return create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-marginLeft, -marginTop, width, height])
      .attr(
        "style",
        `max-width: 100%; 
        height: auto; 
        height: intrinsic; 
        border-radius: 10px; 
        box-shadow: inset 0px 0px 10px 10px rgba(0, 0, 0, 0.7);
        background: ${backgroundColor}`,
      )
      .attr("fill", "currentColor")
      .attr("font-size", 10)
      .attr("font-family", "sans-serif")
      .attr("text-anchor", "middle");
  };

  const createZoom = () => {
    const g = svg.append("g");

    const zoomed = ({ transform }) => {
      g.attr("transform", transform);
    };

    svg.call(zoom().scaleExtent([1, 8]).on("zoom", zoomed));

    return g;
  };

  const createTranslate = (ele) => {
    return ele
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x},${d.y})`);
  };

  const defineImage = () => {
    svg
      .append("defs")
      .selectAll("pattern")
      .data(root.leaves())
      .join("pattern")
      .attr("id", (d) => {
        if (data[d.data]) {
          return `${data[d.data].championId}`;
        }
      })
      .attr("width", 1)
      .attr("height", 1)
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("href", (d) => {
        if (data[d.data]) {
          const backImg = data[d.data].image.full;
          return `/assets/img/${backImg}`;
        }
      })
      .attr("width", 1)
      .attr("height", 1);
  };

  const createImg = (ele) => {
    ele
      .append("circle")
      .attr("class", "img_circle")
      .attr("stroke", stroke)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-opacity", strokeOpacity)
      .attr("fill", (d) => {
        if (data[d.data]) {
          return `url(#${data[d.data].championId})`;
        }
      })
      .attr("fill-opacity", fillOpacity)
      .attr("r", (d) => d.r)
      .on("mouseover", function (e) {
        select(this).attr("fill-opacity", 1);
        showChampionInfo(e.target.__data__.data);
      })
      .on("mouseout", function () {
        select(this).attr("fill-opacity", fillOpacity);
      });
  };

  const showChampionInfo = (dataIndex: number) => {
    const $championInfo = document.querySelector(".championInfo");
    const $championName = $championInfo.querySelector(".championName");
    const $championPoint = $championInfo.querySelector(".championPoint");
    const $championPointRatio = $championInfo.querySelector(".championPointRatio");
    const $championLastPlayTime = $championInfo.querySelector(".championLastPlayTime");
    const name = data[dataIndex].name;
    const point = data[dataIndex].championPoints;
    const lastPlayTimeUTC = data[dataIndex].lastPlayTime;
    const lastPlayDate = new Date(lastPlayTimeUTC).toLocaleString();

    $championName.textContent = name;
    $championPoint.textContent = point;
    $championPointRatio.textContent = ((point / V_SUM) * 100).toFixed(3) + "%";
    $championLastPlayTime.textContent = lastPlayDate;
  };

  const svg = createSvg();
  const g = createZoom();
  const leaf = createTranslate(g);
  defineImage();
  createImg(leaf);

  return svg.node();
};

export default bubbleChart;
