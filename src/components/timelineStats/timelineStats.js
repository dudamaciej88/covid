import React from "react";
import TimelineGraph from "./timelineGraph";
import TimelineLegend from "./timelineLegend/timelineLegend";
import * as S from "./timelineStats.style"

const TimelineStats = () => {
  return (
    <>
    <S.Wrapper>
      <TimelineLegend />
      <TimelineGraph />
      </S.Wrapper>
    </>
  );
};

export default TimelineStats;
