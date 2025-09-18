import React from "react";
import Dropdown from "../assets/icon-dropdown.svg";
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
  return (
    <div className="bg-neutral-700 p-2 rounded-lg basis-1/4 flex flex-col">
      <div className="flex justify-between items-center">
        <p>Hourly Forecast</p>
        <div className="flex items-center bg-neutral-600 rounded-lg px-1">
          <select className="bg-neutral-600 p-1 rounded-lg">
            {days.map((day, idx) => {
              return (
                <option value={`${day}`} key={idx} className="bg-neutral-600">
                  {day}
                </option>
              );
            })}
          </select>
          <img src={Dropdown} alt="dropdown logo" />
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
