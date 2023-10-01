import React, { useState } from "react";
import "../App.css";

export default function Search(props) {
  const [cityValue, setCityValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.searchEngine(cityValue);
  };

  return (
    <div className="Search">
      <form id="search-form" onSubmit={handleSubmit}>
        <div className="row align-items-center px-4 weather-btns">
          <div className="col">
            <input
              className="form-control form-control-lg"
              id="city-input"
              type="text"
              placeholder="Enter a city..."
              aria-label="Input city name"
              onChange={(e) => setCityValue(e.target.value)}
            />
          </div>

          <div className="col-2">
            <button
              type="submit"
              className="btn btn-lg btn-primary px-5"
              id="search"
            >
              Search
            </button>
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-lg border btn-primary px-5"
            >
              <i className="fa-solid fa-location-dot" id="gps-location"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
