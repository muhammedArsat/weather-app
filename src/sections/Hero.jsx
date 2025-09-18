import React from "react";
import Search from "../assets/icon-search.svg";
const Hero = () => {
  return (
    <div className="flex flex-col gap-7">
      <h1 className="text-center">How's the sky looking today?</h1>
      <div className=" flex justify-center items-center space-x-3">
        <div className="relative">
          <input
            type="text"
            placeholder="search for a place..."
            className="bg-neutral-700 py-2 px-11 rounded-lg outline-none"
          />
          <img src={Search} alt="" className="absolute top-[10px] left-3" />
        </div>
        <button className="bg-blue-700 p-2 rounded-lg font-body font-normal cursor-pointer hover:bg-blue-600 active:bg-blue-800 transition-all">Search</button>
      </div>
    </div>
  );
};

export default Hero;
