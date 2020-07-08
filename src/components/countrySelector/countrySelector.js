import React from "react";

const CountrySelector = () => {
    return <div>
        <label htmlFor="country">Choose country : </label>
        <select name="country" onChange={(e) => console.log(e.target.value)}>
            <option value="Poland">Poland</option>
            <option value="Germany">Germany</option>
        </select>
    </div>
}

export default CountrySelector;