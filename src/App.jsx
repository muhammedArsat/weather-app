import React, { useContext } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Weather from "./sections/Weather";
import WeatherDetails from "./sections/WeatherDetails";
import WeatherContext, { WeatherProvider } from "./WeatherContext";

const App = () => {
  const { location } = useContext(WeatherContext);
  return (
    <div className="flex flex-col md:px-10 md:py-10 gap-4">
      <Header />
      <Hero />
      {location && <Weather />}
    </div>
  );
};

export default App;
