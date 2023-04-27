import React, { useEffect, useRef } from "react";
import { select, svg } from "d3";

const Chart = () => {
  const svgRef = useRef(null);
  const width = 20;
  const height = 20;

  useEffect(() => {
    createChart();
  }, []);

  const createChart = () => {
    const SVG = select(svgRef.current);

    SVG.selectAll("circle")
      .data([23, 13, 56, 26, 11])
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove(),
      )
      .attr("id", "category_2")
      .attr("r", (v) => v / 4)
      .attr("cx", (v) => v)
      .attr("cy", (v) => v)
      .attr("fill", "#3bbc9b")
      .attr("fill-opacity", 0.1)
      .attr("stroke", "#3bbc9b")
      .attr("stroke-opacity", 0.5)
      .attr("opacity", 1);
  };

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Chart;
