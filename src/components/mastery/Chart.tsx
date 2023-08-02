import React, { useEffect, useRef } from "react";
import { MasteryFullData } from "@/type/masteryData.type";
import bubbleChart from "@/components/mastery/bubbleChart";
import theme from "@/styles/theme";
import { HideTitleH2 } from "@/styles/common";
import * as S from "./Chart.style";

const Chart = ({ data }: { data: MasteryFullData[] }) => {
  const svgRef = useRef(null);

  const createChart = () => {
    const svg = bubbleChart(data, {
      stroke: theme.COLOR.borderOrigin,
      strokeWidth: 1.5,
      height: 880,
      backgroundColor: theme.COLOR.contents,
    });
    // @ts-ignore
    if (!svgRef.current.childNodes.length) {
      // @ts-ignore
      svgRef.current.append(svg);
    }
  };

  useEffect(() => {
    if (data.length !== 0) {
      createChart();
    }
  }, [data]);

  return (
    <section>
      <HideTitleH2>플레이 챔피언 별 숙련도 통계</HideTitleH2>
      <S.SvgWrapper>
        <div ref={svgRef} />
        <S.CountWrapper>
          <S.Count>{data.length}</S.Count>
          <S.CountTxt>플레이 챔피언</S.CountTxt>
        </S.CountWrapper>
      </S.SvgWrapper>
      <S.Dl className="championInfo">
        <div>
          <dt>이름</dt>
          <dd className="championName">-</dd>
        </div>
        <div>
          <dt>점수</dt>
          <dd className="championPoint">-</dd>
        </div>
        <div>
          <dt>점수 비율</dt>
          <dd className="championPointRatio">-</dd>
        </div>
        <div>
          <dt>마지막 플레이</dt>
          <dd className="championLastPlayTime">-</dd>
        </div>
      </S.Dl>
    </section>
  );
};

export default Chart;
