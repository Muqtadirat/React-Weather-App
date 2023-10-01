import React from "react";
import "../App.css";

export default function Humidity() {
  return (
    <div className="Humidity">
      <div className="row row-cols-2 fs-5">
        <div className="col">
          <p id="humidity">
            Humidity: <span className="humidity-value">20</span>
            <span className="percent">%</span>
          </p>
        </div>
        <div className="col">
          <p id="wind">
            Wind: <span className="wind-speed">9.99</span>
            <span className="speed">km/h</span>
          </p>
        </div>
      </div>
    </div>
  );
}
