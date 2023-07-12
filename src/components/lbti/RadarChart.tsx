import React from "react";
import {
  Chart as ChartJS,
  Colors,
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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Colors,
);

type Props = {
  data: SumByTagsData[][];
  label: string[];
};

const RadarChart = ({ data, label }: Props) => {
  const labels = ["전사", "마법사", "탱커", "암살자", "서포터", "명사수"];
  const generateData = (wholeData: SumByTagsData[]) => {
    return wholeData.map((tag) => tag.value);
  };
  const generateDatasets = () => {
    return data.map((item, i) => {
      return { label: label[i], data: generateData(item) };
    });
  };

  const dataset = {
    labels: labels,
    datasets: generateDatasets(),
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
    plugins: {
      colors: {
        forceOverride: true,
      },
    },
  };

  return (
    <Wrapper>
      <Radar data={dataset} options={options} height={"auto"} />
    </Wrapper>
  );
};

export default RadarChart;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
