import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";

export default function Humidity(props) {
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  useEffect(() => {
    const apiKey = "ae5350b6a304ff06o3a36487d5be8a4t";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(
      (response) => {
        setHumidity(response.data.temperature.humidity);
        setWind(response.data.wind.speed);
      },
      (error) => {
        console.error("Error fetching humidity data:", error);
      }
    );
  }, );

  return (
    <div className="Humidity">
      <div className="row row-cols-2 fs-5">
        <div className="col">
          <p id="humidity">
            Humidity: <span className="humidity-value">{humidity}</span>
            <span className="percent">%</span>
          </p>
        </div>
        <div className="col">
          <p id="wind">
            Wind: <span className="wind-speed">{wind}</span>
            <span className="speed">km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}
