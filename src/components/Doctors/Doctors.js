import React from "react";
import "./Doctors.css";
import { Link } from "react-router-dom";
// import dim from "../../Asset/Doctors Pictures Jpegs/Dr Sana Malik.png";
const Doctors = ({ DoctorData }) => {
  return (
    <div className="Doctors">
      <Link
        to="/DoctorsProfile"
        style={{ textDecoration: "none" }}
        state={{ form: DoctorData }}
      >
        <img className="DoctosImage" src={DoctorData.image} alt="dim" />
        <h3>{DoctorData.name}</h3>
        <p>{DoctorData.edu}</p>
        <p className="docotormad">{DoctorData.disease}</p>
      </Link>
    </div>
  );
};

export default Doctors;
