import React from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ContactUsImage from "../../Asset/wetransfer_01-jpg_2023-09-22_1220/Contact-Us.jpg";

import Footer from "../../components/Footer/Footer";
import "./ContactUs.css";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
const ContactUs = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img
          className="visionimage"
          src={ContactUsImage}
          alt="ContactUsImage"
        />
        <div className="ContactMMFH">
          <h2 style={{ style: "#ac3939" }}>Contact Us</h2>
          <div className="ContactMMFHNumbersAll" style={{ marginTop: "5%" }}>
            <h3>Hospital/Emergency</h3>
            <p>042-35451891-2</p>
          </div>
          <div className="ContactMMFHNumbers">
            <div className="ContactMMFHNumbersAll">
              <h3>Address</h3>
              <p>25km, Multan Road, Lahore</p>
            </div>
            <div className="ContactMMFHNumbersAll email">
              <h3>Email</h3>
              <p>adil.k@orient.com.pk</p>
            </div>
          </div>
          <div
            style={{
              marginTop: "4%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "grey" }}>Follow Us </h2>
            <div className="iconsMain">
              <a
                href="https://www.facebook.com/people/Mian-Muhammad-Fazal-Memorial-Hospital/100090593606500/?mibextid=V3Yony"
                style={{ color: "black" }}
              >
                <FaFacebookSquare className="ss-icon" />
              </a>
              <a
                style={{ color: "black" }}
                href="https://www.instagram.com/mmfmh_maraka/"
              >
                <FaInstagramSquare className="ss-icon" />
              </a>
              <a
                style={{ color: "black" }}
                href="https://www.linkedin.com/company/mian-muhammad-fazal-memorial-hospital/"
              >
                <FaLinkedin className="ss-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
