// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { MasteryFullData } from "@/type/masteryData";
import bubbleChart from "@/components/Mastery/bubbleChart";

const Chart = ({ data }: { data: MasteryFullData[] }) => {
  const svgRef = useRef(null);
  console.log(data);

  useEffect(() => {
    if (data.length !== 0) {
      createChart();
    }
    console.log(bubbleChart(data));
  }, [data]);

  const createChart = () => {
    // const SVG = select(svgRef.current);
    // const championPoints = data.map((item) => item.championPoints);
    // const I = range(championPoints.length).filter((i) => championPoints[i] > 0);
    // console.log(I);
    //
    // SVG.selectAll("circle")
    //   .data(data)
    //   .join(
    //     (enter) => enter.append("circle"),
    //     (update) => update.attr("class", "updated"),
    //     (exit) => exit.remove(),
    //   )
    //   .attr("id", "category_2")
    //   .attr("r", 8)
    //   .attr("cx", (v) => scaleLinear().domain())
    //   .attr("cy", (v) => v.championPoints)
    //   .attr("fill", "#3bbc9b")
    //   .attr("fill-opacity", 0.1)
    //   .attr("stroke", "#3bbc9b")
    //   .attr("stroke-opacity", 0.5)
    //   .attr("opacity", 1);

    const svg = bubbleChart(data, {
      label: (d) => d.name,
      title: (d) => d.name,
      stroke: "#daa520",
      strokeWidth: 1.5,
      width: 1100,
    });

    if (!svgRef.current.childNodes.length) {
      svgRef.current.append(svg);
    }
  };

  return (
    <div>
      <div ref={svgRef}></div>
      {/*<>*/}
      {/*  {bubbleChart(data, {*/}
      {/*    label: (d) => d.name,*/}
      {/*    title: (d) => d.name,*/}
      {/*    width: 1100,*/}
      {/*  })}*/}
      {/*</>*/}
    </div>
  );
};

export default Chart;
