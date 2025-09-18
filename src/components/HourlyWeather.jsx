import React, { useContext, useState } from "react";
import Dropdown from "../assets/icon-dropdown.svg";
import { climateIcons } from "../constants/constants";
import WeatherContext from "../WeatherContext";
const HourlyWeather = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const hourlyWeather = [
    {
      iconCode: 0,
      time: "10:00 AM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "11:00 AM",
      temp: "32",
    },
    ,
    {
      iconCode: 0,
      time: "11:00 AM",
      temp: "32",
    },
    ,
    {
      iconCode: 0,
      time: "11:00 AM",
      temp: "32",
    },
    ,
    {
      iconCode: 0,
      time: "11:00 AM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "12:00 PM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "1:00 pM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "2:00 PM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "3:00 PM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "10:00 AM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "4:00 PM",
      temp: "32",
    },
    {
      iconCode: 0,
      time: "5:00 PM",
      temp: "32",
    },
  ];
  const [isDayMenuOpen, setIsDayMenuOpen] = useState(false);
  const handleDayMenu = () => {
    setIsDayMenuOpen(!isDayMenuOpen);
  };

  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="bg-neutral-700 p-2 rounded-lg basis-1/4 flex space-y-4 flex-col relative max-h-[630px] overflow-y-auto">
      <div className="flex justify-between items-center">
        <p>Hourly Forecast</p>
        <div
          className="flex space-x-2 items-center bg-neutral-600 rounded-lg px-2 cursor-pointer"
          onClick={handleDayMenu}
        >
          <p>Monday</p>
          <div
            className={`absolute bg-neutral-700 right-0 top-12 p-1 rounded-lg transition-all ${
              isDayMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            {days.map((day, idx) => {
              return (
                <p
                  key={idx}
                  className="hover:bg-neutral-600 transition-all rounded-lg px-2"
                >
                  {day}
                </p>
              );
            })}
          </div>
          <img src={Dropdown} alt="dropdown logo" />
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        {hourlyWeather.map((hour, idx) => {
          return (
            <span
              key={idx}
              className="w-full flex justify-between items-center bg-neutral-600 p-2 rounded-lg "
            >
              <span className="flex items-center space-x-4">
                <img
                  src={climateIcons[hour.iconCode]}
                  alt="climate Icon"
                  className="w-8 h-8"
                />
                <p>{hour.time}</p>
              </span>
              <p>{hour.temp}&deg;c</p>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyWeather;
