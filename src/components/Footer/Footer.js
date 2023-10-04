import React, { useEffect } from "react";
import logo from "../../Asset/logo/logo.png";
import { BsFacebook } from "react-icons/bs";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          {window.innerWidth >= 768 && (
            <h5
              style={{ marginTop: "-5%", color: "#bf4040", fontWeight: "700" }}
            >
              Mian Muhammad Fazal <br /> Memorial Hospital
            </h5>
          )}
        </div>
        <div className="footer-all-things">
          <div className="footer-link">
            <Link
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: "18px",
                textDecoration: "none",
              }}
              to="/AboutMMFH"
            >
              ABOUT US
            </Link>
            <Link
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: "18px",
                textDecoration: "none",
              }}
              to="/OurServices&Clinics"
            >
              OUR SERVICES & CLINICS
            </Link>
            <Link
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: "18px",
                textDecoration: "none",
              }}
              to="/Donation"
            >
              HOW TO DONATE
            </Link>
            <Link
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: "18px",
                textDecoration: "none",
              }}
              to="/ContactUs"
            >
              CONTACT US
            </Link>
            <Link
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: "18px",
                textDecoration: "none",
              }}
              to="/JoinUs"
            >
              JOIN US
            </Link>
          </div>
          <div className="MultanRoad">
            <p
              style={{
                color: "#333333",
                fontWeight: "400",
                fontSize: "20px",
                textDecoration: "none",
                marginTop: "4%",
              }}
            >
              25KM, Multan Road, Near Maraka Village, Lahore, Pakistan |
              Contact: 042 35451891-2
            </p>
            <div style={{ display: "flex", gap: "1%", marginTop: "-1%" }}>
              <p
                style={{
                  color: "#333333",
                  fontWeight: "400",
                  fontSize: "20px",
                  textDecoration: "none",
                }}
              >
                Follow Us
              </p>
              <a
                style={{ color: "#333333" }}
                href="https://www.facebook.com/people/Mian-Muhammad-Fazal-Memorial-Hospital/100090593606500/?mibextid=V3Yony"
              >
                <FaFacebookSquare style={{ fontSize: "25px" }} />
              </a>
              <a
                style={{ color: "#333333" }}
                href="https://www.instagram.com/mmfmh_maraka/"
              >
                <FaInstagramSquare style={{ fontSize: "25px" }} />
              </a>
              <a
                style={{ color: "#333333" }}
                href="https://www.linkedin.com/company/mian-muhammad-fazal-memorial-hospital/"
              >
                {" "}
                <FaLinkedin style={{ fontSize: "25px" }} />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <p
        style={{
          color: "#333333",
          fontWeight: "400",
          fontSize: "14px",
          marginTop: "4",
          borderTop: "5px solid #993333", // Add this line for the red border
          paddingTop: "10px", // Add padding to space out the content from the border
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          paddingBottom: "3%",
          marginBottom: "-2%",
        }}
      >
        @2023 MMFMH. All rights reserved. This website uses cookies to improve
        your experience. By using this website you agree to our use of cookies,
        privacy policy and terms of use.
      </p>
    </div>
  );
};

export default Footer;
