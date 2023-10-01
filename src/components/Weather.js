import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Weather(props) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    // Api to retrieve country information
    const apiKey = "ae5350b6a304ff06o3a36487d5be8a4t";
    const city = props.city;
    const countryApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(countryApiUrl).then((response) => {
      setCountry(response.data.country);
    });
  }, [props.city]);

  return (
    <div className="Weather">
      <div className="col">
        <div className="row row-cols-1 text-start">
          <div className="col">
            <p className="city">
              {props.city.charAt(0).toUpperCase() + props.city.slice(1)}
            </p>
          </div>
          <div className="col">
            <p className="country">{country}</p>
          </div>
          <div className="col">
            <div className="row row-cols-2 fs-3">
              <div className="col">
                <p className="day">Saturday</p>
              </div>
              <div className="col">
                <p className="time">11:11</p>
              </div>
            </div>
          </div>
          <div className="col fs-4">
            <p id="atmosphere">Light rain</p>
          </div>
        </div>
      </div>
    </div>
  );
}
