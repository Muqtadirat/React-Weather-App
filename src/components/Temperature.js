import React, { useState } from "react";

import ApiHandler from "./ApiHandler";
import "../App.css";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(0);
  let [icon, setIcon] = useState(null);

  function toCelsius() {
    if (temperature !== null) {
      const celsius = Math.round(((temperature - 32) * 5) / 9);
      setTemperature(celsius);
    }
  }

  function toFahrenheit() {
    if (temperature !== null) {
      const fahrenheit = Math.round((temperature * 9) / 5 + 32);
      setTemperature(fahrenheit);
    }
  }

  const handleData = (data) => {
    if (data.current.temp_c !== temperature && data.current.condition.icon) {
      setTemperature(data.current.temp_c);
      const iconCode = data.current.condition.icon.split("/").pop(); // Extract icon code from the URL
      const iconUrl = `https://cdn.weatherapi.com/weather/64x64/night/${iconCode}`; // Construct the icon URL
      setIcon(iconUrl);
    }
  };

  return (
    <div className="Temperature">
      <ApiHandler
        apiUrl={`https://api.weatherapi.com/v1/current.json?key=a8854d0ab8f546e4bd5185259231510&q=${props.city}&units=celsius`}
        onDataFetched={handleData}
      />
      <div className="col">
        <div className="col pt-4" id="temperature">
          <p className="mt-4 fs-1">
            <img src={icon} alt="" id="icon" className="img-fluid" />
            <span className="temp" id="temperature-value">
              {Math.round(temperature)}
            </span>
            <sup className="temp-parameter">
              <button type="button" className="celsius btn" onClick={toCelsius}>
                °C
              </button>{" "}
              |
              <button
                type="button"
                className="fahrenheit btn"
                onClick={toFahrenheit}
              >
                °F
              </button>
            </sup>
          </p>
        </div>
      </div>
    </div>
  );
}
