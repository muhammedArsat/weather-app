import React, { useContext, useState } from "react";
import Dropdown from "../assets/icon-dropdown.svg";
import { climateIcons } from "../constants/constants";
import WeatherContext from "../WeatherContext";
import { getWeatherIconFromCode,formateTime } from "../Utility";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const HourlyWeather = () => {
  const [isDayMenuOpen, setIsDayMenuOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(days[new Date().getDay()]);
  const handleDayMenu = () => setIsDayMenuOpen(!isDayMenuOpen);

  const { weatherData } = useContext(WeatherContext);

  // Filter hourly data for selected day
  const filteredHours = weatherData?.hourly?.time?.reduce((acc, time, idx) => {
    const date = new Date(time);
    const dayName = days[date.getDay()];
    if (dayName === selectedDay) {
      acc.push({
        time,
        temp: weatherData.hourly.temperature_2m?.[idx],
        code: weatherData.hourly.weathercode?.[idx],
      });
    }
    return acc;
  }, []);

  return (
    <div className="bg-neutral-700 p-2 rounded-lg w-full md:basis-1/4 flex space-y-4 flex-col relative max-h-[630px] overflow-y-auto">
      <div className="flex justify-between items-center">
        <p>Hourly Forecast</p>
        <div
          className="flex space-x-2 items-center bg-neutral-600 rounded-lg px-2 cursor-pointer relative"
          onClick={handleDayMenu}
        >
          <p>{selectedDay}</p>
          <div
            className={`absolute bg-neutral-700 right-0 top-12 p-1 rounded-lg transition-all z-10 ${
              isDayMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {days.map((day, idx) => (
              <p
                key={idx}
                className={`hover:bg-neutral-600 transition-all rounded-lg px-2 ${
                  day === selectedDay ? "bg-neutral-600" : ""
                }`}
                onClick={() => {
                  setSelectedDay(day);
                  setIsDayMenuOpen(false);
                }}
              >
                {day}
              </p>
            ))}
          </div>
          <img src={Dropdown} alt="dropdown logo" />
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {filteredHours?.length > 0 ? (
          filteredHours.map((hour, idx) => (
            <span
              key={idx}
              className="w-full flex justify-between items-center bg-neutral-600 p-2 rounded-lg "
            >
              <span className="flex items-center space-x-4">
                <img
                  src={climateIcons[getWeatherIconFromCode(hour.code)]}
                  alt="climate Icon"
                  className="w-8 h-8"
                />
                <p>{formateTime(hour.time)}</p>
              </span>
              <p>{hour.temp ?? "--"}&deg;C</p>
            </span>
          ))
        ) : (
          <p className="text-center text-neutral-400">No data for this day.</p>
        )}
      </div>
    </div>
  );
};

export default HourlyWeather;
