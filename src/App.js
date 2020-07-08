import React from "react";
import "./App.css";
import BarStats from "./components/barStats/barStats";
import CountrySelector from "./components/countrySelector/countrySelector";

function App() {
  return (
    <div className="App">
      <CountrySelector />
      <BarStats />
    </div>
  );
}

export default App;
