import React from "react";
import LocationWeather from "../components/LocationWeather";
import HourlyWeather from "../components/HourlyWeather";

const Weather = () => {
  return (
    <div className="flex items-start space-x-3">
      <LocationWeather />
      <HourlyWeather />
    </div>
  );
};

export default Weather;
