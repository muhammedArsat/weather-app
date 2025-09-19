import React, { useContext, useEffect, useState } from "react";
import Search from "../assets/icon-search.svg";
import WeatherContext from "../WeatherContext";
import { fetchLocations } from "../WeatherApis";
const Hero = () => {
  const { location, setWeatherData, setLocation, fetchWeatherDetails } =
    useContext(WeatherContext);
  const [search, setSearch] = useState(null);
  const [locations, setLocations] = useState([]);
  // const [searchLoading, setSearchLoading] = useState(false);
  useEffect(() => {
    const fetchLocation = async () => {
      if (search.length < 1) {
        setLocations([]);
        setLocation(null);
        setWeatherData(null);
        return;
      }
      try {
        // setSearchLoading(true);
        const res = await fetchLocations(search);
        if (res.results) {
          setLocations(res.results);
        } else {
          setLocations([]);
        }
      } catch (err) {
      } finally {
        // setSearchLoading(false);
      }
    };

    const debounce = setTimeout(fetchLocation, 100);
    return () => clearTimeout(debounce);
  }, [search]);
  return (
    <div className="flex flex-col gap-7 ">
      <h1 className="text-center">How's the sky looking today?</h1>
      <div className=" flex flex-col md:flex-row md:justify-center items-center space-y-2 md:space-x-1 md:space-y-0  w-full">
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="search for a place..."
            className="bg-neutral-700 py-2 px-11 rounded-lg outline-none w-full"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setLocation(null)
            }}
          />
          <img src={Search} alt="" className="absolute top-[10px] left-3" />
          {search && locations && !location && (
            <ul className="absolute z-50 bg-neutral-700 w-full flex flex-col gap-3 rounded-lg">
              {search &&
                locations.map((location, idx) => {
                  return (
                    <li
                      key={idx}
                      className="cursor-pointer hover:bg-neutral-600 active:bg-neutral-800 p-1"
                      onClick={() => {
                        setLocation(location);
                        setSearch(location.name);
                        console.log(location);
                      }}
                    >
                      {location.name} - {location.admin2} - {location.country}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
        <button
          className="bg-blue-700 p-2 rounded-lg font-body font-normal cursor-pointer hover:bg-blue-600 active:bg-blue-800 transition-all disabled:bg-neutral-700 w-full md:w-auto"
          onClick={fetchWeatherDetails}
          disabled={!location}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
