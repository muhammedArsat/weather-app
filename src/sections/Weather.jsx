import React, { useContext } from "react";
import LocationWeather from "../components/LocationWeather";
import HourlyWeather from "../components/HourlyWeather";
import WeatherDetails from "./WeatherDetails";
import DailyForecast from "./DailyForecast";
import WeatherContext from "../WeatherContext";

const Weather = () => {
  const { location, weatherData } = useContext(WeatherContext);

  if (!weatherData)
    return (
      <div className="w-full flex justify-center items-center">
        <p>Search for your city</p>
      </div>
    );

  return (
    <div className="flex flex-col md:flex-row items-start space-x-3">
      <div className="flex w-full flex-col  md:flex-3/4 space-y-4">
        <LocationWeather />
        <WeatherDetails />
        <DailyForecast />
      </div>
      <HourlyWeather />
    </div>
  );
};

export default Weather;
