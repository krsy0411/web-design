import React, { createContext, useEffect, useState } from "react";
import { APIKEY } from "../api";

export const WeatherContext = createContext({});

export function WeatherProvider({ children }) {
  const [weatherInfo, setWeatherInfo] = useState({});
  const key = APIKEY
  const getWeatherInfo = async () => {
    try {
      const currentWeatherInfoAPI =
        `https://api.openweathermap.org/data/2.5/weather?appid=${key}&q=seoul&units=metric`;
      const currentWeatherInfo = await fetch(currentWeatherInfoAPI);
      const {
        name,
        coord: { lat, lon },
        main: { temp, humidity, feels_like, temp_min, temp_max },
        sys: { sunset, sunrise },
        weather: [{ main: weatherState }],
        wind: { speed, deg },
      } = await currentWeatherInfo.json();
      const hourlyWeatherInfoAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=${key}&units=metric`;
      const hourlyWeatherInfo = await fetch(hourlyWeatherInfoAPI);
      const { hourly } = await hourlyWeatherInfo.json();
      setWeatherInfo({
        name,
        temp,
        humidity,
        weatherState,
        feels_like,
        speed,
        deg,
        hourly,
        sunset,
        sunrise,
        temp_max,
        temp_min,
      });
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
    console.log(weatherInfo);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WeatherContext.Provider value={{ ...weatherInfo }}>
      {children}
    </WeatherContext.Provider>
  );
}