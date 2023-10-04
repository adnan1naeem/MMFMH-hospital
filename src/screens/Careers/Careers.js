import React from "react";
import "./Careers.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import CareersImage from "../../Asset/join us/careers.jpg";
import Footer from "../../components/Footer/Footer";
const Careers = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img
          style={{ width: "100%", marginTop: "5%" }}
          src={CareersImage}
          alt="CareersImage"
        />
        <div className="EveningMMFH">
          <h2>Careers</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
