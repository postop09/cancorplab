// @ts-nocheck
import React from "react";
import {
  create,
  hierarchy,
  InternSet,
  map,
  pack,
  range,
  scaleOrdinal,
  schemeTableau10,
  select,
  zoom,
} from "d3";

const bubbleChart = (
  data,
  {
    name = (x) => x, // alias for label
    label = name, // given d in data, returns text to display on the bubble
    value, // given d in data, returns a quantitative size
    group, // given d in data, returns a categorical value for color
    title, // given d in data, returns text to show on hover
    link, // given a node d, its link (if any)
    linkTarget = "_blank", // the target attribute for links, if any
    width = 640, // outer width, in pixels
    height = width, // outer height, in pixels
    padding = 3, // padding between circles
    margin = 1, // default margins
    marginTop = margin, // top margin, in pixels
    marginRight = margin, // right margin, in pixels
    marginBottom = margin, // bottom margin, in pixels
    marginLeft = margin, // left margin, in pixels
    groups, // array of group names (the domain of the color scale)
    colors = schemeTableau10, // an array of colors (for groups)
    fill = "#ccc", // a static fill color, if no group channel is specified
    fillOpacity = 0.7, // the fill opacity of the bubbles
    stroke, // a static stroke around the bubbles
    strokeWidth, // the stroke width around the bubbles, if any
    strokeOpacity, // the stroke opacity around the bubbles, if any
  } = {},
) => {
  // Compute the values.
  const D = map(data, (d) => d);
  const V = data.map((item) => item.championPoints);
  const G = group == null ? null : map(data, group);
  const I = range(V.length).filter((i) => V[i] > 0);
  const V_SUM = V.reduce((total, item) => total + item);

  // Unique the groups.
  if (G && groups === undefined) groups = I.map((i) => G[i]);
  groups = G && new InternSet(groups);

  // Construct scales.
  const color = G && scaleOrdinal(groups, colors);

  // Compute labels and titles.
  const L = label == null ? null : map(data, label);
  const T = title === undefined ? L : title == null ? null : map(data, title);

  // Compute layout: create a 1-deep hierarchy, and pack it.
  const root = pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(hierarchy({ children: I }).sum((i) => V[i]));

  const svg = create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-marginLeft, -marginTop, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
    .attr("fill", "currentColor")
    .attr("font-size", 10)
    .attr("font-family", "sans-serif")
    .attr("text-anchor", "middle");

  const g = svg.append("g");

  const zoomed = ({ transform }) => {
    g.attr("transform", transform);
  };

  svg.call(zoom().scaleExtent([1, 8]).on("zoom", zoomed));

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
    .attr("x", 0)
    .attr("y", 0)
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
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 1)
    .attr("height", 1);

  const leaf = g
    .selectAll("a")
    .data(root.leaves())
    .join("a")
    .attr("xlink:href", link == null ? null : (d, i) => link(D[d.data], i, data))
    .attr("target", link == null ? null : linkTarget)
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  leaf
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
      const dataIndex = e.target.__data__.data;
      const championName = data[dataIndex].name;
      const championPoint = data[dataIndex].championPoints;
      const championLastPlayTime = data[dataIndex].lastPlayTime;
      // console.log(data);
      showTooltip(championName, championPoint, 0, championLastPlayTime);
    })
    .on("mouseout", function () {
      select(this).attr("fill-opacity", fillOpacity);
    })
    .on("click", (d) => {});

  const showTooltip = (name, point, pointRatio, lastPlayTime) => {
    const $tooltip = document.querySelector(".tooltip");
    const $championName = $tooltip.querySelector(".championName");
    const $championPoint = $tooltip.querySelector(".championPoint");
    const $championPointRatio = $tooltip.querySelector(".championPointRatio");
    const $championLastPlayTime = $tooltip.querySelector(".championLastPlayTime");
    const lastPlayDate = new Date(lastPlayTime).toLocaleString();

    $championName.textContent = name;
    $championPoint.textContent = point;
    $championPointRatio.textContent = ((point / V_SUM) * 100).toFixed(3) + "%";
    $championLastPlayTime.textContent = lastPlayDate;
  };

  // if (T)
  //   leaf.append("title").text((d) => {
  //     return `${T[d.data]}\n${d.value}`;
  //   });

  // if (L) {
  //   A unique identifier for clip paths (to avoid conflicts).
  //   const uid = `O-${Math.random().toString(16).slice(2)}`;
  //   leaf
  //     .append("clipPath")
  //     .attr("id", (d) => `${uid}-clip-${d.data}`)
  //     .append("circle")
  //     .attr("r", (d) => d.r);
  //
  //   leaf
  //     .append("text")
  //     .attr("clip-path", (d) => `url(${new URL(`#${uid}-clip-${d.data}`, location)})`)
  //     .selectAll("tspan")
  //     .data((d) => `${L[d.data]}`.split(/\n/g))
  //     .join("tspan")
  //     .attr("x", 0)
  //     .attr("y", (d, i, D) => `${i - D.length / 2 + 0.85}em`)
  //     .attr("fill-opacity", (d, i, D) => (i === D.length - 1 ? 0.7 : null))
  //     .text((d) => d);
  // }

  return Object.assign(svg.node(), { scales: { color } });
};

export default bubbleChart;
