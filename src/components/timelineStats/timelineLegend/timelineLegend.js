import React from "react";
import TimelineCheckbox from "../timelineChekbox/timelineCheckbox";
import * as S from "./timelineLegend.style";
import { useSelector } from "react-redux";

const TimelineLegend = () => {
  const stats = useSelector((state) => state.stats.stats);

  const getCountry = (n) => {
    if (Object.keys(stats[n]).length > 0) {
      return stats[n].country;
    } else {
      return `Country ${n}`;
    }
  };

  return (
    <S.Wrapper>
      <S.P1>{getCountry(1)}</S.P1>
      <S.P2>{getCountry(2)}</S.P2>
      <S.Grid1>
        <TimelineCheckbox text={"cases"} checkboxName={"cases"} />
      </S.Grid1>
      <S.Grid2>
        <TimelineCheckbox text={"deaths"} checkboxName={"deaths"} />
      </S.Grid2>
      <S.Grid3>
        <TimelineCheckbox text={"recovered"} checkboxName={"recovered"} />
      </S.Grid3>
      <S.Color1Div/>
      <S.Color2Div/>
      <S.Color3Div/>
      <S.Color4Div/>
      <S.Color5Div/>
      <S.Color6Div/>
    </S.Wrapper>
  );
};

export default TimelineLegend;
