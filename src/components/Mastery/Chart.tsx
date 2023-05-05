// @ts-nocheck
import React, { useEffect, useRef } from "react";
import { MasteryFullData } from "@/type/masteryData";
import bubbleChart from "@/components/Mastery/bubbleChart";
import styled from "styled-components";

const Chart = ({ data }: { data: MasteryFullData[] }) => {
  const svgRef = useRef(null);
  console.log(data);

  useEffect(() => {
    if (data.length !== 0) {
      createChart();
    }
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
    <Wrapper>
      <SvgWrapper ref={svgRef}></SvgWrapper>
      <CountWrapper>
        <Count>{data.length}</Count>
        <CountTxt>플레이 챔피언</CountTxt>
      </CountWrapper>
      {/*<div className="tooltip" style={{ border: "2px solid gold", textAlign: "center" }}>*/}
      {/*  <div className="championName">이름</div>*/}
      {/*  <div className="championPoint">점수</div>*/}
      {/*  <div className="championPointRatio">점수비율</div>*/}
      {/*  <div className="championLastPlayTime">마지막 플레이</div>*/}
      {/*</div>*/}
      <Dl className="tooltip">
        <dt>이름</dt>
        <dd className="championName"></dd>
        <dt>점수</dt>
        <dd className="championPoint"></dd>
        <dt>점수비율</dt>
        <dd className="championPointRatio"></dd>
        <dt>마지막 플레이</dt>
        <dd className="championLastPlayTime"></dd>
      </Dl>
    </Wrapper>
  );
};

export default Chart;

const Dl = styled.dl`
  border: 2px solid gold;
  text-align: center;

  dt {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const SvgWrapper = styled.div`
  border: 2px solid gold;
  text-align: center;
`;

const CountWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;

  span {
    display: block;
  }
`;

const Count = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
`;

const CountTxt = styled.span`
  font-size: 0.8rem;
`;
