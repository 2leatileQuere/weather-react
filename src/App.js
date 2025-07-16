import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <>
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={`${process.env.PUBLIC_URL}/clouds.mp4`} type="video/mp4" />
      </video>

      <div className="App-content">
        <div className="container">
          <Weather defaultCity="Paris" />
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
              href="https://github.com/2leatileQuere"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and is{" "}
            <a
              href="https://weather-reactfinal.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              hosted on Netlify
            </a>
            .
          </footer>
        </div>
      </div>
    </>
  );
}
