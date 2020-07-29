import React from "react";
import { useSelector } from "react-redux";
import * as S from "./statsCard.style";
import CountUp from "react-countup";

const StatsCard = ({ number }) => {
  const stats = useSelector((state) => state.stats.stats);

  const dataStats = (name) => {
    if (Object.keys(stats[number]).length > 0) {
      return Math.max(...Object.values(stats[number].timeline[name]));
    } else {
      return 0;
    }
  };

  return (
    <S.Wrapper>
      <S.StatWrapper>
        <S.Pdesc>Cases</S.Pdesc>
        <S.PNumber>
          <CountUp end={dataStats("cases")} />
        </S.PNumber>
      </S.StatWrapper>
      <S.StatWrapper>
        <S.Pdesc>Deaths</S.Pdesc>
        <S.PNumber>
          <CountUp end={dataStats("deaths")} />
        </S.PNumber>
      </S.StatWrapper>
      <S.StatWrapper>
        <S.Pdesc>Recovered</S.Pdesc>
        <S.PNumber>
          <CountUp end={dataStats("recovered")} />
        </S.PNumber>
      </S.StatWrapper>
    </S.Wrapper>
  );
};

export default StatsCard;
