import React from "react";
import "./App.css";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate.js from "./FormattedDate.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Miami" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/2leatileQuere"
            target="_blank"
            rel="noreferrer"
          >
            Leatile Quere
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/2leatileQuere/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
