import React, { useContext } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Weather from "./sections/Weather";
import WeatherDetails from "./sections/WeatherDetails";
import WeatherContext, { WeatherProvider } from "./WeatherContext";

const App = () => {
  const { location,weatherData } = useContext(WeatherContext);
  
  return (
    <div className="flex flex-col px-2 md:px-10 md:py-10 gap-2 md:gap-4 py-4">
      <Header />
      <Hero />
      <Weather />
    </div>
  );
};

export default App;
