import React from "react";
import "./OurDoctors.css";
import { Link } from "react-router-dom";

const OurDoctors = ({ DoctorAllData }) => {
  return (
    <div className="OurDoctors">
      <h1 className="header-with-border" style={{ color: "#004080" }}>
        Our Doctors
      </h1>
      <div className="Profile">
        <img src={DoctorAllData.image} alt="profile" />
        <div className="docotr-list">
          <h1 style={{ color: "#993333" }}>{DoctorAllData.name}</h1>
          <p style={{ color: "#993333", fontWeight: 700,marginTop:'-2%' }}>
           {DoctorAllData.designation}
          </p>
          <p style={{ color: "grey", marginTop: "5%" }}>
            {DoctorAllData.slider}
          </p>
          <div className="Doctors-buttons">
            <Link
              to="/DoctorsProfile"
              state={{ form: DoctorAllData }}
              style={{ textDecoration: "none" }}
            >
              <button
                style={{
                  backgroundColor: "#993333",
                  color: "white",
                  border: "none",
                  padding: "15px 50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                }}
              >
                Learn More
              </button>
            </Link>
            {/* <BsFillPlayCircleFill
              style={{ marginLeft: "8%", color: "#993333", fontSize: "55px" }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;
