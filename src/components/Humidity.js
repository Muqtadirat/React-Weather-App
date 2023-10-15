import React, { useState } from "react";
import "../App.css";
import ApiHandler from "./ApiHandler";

export default function Humidity(props) {
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);

  const handleData = (data) => {
    setHumidity(data.current.humidity);
    setWind(data.current.wind_mph);
  };

  return (
    <div className="Humidity">
      <ApiHandler
        apiUrl={`https://api.weatherapi.com/v1/current.json?key=a8854d0ab8f546e4bd5185259231510&q=${props.city}&units=celsius`}
        onDataFetched={handleData}
      />
      <div className="row row-cols-md-2 fs-5">
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
