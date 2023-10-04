import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import VImage from "../../Asset/join us/volunteers.jpg";
import "./Volunters.css";
const Volunters = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img
          style={{ width: "100%", marginTop: "5%" }}
          src={VImage}
          alt="AboutImage"
        />
        <div className="VolunteersMMFH">
          <h2>Volunteers </h2>
          <p>
            Make a significant difference by becoming a volunteer for MMFMH and
            promote its vision and also work at the hospital as Patient
            Facilitator. In addition you can also support MMFMH in raising
            awareness and helping raising funds as per hospital policy.
          </p>
          <p>
            For more details visit us or contact admin department at
            042-35451891-2
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Volunters;
