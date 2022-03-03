import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h2>Today in {props.data.city}</h2>{" "}
      <p>
        <span className="today-temperature">
          {" "}
          {Math.round(props.data.temperature)}
        </span>{" "}
        <span className="units">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>{" "}
      </p>
      <div className="todayDescription">
        <span className="text-capitalize">{props.data.description}</span>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="clear sky"
          className="float-right"
          width="50px"
        />
      </div>{" "}
      <div className="row paremeters">
        <div className="col humidity">
          💧 Humidity: <span>{props.data.humidity}</span>%
        </div>
        <div className="col windspeed">
          💨 Windspeed:
          <span>{props.data.wind}</span> m/s
        </div>
      </div>{" "}
      <h3 className="date">
        <FormattedDate date={props.data.date} />
      </h3>{" "}
      <div className="weather-forecast">
        <div className="row">
          <div className="col-12">
            <div className="weather-forecast-date">Thu</div>
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              width="40"
            />
            <div className="weather-forecast-temperatures">
              <span className="weather-forecast-temperature-max">
                {" "}
                {props.data.temperature}°{" "}
              </span>
              <span className="weather-forecast-temperature-min">
                {" "}
                {props.data.temperature}°{" "}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
