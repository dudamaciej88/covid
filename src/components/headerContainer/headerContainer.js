import React from "react";
import * as S from "./headerContainer.style";

const HeaderContainer = () => {
  return (
    <S.Container>
        <S.H1>Covid-19</S.H1>
      <S.CrownWrapper><S.Crown /></S.CrownWrapper>
      
      <S.P>Compare coronavirus statistics</S.P>
    </S.Container>
  );
};

export default HeaderContainer;
