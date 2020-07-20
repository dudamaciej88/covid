import React from "react";
import TimelineGraph from "./timelineGraph";
import TimelineLegend from "./timelineLegend/timelineLegend";

const TimelineStats = () => {
  return (
    <>
      <TimelineLegend />
      <TimelineGraph />
    </>
  );
};

export default TimelineStats;
