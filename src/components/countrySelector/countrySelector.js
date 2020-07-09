import React from "react";
import { useDispatch } from "react-redux";
import { fetchStats } from "../../data/actions/stats.actions";

const CountrySelector = () => {
    const dispatch = useDispatch()
    
  return (
    <div>

    <button onClick={() => dispatch(fetchStats("poland"))}></button>

      <label htmlFor="country">Country : </label>
      <select name="country" onChange={(e) => console.log(e.target.value)}>
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
