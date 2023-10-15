import React, { useEffect, useState } from "react";
import "../App.css";
import ApiHandler from "./ApiHandler";

export default function Humidity(props) {
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  const handleData = (data) => {
    setHumidity(data.temperature.humidity);
    setWind(data.wind.speed);
  };

  return (
    <div className="Humidity">
      <ApiHandler
        apiUrl={`https://api.shecodes.io/weather/v1/current?query=${props.city}&key=ae5350b6a304ff06o3a36487d5be8a4t&units=metric`}
        onDataFetched={handleData}
      />
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
