import React from "react";
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import styled from "styled-components";
import { SumByTagsData } from "@/type/result.type";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ data }: { data: SumByTagsData[] }) => {
  const labels = data && data.map((tag) => tag.label);
  const chartData = data && data.map((tag) => tag.value);

  console.log(chartData);

  const dataset = {
    labels: labels,
    datasets: [
      {
        label: "나",
        data: chartData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        pointBorderColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointHoverBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    color: "#fff",
    scales: {
      r: {
        ticks: {
          display: false, // Hides the labels in the middel (numbers)
        },
        pointLabels: {
          color: "#fff",
        },
        grid: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <Wrapper>
      <Radar data={dataset} height={"auto"} options={options} />
    </Wrapper>
  );
};

export default RadarChart;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
