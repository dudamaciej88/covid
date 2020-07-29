import React from "react";
import { useDispatch } from "react-redux";
import { fetchStats, statsReset } from "../../data/actions/stats.actions";
import * as S from "./countrySelector.style";

const CountrySelector = ({ selectorNumber }) => {
  const dispatch = useDispatch();

  const changeHandler = (value, selectorNumber) => {
    if (value.target.value !== "Choose") {
      dispatch(fetchStats(value.target.value, selectorNumber));
    } else {
      dispatch(statsReset(selectorNumber));
    }
  };

  const countriesArr = [
    "Austria",
    "Belarus",
    "Belgium",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Italy",
    "Latvia",
    "Netherlands",
    "Norway",
    "Ukraine",
    "United Kingdom",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
  ];

  const options = countriesArr.map((e, key) => (
    <option key={key} value={e}>
      {e}
    </option>
  ));
  return (
    <S.Wrapper>
      <S.Label htmlFor="country">Choose country : </S.Label>
      <S.Select
        name="country"
        onChange={(value) => changeHandler(value, selectorNumber)}
      >
        <option value="Choose">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- - - - -&nbsp;&nbsp;&darr;
        </option>
        {options}
      </S.Select>
    </S.Wrapper>
  );
};

export default CountrySelector;
