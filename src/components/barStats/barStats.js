import React, { useRef, useEffect } from "react";
import Chart from "chart.js";
import { useSelector } from "react-redux";

let myChart;

const BarStats = () => {
  const chartRef = useRef(null);

  const stats = useSelector((state) => state.stats.stats);

  const dataStats = (n) => {
    if (Object.keys(stats[n]).length > 0) {
      const keysArr = Object.keys(stats[n].timeline);
      let dataArr = [];
      console.log(keysArr);
      console.log(Math.max(...Object.values(stats[n].timeline["cases"])))
      keysArr.forEach((e) =>
        dataArr.push(Math.max(...Object.values(stats[n].timeline[e])))
        
      );
      
      
      return dataArr;
      
    } else {
      return [0, 0, 0];
    }
  };

  


  useEffect(() => {
    
    const myChartRef = chartRef.current.getContext("2d");
    if (typeof myChart !== "undefined") myChart.destroy();
    myChart = new Chart(myChartRef, {
      type: "bar",
      data: {
        //Bring in data
        labels: ["cases", "deaths", "recovered"],
        datasets: [
          {
            label: "Sales",
            data: dataStats(1),
          },
          {
            label: "Sales",
            data: dataStats(2),
          },
        ],
        
      },
      options: {},
    });
  });

  
  

  return (
    <>
      <canvas id="myChart" ref={chartRef} />
    </>
  );
};

export default BarStats;
