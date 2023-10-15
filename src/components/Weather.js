import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Weather(props) {
  const now = new Date();

  function getWeekDay() {
   const weekday = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
   ][now.getDay()];

   return weekday;
  }

  const [country, setCountry] = useState("");
  const [time, setTime] = useState("");
  const [atmosphere, setAtmosphere] = useState("");

  useEffect(() => {
    // Api to retrieve country information
    const apiKey = "ae5350b6a304ff06o3a36487d5be8a4t";
    const city = props.city;
    const countryApiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios
      .get(countryApiUrl)
      .then((response) => {
        setCountry(response.data.country);
        setAtmosphere(
          response.data.condition.description.charAt(0).toUpperCase() +
            response.data.condition.description.slice(1)
        );

        const apiTimeInMilliseconds = response.data.time * 1000;
        const apiTime = new Date(apiTimeInMilliseconds);
        const hour = apiTime.getHours().toString().padStart(2, "0");
        const minutes = apiTime.getMinutes().toString().padStart(2, "0");

        setTime(`${hour}:${minutes}`);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [props.city]);

  return (
    <div className="Weather">
      <div className="col">
        <div className="row row-cols-1 text-start">
          <div className="col">
            <p className="city">
              {props.city.charAt(0).toUpperCase() + props.city.slice(1)},
            </p>
          </div>
          <div className="col">
            <p className="country">{country}</p>
          </div>
          <div className="col">
            <div className="row row-cols-2 fs-3">
              <div className="col">
                <p className="day">{getWeekDay()}</p>
              </div>
              <div className="col">
                <p className="time">{time}</p>
              </div>
            </div>
          </div>
          <div className="col fs-4">
            <p id="atmosphere">{atmosphere}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
