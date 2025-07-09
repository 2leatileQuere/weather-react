import React, { useState } from "react";
import axios from "axios";

export default function DailyWeather(props) {
  let [forecast, setForecast] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="DailyWeather">
        <div className="table-1">Weather Detail...</div>
        <table>
          <tbody>
            <tr>
              <td className="table-title">Temp max</td>
              <td className="table-figure">19°</td>
            </tr>
            <tr>
              <td className="table-title">Temp min</td>
              <td className="table-figure">15°</td>
            </tr>
            <tr>
              <td className="table-title">Humidity</td>
              <td className="table-figure">58%</td>
            </tr>
            <tr>
              <td className="table-title">Cloudy</td>
              <td className="table-figure">89%</td>
            </tr>
            <tr>
              <td className="table-title">Wind</td>
              <td className="table-figure">5km/h</td>
            </tr>
          </tbody>
        </table>
        <div className=" table-2">Today's weather forecast</div>
        <table>
          <tbody>
            <tr>
              <td className="table-2-symbol">❄︎</td>
              <td className="table-2-day">Sun</td>
              <td className="table-figure">
                {forecast[0].temperature.minimum}
              </td>
              <td className="table-figure">
                {forecast[0].temperature.maximum}°
              </td>
            </tr>
            <tr>
              <td className="table-2-symbol">❄︎</td>
              <td className="table-2-day">Mon</td>
              <td className="table-figure"> 15°| 24°</td>
            </tr>
            <tr>
              <td className="table-2-symbol">❄︎</td>
              <td className="table-2-day">Tues</td>
              <td className="table-figure"> 15°| 24°</td>
            </tr>
            <tr>
              <td className="table-2-symbol">❄︎</td>
              <td className="table-2-day">Wed</td>
              <td className="table-figure"> 15°| 24°</td>
            </tr>
            <tr>
              <td className="table-2-symbol">❄︎</td>
              <td className="table-2-day">Thur</td>
              <td className="table-figure"> 15°| 24°</td>
            </tr>
            <tr>
              <td className="table-2-symbol">❄︎</td>
              <td className="table-2-day">Fri</td>
              <td className="table-figure"> 15°| 24°</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  } else {
    const apiKey = "b2d9fa1f2b35557e4615dd5fab218834";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metrics`;

    axios.get(apiUrl).then(handleResponse);

    return <div>still downloading </div>;
  }
}
