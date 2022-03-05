import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <h2>Today in {props.data.city}</h2>{" "}
      <p>
        <div className="float-left">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="float-left">
          <WeatherIcon code={props.data.icon} />
        </div>
        <span className="today-temperature">
          {" "}
          {Math.round(props.data.temperature)}
        </span>{" "}
        <span className="units">
          <a href="/">°C</a> |<a href="/">°F</a>
        </span>{" "}
      </p>
      <div className="float-left">
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
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

            <div className="weather-forecast-temperatures"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
