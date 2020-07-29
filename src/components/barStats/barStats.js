import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import { useSelector } from "react-redux";
import * as S from "./barStats.style";

let myBar;

const BarStats = () => {
  const chartRef = useRef(null);

  const stats = useSelector((state) => state.stats.stats);

  const dataStats = (n) => {
    if (Object.keys(stats[n]).length > 0) {
      const keysArr = Object.keys(stats[n].timeline);
      let dataArr = [];
      console.log(keysArr);
      console.log(Math.max(...Object.values(stats[n].timeline["cases"])));
      keysArr.forEach((e) =>
        dataArr.push(Math.max(...Object.values(stats[n].timeline[e])))
      );
      return dataArr;
    } else {
      return [0, 0, 0];
    }
  };

  const labelHandler = (n) => {
    if (Object.keys(stats[n]).length > 0) {
      return stats[n].country;
    } else {
      return `Country ${n}`;
    }
  };

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    if (typeof myBar !== "undefined") myBar.destroy();
    Chart.defaults.global.animation.duration = 2000;
    Chart.defaults.global.animation.easing = "linear";
    Chart.defaults.global.defaultFontColor = "white";
    Chart.defaults.global.defaultFontFamily = "'Montserrat'";
    myBar = new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: ["Cases", "Deaths", "Recovered"],
        datasets: [
          {
            label: labelHandler(1),
            data: dataStats(1),
            backgroundColor: "#faee1c",
          },
          {
            label: labelHandler(2),
            data: dataStats(2),
            backgroundColor: "#3D5AF1",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              gridLines: { 
                zeroLineColor: "white",
                display: true
              },
              ticks: {
                suggestedMin: 0,
              },
            },
          ],
          xAxes: [
            {
              gridLines: { 
                zeroLineColor: "white",
                display: true
              },
            }
          ]
        },
      },
    });
  });

  return (
    <>
      <S.Wrapper>
        <canvas id="myBar" ref={chartRef} />
      </S.Wrapper>
    </>
  );
};

export default BarStats;
