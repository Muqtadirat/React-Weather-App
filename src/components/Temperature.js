import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(null);
  let [icon, setIcon] = useState(null);

  const apiKey = "ae5350b6a304ff06o3a36487d5be8a4t";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

  function handleResponse(response) {
    setTemperature(response.data.temperature.current);
    setIcon(
      `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    );
  }

  axios
    .get(apiUrl)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error fetching temperature data:", error);
    });

  return (
    <div className="Temperature">
      <div className="col">
        <div className="col pt-4" id="temperature">
          <p className="mt-4 fs-1">
            <img src={icon} alt="" id="icon" />
            <span className="temp" id="temperature-value">
              {Math.round(temperature)}
            </span>
            <sup className="temp-parameter">
              <button type="button" className="celsius">
                °C
              </button>{" "}
              |
              <button type="button" className="fahrenheit">
                °F
              </button>
            </sup>
          </p>
        </div>
      </div>
    </div>
  );
}
