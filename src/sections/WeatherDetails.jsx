import React from "react";

const WeatherDetails = () => {
  const details = [
    {
      type: "Feels Like",
      value: "32 C",
    },
    {
      type: "Wind",
      value: "14 Km/hr",
    },
    {
      type: "Humidity",
      value: "46%",
    },
    {
      type: "Precipitations",
      value: "0 mm ",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {details.map((detail, idx) => {
        return (
          <div className=" min-h-[100px] p-2 flex flex-col items-start justify-between bg-neutral-700 rounded-lg">
            <span className="text-neutral-400">{detail.type}</span>
            <h2>{detail.value}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDetails;
