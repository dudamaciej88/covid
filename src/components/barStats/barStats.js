import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const BarStats = () => {
  const chartRef = useRef(null);
  

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: ["Jan", "Feb", "March"],
        datasets: [
          {
            label: "Sales",
            data: [86, 45, 91],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  });

  return (
    <>
      <canvas id="myChart" ref={chartRef} />
      
    </>
  );
};

export default BarStats;
