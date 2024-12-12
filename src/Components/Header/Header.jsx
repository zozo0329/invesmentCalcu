import logo from "../../assets/investment-calculator-logo.png";
import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header-container">
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
    </div>
  );
};

export default Header;
