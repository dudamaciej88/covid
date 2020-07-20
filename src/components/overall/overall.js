import React from "react";
import StatsCard from "./statsCard";
import * as S from "./overall.style";

const Overall = () => {
  return (
    <S.Wrapper>
      <StatsCard number={1} />
      <StatsCard number={2} />
    </S.Wrapper>
  );
};

export default Overall;
