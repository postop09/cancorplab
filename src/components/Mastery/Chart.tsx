import React, { useEffect, useRef } from "react";
import { range, scaleLinear, select, svg } from "d3";
import { MasteryFullData } from "@/type/masteryData";

const Chart = ({ data }: { data: MasteryFullData[] }) => {
  const svgRef = useRef(null);
  console.log(data);

  useEffect(() => {
    createChart();
  }, [data]);

  const createChart = () => {
    const SVG = select(svgRef.current);
    const championPoints = data.map((item) => item.championPoints);
    const I = range(championPoints.length).filter((i) => championPoints[i] > 0);
    console.log(I);

    SVG.selectAll("circle")
      .data(data)
      .join(
        (enter) => enter.append("circle"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove(),
      )
      .attr("id", "category_2")
      .attr("r", 8)
      .attr("cx", (v) => scaleLinear().domain())
      .attr("cy", (v) => v.championPoints)
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
