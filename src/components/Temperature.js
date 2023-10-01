import React, { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(null);

  const apiKey = "5da7b2dc058f07286fea39c4cee516a3";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  axios
    .get(apiUrl)
    .then(showTemperature)
    .catch((error) => {
      console.error("Error fetching temperature data:", error);
    });

  return (
    <div className="Temperature">
      <div className="col">
        <div className="col pt-4" id="temperature">
          <p className="mt-4 fs-1">
            <img src="" alt="" id="icon" />
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
