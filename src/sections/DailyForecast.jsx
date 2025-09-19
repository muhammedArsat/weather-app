import React, { useContext, useState } from "react";
import { climateIcons } from "../constants/constants";
import WeatherContext from "../WeatherContext";
import { convertDateToDay, getWeatherIconFromCode } from "../Utility";
const DailyForecast = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const { weatherData } = useContext(WeatherContext);
  return (
    <div className="flex flex-col space-y-4 p-2">
      <h3>Daily Forecast</h3>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
        {weatherData?.daily?.time?.map((data, idx) => {
          return (
            <div
              key={idx}
              className="flex min-h-[150px] flex-col justify-between items-center bg-neutral-700 rounded-lg p-2"
            >
              <p>{days[convertDateToDay(data)]}</p>
              <img
                src={
                  climateIcons[
                    getWeatherIconFromCode(weatherData?.daily?.weathercode[idx] ?? 0)
                  ]
                }
                alt="climate icon"
                className="w-10 h-10"
              />
              <div className="flex justify-between items-center w-full">
                <span className="font-body">
                  {weatherData?.daily?.temperature_2m_max[idx]}&deg;C
                </span>
                <span className="font-body">
                  {weatherData?.daily?.temperature_2m_min[idx]}&deg;C
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
