import React from "react";
import { useDispatch } from "react-redux";
import { fetchStats, statsReset } from "../../data/actions/stats.actions";

const CountrySelector = ({selectorNumber}) => {
    const dispatch = useDispatch()
    
    const changeHandler = (value, selectorNumber) => {
        if (value.target.value !== "Choose") {
            dispatch(fetchStats(value.target.value, selectorNumber))
        } else {
            dispatch(statsReset(selectorNumber));
        }
    }

  return (
    <div>

    

      <label htmlFor="country">Country : </label>
      <select name="country" onChange={(value) => changeHandler(value, selectorNumber)}>
      <option value="Choose">Choose</option>
        <option value="Poland">Poland</option>
        <option value="Germany">Germany</option>
        <option value="Italy">Italy</option>
        <option value="Spain">Spain</option>
      </select>
    </div>
  );
};

export default CountrySelector;
