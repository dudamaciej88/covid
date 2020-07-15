import React from "react";
import "./App.css";
import BarStats from "./components/barStats/barStats";
import CountrySelector from "./components/countrySelector/countrySelector";

function App() {
  return (
    <div className="App">
      <CountrySelector selectorNumber={1} />
      <CountrySelector selectorNumber={2}/>
      <BarStats />
    </div>
  );
}

export default App;
