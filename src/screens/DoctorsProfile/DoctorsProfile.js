import React, { useState } from "react";
import "./DoctorsProfile.css";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import drimage from "../../Asset/DoctorsPicturesJpegs/Dr. Saad.png";
import { useLocation } from "react-router-dom";
import { FaRoad } from "react-icons/fa";

const DoctorsProfile = () => {
  const location = useLocation();
  const { form } = location.state;

  return (
    <div>
      <Header />
      <NavBar />
      <div className="Docotor-Details with-Doctor-name DrExperience">
        <img src={form?.image} alt="drimage" />
        <h1>{form?.name}</h1>
        <h2>{form?.edu}</h2>
        <h2>Experience: {form?.experince}</h2>
        <h2>Field of Expertise: {form?.disease}</h2>
        <p style={{ marginTop: "4%" }}>{form?.experince1}</p>
        <p>{form?.experince2}</p>
        <p>{form?.experince3}</p>
        <p>{form?.experince4}</p>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsProfile;
