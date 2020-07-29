import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import { useSelector } from "react-redux";

let myChart;

const TimelineStats = () => {
  const chartRef1 = useRef(null);

  const stats = useSelector((state) => state.stats.stats);
  const legend = useSelector((state) => state.legend.legend);

  const labelsHandler = () => {
    if (Object.keys(stats[1]).length > 0) {
      return Object.keys(stats[1].timeline.cases);
    } else if (Object.keys(stats[2]).length > 0) {
      return Object.keys(stats[2].timeline.cases);
    } else {
      return ["Date"];
    }
  };

  const dataHandler = (n, whatData) => {
    if (Object.keys(stats[n]).length > 0) {
      return Object.values(stats[n].timeline[whatData]);
    } else {
      return [];
    }
  };

  const labelHandler = (n, name) => {
    if (Object.keys(stats[n]).length > 0) {
      return `${stats[n].country} ${name}`;
    } else {
      return `Country ${n} ${name}`;
    }
  };

  useEffect(() => {
    const myChartRef1 = chartRef1.current.getContext("2d");
    if (typeof myChart !== "undefined") myChart.destroy();
    Chart.defaults.global.animation.duration = 2000;
    Chart.defaults.global.animation.easing = "easeInOutQuad";
    Chart.defaults.global.defaultFontColor = "white";
    Chart.defaults.global.elements.line.tension = 0;

    myChart = new Chart(myChartRef1, {
      type: "line",
      data: {
        //Bring in data
        labels: labelsHandler(),
        datasets: [
          legend.show["cases"]
            ? {
                label: labelHandler(1, "cases"),
                data: dataHandler(1, "cases"),
                borderColor: "#faee1c",
                pointRadius: 0,
              }
            : {},
          legend.show["cases"]
            ? {
                label: labelHandler(2, "cases"),
                data: dataHandler(2, "cases"),
                borderColor: "red",
                pointRadius: 0,
              }
            : {},
          legend.show["deaths"]
            ? {
                label: labelHandler(1, "deaths"),
                data: dataHandler(1, "deaths"),
                borderColor: "green",
                pointRadius: 0,
              }
            : {},
          legend.show["deaths"]
            ? {
                label: labelHandler(2, "deaths"),
                data: dataHandler(2, "deaths"),
                borderColor: "purple",
                pointRadius: 0,
              }
            : {},
          legend.show["recovered"]
            ? {
                label: labelHandler(1, "recovered"),
                data: dataHandler(1, "recovered"),
                borderColor: "orange",
                pointRadius: 0,
              }
            : {},
          legend.show["recovered"]
            ? {
                label: labelHandler(2, "recovered"),
                data: dataHandler(2, "recovered"),
                borderColor: "white",
                pointRadius: 0,
              }
            : {},
        ],
      },
      options: {
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              gridLines: {
                
                display: true,
                drawBorder: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                suggestedMin: 0,
              },
              position: "right",
            },
          ],
        },
      },
    });
  });

  return (
    <>
      <canvas id="myChart" ref={chartRef1} />
    </>
  );
};

export default TimelineStats;
