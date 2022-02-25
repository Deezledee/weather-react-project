import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Tokyo",
    date: "Thursday 30/12/2021 22:30",
    description: "Slight Rain",
    windspeed: 10,
    humidity: 80,
    temperature: 19,
  };

  return (
    <div className="Weather">
      <h1>🌡️ Weather Forecast 🌡️</h1>

      <br />
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city name"
          autoComplete="on"
        />
        <input type="submit" value="Search 🔍" className="form-control" />{" "}
        <br />
        <button className="btn btn-success">
          Current location <span>📍</span>
        </button>
      </form>
      <br />

      <h2>Today in Berlin</h2>
      <br />
      <p>
        <span className="today-temperature">19</span>
        <span className="units">
          <a href="#">°C</a> |<a href="#">°F</a>
        </span>
        <br />
      </p>

      <div className="todayDescription">
        <span>{weatherData.description}</span>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="clear sky"
          className="float-right"
          width="50px"
        />
      </div>
      <br />
      <div className="row paremeters">
        <div className="col humidity">
          💧 Humidity: <span>{weatherData.humidity}</span>%
        </div>
        <div className="col windspeed">
          💨 Windspeed:
          <span>{weatherData.windspeed}</span> m/s
        </div>
      </div>
      <br />
      <h3 className="date">{weatherData.date}</h3>
      <br />

      <div className="weather-forecast">
        <div className="row">
          <div className="col-2">
            <div className="weather-forecast-date">Thu</div>
            <img
              src="http://openweathermap.org/img/wn/50d@2x.png"
              alt=""
              width="40"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                {" "}
                {weatherData.temperature}°{" "}
              </span>
              <span className="weather-forecast-temperature-min">
                {" "}
                {weatherData.temperature}°{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
