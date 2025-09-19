import React from "react";
import Logo from "../assets/logo.svg";
import Unit from "../assets/icon-units.svg";
import Dropdown from "../assets/icon-dropdown.svg";
const Header = () => {
  return (
    <div className="flex justify-between items-center cursor-pointer">
      <img src={Logo} alt="Logo" />

    </div>
  );
};

export default Header;
