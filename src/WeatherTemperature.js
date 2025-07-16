import React from "react";
{
  "rules": {
    "no-unused-vars": "off"
  }
}
export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C </span>
    </div>
  );
}
