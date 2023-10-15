import React, { useState } from "react";

import ApiHandler from "./ApiHandler";
import "../App.css";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(null);
  let [icon, setIcon] = useState(null);

  function toCelsius(event) {
    event.preventDefault();

    const celsius = Math.round(((temperature - 32) * 5) / 9);
    setTemperature(celsius);
  }

  function toFahrenheit(event) {
    event.preventDefault();

    const fahrenheit = Math.round((temperature * 9) / 5 + 32);
    setTemperature(fahrenheit);
  }

  const handleData = (data) => {
    setTemperature(data.temperature.current);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${data.condition.icon}.png`
    );
  };

  return (
    <div className="Temperature">
      <ApiHandler
        apiUrl={`https://api.shecodes.io/weather/v1/current?query=${props.city}&key=ae5350b6a304ff06o3a36487d5be8a4t&units=metric`}
        onDataFetched={handleData}
      />
      <div className="col">
        <div className="col pt-4" id="temperature">
          <p className="mt-4 fs-1">
            <img src={icon} alt="" id="icon" />
            <span className="temp" id="temperature-value">
              {Math.round(temperature)}
            </span>
            <sup className="temp-parameter">
              <button type="button" className="celsius" onClick={toCelsius}>
                °C
              </button>{" "}
              |
              <button
                type="button"
                className="fahrenheit"
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
