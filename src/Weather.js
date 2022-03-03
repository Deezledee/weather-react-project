import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "19d4e3e019b6af8cf23d09f85fc85a54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <h1>🌡️ Weather Forecast 🌡️</h1>

          <br />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city name"
              autoComplete="on"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search 🔍" className="form-control" />{" "}
            <br />
            <button className="btn btn-success">
              Current location <span>📍</span>
            </button>
          </form>
          <WeatherInfo data={weatherData} />

          <div className="text-center images">
            <img
              className="seashell"
              src="images/seashell.jpg"
              width="400"
              alt=""
            />
            <img
              className="sunflower2"
              src="images/sunflower2.jpg"
              width="400"
              alt=""
            />
            <img
              className="horse2"
              src="images/horse2.jpg"
              width="400"
              alt=""
            />
          </div>
          <br />
          <br />

          <footer className="codedby">
            Coded by{" "}
            <span>
              <a
                href="https://www.shecodes.io/students/503-diana-kalstein"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Diana Kalstein ©️
              </a>
            </span>
            , is{" "}
            <span>
              <a
                href="https://github.com/Deezledee/Weather-App-Diana-K.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                open-sourced on GitHub{" "}
              </a>
            </span>
            and is{" "}
            <span>
              <a
                href="https://adoring-kowalevski-9714eb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                hosted on Netlify
              </a>
            </span>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
