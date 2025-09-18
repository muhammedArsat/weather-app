import React from "react";
import Logo from "../assets/logo.svg";
import Unit from "../assets/icon-units.svg";
import Dropdown from "../assets/icon-dropdown.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center cursor-pointer">
      <img src={Logo} alt="Logo" />
      <div className="flex justify-center items-center gap-2 bg-neutral-700 p-1 rounded-lg">
        <img src={Unit} alt="Unit logo" />
        <select defaultValue="">
          <option value="" disabled className="bg-neutral-600">
            Units
          </option>
          <option value="celsius" className="bg-neutral-600">°C</option>
          <option value="fahrenheit" className="bg-neutral-600">°F</option>
        </select>
        <img src={Dropdown} alt="Unit logo" />
      </div>
    </div>
  );
};

export default Header;
