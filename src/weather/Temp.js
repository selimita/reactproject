import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import "../style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("dhaka");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7509de72fe0c2cc45b297eec2bc563a2`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div id="weather-card">
        <div className="mx-auto col-10 col-md-6 text-center">
            <div className="search">
                <input
                    type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                <button
                    className="searchButton"
                    type="button"
                    onClick={getWeatherInfo}>
                    Search
                </button>
            </div>
            <Weathercard {...tempInfo} />
        </div>
    </div>
        
      
    </>
  );
};

export default Temp;
