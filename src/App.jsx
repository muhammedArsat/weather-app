import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Weather from "./sections/Weather";

const App = () => {
  return (
    <div className="flex flex-col md:px-10 md:py-10 gap-4">
      <Header />
      <Hero />
      <Weather />
    </div>
  );
};

export default App;
