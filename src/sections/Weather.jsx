import React from "react";
import LocationWeather from "../components/LocationWeather";
import HourlyWeather from "../components/HourlyWeather";
import WeatherDetails from "./WeatherDetails";
import DailyForecast from "./DailyForecast";

const Weather = () => {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex flex-col flex-3/4 space-y-4">
        <LocationWeather />
        <WeatherDetails />
        <DailyForecast />
      </div>
      <HourlyWeather />
    </div>
  );
};

export default Weather;
