import React, { useContext } from "react";
import WeatherContext from "../WeatherContext";

const WeatherDetails = () => {
  const details = [
    {
      type: "Feels Like",
      value: "32",
    },
    {
      type: "Wind",
      value: "14",
    },
    {
      type: "Humidity",
      value: "46",
    },
    {
      type: "Precipitations",
      value: "0",
    },
  ];

  const { weatherData,index } = useContext(WeatherContext);
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className=" min-h-[100px] p-2 flex flex-col items-start justify-between bg-neutral-700 rounded-lg">
        <span className="text-neutral-400">{details[0].type}</span>
        <h2>{weatherData?.hourly?.temperature_2m?.[index] ?? "--"}&deg;C</h2>
      </div>

      <div className=" min-h-[100px] p-2 flex flex-col items-start justify-between bg-neutral-700 rounded-lg">
        <span className="text-neutral-400">{details[1].type}</span>
        <h2>{weatherData?.hourly?.winddirection_10m?.[index] ?? "--"} Km/hr</h2>
      </div>

      <div className=" min-h-[100px] p-2 flex flex-col items-start justify-between bg-neutral-700 rounded-lg">
        <span className="text-neutral-400">{details[2].type}</span>
        <h2>{weatherData?.hourly?.relativehumidity_2m?.[index]??"--"} %</h2>
      </div>

      <div className=" min-h-[100px] p-2 flex flex-col items-start justify-between bg-neutral-700 rounded-lg">
        <span className="text-neutral-400">{details[3].type}</span>
        <h2>{weatherData?.hourly?.precipitation_probability?.[index] ?? "--"} mm</h2>
      </div>
    </div>
  );
};

export default WeatherDetails;
