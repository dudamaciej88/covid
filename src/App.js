import React from "react";
import * as S from "./App.style";
import HeaderContainer from "./components/headerContainer/headerContainer"
import BarStats from "./components/barStats/barStats";
import CountrySelector from "./components/countrySelector/countrySelector";
import TimelineStats from "./components/timelineStats/timelineStats";
import Navigation from "./components/navigation/navigation";
import {useSelector} from "react-redux";
import Overall from "./components/overall/overall";

function App() {

  const display = useSelector((state) => state.displayer.display)
  
  return (
    <S.App>
      <HeaderContainer />
      <S.SelectorsWrapper>
      <CountrySelector selectorNumber={1} />
      <CountrySelector selectorNumber={2}/>
      </S.SelectorsWrapper>
      <Navigation />
      {display === "overall" ? <Overall /> : null}
      {display === "bar" ? <BarStats /> : null}
      {display === "timeline" ? <TimelineStats /> : null}
    </S.App>
  );
}

export default App;
