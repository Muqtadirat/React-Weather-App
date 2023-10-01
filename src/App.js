import React, { useState } from "react";

import "./App.css";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Temperature from "./components/Temperature";
import Humidity from "./components/Humidity";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("");

  const searchEngine = (city) => {
    setCity(city);
  };

  return (
    <div className="App container-fluid text-center border border-warning rounded p-3 mt-5 mx-auto">
      <Search searchEngine={searchEngine} />
      <div className="row row-cols-2 mt-5 mb-5 mx-auto" id="weather-display">
        <Weather city={city} />
        <div className="col">
          <Temperature city={city} />
          <Humidity />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
