import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.main.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/50d@2x.png",
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
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

          <h2>Today in {weatherData.city}</h2>
          <br />
          <p>
            <span className="today-temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="units">
              <a href="/">°C</a> |<a href="/">°F</a>
            </span>
            <br />
          </p>

          <div className="todayDescription">
            <span className="text-capitalize">{weatherData.description}</span>
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
              <span>{weatherData.wind}</span> m/s
            </div>
          </div>
          <br />
          <h3 className="date">{weatherData.date}</h3>
          <br />

          <div className="weather-forecast">
            <div className="row">
              <div className="col-12">
                <div className="weather-forecast-date">Thu</div>
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
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
                  <br />
                  <br />
                </div>

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
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "19d4e3e019b6af8cf23d09f85fc85a54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
