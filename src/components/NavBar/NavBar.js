import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light "
      style={{ width: "100%" }}
    >
      <div className="container" style={{ width: "100%" }}>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              
              <a
                className={`nav-link dropdown-toggle ${
                  isDropDown ? "show" : ""
                }`}
                href="#"
                id="navbarDropdown"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                About Us
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdown"
                style={{ zIndex: "999", background: "#e6e6e6" }}
              >
                <Link className="dropdown-item" to="/AboutMMFH">
                  About MMFMH
                </Link>
                <Link className="dropdown-item" to="/VisionMissionPhilosophy">
                  Vision, Mission &<br />
                  Philosophy
                </Link>
                <Link className="dropdown-item" to="/managment">
                Management
                </Link>
                <Link className="dropdown-item" to="/CEOMessage">
                  CEO Message
                </Link>
                <Link className="dropdown-item" to="/acts&Stats">
                  Facts & Stats
                </Link>

              </div>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/OurServices&Clinics">
                Our Services & Clinics
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/AllDoctors">
                Our Doctors
              </Link>
            </li>
            {/* </ul> */}
            {/* <ul className="navbar-nav ml-auto second-navbar"> */}
            <li className="nav-item active">
              <Link className="nav-link" to="/FreeMedicine">
                Free Medicines
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/ContactUs">
                Contact Us
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/JoinUs">
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
