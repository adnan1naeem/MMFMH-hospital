import React from "react";
import logo from "../../Asset/logo/logo.png";
import Home from "../../screens/Home/Home";

import { Link } from "react-router-dom";
import {
  FaSearch,
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo-text">
        <Link to="/home">
          <img className="Logo" src={logo} alt="logo" />
        </Link>
        {window.innerWidth >= 768 && (
          <h1>
            Mian Muhammad Fazal <br /> Memorial Hospital
          </h1>
        )}
      </div>
      <div className="Header-right">
        <div className="icons">
          <a
            style={{ color: "black" }}
            href="https://www.facebook.com/people/Mian-Muhammad-Fazal-Memorial-Hospital/100090593606500/?mibextid=V3Yony"
          >
            <FaFacebookSquare className="s-icon" />
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.instagram.com/mmfmh_maraka/"
          >
            <FaInstagramSquare className="s-icon" />
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.linkedin.com/company/mian-muhammad-fazal-memorial-hospital/"
          >
            <FaLinkedin className="s-icon" />
          </a>
        </div>
        <div className="Header-appointments">
          <Link style={{ textDecoration: "none" }} to="/Donation">
            <p>Donate Now</p>
          </Link>

          <div className="search-field">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
