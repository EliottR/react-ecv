import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { SwitchButton } from "../SwitchButton/Index";

export const Header = () => {
  const [state, setstate] = useState(true);
  const handleClick = () => {
    setstate(!state);
  };

  useEffect(() => {
    document.body.classList.toggle("dark");
    document.querySelector(".switch").classList.toggle("dark");
  }, [state]);

  return (
    <Navbar
      bg={state ? "dark" : "light"}
      variant={state ? "dark" : "light"}
      className="header"
    >
      <Navbar.Brand href="#home">Cours React</Navbar.Brand>
      <SwitchButton onClick={handleClick} theme={state} />
    </Navbar>
  );
};
