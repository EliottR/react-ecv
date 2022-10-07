import React from "react";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

export const SwitchButton = ({ onClick, theme }) => {
  const handleClick = () => {
    onClick();
    console.log("oui");
  };

  return (
    <div className="switch" onClick={handleClick}>
      {theme ? (
        <MdWbSunny size={24} color="dark" />
      ) : (
        <MdDarkMode size={24} color="white" />
      )}
    </div>
  );
};
